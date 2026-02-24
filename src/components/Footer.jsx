import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { MessagesSquare, Users as UsersIcon, ArrowRight } from 'lucide-react';

const REFERRAL_LINK = 'https://m.atomy.ru/gate/join/easyreg/v2/41789284';

export const CTASection = () => {
  return (
    <Section background="blue" className="relative text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('./images/atomy-logo-white.svg')] bg-no-repeat bg-center opacity-[0.03] scale-150" />
      <div className="absolute top-0 right-0 w-1/2 h-[200%] -translate-y-1/4 translate-x-1/3 bg-gradient-to-l from-white/10 to-transparent skew-x-12" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Готовы начать экономить?
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
          Присоединяйтесь к миллионам довольных покупателей Атоми по всему миру.
          Бесплатная регистрация за 2 минуты!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button
            variant="accent"
            size="lg"
            as="a"
            href={REFERRAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-2xl w-full sm:w-auto"
          >
            Начать покупать с выгодой
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/60">
          <span>✓ Бесплатная регистрация</span>
          <span>✓ Доступ к каталогу</span>
          <span>✓ Бесплатная доставка</span>
          <span>✓ Возможность стать партнёром</span>
        </div>
      </div>
    </Section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10 border-t border-slate-800">
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
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-atomy-blue hover:text-white transition-colors"
            >
              <UsersIcon className="w-5 h-5" />
            </a>
            <a
              href="https://t.me/vladilena_art"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-atomy-blue hover:text-white transition-colors"
            >
              <MessagesSquare className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between text-sm gap-2">
          <p>© {new Date().getFullYear()} Atomy — Елена Федеряшина. Все права защищены.</p>
          <p>Сайт независимого дистрибьютора компании Atomy</p>
        </div>
      </div>
    </footer>
  );
};
