import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowDown, ShieldCheck, Truck, BadgePercent, Sparkles } from 'lucide-react';

const REFERRAL_LINK = 'https://m.atomy.ru/gate/join/easyreg/v2/41789284';

const stats = [
  { value: '15+', label: 'лет на рынке' },
  { value: '50+', label: 'стран мира' },
  { value: '20M+', label: 'клиентов' },
  { value: '500+', label: 'товаров' },
];

const badges = [
  { icon: <ShieldCheck className="w-4 h-4" />, text: 'Корейское качество' },
  { icon: <Truck className="w-4 h-4" />, text: 'Бесплатная доставка' },
  { icon: <BadgePercent className="w-4 h-4" />, text: 'Скидки до 80%' },
];

const AnimatedCounter = ({ value, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const target = parseInt(value, 10) || 0;

  useEffect(() => {
    let frame;
    const duration = 2000;
    const start = performance.now();
    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [target]);

  return <>{count}{suffix}</>;
};

const FloatingOrb = ({ className, delay = 0 }) => (
  <motion.div
    className={`absolute rounded-full blur-[100px] ${className}`}
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
      delay,
    }}
  />
);

export const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const orbX = useTransform(mouseX, [0, 1], [-15, 15]);
  const orbY = useTransform(mouseY, [0, 1], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#001d3d] via-atomy-blue to-[#003366]" />
        <FloatingOrb className="top-[10%] right-[15%] w-[500px] h-[500px] bg-atomy-accent/20" delay={0} />
        <FloatingOrb className="bottom-[5%] left-[10%] w-[400px] h-[400px] bg-blue-500/15" delay={2} />
        <FloatingOrb className="top-[40%] left-[40%] w-[300px] h-[300px] bg-cyan-400/10" delay={4} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,169,224,0.2),transparent_60%)]" />
        <motion.div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            x: orbX,
            y: orbY,
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
        >
          <Sparkles className="w-4 h-4 text-atomy-accent" />
          <span className="text-sm font-medium text-white/90">Официальный дистрибьютор Atomy</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] max-w-5xl mb-6"
        >
          <span className="block">Гипермаркет из</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-atomy-accent via-cyan-300 to-atomy-accent animate-gradient">
            Южной Кореи
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mb-4 leading-relaxed font-light"
        >
          и готовый бизнес под ключ
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base md:text-lg text-white/50 max-w-xl mb-10"
        >
          Покупайте качественные корейские товары для красоты и здоровья и экономьте до 80%
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-10"
        >
          <Button
            size="lg"
            variant="accent"
            as="a"
            href={REFERRAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto shadow-2xl shadow-atomy-accent/30 text-lg px-10 animate-glow"
          >
            Зарегистрироваться бесплатно
          </Button>
          <Button
            size="lg"
            variant="outline"
            as="a"
            href="#catalog"
            className="w-full sm:w-auto bg-white/5 border-white/20 text-white hover:bg-white/15 hover:text-white backdrop-blur-sm"
          >
            Посмотреть каталог
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {badges.map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/70 text-sm hover:bg-white/10 hover:text-white/90 transition-all duration-300 cursor-default"
            >
              {badge.icon}
              <span>{badge.text}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-14 w-full max-w-3xl"
        >
          {stats.map((stat, i) => {
            const numStr = stat.value;
            const numPart = parseInt(numStr, 10);
            const suffix = numStr.replace(/^\d+/, '');
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                className="text-center group"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-1 tabular-nums">
                  <AnimatedCounter value={numPart} suffix={suffix} />
                </div>
                <div className="text-sm text-white/50 group-hover:text-white/70 transition-colors">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.a
          href="#catalog"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-14 text-white/30 hover:text-white/60 transition-colors"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
};
