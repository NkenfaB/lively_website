import { CloudOff, Lock, RefreshCw, Bell, MoonStar, History, UploadCloud } from 'lucide-react';

import { Container } from '../Container';
import { Pill } from '../Pill';
import { Reveal } from '../Reveal';

const FEATURES = [
  {
    icon: CloudOff,
    title: 'Works offline',
    body: 'Recording, analysis, and history all run without a connection. Designed for low-bandwidth contexts.',
  },
  {
    icon: UploadCloud,
    title: 'Sync when you want to',
    body: 'Sign in to back up your history across devices. Your audio still never leaves the device — only result summaries sync.',
  },
  {
    icon: Lock,
    title: 'Audio stays on the device',
    body: 'Recordings are processed locally. Cough audio is never uploaded, even with sync enabled.',
  },
  {
    icon: RefreshCw,
    title: 'OTA model updates',
    body: 'The screening model improves over time. New versions arrive silently next time you open the app.',
  },
  {
    icon: History,
    title: 'History at a glance',
    body: 'Past screenings grouped by recency, with confidence bars and clear semantic labels.',
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
              Every choice in Lively favors privacy and clarity. Offline by default, online when you decide.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.05}>
              <div className="h-full rounded-[6px] bg-[color:var(--color-surface)] ring-1 ring-[color:var(--color-border)] p-6 transition-colors duration-300 hover:ring-[color:var(--color-text-muted)]/30">
                <div className="text-brand-700 dark:text-brand-300">
                  <f.icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-display text-[16.5px] font-bold tracking-tight">{f.title}</h3>
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
