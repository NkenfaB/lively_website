'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';

import { Container } from '../Container';
import { Button } from '../Button';
import { Pill } from '../Pill';
import { PhoneMockup } from '../PhoneMockup';

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 pb-20 sm:pb-28">
      <div className="mesh" />

      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-7 max-w-xl">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
              <Pill tone="brand">
                <ShieldCheck size={12} strokeWidth={2.5} />
                Research prototype
              </Pill>
            </motion.div>

            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[40px] leading-[1.05] sm:text-[54px] sm:leading-[1.04] font-bold tracking-[-0.025em]">
              Cough screening,{' '}
              <span className="bg-gradient-to-r from-brand-500 to-brand-800 bg-clip-text text-transparent">
                on your device.
              </span>
            </motion.h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="text-[17px] leading-[1.55] text-[color:var(--color-text-muted)]">
              Lively records a short cough sample and runs an on-device model to indicate possible signs of illness — no recordings ever leave your phone unless you opt in.
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-3">
              <Button
                href="#download"
                variant="primary"
                size="lg"
                trailing={<ArrowRight size={18} />}>
                Download for Android
              </Button>
              <Button href="#how" variant="secondary" size="lg">
                See how it works
              </Button>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.32 }}
              className="flex flex-wrap gap-x-6 gap-y-2 text-[12.5px] text-[color:var(--color-text-subtle)] pt-2">
              <span>· Works offline</span>
              <span>· Audio stays on device</span>
              <span>· Optional cloud sync</span>
              <span>· Free to use</span>
            </motion.div>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[420px]">
            <PhoneMockup />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
