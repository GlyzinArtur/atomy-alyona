import React from 'react';
import { cn } from './Button';

export const Typography = ({ variant = 'p', className, children, ...props }) => {
  const Component = variant.startsWith('h') ? variant : 'p';
  
  const variants = {
    h1: 'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]',
    h2: 'text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight',
    h3: 'text-2xl md:text-3xl font-semibold tracking-tight text-slate-900',
    h4: 'text-xl md:text-2xl font-semibold text-slate-900',
    p: 'text-base md:text-lg text-slate-600 leading-relaxed',
    lead: 'text-lg md:text-xl text-slate-600 leading-relaxed',
    small: 'text-sm text-slate-500 leading-normal',
    blockquote: 'border-l-4 border-atomy-blue pl-6 italic text-xl md:text-2xl text-slate-700 my-6',
  };

  return (
    <Component className={cn(variants[variant], className)} {...props}>
      {children}
    </Component>
  );
};
