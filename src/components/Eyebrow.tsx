import { type PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  tone?: 'neutral' | 'brand' | 'success' | 'warning' | 'danger';
  className?: string;
}>;

const TONE: Record<NonNullable<Props['tone']>, string> = {
  neutral: 'text-[color:var(--color-text-subtle)]',
  brand: 'text-brand-700 dark:text-brand-300',
  success: 'text-emerald-700 dark:text-emerald-300',
  warning: 'text-amber-700 dark:text-amber-300',
  danger: 'text-rose-700 dark:text-rose-300',
};

const RULE: Record<NonNullable<Props['tone']>, string> = {
  neutral: 'bg-[color:var(--color-text-subtle)]',
  brand: 'bg-brand-600 dark:bg-brand-400',
  success: 'bg-emerald-600 dark:bg-emerald-400',
  warning: 'bg-amber-600 dark:bg-amber-400',
  danger: 'bg-rose-600 dark:bg-rose-400',
};

/**
 * Eyebrow — flat editorial label, replaces the AI-template pill.
 * Prepended with a short rule (line) so it reads as a section marker.
 *
 *   <Eyebrow>Features</Eyebrow>
 *   <Eyebrow tone="brand">Privacy</Eyebrow>
 */
export function Eyebrow({ tone = 'neutral', className = '', children }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] ${TONE[tone]} ${className}`}>
      <span className={`h-[1.5px] w-7 ${RULE[tone]}`} aria-hidden />
      {children}
    </span>
  );
}
