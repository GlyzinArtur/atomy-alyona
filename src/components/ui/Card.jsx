import React from 'react';
import { motion } from 'framer-motion';
import { cn } from './Button';

export const Card = React.forwardRef(({ className, children, hoverEffect = true, ...props }, ref) => {
  const baseStyles = 'relative bg-white rounded-3xl border border-slate-100 overflow-hidden';
  const shadowStyles = hoverEffect ? 'shadow-sm hover:shadow-xl hover:shadow-atomy-blue/5 hover:-translate-y-1 transition-all duration-300 ease-out' : '';

  return (
    <div
      ref={ref}
      className={cn(baseStyles, shadowStyles, className)}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/0 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  );
});

Card.displayName = 'Card';

export const AnimatedCard = motion(Card);
