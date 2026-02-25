import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Typography } from './ui/Typography';
import { Button } from './ui/Button';
import { TrendingDown, ArrowRight, Sparkles } from 'lucide-react';

const REFERRAL_LINK = 'https://m.atomy.ru/gate/join/easyreg/v2/41789284';

const comparisons = [
  {
    category: 'Уход за кожей',
    atomyName: 'Атоми Абсолют Набор',
    atomyImage: 'https://image.atomy.ru/610_610/RU/goods/R00655/org/032/250523000042032.png',
    atomyPrice: 3100,
    regularName: 'Аналог в магазине',
    regularPrice: 8500,
  },
  {
    category: 'Здоровье',
    atomyName: 'Атоми ХемоХИМ',
    atomyImage: 'https://image.atomy.ru/610_610/RU/goods/R00001/org/617/250523000041617.jpg',
    atomyPrice: 8800,
    regularName: 'Аналог иммуностимулятора',
    regularPrice: 18000,
  },
  {
    category: 'Зубная паста',
    atomyName: 'Атоми Зубная Паста (5 шт)',
    atomyImage: 'https://image.atomy.ru/610_610/RU/goods/R00505/org/609/250523000041609.png',
    atomyPrice: 1700,
    regularName: '5 тюбиков пасты',
    regularPrice: 3500,
  },
  {
    category: 'Омега-3',
    atomyName: 'Атоми Аляска Е-Омега 3',
    atomyImage: 'https://image.atomy.ru/610_610/RU/goods/R00111/org/778/250730000042778.jpg',
    atomyPrice: 2000,
    regularName: 'Аналог в аптеке',
    regularPrice: 4500,
  },
  {
    category: 'Солнцезащита',
    atomyName: 'Атоми Солнцезащитный крем',
    atomyImage: 'https://image.atomy.ru/610_610/RU/goods/R00285/org/593/250523000041593.png',
    atomyPrice: 700,
    regularName: 'Аналог SPF50+',
    regularPrice: 3200,
  },
];

const CompareCard = ({ item, index }) => {
  const savings = item.regularPrice - item.atomyPrice;
  const percent = Math.round((savings / item.regularPrice) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
      className="group bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-atomy-blue/10 transition-shadow duration-500"
    >
      <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-50 to-atomy-light/30 flex items-center justify-center p-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-atomy-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <img
          src={item.atomyImage}
          alt={item.atomyName}
          className="h-full w-auto object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute top-4 right-4">
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 300 }}
            className="bg-gradient-to-r from-emerald-500 to-green-500 text-white text-sm font-bold px-3 py-1.5 rounded-full shadow-lg shadow-emerald-500/30 flex items-center gap-1"
          >
            <TrendingDown className="w-3.5 h-3.5" />
            −{percent}%
          </motion.div>
        </div>
      </div>

      <div className="p-6">
        <span className="text-xs font-semibold text-atomy-accent uppercase tracking-widest">{item.category}</span>
        <h3 className="text-lg font-bold text-slate-800 mt-1 mb-4">{item.atomyName}</h3>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 rounded-xl bg-red-50/70 border border-red-100/50">
            <span className="text-sm text-slate-600">{item.regularName}</span>
            <span className="text-lg font-bold text-red-500 line-through decoration-2">
              {item.regularPrice.toLocaleString('ru-RU')} ₽
            </span>
          </div>

          <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50/70 border border-emerald-100/50">
            <span className="text-sm font-medium text-emerald-700">Atomy</span>
            <span className="text-xl font-bold text-emerald-600">
              {item.atomyPrice.toLocaleString('ru-RU')} ₽
            </span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-500">Вы экономите</span>
            <span className="block text-lg font-bold text-emerald-600">
              {savings.toLocaleString('ru-RU')} ₽
            </span>
          </div>
          <a
            href={REFERRAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-atomy-blue hover:text-atomy-accent transition-colors flex items-center gap-1"
          >
            Заказать <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export const PriceCompare = () => {
  return (
    <Section id="compare" background="gradient" animate={false}>
      <div className="text-center max-w-3xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium mb-4"
        >
          <Sparkles className="w-4 h-4" />
          <span>Выгодные покупки</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Typography variant="h2" className="mb-4">
            Экономьте <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-500">30–80%</span> на товарах
          </Typography>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-500 text-lg"
        >
          Сравните привычные вам товары с товарами Atomy и выберите лучшее для себя
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {comparisons.map((item, i) => (
          <CompareCard key={i} item={item} index={i} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-14 max-w-2xl mx-auto"
      >
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-atomy-blue to-[#003870] p-8 md:p-10 text-center text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,169,224,0.3),transparent_60%)]" />
          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-bold mb-3">
              Получите доступ к закрытому каталогу бесплатно
            </h3>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm text-white/80 mb-6">
              <span>✓ Косметика от 150₽</span>
              <span>✓ БАДы по цене производителя</span>
              <span>✓ Бесплатная доставка</span>
            </div>
            <Button
              variant="accent"
              size="lg"
              as="a"
              href={REFERRAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="shadow-2xl"
            >
              Получить доступ сейчас
            </Button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};
