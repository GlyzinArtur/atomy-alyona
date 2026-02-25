import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { MessagesSquare, Users as UsersIcon, ArrowRight, Sparkles, Check } from 'lucide-react';

const REFERRAL_LINK = 'https://m.atomy.ru/gate/join/easyreg/v2/41789284';

const benefits = [
  'Бесплатная регистрация за 2 минуты',
  'Доступ к полному каталогу товаров',
  'Бесплатная доставка до пункта выдачи',
  'Возможность стать партнёром компании',
];

export const CTASection = () => {
  return (
    <Section background="blue" className="relative text-white overflow-hidden" animate={false}>
      <div className="absolute inset-0 bg-gradient-to-b from-atomy-blue via-[#003870] to-[#002147]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(0,169,224,0.2),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,169,224,0.15),transparent_50%)]" />
      <motion.div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-atomy-accent text-sm font-medium mb-6"
        >
          <Sparkles className="w-4 h-4" />
          <span>Специальное предложение</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
        >
          Готовы начать экономить?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-white/60 mb-8 max-w-xl mx-auto"
        >
          Зарегистрируйтесь сегодня и получите доступ к полному каталогу Атоми!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="inline-flex flex-col items-start gap-3 mb-10 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
        >
          {benefits.map((b, i) => (
            <div key={i} className="flex items-center gap-3 text-white/80">
              <div className="w-5 h-5 rounded-full bg-atomy-accent/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-atomy-accent" />
              </div>
              <span className="text-sm md:text-base">{b}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Button
            variant="accent"
            size="lg"
            as="a"
            href={REFERRAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-2xl shadow-atomy-accent/30 text-lg px-10"
          >
            Начать покупать с выгодой
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-xs text-white/40 mt-4">Без обязательных покупок • 4.9/5 рейтинг</p>
        </motion.div>
      </div>
    </Section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-10 pb-6 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 border-b border-slate-800 pb-8">
          <div className="flex items-center gap-2">
            <img src="./images/atomy-logo-white.svg" alt="Atomy Logo" className="h-6 w-auto opacity-70" />
            <span className="font-bold text-lg text-white ml-1">Елена Федеряшина</span>
          </div>
          <div className="flex gap-3">
            <a
              href="https://vk.ru/vladilena_art"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-atomy-blue hover:text-white transition-all duration-200 hover:shadow-lg hover:shadow-atomy-blue/20"
            >
              <UsersIcon className="w-5 h-5" />
            </a>
            <a
              href="https://t.me/vladilena_art"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-atomy-blue hover:text-white transition-all duration-200 hover:shadow-lg hover:shadow-atomy-blue/20"
            >
              <MessagesSquare className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between text-xs gap-2 text-slate-500">
          <p>© {new Date().getFullYear()} Atomy — Елена Федеряшина. Все права защищены.</p>
          <p>Сайт независимого дистрибьютора компании Atomy</p>
        </div>
      </div>
    </footer>
  );
};
