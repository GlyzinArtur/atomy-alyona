import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Typography } from './ui/Typography';
import { Award, Heart, ShieldCheck, Sparkles } from 'lucide-react';

export const About = () => {
  const stats = [
    { label: 'Довольных клиентов', value: '500+', icon: <Heart className="w-5 h-5 text-rose-500" /> },
    { label: 'Оригинальная продукция', value: '100%', icon: <ShieldCheck className="w-5 h-5 text-green-500" /> },
    { label: 'Годы на рынке', value: '5+', icon: <Award className="w-5 h-5 text-amber-500" /> },
  ];

  return (
    <Section id="about" background="light" className="relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-atomy-light/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -z-10" />

      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Column - Image composition */}
        <motion.div 
          className="w-full lg:w-1/2 relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-md mx-auto aspect-[3/4] md:aspect-square lg:aspect-[3/4]">
            {/* Background shape */}
            <div className="absolute inset-0 bg-atomy-blue/5 rounded-[2rem] -rotate-6 scale-105 transform origin-bottom-left transition-transform duration-500 hover:rotate-0" />
            
            {/* Main image */}
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden border-[8px] border-white shadow-xl">
              <img 
                src="./images/elena-absolute.png" 
                alt="Елена Федеряшина - ваш консультант Atomy" 
                className="w-full h-full object-cover bg-blue-50/50" 
              />
            </div>
            
            {/* Floating badge */}
            <motion.div 
              className="absolute -bottom-6 -right-6 md:-right-10 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center">
                <Heart className="text-rose-500 w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">С заботой</p>
                <p className="font-bold text-slate-800">О вашей красоте</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column - Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h3" className="text-atomy-blue mb-2 text-lg md:text-xl uppercase tracking-wider font-semibold">
              Давайте знакомиться
            </Typography>
            
            <Typography variant="h2" className="mb-6">
              Ваш личный проводник в мир красоты и здоровья
            </Typography>
            
            <Typography variant="p" className="mb-6">
              Я — Елена Федеряшина, официальный дистрибьютор южнокорейской компании Atomy. Моя миссия — показать вам, что премиальный уход может быть доступным.
            </Typography>
            
            <Typography variant="p" className="mb-8">
              Atomy — это не просто косметика и витамины. Это философия абсолютного качества по абсолютной цене (Absolute Quality, Absolute Price). Я лично тестирую продукцию и помогаю своим клиентам подобрать идеальный комплекс, учитывая их индивидуальные особенности.
            </Typography>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-200">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-center gap-2">
                    {stat.icon}
                    <span className="text-2xl font-bold text-slate-800">{stat.value}</span>
                  </div>
                  <span className="text-sm font-medium text-slate-500">{stat.label}</span>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </Section>
  );
};
