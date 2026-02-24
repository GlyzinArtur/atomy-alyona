import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowDown, ShieldCheck, Truck, BadgePercent } from 'lucide-react';

const REFERRAL_LINK = 'https://m.atomy.ru/gate/join/easyreg/v2/41789284';

const stats = [
  { value: '15+', label: 'лет на рынке' },
  { value: '50+', label: 'стран мира' },
  { value: '20M+', label: 'клиентов' },
  { value: '500+', label: 'товаров' },
];

const badges = [
  { icon: <ShieldCheck className="w-5 h-5" />, text: 'Корейское качество' },
  { icon: <Truck className="w-5 h-5" />, text: 'Бесплатная доставка' },
  { icon: <BadgePercent className="w-5 h-5" />, text: 'Скидки до 80%' },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-atomy-blue via-[#003870] to-[#002d5e]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-atomy-accent/10 blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-400/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,169,224,0.15),transparent_60%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm font-medium text-white/90">Официальный дистрибьютор Atomy</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-5xl mb-6"
        >
          Гипермаркет из{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-atomy-accent to-cyan-300">
            Южной Кореи
          </span>
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-semibold text-white/80">
            и готовый бизнес под ключ
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed"
        >
          Покупайте качественные корейские товары для красоты и здоровья и экономьте до 80% на повседневных покупках.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-12"
        >
          <Button
            size="lg"
            variant="accent"
            as="a"
            href={REFERRAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto shadow-2xl shadow-atomy-accent/30 text-lg px-10"
          >
            Зарегистрироваться бесплатно
          </Button>
          <Button
            size="lg"
            variant="outline"
            as="a"
            href="#catalog"
            className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white"
          >
            Посмотреть каталог
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {badges.map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/80 text-sm"
            >
              {badge.icon}
              <span>{badge.text}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 w-full max-w-3xl"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.a
          href="#catalog"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 text-white/40 hover:text-white/70 transition-colors"
        >
          <ArrowDown className="w-6 h-6 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
};
