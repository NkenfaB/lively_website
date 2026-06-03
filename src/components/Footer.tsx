import Link from 'next/link';

import { Container } from './Container';
import { Logo } from './Logo';
import { site } from '@/lib/site';

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[color:var(--color-border)]">
      <Container className="py-12 grid gap-10 md:grid-cols-3">
        <div className="space-y-3">
          <Link href="/" className="inline-flex items-center" aria-label="Lively home">
            <Logo variant="wordmark" height={24} />
          </Link>
          <p className="text-[13.5px] text-[color:var(--color-text-muted)] max-w-xs leading-relaxed">
            A research prototype for cough screening — offline by default, with optional cloud sync. Not a medical diagnosis.
          </p>
        </div>

        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[color:var(--color-text-subtle)] mb-3">
            Product
          </div>
          <ul className="space-y-2 text-[13.5px]">
            <li><Link href="#how" className="text-[color:var(--color-text-muted)] hover:text-[color:var(--color-text)]">How it works</Link></li>
            <li><Link href="#features" className="text-[color:var(--color-text-muted)] hover:text-[color:var(--color-text)]">Features</Link></li>
            <li><Link href="#download" className="text-[color:var(--color-text-muted)] hover:text-[color:var(--color-text)]">Download</Link></li>
            <li><Link href="/privacy" className="text-[color:var(--color-text-muted)] hover:text-[color:var(--color-text)]">Privacy</Link></li>
            <li><Link href="/delete-account" className="text-[color:var(--color-text-muted)] hover:text-[color:var(--color-text)]">Delete account</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[color:var(--color-text-subtle)] mb-3">
            Research
          </div>
          <ul className="space-y-2 text-[13.5px]">
            <li className="text-[color:var(--color-text-muted)]">Master&apos;s thesis · Cough acoustic screening</li>
            <li className="text-[color:var(--color-text-muted)]">Datasets: Coswara · COUGHVID</li>
            <li>
              <a
                href={site.manifestUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="text-[color:var(--color-text-muted)] hover:text-[color:var(--color-text)]">
                Current model manifest ↗
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <Container className="py-6 border-t border-[color:var(--color-border)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <p className="text-[12px] text-[color:var(--color-text-subtle)]">
          © {new Date().getFullYear()} Lively. Made for research.
        </p>
        <p className="text-[12px] text-[color:var(--color-text-subtle)]">
          Not a substitute for professional medical advice.
        </p>
      </Container>
    </footer>
  );
}
