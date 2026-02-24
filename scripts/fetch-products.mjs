import { chromium } from 'playwright';
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = join(__dirname, '..', 'src', 'data', 'products.json');

const PRODUCT_CODES = [
  { code: 'R00001', category: 'Здоровье' },
  { code: 'R00111', category: 'Здоровье' },
  { code: 'R00121', category: 'Здоровье' },
  { code: 'R00178', category: 'Здоровье' },
  { code: 'R00207', category: 'Красота' },
  { code: 'R00355', category: 'Красота' },
  { code: 'R00655', category: 'Красота' },
  { code: 'R00305', category: 'Красота' },
  { code: 'R00198', category: 'Красота' },
  { code: 'R00261', category: 'Красота' },
  { code: 'R00266', category: 'Красота' },
  { code: 'R00285', category: 'Красота' },
  { code: 'R00505', category: 'Гигиена' },
  { code: 'R00523', category: 'Гигиена' },
  { code: 'R00520', category: 'Гигиена' },
  { code: 'R00460', category: 'Красота' },
  { code: 'R00467', category: 'Красота' },
  { code: 'R00553', category: 'Красота' },
  { code: 'R00973', category: 'Питание' },
  { code: 'R00528', category: 'Гигиена' },
  { code: 'R01422', category: 'Красота' },
  { code: 'R01505', category: 'Красота' },
  { code: 'R01516', category: 'Красота' },
  { code: 'R01523', category: 'Красота' },
  { code: 'R01532', category: 'Красота' },
  { code: 'R01539', category: 'Красота' },
  { code: 'R01555', category: 'Красота' },
  { code: 'R01514', category: 'Красота' },
  { code: 'R01515', category: 'Красота' },
  { code: 'R01517', category: 'Красота' },
];

function parsePrice(text) {
  if (!text) return 0;
  const nums = text.replace(/\s/g, '').match(/\d+/g);
  return nums ? parseInt(nums.join(''), 10) : 0;
}

async function fetchProduct(page, { code, category }) {
  const url = `https://www.atomy.ru/product/${code}`;
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });
    await page.waitForTimeout(2000);

    const data = await page.evaluate(() => {
      // Product name from page title (format: "Атоми ХемоХИМ | Atomy Russia")
      const titleParts = document.title.split('|');
      const name = titleParts[0]?.trim() || '';
      
      const imgEl = document.querySelector('.swiper-slide img, .prd-img img, [class*="zoom"] img');
      let image = imgEl?.src || '';
      // Upgrade to 610x610
      image = image.replace('/40_40/', '/610_610/');
      
      const textContent = document.body.innerText;
      
      let priceBefore = 0, priceAfter = 0, pv = '';
      
      const beforeMatch = textContent.match(/Цена до регистрации\s*([\d\s]+)\s*₽/);
      if (beforeMatch) priceBefore = parseInt(beforeMatch[1].replace(/\s/g, ''), 10);
      
      const afterMatch = textContent.match(/Цена после регистрации\s*([\d\s]+)\s*₽/);
      if (afterMatch) priceAfter = parseInt(afterMatch[1].replace(/\s/g, ''), 10);
      
      const pvMatch = textContent.match(/([\d\s]+)\s*PV/);
      if (pvMatch) pv = pvMatch[1].replace(/\s/g, ' ').trim() + ' PV';

      return { name, image, priceBefore, priceAfter, pv };
    });

    if (!data.name) return null;

    return {
      code,
      category,
      name: data.name,
      image: data.image,
      priceBefore: data.priceBefore,
      priceAfter: data.priceAfter,
      pv: data.pv,
      link: url,
    };
  } catch (err) {
    console.error(`  Error fetching ${code}: ${err.message}`);
    return null;
  }
}

async function main() {
  console.log('=== Atomy Product Scraper (per-product) ===');
  console.log(`Fetching ${PRODUCT_CODES.length} products...`);
  
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ locale: 'ru-RU' });
  const page = await context.newPage();

  const products = [];

  for (let i = 0; i < PRODUCT_CODES.length; i++) {
    const item = PRODUCT_CODES[i];
    process.stdout.write(`  [${i + 1}/${PRODUCT_CODES.length}] ${item.code}... `);
    const product = await fetchProduct(page, item);
    if (product) {
      products.push({ ...product, id: products.length + 1 });
      console.log(`OK: ${product.name} (${product.priceAfter}₽)`);
    } else {
      console.log('SKIP (no data)');
    }
  }

  await browser.close();

  mkdirSync(join(__dirname, '..', 'src', 'data'), { recursive: true });
  writeFileSync(OUTPUT_PATH, JSON.stringify(products, null, 2), 'utf-8');
  console.log(`\nSaved ${products.length} products to ${OUTPUT_PATH}`);

  const cats = {};
  products.forEach(p => { cats[p.category] = (cats[p.category] || 0) + 1; });
  console.log('Categories:', cats);
}

main().catch(console.error);
