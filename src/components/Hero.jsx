import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Typography } from './ui/Typography';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Background with abstract shapes */}
      <div className="absolute inset-0 bg-slate-50 overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-atomy-light blur-[120px] opacity-60" />
        <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-100 blur-[100px] opacity-50" />
        <div className="absolute -bottom-[20%] right-[10%] w-[60%] h-[60%] rounded-full bg-sky-100 blur-[120px] opacity-40" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        
        {/* Left Column - Text content */}
        <motion.div 
          className="w-full lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-slate-200/50 mb-6 shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-atomy-blue mr-3 animate-pulse"></span>
            <span className="text-sm font-medium text-slate-800">Официальный дистрибьютор Atomy</span>
          </motion.div>
          
          <Typography variant="h1" className="mb-6">
            Откройте мир <span className="text-transparent bg-clip-text bg-gradient-to-r from-atomy-blue to-atomy-accent">премиальной</span> корейской косметики
          </Typography>
          
          <Typography variant="lead" className="mb-8 max-w-2xl mx-auto lg:mx-0">
            Привет, я Елена Федеряшина! Помогаю подбирать идеальный уход для вашей кожи и здоровье для организма с продукцией абсолютного качества по абсолютной цене.
          </Typography>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button size="lg" className="w-full sm:w-auto shadow-xl shadow-atomy-blue/20" as="a" href="https://m.atomy.ru/gate/join/easyreg/v2/41789284" target="_blank" rel="noopener noreferrer">
              Регистрация и заказ
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" as="a" href="#products">
              Смотреть каталог
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Column - Hero Image/Composition */}
        <motion.div 
          className="w-full lg:w-1/2 relative flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-md mx-auto aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
            <div className="absolute inset-0 rounded-[2rem] lg:rounded-[3rem] bg-gradient-to-tr from-atomy-blue/10 to-transparent rotate-3 scale-105" />
            <div className="absolute inset-0 rounded-[2rem] lg:rounded-[3rem] bg-white shadow-2xl overflow-hidden border border-slate-100/50">
              <img 
                src="./images/elena-office.png" 
                alt="Елена Федеряшина - консультант Atomy" 
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
            </div>
            
            {/* Floating element 1 */}
            <motion.div 
              className="absolute -right-6 md:-right-10 top-1/4 bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-white/50"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <img src="./images/atomy-logo.svg" alt="Atomy" className="h-8 w-auto opacity-90" />
            </motion.div>

            {/* Floating element 2 */}
            <motion.div 
              className="absolute -left-4 md:-left-8 bottom-1/4 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-white/50"
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-xl">🌿</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Качество</p>
                  <p className="text-sm font-bold text-slate-800">Масс-тиж</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};
