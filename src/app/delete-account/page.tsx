import type { Metadata } from 'next';
import Link from 'next/link';

import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Pill } from '@/components/Pill';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Delete your account',
  description: `How to permanently delete your ${site.name} account and all associated data.`,
};

export default function DeleteAccountPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-12">
          <Container size="md">
            <Pill tone="brand">Account</Pill>
            <h1 className="mt-5 font-display text-[40px] sm:text-[48px] leading-[1.07] font-bold tracking-tight">
              Delete your account
            </h1>
            <p className="mt-5 text-[16.5px] leading-relaxed text-[color:var(--color-text-muted)]">
              You can permanently delete your Lively account and all associated data at any time — directly from the app, or by contacting us.
            </p>
          </Container>
        </section>

        <section className="pb-20">
          <Container size="md" className="space-y-10">

            {/* Option 1 — in-app */}
            <article>
              <h2 className="font-display text-[22px] font-bold tracking-tight">Option 1 — Delete from the app</h2>
              <p className="mt-3 text-[14.5px] text-[color:var(--color-text-muted)] leading-relaxed">
                This is the fastest way. Open Lively, sign in if you haven&apos;t already, then follow these steps:
              </p>
              <ol className="mt-4 space-y-3">
                {[
                  'Open the app and go to the Settings tab.',
                  'Scroll down to the Account & Sync section.',
                  'Tap "Delete account".',
                  'Confirm the deletion when prompted.',
                ].map((step, i) => (
                  <li key={step} className="flex gap-3 text-[14.5px] leading-relaxed text-[color:var(--color-text-muted)]">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-500 text-white text-[11px] font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-[13px] text-[color:var(--color-text-subtle)] italic">
                Your account and all synced screening history will be permanently deleted immediately.
              </p>
            </article>

            {/* Option 2 — email */}
            <article>
              <h2 className="font-display text-[22px] font-bold tracking-tight">Option 2 — Request via email</h2>
              <p className="mt-3 text-[14.5px] text-[color:var(--color-text-muted)] leading-relaxed">
                If you can&apos;t access the app, send a deletion request to{' '}
                <a
                  href={`mailto:${site.email}?subject=Account deletion request&body=Please delete my Lively account associated with this email address and all related data.`}
                  className="text-brand-600 underline-offset-2 hover:underline"
                >
                  {site.email}
                </a>{' '}
                from the email address linked to your account. We will process your request and confirm deletion within 7 days.
              </p>
            </article>

            {/* What gets deleted */}
            <article>
              <h2 className="font-display text-[22px] font-bold tracking-tight">What gets deleted</h2>
              <ul className="mt-4 space-y-2.5">
                {[
                  'Your account credentials (email and password).',
                  'All synced screening results stored on our servers.',
                  'Your account session and authentication tokens.',
                ].map((p) => (
                  <li key={p} className="flex gap-3 text-[14.5px] leading-relaxed text-[color:var(--color-text-muted)]">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[13px] text-[color:var(--color-text-subtle)] italic">
                Note: screening history stored locally on your device is separate and can be cleared from Settings → Save history on device.
              </p>
            </article>

            {/* Contact box */}
            <div className="rounded-[6px] bg-[color:var(--color-surface)] ring-1 ring-[color:var(--color-border)] p-7">
              <h2 className="font-display text-[20px] font-bold tracking-tight">Questions?</h2>
              <p className="mt-2 text-[14.5px] text-[color:var(--color-text-muted)] leading-relaxed">
                Contact us at{' '}
                <a className="text-brand-600 underline-offset-2 hover:underline" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
                . This is a thesis project — we read every message.
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
