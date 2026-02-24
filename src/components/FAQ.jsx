import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from './ui/Section';
import { Typography } from './ui/Typography';
import { HelpCircle, ChevronDown } from 'lucide-react';

const faqItems = [
  {
    q: 'Что такое Атоми?',
    a: 'Атоми — это клубный маркетплейс (интернет-магазин) товаров из Южной Кореи с доставкой от 1 дня. Широкий ассортимент 500+ товаров премиум качества из 50 категорий — от косметики и до товаров для дома.',
  },
  {
    q: 'Зачем нужно регистрироваться?',
    a: 'По правилам компании, только зарегистрированные участники имеют право делать покупки по оптовым ценам на официальном сайте. Регистрация бесплатная и занимает 2 минуты. После регистрации вы получаете доступ к ценам на 10–30% ниже обычных.',
  },
  {
    q: 'Сколько стоит регистрация?',
    a: 'Регистрация полностью бесплатная. Нет никаких обязательных покупок, ежемесячных взносов или скрытых платежей.',
  },
  {
    q: 'Как долго идёт доставка?',
    a: 'У Атоми 3 больших склада в России — доставка с них до вашего города занимает от 3 дней. Нет никаких таможенных пошлин или заполнения деклараций. Доставка до пункта выдачи бесплатна.',
  },
  {
    q: 'Как оплатить заказ?',
    a: 'Вы можете оплатить заказ любой российской банковской картой прямо на официальном сайте Atomy.',
  },
  {
    q: 'Цены отличаются для клиентов и агентов?',
    a: 'Нет, цены для всех участников одинаковые. Не важно, какой у вас статус, ранг или объём продаж — цена для всех единая.',
  },
  {
    q: 'Как вернуть товар?',
    a: 'Вы можете вернуть товар по любым причинам в течение 7 дней после доставки, если сохранён его товарный вид. Для оформления возврата свяжитесь со службой поддержки Атоми: +7 (495) 189-74-94.',
  },
  {
    q: 'Можно ли на этом зарабатывать?',
    a: 'Да! Атоми предлагает возможность построить собственный бизнес. Рекомендуя товары друзьям и знакомым, вы получаете бонусы. Это полноценный MLM-бизнес с прозрачным маркетинг-планом. Напишите мне, чтобы узнать подробнее.',
  },
];

const FaqItem = ({ item, isOpen, onToggle, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    className="border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-atomy-blue/20 transition-colors"
  >
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between p-5 text-left"
    >
      <span className="text-base font-semibold text-slate-800 pr-4">{item.q}</span>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.2 }}
        className="flex-shrink-0"
      >
        <ChevronDown className="w-5 h-5 text-slate-400" />
      </motion.div>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
            {item.a}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <Section id="faq" background="white">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 text-violet-700 text-sm font-medium mb-4"
        >
          <HelpCircle className="w-4 h-4" />
          <span>Часто спрашивают</span>
        </motion.div>

        <Typography variant="h2" className="mb-4">
          Ответы на популярные вопросы
        </Typography>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {faqItems.map((item, i) => (
          <FaqItem
            key={i}
            item={item}
            index={i}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </Section>
  );
};
