import React, { useState, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Typography } from './ui/Typography';
import { Button } from './ui/Button';
import { Search, X, ShoppingCart, ExternalLink, Eye } from 'lucide-react';
import productsData from '../data/products.json';

const REFERRAL_LINK = 'https://m.atomy.ru/gate/join/easyreg/v2/41789284';

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.04, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const ProductCard = ({ product, index }) => {
  const discount = product.priceBefore > 0
    ? Math.round(((product.priceBefore - product.priceAfter) / product.priceBefore) * 100)
    : 0;

  return (
    <motion.div
      custom={index % 20}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="group relative bg-white rounded-2xl border border-slate-100 hover:border-atomy-accent/30 hover:shadow-2xl hover:shadow-atomy-blue/8 transition-shadow duration-500 flex flex-col h-full overflow-hidden"
    >
      {discount > 0 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 400 }}
          className="absolute top-3 left-3 z-10 bg-gradient-to-r from-red-500 to-rose-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-lg shadow-red-500/30"
        >
          −{discount}%
        </motion.div>
      )}

      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative aspect-square bg-gradient-to-b from-slate-50 to-white p-4 overflow-hidden"
      >
        <div className="absolute inset-0 bg-atomy-accent/0 group-hover:bg-atomy-accent/3 transition-colors duration-500" />
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
          <span className="flex items-center gap-1 text-xs font-medium text-atomy-blue bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
            <Eye className="w-3 h-3" /> Подробнее
          </span>
        </div>
      </a>

      <div className="p-4 flex flex-col flex-grow">
        <span className="text-[10px] font-semibold text-atomy-accent uppercase tracking-widest mb-1.5">
          {product.category}
        </span>

        <h3 className="text-sm font-semibold text-slate-800 mb-3 line-clamp-2 group-hover:text-atomy-blue transition-colors duration-300 leading-snug">
          {product.name}
        </h3>

        <div className="mt-auto space-y-1.5">
          {product.priceBefore > 0 && product.priceBefore !== product.priceAfter && (
            <span className="text-xs text-slate-400 line-through">
              {product.priceBefore.toLocaleString('ru-RU')} ₽
            </span>
          )}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-lg font-bold text-slate-800">
                {product.priceAfter.toLocaleString('ru-RU')} ₽
              </span>
              {product.pv && (
                <span className="block text-[10px] text-atomy-accent font-medium mt-0.5">
                  {product.pv}
                </span>
              )}
            </div>
            <a
              href={REFERRAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-atomy-blue/5 text-atomy-blue flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-atomy-blue group-hover:to-atomy-accent group-hover:text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-atomy-blue/20"
              title="Зарегистрироваться и заказать"
            >
              <ShoppingCart className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ITEMS_PER_PAGE = 20;

export const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Все');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const gridRef = useRef(null);

  const categories = useMemo(() => {
    const counts = {};
    productsData.forEach((p) => { counts[p.category] = (counts[p.category] || 0) + 1; });
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    return ['Все', ...sorted.map(([cat]) => cat)];
  }, []);

  const filteredProducts = useMemo(() => {
    let result = productsData;
    if (activeCategory !== 'Все') {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
      );
    }
    return result;
  }, [searchQuery, activeCategory]);

  const displayProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = filteredProducts.length > visibleCount;

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  return (
    <Section id="catalog" background="light" className="relative" animate={false}>
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-atomy-blue/5 text-atomy-blue text-sm font-medium mb-4"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Каталог товаров Атоми</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Typography variant="h2" className="mb-4">
            Выберите лучшие товары из Южной Кореи
          </Typography>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-500 mb-8 text-base md:text-lg"
        >
          Товары премиум-качества с бесплатной доставкой по России
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative max-w-md mx-auto mb-8"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Поиск товаров..."
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); setVisibleCount(ITEMS_PER_PAGE); }}
            className="w-full pl-12 pr-10 py-3.5 rounded-full bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-atomy-blue/30 focus:border-atomy-blue/50 transition-all shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {categories.map((cat) => {
            const count = cat === 'Все' ? productsData.length : productsData.filter((p) => p.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-atomy-blue to-atomy-accent text-white shadow-lg shadow-atomy-blue/25 scale-105'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 hover:border-atomy-blue/30'
                }`}
              >
                {cat} <span className="text-xs opacity-70 ml-1">({count})</span>
              </button>
            );
          })}
        </motion.div>
      </div>

      <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-5">
        {displayProducts.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <p className="text-slate-400 text-lg mb-2">Товары не найдены</p>
          <button
            onClick={() => { setSearchQuery(''); setActiveCategory('Все'); }}
            className="text-atomy-blue font-medium hover:underline"
          >
            Сбросить фильтры
          </button>
        </motion.div>
      )}

      {hasMore && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <button
            onClick={() => setVisibleCount((v) => v + ITEMS_PER_PAGE)}
            className="group px-8 py-3.5 rounded-full bg-white border border-slate-200 text-slate-700 font-medium hover:bg-atomy-blue hover:text-white hover:border-atomy-blue hover:shadow-lg hover:shadow-atomy-blue/20 transition-all duration-300 shadow-sm"
          >
            Показать ещё
            <span className="ml-2 text-sm opacity-70">
              ({filteredProducts.length - visibleCount} товаров)
            </span>
          </button>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-14 text-center"
      >
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-white to-atomy-light/50 border border-atomy-blue/10 shadow-lg shadow-atomy-blue/5">
          <div className="text-left">
            <p className="text-lg font-semibold text-slate-800 mb-1">
              Получите доступ к оптовым ценам
            </p>
            <p className="text-sm text-slate-500">
              Бесплатная регистрация за 2 минуты — без обязательных покупок
            </p>
          </div>
          <Button
            as="a"
            href={REFERRAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap shadow-xl shadow-atomy-blue/20"
          >
            Зарегистрироваться
            <ExternalLink className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </motion.div>
    </Section>
  );
};
