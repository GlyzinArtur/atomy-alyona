import React from 'react';
import { motion } from 'framer-motion';
import { cn } from './Button';

export const Section = ({
  id,
  className,
  children,
  background = 'white',
  withContainer = true,
  animate = true,
  ...props
}) => {
  const backgrounds = {
    white: 'bg-white',
    light: 'bg-slate-50',
    blue: 'bg-atomy-blue text-white',
    gradient: 'bg-gradient-to-br from-white to-atomy-light',
  };

  const ContentWrapper = withContainer ? 'div' : React.Fragment;
  const wrapperProps = withContainer ? { className: 'container mx-auto px-4 md:px-6 lg:px-8' } : {};

  const MotionComponent = animate ? motion.section : 'section';
  const animationProps = animate
    ? {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-100px' },
        transition: { duration: 0.7, ease: 'easeOut' },
      }
    : {};

  return (
    <MotionComponent
      id={id}
      className={cn('py-20 md:py-28 lg:py-32 overflow-hidden', backgrounds[background], className)}
      {...animationProps}
      {...props}
    >
      <ContentWrapper {...wrapperProps}>{children}</ContentWrapper>
    </MotionComponent>
  );
};
