import { chromium } from 'playwright';
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = join(__dirname, '..', 'src', 'data', 'products.json');

const CATEGORY_KEYWORDS = {
  'хемохим': 'Здоровье', 'омега': 'Здоровье', 'витамин': 'Здоровье',
  'спирулина': 'Здоровье', 'пробиотик': 'Здоровье', 'лютеин': 'Здоровье',
  'кальций': 'Здоровье', 'женьшень': 'Здоровье', 'перилла': 'Здоровье',
  'коллаген': 'Здоровье', 'мультивитамин': 'Здоровье', 'луковый': 'Здоровье',
  'аляска': 'Здоровье', 'цинк': 'Здоровье', 'магний': 'Здоровье',
  'железо': 'Здоровье', 'элеутерококк': 'Здоровье', 'пропол': 'Здоровье',
  'зубн': 'Гигиена', 'оралкеар': 'Гигиена', 'oral care': 'Гигиена',
  'щетк': 'Гигиена', 'ополаскиватель': 'Гигиена',
  'шампунь': 'Уход за волосами', 'кондиционер для волос': 'Уход за волосами',
  'маска для волос': 'Уход за волосами', 'сыворотка для волос': 'Уход за волосами',
  'гель для душа': 'Уход за телом', 'мыло': 'Уход за телом',
  'лосьон для тела': 'Уход за телом', 'крем для рук': 'Уход за телом',
  'крем для ног': 'Уход за телом', 'дезодорант': 'Уход за телом',
  'бальзам для губ': 'Уход за телом',
  'кофе': 'Питание', 'коктейль': 'Питание', 'чай': 'Питание',
  'стиральн': 'Для жизни', 'средство для мытья': 'Для жизни',
  'для посуды': 'Для жизни', 'кондиционер для бел': 'Для жизни',
  'освежитель': 'Для жизни', 'салфетк': 'Для жизни',
  'тушь': 'Декоративная косметика', 'помад': 'Декоративная косметика',
  'тени': 'Декоративная косметика', 'пудр': 'Декоративная косметика',
  'лак': 'Декоративная косметика', 'блеск': 'Декоративная косметика',
  'карандаш': 'Декоративная косметика', 'подводка': 'Декоративная косметика',
  'хайлайтер': 'Декоративная косметика', 'консилер': 'Декоративная косметика',
  'bb крем': 'Декоративная косметика', 'бб крем': 'Декоративная косметика',
  'база под макияж': 'Декоративная косметика',
  'набор': 'Уход за кожей',
};

function guessCategory(name) {
  const lower = name.toLowerCase();
  for (const [kw, cat] of Object.entries(CATEGORY_KEYWORDS)) {
    if (lower.includes(kw)) return cat;
  }
  return 'Уход за кожей';
}

async function gatherAllProductLinks(page) {
  console.log('Phase 1: Gathering product links from atomy.ru ...');
  await page.goto('https://www.atomy.ru/shop', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3000);

  const links = await page.evaluate(() => {
    const anchors = document.querySelectorAll('a[href*="/product/R"]');
    const urls = new Set();
    anchors.forEach((a) => {
      const m = a.href.match(/\/product\/(R\d+)/);
      if (m) urls.add(m[1]);
    });
    return [...urls];
  });

  console.log(`  Found ${links.length} product codes from shop page`);

  const categoryUrls = await page.evaluate(() => {
    const links = document.querySelectorAll('a[href*="/shop/"]');
    return [...new Set([...links].map((l) => l.href).filter((h) => h.includes('/shop/')))];
  });

  console.log(`  Found ${categoryUrls.length} category URLs, browsing each...`);
  const allCodes = new Set(links);

  for (const url of categoryUrls.slice(0, 30)) {
    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });
      await page.waitForTimeout(2000);

      for (let i = 0; i < 10; i++) {
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await page.waitForTimeout(800);
        const moreBtn = await page.$('button:has-text("더보기"), button:has-text("Показать еще"), [class*="more"]');
        if (moreBtn) {
          try { await moreBtn.click(); await page.waitForTimeout(1000); } catch {}
        }
      }

      const codes = await page.evaluate(() => {
        const anchors = document.querySelectorAll('a[href*="/product/R"]');
        return [...new Set([...anchors].map((a) => { const m = a.href.match(/\/product\/(R\d+)/); return m?.[1]; }).filter(Boolean))];
      });
      codes.forEach((c) => allCodes.add(c));
      process.stdout.write(`    ${url.split('/').pop()}: +${codes.length} (total: ${allCodes.size})\n`);
    } catch {}
  }

  return [...allCodes].sort();
}

async function scrapeProduct(page, code) {
  try {
    await page.goto(`https://www.atomy.ru/product/${code}`, {
      waitUntil: 'domcontentloaded',
      timeout: 12000,
    });
    await page.waitForTimeout(2000);

    return await page.evaluate(() => {
      const rawTitle = document.title;
      if (!rawTitle || rawTitle === 'Shopping Mall' || rawTitle.includes('404')) return null;
      const name = rawTitle.split('|')[0].trim();
      if (!name || name.length < 3) return null;

      const imgEl = document.querySelector('.swiper-slide img, .prd-img img, [class*="zoom"] img, [class*="product"] img');
      let image = imgEl?.src || '';
      image = image.replace(/\/\d+_\d+\//, '/610_610/');

      const text = document.body.innerText;
      let priceBefore = 0, priceAfter = 0, pv = '';

      const bm = text.match(/Цена до регистрации[:\s]*([\d\s]+)\s*₽/);
      if (bm) priceBefore = parseInt(bm[1].replace(/\s/g, ''), 10);

      const am = text.match(/Цена после регистрации[:\s]*([\d\s]+)\s*₽/);
      if (am) priceAfter = parseInt(am[1].replace(/\s/g, ''), 10);

      if (!priceAfter) {
        const pm2 = text.match(/([\d\s]+)\s*₽/);
        if (pm2) priceAfter = parseInt(pm2[1].replace(/\s/g, ''), 10);
      }

      const pvm = text.match(/([\d\s]+)\s*PV/);
      if (pvm) pv = pvm[1].replace(/\s/g, ' ').trim() + ' PV';

      return { name, image, priceBefore, priceAfter, pv };
    });
  } catch {
    return null;
  }
}

async function main() {
  console.log('=== Atomy Full Catalog Scraper v2 ===\n');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ locale: 'ru-RU' });

  const page = await context.newPage();
  let codes = await gatherAllProductLinks(page);
  await page.close();

  if (codes.length < 50) {
    console.log('\nBrowsing yielded few codes, adding range scan...');
    const extra = new Set(codes);
    for (let i = 1; i <= 1600; i++) {
      extra.add(`R${String(i).padStart(5, '0')}`);
    }
    codes = [...extra].sort();
  }

  console.log(`\nPhase 2: Scraping ${codes.length} product codes...\n`);
  const products = [];
  const PARALLEL = 5;

  for (let batch = 0; batch < codes.length; batch += PARALLEL) {
    const batchCodes = codes.slice(batch, batch + PARALLEL);
    const pages = await Promise.all(batchCodes.map(() => context.newPage()));

    const results = await Promise.allSettled(
      batchCodes.map((code, i) => scrapeProduct(pages[i], code))
    );

    for (let i = 0; i < results.length; i++) {
      const data = results[i].status === 'fulfilled' ? results[i].value : null;
      if (data && data.name && data.priceAfter > 0) {
        products.push({
          id: products.length + 1,
          code: batchCodes[i],
          name: data.name,
          category: guessCategory(data.name),
          image: data.image,
          priceBefore: data.priceBefore,
          priceAfter: data.priceAfter,
          pv: data.pv,
          link: `https://www.atomy.ru/product/${batchCodes[i]}`,
        });
        process.stdout.write(`  [${products.length}] ${batchCodes[i]}: ${data.name} (${data.priceAfter}₽) ✓\n`);
      }
    }

    await Promise.all(pages.map((p) => p.close()));

    if (batch % 100 === 0 && batch > 0) {
      console.log(`  ... processed ${batch}/${codes.length}, found ${products.length} products`);
    }
  }

  await browser.close();

  mkdirSync(join(__dirname, '..', 'src', 'data'), { recursive: true });
  writeFileSync(OUTPUT_PATH, JSON.stringify(products, null, 2), 'utf-8');
  console.log(`\n✓ Saved ${products.length} products to ${OUTPUT_PATH}`);

  const cats = {};
  products.forEach((p) => { cats[p.category] = (cats[p.category] || 0) + 1; });
  console.log('Categories:', JSON.stringify(cats, null, 2));
}

main().catch(console.error);
