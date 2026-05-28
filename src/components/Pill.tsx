import { type PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  tone?: 'neutral' | 'brand' | 'success' | 'warning' | 'danger';
  className?: string;
}>;

const TONE: Record<NonNullable<Props['tone']>, string> = {
  neutral: 'bg-[color:var(--color-surface-2)] text-[color:var(--color-text-muted)]',
  brand:   'bg-brand-100/70 text-brand-700 dark:bg-brand-800/40 dark:text-brand-200',
  success: 'bg-emerald-100/60 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300',
  warning: 'bg-amber-100/60 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200',
  danger:  'bg-rose-100/60 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300',
};

export function Pill({ tone = 'neutral', className = '', children }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] ${TONE[tone]} ${className}`}>
      {children}
    </span>
  );
}
