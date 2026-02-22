import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from './ui/Section';
import { Typography } from './ui/Typography';
import { AnimatedCard } from './ui/Card';
import { Button } from './ui/Button';
import { ArrowRight, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Atomy ХемоХИМ',
    category: 'Здоровье',
    price: '8 800 ₽',
    pv: '60 000 PV',
    image: './images/ru-prod-1.png', // Using available ru-prod-1.png
    description: 'Легендарный препарат для пробуждения иммунных клеток и восстановления жизненной энергии.',
    bestseller: true,
  },
  {
    id: 2,
    name: 'Atomy Absolute CellActive',
    category: 'Красота',
    price: '16 000 ₽',
    pv: '120 000 PV',
    image: './images/absolute-cellactive.png',
    description: 'Инновационный пептидный комплекс для омоложения кожи. Хит продаж в антивозрастной линейке.',
    bestseller: true,
  },
  {
    id: 3,
    name: 'Набор Evening Care',
    category: 'Очищение',
    price: '2 900 ₽',
    pv: '12 000 PV',
    image: './images/ru-prod-5.jpg', // Using available ru-prod-5.jpg which looks like evening care
    description: '4 шага к идеальной коже: глубокое очищение, пилинг-гель, пенка и маска-пленка.',
    bestseller: false,
  },
  {
    id: 4,
    name: 'Набор Зубная Паста (5 шт)',
    category: 'Гигиена',
    price: '1 700 ₽',
    pv: '4 000 PV',
    image: './images/product-4.png',
    description: 'Прополисная зубная паста, предотвращающая образование зубного камня и кариеса.',
    bestseller: false,
  },
];

const categories = ['Все', 'Здоровье', 'Красота', 'Очищение', 'Гигиена'];

export const Products = () => {
  const [activeCategory, setActiveCategory] = useState('Все');

  const filteredProducts = activeCategory === 'Все' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <Section id="products" background="white" className="relative">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Typography variant="h3" className="text-atomy-blue mb-4 uppercase tracking-wider font-semibold text-sm md:text-base">
          Бестселлеры Atomy
        </Typography>
        <Typography variant="h2" className="mb-6">
          Хиты продаж
        </Typography>
        <Typography variant="p" className="mb-8 text-slate-500">
          Познакомьтесь с легендарными продуктами, которые уже изменили жизнь миллионов людей по всему миру.
        </Typography>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-atomy-blue text-white shadow-md shadow-atomy-blue/30'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        <AnimatePresence>
          {filteredProducts.map((product) => (
            <AnimatedCard 
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group flex flex-col h-full bg-white border border-slate-100 hover:border-atomy-blue/20"
            >
              {product.bestseller && (
                <div className="absolute top-4 left-4 z-20 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                  <Star className="w-3 h-3 fill-white" /> Хит
                </div>
              )}
              
              {/* Product Image */}
              <div className="relative aspect-square w-full bg-slate-50 flex items-center justify-center p-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain mix-blend-multiply drop-shadow-sm" 
                  loading="lazy"
                />
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-semibold text-atomy-blue uppercase tracking-wider mb-2">
                  {product.category}
                </span>
                
                <Typography variant="h4" className="mb-2 text-lg group-hover:text-atomy-blue transition-colors">
                  {product.name}
                </Typography>
                
                <p className="text-slate-500 text-sm mb-6 flex-grow line-clamp-3">
                  {product.description}
                </p>

                <div className="flex items-end justify-between mt-auto pt-4 border-t border-slate-100">
                  <div>
                    <span className="block text-xs text-slate-400 mb-1">Цена после регистрации</span>
                    <span className="block text-xl font-bold text-slate-800">{product.price}</span>
                    <span className="block text-xs font-medium text-atomy-accent">{product.pv}</span>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-slate-50 text-atomy-blue flex items-center justify-center group-hover:bg-atomy-blue group-hover:text-white transition-colors duration-300 shadow-sm">
                    <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <Button variant="secondary" size="lg" as="a" href="https://m.atomy.ru/gate/join/easyreg/v2/41789284" target="_blank" rel="noopener noreferrer" className="group">
          Хочу заказать со скидкой
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

    </Section>
  );
};
