import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from './ui/Section';
import { Typography } from './ui/Typography';
import { Button } from './ui/Button';
import { HelpCircle, ChevronDown, MessageCircle, ExternalLink } from 'lucide-react';

const REFERRAL_LINK = 'https://m.atomy.ru/gate/join/easyreg/v2/41789284';

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
    q: 'Сколько стоит доставка?',
    a: 'Доставка до пункта выдачи Атоми в вашем городе — бесплатна. За дополнительную плату вы можете оформить курьерскую доставку до дома или офиса.',
  },
  {
    q: 'Как оплатить заказ?',
    a: 'Вы можете оплатить заказ любой российской банковской картой прямо на официальном сайте Atomy.',
  },
  {
    q: 'Чем отличается кабинет клиента и партнёра?',
    a: 'Клиентский кабинет предназначен для оформления заказов, отслеживания доставок и доступа к информации о товарах. В кабинете партнёра, помимо этого, есть инструменты для управления командой, отслеживания продаж и получения вознаграждений. Переключиться с клиентского на партнёрский можно в любой момент.',
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
    a: 'Да! Атоми предлагает возможность построить собственный бизнес. Рекомендуя товары друзьям и знакомым, вы получаете бонусы. Это полноценный бизнес с прозрачным маркетинг-планом. Напишите мне, чтобы узнать подробнее.',
  },
];

const FaqItem = ({ item, isOpen, onToggle, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05, duration: 0.4 }}
    className={`rounded-2xl overflow-hidden transition-all duration-300 ${
      isOpen
        ? 'bg-white shadow-lg shadow-atomy-blue/5 border border-atomy-blue/20'
        : 'bg-white border border-slate-100 hover:border-slate-200 hover:shadow-md'
    }`}
  >
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between p-5 md:p-6 text-left group"
    >
      <div className="flex items-center gap-3 pr-4">
        <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-colors duration-300 ${
          isOpen ? 'bg-atomy-blue text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-atomy-blue/10 group-hover:text-atomy-blue'
        }`}>
          {index + 1}
        </span>
        <span className={`text-base font-semibold transition-colors ${isOpen ? 'text-atomy-blue' : 'text-slate-800'}`}>
          {item.q}
        </span>
      </div>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
          isOpen ? 'bg-atomy-blue/10 text-atomy-blue' : 'bg-slate-100 text-slate-400'
        }`}
      >
        <ChevronDown className="w-4 h-4" />
      </motion.div>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="overflow-hidden"
        >
          <div className="px-5 md:px-6 pb-5 md:pb-6 pl-16 md:pl-[4.5rem]">
            <p className="text-slate-600 leading-relaxed">{item.a}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <Section id="faq" background="white" animate={false}>
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 text-violet-700 text-sm font-medium mb-4"
        >
          <HelpCircle className="w-4 h-4" />
          <span>Нас часто спрашивают</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Typography variant="h2" className="mb-4">
            Ответы на популярные вопросы
          </Typography>
        </motion.div>
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto mt-10 text-center p-6 rounded-2xl bg-slate-50 border border-slate-100"
      >
        <p className="text-slate-600 mb-4">Не нашли ответ на свой вопрос?</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            as="a"
            href="https://t.me/vladilena_art"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            className="w-full sm:w-auto"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Связаться с консультантом
          </Button>
          <Button
            as="a"
            href={REFERRAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            Зарегистрироваться бесплатно
            <ExternalLink className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </motion.div>
    </Section>
  );
};
