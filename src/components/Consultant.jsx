import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Typography } from './ui/Typography';
import { Button } from './ui/Button';
import { Phone, MessagesSquare, Users as UsersIcon, MessageCircle } from 'lucide-react';

const REFERRAL_LINK = 'https://m.atomy.ru/gate/join/easyreg/v2/41789284';

const contactLinks = [
  {
    icon: <Phone className="w-6 h-6" />,
    label: 'Телефон',
    value: '+7 911 764 7971',
    href: 'tel:+79117647971',
    color: 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100',
  },
  {
    icon: <MessagesSquare className="w-6 h-6" />,
    label: 'Telegram',
    value: '@vladilena_art',
    href: 'https://t.me/vladilena_art',
    color: 'bg-sky-50 text-sky-600 hover:bg-sky-100',
  },
  {
    icon: <UsersIcon className="w-6 h-6" />,
    label: 'ВКонтакте',
    value: 'vladilena_art',
    href: 'https://vk.ru/vladilena_art',
    color: 'bg-blue-50 text-blue-600 hover:bg-blue-100',
  },
];

export const Consultant = () => {
  return (
    <Section id="consultant" background="gradient">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 text-rose-600 text-sm font-medium mb-4"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ваш консультант</span>
          </motion.div>

          <Typography variant="h2" className="mb-4">
            Помогу разобраться с продукцией
          </Typography>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 relative">
              <div className="aspect-square md:aspect-auto md:h-full bg-gradient-to-br from-atomy-light to-slate-50 p-8 flex items-center justify-center">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img
                    src="./images/elena-office.png"
                    alt="Елена Федеряшина"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="absolute top-4 right-4 md:top-auto md:bottom-4 md:right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500 text-white text-xs font-medium shadow-md">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                Онлайн
              </div>
            </div>

            <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-slate-800 mb-1">Елена Федеряшина</h3>
              <p className="text-atomy-accent font-medium mb-4">Официальный дистрибьютор Atomy</p>

              <p className="text-slate-600 leading-relaxed mb-6">
                Я помогу вам разобраться с продукцией и отвечу на любые вопросы.
                Расскажу о преимуществах корейской косметики и БАДов, помогу с регистрацией и первым заказом.
                Консультация бесплатная!
              </p>

              <div className="space-y-3 mb-8">
                {contactLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`flex items-center gap-4 p-3 rounded-xl transition-colors ${link.color}`}
                  >
                    {link.icon}
                    <div>
                      <span className="block text-xs opacity-70">{link.label}</span>
                      <span className="block font-semibold">{link.value}</span>
                    </div>
                  </a>
                ))}
              </div>

              <Button
                as="a"
                href={REFERRAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                Зарегистрироваться бесплатно
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
