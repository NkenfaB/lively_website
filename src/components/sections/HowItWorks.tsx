import { Mic, BrainCircuit, Activity } from 'lucide-react';

import { Container } from '../Container';
import { Pill } from '../Pill';
import { Reveal } from '../Reveal';

const STEPS = [
  {
    icon: Mic,
    title: 'Record a short cough',
    body: 'Hold the phone 20–30 cm away and cough naturally 2–3 times. The whole sample takes under a minute.',
  },
  {
    icon: BrainCircuit,
    title: 'Run analysis on the device',
    body: 'A compact TensorFlow Lite model evaluates the cough acoustics locally. No upload, no waiting on a server.',
  },
  {
    icon: Activity,
    title: 'Read a clear, honest result',
    body: 'See a low/medium/high signal with the model\'s confidence and what to do next. Save it to track changes over time.',
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-24 sm:py-32 relative">
      <Container>
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <Reveal>
            <Pill tone="brand">How it works</Pill>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-display text-[34px] sm:text-[42px] leading-[1.1] font-bold tracking-tight">
              Three calm steps. Nothing leaves your phone.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-[15.5px] leading-relaxed text-[color:var(--color-text-muted)]">
              Lively is designed for the moments you want a quick check — at home, late at night, with no connection. Inference happens on-device in milliseconds.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={0.05 * i}>
              <div className="group relative h-full rounded-3xl bg-[color:var(--color-surface)] ring-1 ring-[color:var(--color-border)] p-7 transition-all duration-300 hover:-translate-y-1 hover:ring-brand-300/60 dark:hover:ring-brand-400/30">
                <div className="absolute top-7 right-7 text-[11px] font-bold text-[color:var(--color-text-subtle)] tracking-widest">
                  0{i + 1}
                </div>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-100 text-brand-700 dark:bg-brand-900/50 dark:text-brand-200">
                  <s.icon size={20} strokeWidth={2} />
                </div>
                <h3 className="mt-5 font-display text-[19px] font-bold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[color:var(--color-text-muted)]">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
