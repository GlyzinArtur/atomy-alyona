import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Typography } from './ui/Typography';
import { UserPlus, ShoppingBag, Truck, Gift } from 'lucide-react';

const steps = [
  {
    title: 'Регистрация',
    description: 'Пройдите быструю бесплатную регистрацию по ссылке ниже, чтобы получить доступ к оптовым ценам.',
    icon: <UserPlus className="w-6 h-6 text-atomy-blue" />,
  },
  {
    title: 'Установка приложения',
    description: 'Скачайте официальное приложение Atomy Mobile или зайдите на сайт под своим логином.',
    icon: <Gift className="w-6 h-6 text-atomy-blue" />,
  },
  {
    title: 'Выбор продукции',
    description: 'Подберите подходящую корейскую косметику или товары для здоровья в каталоге.',
    icon: <ShoppingBag className="w-6 h-6 text-atomy-blue" />,
  },
  {
    title: 'Оформление',
    description: 'Закажите товары с удобной доставкой до двери или в бесплатный образовательный центр.',
    icon: <Truck className="w-6 h-6 text-atomy-blue" />,
  },
];

export const RegistrationSteps = () => {
  return (
    <Section id="steps" background="white" className="relative">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <Typography variant="h3" className="text-atomy-blue mb-4 uppercase tracking-wider font-semibold text-sm md:text-base">
          Как начать
        </Typography>
        <Typography variant="h2" className="mb-6">
          Простые шаги к покупкам
        </Typography>
        <Typography variant="p" className="text-slate-500 max-w-xl mx-auto">
          Получите доступ к корейской косметике премиум-класса со скидкой от 15 до 20%
        </Typography>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 z-0" />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                {/* Connector Line for Mobile */}
                {index !== steps.length - 1 && (
                  <div className="lg:hidden absolute top-[4.5rem] bottom-[-2rem] left-1/2 w-0.5 bg-slate-100 -translate-x-1/2 -z-10" />
                )}

                {/* Step Number Badge */}
                <div className="absolute top-0 right-1/2 translate-x-10 lg:-translate-y-4 lg:translate-x-8 w-6 h-6 rounded-full bg-atomy-accent text-white text-xs font-bold flex items-center justify-center z-20 shadow-md">
                  {index + 1}
                </div>

                {/* Icon Container */}
                <div className="w-20 h-20 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center mb-6 shadow-xl shadow-atomy-blue/5 relative z-10 hover:border-atomy-blue/20 transition-colors">
                  {step.icon}
                </div>

                <Typography variant="h4" className="mb-3 text-lg font-bold text-slate-800">
                  {step.title}
                </Typography>
                
                <p className="text-slate-500 text-sm leading-relaxed px-4">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Registration Button */}
      <div className="mt-16 flex justify-center relative z-10">
        <a 
          href="https://m.atomy.ru/gate/join/easyreg/v2/41789284" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center font-medium transition-all duration-300 ease-out rounded-full bg-atomy-accent text-white hover:bg-sky-500 hover:shadow-lg hover:shadow-atomy-accent/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-atomy-accent h-14 px-10 text-lg shadow-xl"
        >
          Пройти регистрацию
        </a>
      </div>
      
    </Section>
  );
};
