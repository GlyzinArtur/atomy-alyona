import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Section } from './ui/Section';
import { Typography } from './ui/Typography';
import { ShieldCheck, Award, Leaf, Globe, FlaskConical, HeartPulse, Sparkles, Package, TrendingUp } from 'lucide-react';

const certs = [
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: 'ISO 22716 (GMP)',
    desc: 'Международный стандарт надлежащей производственной практики косметической продукции.',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: 'KFDA / MFDS',
    desc: 'Одобрение Министерства безопасности пищевых продуктов и медикаментов Южной Кореи.',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: <Leaf className="w-7 h-7" />,
    title: 'Vegan & Eco',
    desc: 'Продукция без тестирования на животных, с натуральными и экологичными компонентами.',
    gradient: 'from-emerald-500 to-green-500',
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: '50+ стран',
    desc: 'Сертификация для продажи в более чем 50 странах мира, включая Россию и СНГ.',
    gradient: 'from-cyan-500 to-sky-500',
  },
  {
    icon: <FlaskConical className="w-7 h-7" />,
    title: 'KAERI & KIST',
    desc: 'Разработка совместно с Корейским институтом атомной энергии и Корейским институтом науки.',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    icon: <HeartPulse className="w-7 h-7" />,
    title: 'Клинические тесты',
    desc: 'Вся продукция прошла клинические испытания и дерматологическое тестирование.',
    gradient: 'from-rose-500 to-pink-500',
  },
];

const CountUp = ({ target, suffix = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(0, target, {
      duration: 2,
      ease: [0.25, 0.46, 0.45, 0.94],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => ctrl.stop();
  }, [inView, target]);

  return <span ref={ref}>{display}{suffix}</span>;
};

const growthStats = [
  { value: 6, suffix: '+', label: 'лет в России', icon: <TrendingUp className="w-5 h-5" /> },
  { value: 2, suffix: ' млн+', label: 'довольных клиентов', icon: <Sparkles className="w-5 h-5" /> },
  { value: 819, suffix: '', label: 'пунктов выдачи', icon: <Package className="w-5 h-5" /> },
  { value: 30, suffix: '%', label: 'становятся партнёрами', icon: <Globe className="w-5 h-5" /> },
];

export const Certificates = () => {
  return (
    <Section id="certificates" background="light" animate={false}>
      <div className="text-center max-w-3xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-atomy-blue/5 text-atomy-blue text-sm font-medium mb-4"
        >
          <ShieldCheck className="w-4 h-4" />
          <span>Гарантии качества</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Typography variant="h2" className="mb-4">
            Соответствие <span className="text-transparent bg-clip-text bg-gradient-to-r from-atomy-blue to-atomy-accent">высшим стандартам</span>
          </Typography>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-500 text-lg"
        >
          Вся продукция Atomy имеет сертификаты качества и соответствует международным стандартам
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mb-16">
        {certs.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="group bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-200 transition-shadow duration-300"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.gradient} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              {cert.icon}
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">{cert.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{cert.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="relative rounded-3xl bg-gradient-to-br from-[#001d3d] via-atomy-blue to-[#003870] p-8 md:p-12 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,169,224,0.25),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,169,224,0.15),transparent_50%)]" />

          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-2">
              Успешный рост с 2009 года
            </h3>
            <p className="text-white/60 text-center mb-10">
              Миллионы покупателей в 50 странах мира по достоинству оценили качество Атоми
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {growthStats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-atomy-accent mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1 tabular-nums">
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs md:text-sm text-white/50">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};
