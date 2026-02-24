import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Typography } from './ui/Typography';
import { ShieldCheck, Award, Leaf, Globe, FlaskConical, HeartPulse } from 'lucide-react';

const certs = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'ISO 22716 (GMP)',
    desc: 'Международный стандарт надлежащей производственной практики косметической продукции.',
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'KFDA / MFDS',
    desc: 'Одобрение Министерства безопасности пищевых продуктов и медикаментов Южной Кореи.',
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: 'Vegan & Eco',
    desc: 'Продукция без тестирования на животных, с натуральными и экологичными компонентами.',
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: '50+ стран',
    desc: 'Сертификация для продажи в более чем 50 странах мира, включая Россию и СНГ.',
  },
  {
    icon: <FlaskConical className="w-8 h-8" />,
    title: 'KAERI & KIST',
    desc: 'Разработка совместно с Корейским институтом атомной энергии и Корейским институтом науки.',
  },
  {
    icon: <HeartPulse className="w-8 h-8" />,
    title: 'Клинические тесты',
    desc: 'Вся продукция прошла клинические испытания и дерматологическое тестирование.',
  },
];

export const Certificates = () => {
  return (
    <Section id="certificates" background="light">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-atomy-blue/5 text-atomy-blue text-sm font-medium mb-4"
        >
          <ShieldCheck className="w-4 h-4" />
          <span>Гарантии качества</span>
        </motion.div>

        <Typography variant="h2" className="mb-4">
          Соответствие высшим стандартам
        </Typography>

        <Typography variant="p" className="text-slate-500">
          Вся продукция Atomy имеет сертификаты качества и соответствует международным стандартам
        </Typography>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {certs.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-lg hover:shadow-atomy-blue/5 hover:border-atomy-blue/20 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-xl bg-atomy-blue/5 flex items-center justify-center text-atomy-blue mb-4 group-hover:bg-atomy-blue group-hover:text-white transition-colors duration-300">
              {cert.icon}
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">{cert.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{cert.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
