import { CloudOff, Lock, RefreshCw, Bell, MoonStar, History } from 'lucide-react';

import { Container } from '../Container';
import { Pill } from '../Pill';
import { Reveal } from '../Reveal';

const FEATURES = [
  {
    icon: CloudOff,
    title: 'Offline-first',
    body: 'Recording, analysis, and history work without a connection. Designed for low-bandwidth contexts.',
  },
  {
    icon: Lock,
    title: 'Your audio stays on the device',
    body: 'Recordings are processed locally. Nothing is uploaded unless you sign in and opt in to sync.',
  },
  {
    icon: RefreshCw,
    title: 'OTA model updates',
    body: 'The screening model improves over time. New versions arrive silently next time you open the app.',
  },
  {
    icon: History,
    title: 'Local history that travels',
    body: 'Saved results live on the device by default. Sign in to back them up to your account.',
  },
  {
    icon: MoonStar,
    title: 'Built for dark + light',
    body: 'A clinical visual system that respects your system theme automatically — no settings dance.',
  },
  {
    icon: Bell,
    title: 'Calm by default',
    body: 'No noisy notifications. Optional, granular alerts for sync, model updates, and reminders.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 relative">
      <Container>
        <div className="max-w-2xl space-y-4">
          <Reveal>
            <Pill tone="brand">Features</Pill>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-display text-[34px] sm:text-[42px] leading-[1.1] font-bold tracking-tight">
              Built for trust, not for retention metrics.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-[15.5px] leading-relaxed text-[color:var(--color-text-muted)]">
              Every choice in Lively favors privacy, clarity, and offline use.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.05}>
              <div className="h-full rounded-2xl bg-[color:var(--color-surface)] ring-1 ring-[color:var(--color-border)] p-6 transition-all duration-300 hover:bg-[color:var(--color-surface-2)]">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-700 dark:bg-brand-900/50 dark:text-brand-200">
                  <f.icon size={18} strokeWidth={2} />
                </div>
                <h3 className="mt-4 font-display text-[16.5px] font-bold tracking-tight">{f.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-[color:var(--color-text-muted)]">
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
