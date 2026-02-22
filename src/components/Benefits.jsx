import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Typography } from './ui/Typography';
import { AnimatedCard } from './ui/Card';
import { Leaf, Award, Wallet, Clock, Globe2, Sparkles } from 'lucide-react';

const benefits = [
  {
    title: 'Абсолютное качество',
    description: 'Производство на заводе Kolmar Korea — лидере индустрии. Косметика Atomy создается по технологиям, используемым в люксовых брендах (масс-тиж).',
    icon: <Award className="w-8 h-8 text-atomy-blue" />,
    color: 'bg-blue-50',
  },
  {
    title: 'Абсолютная цена',
    description: 'Мы не тратим деньги на рекламу, красивую упаковку и посредников. Вы платите только за качество самого продукта внутри.',
    icon: <Wallet className="w-8 h-8 text-emerald-500" />,
    color: 'bg-emerald-50',
  },
  {
    title: 'Натуральные компоненты',
    description: 'В основе составов — экстракты целебных трав, витамины и инновационные формулы, доказавшие свою эффективность.',
    icon: <Leaf className="w-8 h-8 text-green-500" />,
    color: 'bg-green-50',
  },
  {
    title: 'Бесплатная регистрация',
    description: 'Никаких стартовых пакетов, обязательных закупок или членских взносов. Становитесь покупателем абсолютно бесплатно.',
    icon: <Sparkles className="w-8 h-8 text-amber-500" />,
    color: 'bg-amber-50',
  },
  {
    title: 'Доставка по всему миру',
    description: 'Удобная доставка до образовательных центров в вашем городе или курьером прямо до двери.',
    icon: <Globe2 className="w-8 h-8 text-indigo-500" />,
    color: 'bg-indigo-50',
  },
  {
    title: 'Отсутствие сроков',
    description: 'Покупайте тогда, когда вам нужно. Ваш аккаунт не сгорит, если вы сделаете хотя бы одну покупку в течение года.',
    icon: <Clock className="w-8 h-8 text-rose-500" />,
    color: 'bg-rose-50',
  },
];

export const Benefits = () => {
  return (
    <Section id="benefits" background="light" className="relative">
      
      {/* Decorative SVG Blob */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 -translate-y-1/4 translate-x-1/4 blur-[100px] bg-atomy-blue/10 rounded-full z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 translate-y-1/4 -translate-x-1/4 blur-[100px] bg-atomy-accent/10 rounded-full z-0 pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <Typography variant="h3" className="text-atomy-blue mb-4 uppercase tracking-wider font-semibold text-sm md:text-base">
          Почему выбирают Atomy
        </Typography>
        <Typography variant="h2" className="mb-6">
          Премиальный уход без переплат
        </Typography>
        <Typography variant="p" className="text-slate-500">
          Уникальная бизнес-модель позволяет нам предлагать вам лучшее качество на рынке по ценам, доступным каждому.
        </Typography>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {benefits.map((benefit, index) => (
          <AnimatedCard 
            key={index} 
            className="p-8 h-full flex flex-col border border-slate-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${benefit.color}`}>
              {benefit.icon}
            </div>
            <Typography variant="h4" className="mb-3 text-xl font-bold">
              {benefit.title}
            </Typography>
            <p className="text-slate-500 leading-relaxed flex-grow">
              {benefit.description}
            </p>
          </AnimatedCard>
        ))}
      </div>

    </Section>
  );
};
