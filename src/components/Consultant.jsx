import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Typography } from './ui/Typography';
import { Button } from './ui/Button';
import { Phone, MessagesSquare, Users as UsersIcon, MessageCircle, ExternalLink } from 'lucide-react';

const REFERRAL_LINK = 'https://m.atomy.ru/gate/join/easyreg/v2/41789284';

const contactLinks = [
  {
    icon: <Phone className="w-5 h-5" />,
    label: 'Телефон',
    value: '+7 911 764 7971',
    href: 'tel:+79117647971',
    gradient: 'from-emerald-500 to-green-500',
    bg: 'bg-emerald-50 hover:bg-emerald-100',
  },
  {
    icon: <MessagesSquare className="w-5 h-5" />,
    label: 'Telegram',
    value: '@vladilena_art',
    href: 'https://t.me/vladilena_art',
    gradient: 'from-sky-500 to-blue-500',
    bg: 'bg-sky-50 hover:bg-sky-100',
  },
  {
    icon: <UsersIcon className="w-5 h-5" />,
    label: 'ВКонтакте',
    value: 'vladilena_art',
    href: 'https://vk.ru/vladilena_art',
    gradient: 'from-blue-500 to-indigo-500',
    bg: 'bg-blue-50 hover:bg-blue-100',
  },
];

export const Consultant = () => {
  return (
    <Section id="consultant" background="gradient" animate={false}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 text-rose-600 text-sm font-medium mb-4"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ваш личный консультант</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Typography variant="h2">
              Помогу разобраться с продукцией
            </Typography>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-slate-200/60 overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 relative">
              <div className="aspect-square md:aspect-auto md:h-full bg-gradient-to-br from-atomy-light via-slate-50 to-white p-8 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative"
                >
                  <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-atomy-accent/20 to-atomy-blue/20 blur-xl" />
                  <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <img
                      src="./images/elena-office.png"
                      alt="Елена Федеряшина"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="absolute top-4 right-4 md:top-auto md:bottom-4 md:right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500 text-white text-xs font-medium shadow-lg shadow-emerald-500/30"
              >
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                Сейчас онлайн
              </motion.div>
            </div>

            <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-slate-800 mb-1">Елена Федеряшина</h3>
              <p className="text-atomy-accent font-medium mb-5">Дистрибьютор компании Atomy</p>

              <p className="text-slate-600 leading-relaxed mb-6">
                Я официальный дистрибьютор компании Атоми. Помогу вам в приобретении товаров и регистрации.
                Расскажу о преимуществах южнокорейской продукции, подберу лучшие товары под ваши задачи.
                Консультация бесплатная!
              </p>

              <div className="space-y-3 mb-8">
                {contactLinks.map((link, i) => (
                  <motion.a
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`flex items-center gap-4 p-3.5 rounded-xl transition-all duration-200 ${link.bg} group`}
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${link.gradient} flex items-center justify-center text-white shadow-sm group-hover:shadow-md transition-shadow`}>
                      {link.icon}
                    </div>
                    <div>
                      <span className="block text-xs text-slate-500">{link.label}</span>
                      <span className="block font-semibold text-slate-800">{link.value}</span>
                    </div>
                  </motion.a>
                ))}
              </div>

              <Button
                as="a"
                href={REFERRAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto shadow-xl shadow-atomy-blue/20"
              >
                Зарегистрироваться бесплатно
                <ExternalLink className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
