import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Typography } from './ui/Typography';
import { Phone, Mail, MapPin, Instagram, MessagesSquare } from 'lucide-react';

export const Contacts = () => {
  return (
    <Section id="contacts" background="blue" className="relative text-white overflow-hidden">
      
      {/* Decorative SVG */}
      <div className="absolute inset-0 bg-[url('./images/atomy-logo-white.svg')] bg-no-repeat bg-center opacity-[0.03] scale-150" />
      <div className="absolute top-0 right-0 w-1/2 h-[200%] -translate-y-1/4 translate-x-1/3 bg-gradient-to-l from-white/10 to-transparent skew-x-12" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Typography variant="h3" className="text-atomy-accent mb-4 uppercase tracking-wider font-semibold text-sm md:text-base">
            Остались вопросы?
          </Typography>
          <Typography variant="h2" className="mb-6 text-white">
            Давайте на связи
          </Typography>
          <p className="text-white/80 max-w-xl mx-auto text-lg">
            Напишите мне в любой удобный мессенджер, и я отвечу вам в ближайшее время. Консультация бесплатна!
          </p>
        </div>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <motion.a 
            href="https://wa.me/79000000000" // Placeholder, should be replaced with real number
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6 p-6 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all group relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* WhatsApp green accent on hover */}
            <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/10 transition-colors" />
            
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center relative z-10">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <div className="relative z-10">
              <span className="block text-sm font-medium text-white/70 mb-1">WhatsApp</span>
              <span className="block text-xl font-bold text-white">Написать сообщение</span>
            </div>
          </motion.a>

          <motion.a 
            href="https://t.me/username" // Placeholder
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6 p-6 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all group relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {/* Telegram blue accent on hover */}
            <div className="absolute inset-0 bg-sky-500/0 group-hover:bg-sky-500/10 transition-colors" />
            
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center relative z-10">
              <MessagesSquare className="w-7 h-7 text-white" />
            </div>
            <div className="relative z-10">
              <span className="block text-sm font-medium text-white/70 mb-1">Telegram</span>
              <span className="block text-xl font-bold text-white">Написать сообщение</span>
            </div>
          </motion.a>

        </div>

      </div>
    </Section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 border-b border-slate-800 pb-8">
          
          <div className="flex items-center gap-2">
            <img src="./images/atomy-logo-white.svg" alt="Atomy Logo" className="h-6 w-auto opacity-70" />
            <span className="font-bold text-lg text-white ml-1">Alyona</span>
          </div>

          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-atomy-blue hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-atomy-blue hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between text-sm">
          <p>© {new Date().getFullYear()} Atomy Alyona. Все права защищены.</p>
          <p className="mt-2 md:mt-0">Сайт независимого дистрибьютора компании Atomy</p>
        </div>
      </div>
    </footer>
  );
};
