'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

import { Container } from './Container';
import { Button } from './Button';
import { Logo } from './Logo';
import { nav } from '@/lib/site';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-[color:var(--color-bg)]/70 border-b border-[color:var(--color-border)]'
          : 'bg-transparent'
      }`}>
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center group" aria-label="Lively home">
          <Logo variant="wordmark" height={26} priority />
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-[13.5px] font-medium text-[color:var(--color-text-muted)] hover:text-[color:var(--color-text)] transition-colors">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button href="#download" variant="primary" size="md">
            Get the app
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-[color:var(--color-surface-2)]"
          onClick={() => setOpen((s) => !s)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {/* Mobile menu sheet */}
      {open && (
        <div className="md:hidden border-t border-[color:var(--color-border)] bg-[color:var(--color-bg)]">
          <Container className="py-6 flex flex-col gap-5">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-[15px] font-medium text-[color:var(--color-text)] py-1.5">
                {n.label}
              </Link>
            ))}
            <Button href="#download" variant="primary" size="lg" onClick={() => setOpen(false)}>
              Get the app
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
