import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Typography } from './ui/Typography';
import { TrendingDown, ArrowRight } from 'lucide-react';

const comparisons = [
  {
    category: 'Косметика по уходу',
    product: 'Набор по уходу за кожей',
    regular: { brand: 'Обычный магазин', price: 8500 },
    atomy: { name: 'Атоми Абсолют Набор', price: 3100 },
  },
  {
    category: 'Зубная паста',
    product: 'Набор зубной пасты (5 шт)',
    regular: { brand: 'Обычный магазин', price: 3500 },
    atomy: { name: 'Атоми Зубная паста', price: 1700 },
  },
  {
    category: 'БАД / Здоровье',
    product: 'Омега-3',
    regular: { brand: 'Обычная аптека', price: 4500 },
    atomy: { name: 'Атоми Аляска Е-Омега 3', price: 2000 },
  },
  {
    category: 'Витамины',
    product: 'Витамин C (курс)',
    regular: { brand: 'Обычная аптека', price: 3800 },
    atomy: { name: 'Атоми Витамин С', price: 2000 },
  },
  {
    category: 'Солнцезащита',
    product: 'Солнцезащитный крем',
    regular: { brand: 'Обычный магазин', price: 3200 },
    atomy: { name: 'Атоми Солнцезащитный крем', price: 700 },
  },
];

const CompareCard = ({ item, index }) => {
  const savings = item.regular.price - item.atomy.price;
  const percent = Math.round((savings / item.regular.price) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-lg hover:shadow-atomy-blue/5 transition-all duration-300"
    >
      <div className="text-xs font-semibold text-atomy-accent uppercase tracking-wider mb-3">
        {item.category}
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 rounded-xl bg-red-50/60">
          <div>
            <p className="text-xs text-slate-500 mb-0.5">{item.regular.brand}</p>
            <p className="text-sm font-medium text-slate-700">{item.product}</p>
          </div>
          <span className="text-lg font-bold text-red-500 line-through decoration-2">
            {item.regular.price.toLocaleString('ru-RU')} ₽
          </span>
        </div>

        <div className="flex items-center justify-center">
          <ArrowRight className="w-4 h-4 text-slate-300 rotate-90" />
        </div>

        <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50/60">
          <div>
            <p className="text-xs text-emerald-600 font-medium mb-0.5">Atomy</p>
            <p className="text-sm font-medium text-slate-700">{item.atomy.name}</p>
          </div>
          <span className="text-lg font-bold text-emerald-600">
            {item.atomy.price.toLocaleString('ru-RU')} ₽
          </span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between pt-4 border-t border-slate-100">
        <span className="text-sm text-slate-500">Экономия</span>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-emerald-600">
            {savings.toLocaleString('ru-RU')} ₽
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
            <TrendingDown className="w-3 h-3" />
            {percent}%
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export const PriceCompare = () => {
  return (
    <Section id="compare" background="gradient">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium mb-4"
        >
          <TrendingDown className="w-4 h-4" />
          <span>Выгодные покупки</span>
        </motion.div>

        <Typography variant="h2" className="mb-4">
          Экономьте 30–80% на товарах
        </Typography>

        <Typography variant="p" className="text-slate-500">
          Сравните привычные вам товары с товарами Atomy и выберите лучшее для себя
        </Typography>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {comparisons.map((item, i) => (
          <CompareCard key={i} item={item} index={i} />
        ))}
      </div>
    </Section>
  );
};
