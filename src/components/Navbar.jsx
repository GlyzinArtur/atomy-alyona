import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

const REFERRAL_LINK = 'https://m.atomy.ru/gate/join/easyreg/v2/41789284';

const navLinks = [
  { name: 'Каталог', href: '#catalog' },
  { name: 'Сравнение цен', href: '#compare' },
  { name: 'Отзывы', href: '#reviews' },
  { name: 'Сертификаты', href: '#certificates' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Контакты', href: '#consultant' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 z-50 relative">
            <img src="./images/atomy-logo.svg" alt="Atomy Logo" className="h-7 w-auto" />
            <span className={`font-bold text-lg tracking-tight ml-1 transition-colors ${isScrolled ? 'text-slate-800' : 'text-white'}`}>
              Елена
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`text-sm font-medium transition-colors ${
                      isScrolled
                        ? 'text-slate-600 hover:text-atomy-blue'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button
              size="sm"
              as="a"
              href={REFERRAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="shadow-md shadow-atomy-blue/10"
            >
              Регистрация
            </Button>
          </nav>

          <button
            className={`lg:hidden relative z-50 p-2 focus:outline-none ${isScrolled ? 'text-slate-600' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl py-6 px-4 lg:hidden"
          >
            <ul className="flex flex-col gap-3 text-center">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-base font-medium text-slate-700 hover:text-atomy-blue py-2"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="mt-4 pt-4 border-t border-slate-100">
                <Button
                  className="w-full"
                  as="a"
                  href={REFERRAL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Зарегистрироваться бесплатно
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
