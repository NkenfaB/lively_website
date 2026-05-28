import type { Metadata } from 'next';
import Link from 'next/link';

import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Pill } from '@/components/Pill';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy',
  description: `How ${site.name} handles your data. TL;DR: cough audio never leaves your device. Only screening summaries sync, and only if you sign in.`,
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-12">
          <Container size="md">
            <Pill tone="brand">Privacy</Pill>
            <h1 className="mt-5 font-display text-[40px] sm:text-[48px] leading-[1.07] font-bold tracking-tight">
              Your audio stays on your phone.
            </h1>
            <p className="mt-5 text-[16.5px] leading-relaxed text-[color:var(--color-text-muted)]">
              Lively runs the screening model on your device. Your cough audio is never uploaded — even when you sign in to sync your history across devices.
            </p>
            <p className="mt-3 text-[13px] text-[color:var(--color-text-subtle)]">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </Container>
        </section>

        <section className="pb-20">
          <Container size="md" className="space-y-10">
            <Article
              title="What stays on your device"
              points={[
                'Cough audio recordings — created, analyzed, and deleted locally.',
                'Screening results (label + confidence) — saved to local history if you enable it.',
                'Settings & preferences — theme, toggles, notification choices.',
              ]}
            />

            <Article
              title="What only leaves your device if you opt in"
              points={[
                'Screening results (label + confidence + timestamp) — synced to your account if you sign in.',
                'Account credentials — email + password are sent over HTTPS to Supabase Authentication.',
              ]}
              footnote="You can sign out and delete your account at any time from the Settings screen."
            />

            <Article
              title="What never leaves your device"
              points={[
                'Cough audio recordings.',
                'Personally identifiable information beyond your email.',
                'Device identifiers, advertising IDs, contact lists, or location.',
              ]}
            />

            <Article
              title="On-device model updates"
              points={[
                'Lively checks a public manifest file on app launch to see if a newer screening model is available.',
                'If so, the new model file is downloaded over HTTPS and verified by SHA-256 before being activated.',
                'This is a one-way pull — the app sends nothing about you in that request.',
              ]}
            />

            <Article
              title="Third-party services"
              points={[
                'Supabase (EU / Frankfurt region) — provides authentication, encrypted database storage for results you sync, and model file hosting.',
                'Vercel — hosts this website. No app data passes through Vercel.',
                'Google Fonts — used to load the Inter and Manrope typefaces.',
              ]}
            />

            <Article
              title="Your rights"
              points={[
                'Access — view all your synced screenings in the History tab.',
                'Delete — remove individual results, clear all history, or delete your account.',
                'Portability — export your local history as JSON from Settings (coming soon).',
              ]}
            />

            <div className="rounded-[6px] bg-[color:var(--color-surface)] ring-1 ring-[color:var(--color-border)] p-7">
              <h2 className="font-display text-[20px] font-bold tracking-tight">Questions?</h2>
              <p className="mt-2 text-[14.5px] text-[color:var(--color-text-muted)] leading-relaxed">
                Get in touch at <a className="text-brand-600 underline-offset-2 hover:underline" href={`mailto:${site.email}`}>{site.email}</a>. This is a thesis project — we read every message.
              </p>
              <Link href="/" className="mt-4 inline-block text-[13.5px] font-semibold text-[color:var(--color-text-muted)] hover:text-[color:var(--color-text)]">
                ← Back to home
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Article({
  title,
  points,
  footnote,
}: {
  title: string;
  points: string[];
  footnote?: string;
}) {
  return (
    <article>
      <h2 className="font-display text-[22px] font-bold tracking-tight">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {points.map((p) => (
          <li key={p} className="flex gap-3 text-[14.5px] leading-relaxed text-[color:var(--color-text-muted)]">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-500 flex-shrink-0" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
      {footnote ? (
        <p className="mt-3 text-[13px] text-[color:var(--color-text-subtle)] italic">{footnote}</p>
      ) : null}
    </article>
  );
}
