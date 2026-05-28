'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { type PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  delay?: number;
  y?: number;
  className?: string;
}>;

/**
 * Reveal — fade + slide in on enter, respects prefers-reduced-motion.
 * Use sparingly; once a section is "in view" we only animate once.
 */
export function Reveal({ children, delay = 0, y = 18, className }: Props) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}
