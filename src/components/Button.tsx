import Link from 'next/link';
import { type AnchorHTMLAttributes, type ButtonHTMLAttributes, type PropsWithChildren, type ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'md' | 'lg';

type Base = {
  variant?: Variant;
  size?: Size;
  leading?: ReactNode;
  trailing?: ReactNode;
};

type AsButton = Base & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type AsLink = Base & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; download?: boolean | string };

type Props = PropsWithChildren<AsButton | AsLink>;

function classes(variant: Variant, size: Size, disabled: boolean) {
  const v =
    variant === 'primary'
      ? 'bg-brand-600 text-white hover:bg-brand-700 active:bg-brand-800 shadow-[0_10px_30px_-12px_rgba(20,63,125,0.5)]'
      : variant === 'secondary'
      ? 'bg-white/70 text-[color:var(--color-text)] backdrop-blur ring-1 ring-[color:var(--color-border)] hover:bg-white dark:bg-white/[0.04] dark:ring-white/10 dark:hover:bg-white/[0.08]'
      : 'text-[color:var(--color-text-muted)] hover:text-[color:var(--color-text)]';

  const s = size === 'lg' ? 'h-12 px-6 text-[15px]' : 'h-10 px-5 text-[14px]';

  return `${v} ${s} inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 ease-out will-change-transform ${
    disabled ? 'opacity-60 pointer-events-none' : 'hover:-translate-y-px active:translate-y-0'
  }`;
}

export function Button(props: Props) {
  const {
    variant = 'primary',
    size = 'md',
    leading,
    trailing,
    children,
    ...rest
  } = props as Props & { children?: ReactNode };
  const disabled = (rest as any).disabled ?? false;
  const cls = classes(variant, size, disabled);

  // Link form
  if ('href' in props && props.href) {
    const isExternal = props.href.startsWith('http') || props.href.startsWith('//');
    const linkProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    if (isExternal) {
      return (
        <a {...linkProps} className={`${cls} ${linkProps.className ?? ''}`}>
          {leading}
          <span>{children}</span>
          {trailing}
        </a>
      );
    }
    // Internal route — use next/link
    return (
      <Link href={props.href} className={`${cls} ${linkProps.className ?? ''}`}>
        {leading}
        <span>{children}</span>
        {trailing}
      </Link>
    );
  }

  // Button form
  const btnProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button {...btnProps} className={`${cls} ${btnProps.className ?? ''}`}>
      {leading}
      <span>{children}</span>
      {trailing}
    </button>
  );
}
