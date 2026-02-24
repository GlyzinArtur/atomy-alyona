import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from './ui/Section';
import { Typography } from './ui/Typography';
import { Button } from './ui/Button';
import { Search, X, ShoppingCart, ExternalLink } from 'lucide-react';
import productsData from '../data/products.json';

const REFERRAL_LINK = 'https://m.atomy.ru/gate/join/easyreg/v2/41789284';

const ProductCard = ({ product }) => {
  const discount = product.priceBefore > 0
    ? Math.round(((product.priceBefore - product.priceAfter) / product.priceBefore) * 100)
    : 0;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white rounded-2xl border border-slate-100 hover:border-atomy-blue/20 hover:shadow-xl hover:shadow-atomy-blue/5 transition-all duration-300 flex flex-col h-full overflow-hidden"
    >
      {discount > 0 && (
        <div className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
          −{discount}%
        </div>
      )}

      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative aspect-square bg-slate-50 p-4 flex items-center justify-center overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </a>

      <div className="p-4 flex flex-col flex-grow">
        <span className="text-xs font-medium text-atomy-accent uppercase tracking-wider mb-1.5">
          {product.category}
        </span>

        <h3 className="text-sm font-semibold text-slate-800 mb-3 line-clamp-2 group-hover:text-atomy-blue transition-colors leading-snug">
          {product.name}
        </h3>

        <div className="mt-auto space-y-2">
          {product.priceBefore > 0 && (
            <div className="flex items-baseline gap-2">
              <span className="text-xs text-slate-400 line-through">
                {product.priceBefore.toLocaleString('ru-RU')} ₽
              </span>
            </div>
          )}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-lg font-bold text-slate-800">
                {product.priceAfter.toLocaleString('ru-RU')} ₽
              </span>
              {product.pv && (
                <span className="block text-xs text-atomy-accent font-medium mt-0.5">
                  {product.pv}
                </span>
              )}
            </div>
            <a
              href={REFERRAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-atomy-blue/5 text-atomy-blue flex items-center justify-center group-hover:bg-atomy-blue group-hover:text-white transition-colors"
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

export const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Все');
  const [showAll, setShowAll] = useState(false);

  const categories = useMemo(() => {
    const cats = ['Все', ...new Set(productsData.map((p) => p.category))];
    return cats;
  }, []);

  const filteredProducts = useMemo(() => {
    let result = productsData;

    if (activeCategory !== 'Все') {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    return result;
  }, [searchQuery, activeCategory]);

  const displayProducts = showAll ? filteredProducts : filteredProducts.slice(0, 12);
  const hasMore = filteredProducts.length > 12 && !showAll;

  return (
    <Section id="catalog" background="light" className="relative">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-atomy-blue/5 text-atomy-blue text-sm font-medium mb-4"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Каталог товаров Атоми</span>
        </motion.div>

        <Typography variant="h2" className="mb-4">
          Выберите лучшие товары из Южной Кореи
        </Typography>

        <Typography variant="p" className="text-slate-500 mb-8">
          {productsData.length}+ товаров премиум-качества с бесплатной доставкой по России
        </Typography>

        <div className="relative max-w-md mx-auto mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Поиск товаров..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-10 py-3.5 rounded-full bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-atomy-blue/30 focus:border-atomy-blue/50 transition-all shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setShowAll(false);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-atomy-blue text-white shadow-md shadow-atomy-blue/20'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6"
      >
        <AnimatePresence mode="popLayout">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-slate-400 text-lg">Товары не найдены</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('Все');
            }}
            className="text-atomy-blue font-medium mt-2 hover:underline"
          >
            Сбросить фильтры
          </button>
        </div>
      )}

      {hasMore && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="px-8 py-3 rounded-full bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
          >
            Показать ещё ({filteredProducts.length - 12})
          </button>
        </div>
      )}

      <div className="mt-12 text-center">
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <p className="text-slate-600">
            Зарегистрируйтесь бесплатно, чтобы покупать по{' '}
            <span className="font-semibold text-atomy-blue">оптовым ценам</span>
          </p>
          <Button
            as="a"
            href={REFERRAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            className="whitespace-nowrap"
          >
            Зарегистрироваться
            <ExternalLink className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </div>
    </Section>
  );
};
