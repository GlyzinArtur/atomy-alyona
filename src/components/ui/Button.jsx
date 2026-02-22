import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const Button = React.forwardRef(({ className, variant = 'primary', size = 'default', as: Component = 'button', children, ...props }, ref) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 ease-out rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95 cursor-pointer';
  
  const variants = {
    primary: 'bg-atomy-blue text-white hover:bg-blue-800 hover:shadow-lg hover:shadow-atomy-blue/30 focus:ring-atomy-blue',
    secondary: 'bg-white text-atomy-blue border-2 border-atomy-blue hover:bg-atomy-light focus:ring-atomy-blue',
    accent: 'bg-atomy-accent text-white hover:bg-sky-500 hover:shadow-lg hover:shadow-atomy-accent/30 focus:ring-atomy-accent',
    outline: 'border border-slate-200 bg-white/50 backdrop-blur-sm hover:bg-white text-slate-800 focus:ring-slate-200'
  };

  const sizes = {
    sm: 'h-9 px-4 text-sm',
    default: 'h-12 px-6 text-base',
    lg: 'h-14 px-8 text-lg'
  };

  return (
    <Component
      ref={ref}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
});

Button.displayName = 'Button';
