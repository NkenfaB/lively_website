import Image from 'next/image';

/**
 * Brand mark for the website. Uses the same PNG assets as the mobile app
 * so the two surfaces stay visually identical.
 *
 *   <Logo />                              icon (square)
 *   <Logo variant="wordmark" />           the full "Lively" wordmark
 *   <Logo variant="monochrome" />         single-color icon (for dark backgrounds)
 *
 * Width/height props let you size the asset in JS while still rendering a
 * proper <Image> for Next.js optimization. The default sizes match the
 * spots they appear in (header, footer).
 */
type Variant = 'icon' | 'wordmark' | 'monochrome' | 'badge';

const SRC: Record<Variant, string> = {
  icon: '/brand/icon.png',
  wordmark: '/brand/wordmark.png',
  monochrome: '/brand/monochrome.png',
  badge: '/brand/badge.png',
};

// Intrinsic ratios (from the source PNGs).
const RATIO: Record<Variant, number> = {
  icon: 1, // 1254 x 1254
  wordmark: 2172 / 724, // ~3
  monochrome: 1,
  badge: 1,
};

type Props = {
  variant?: Variant;
  /** Rendered height in px. Width auto-derived from the variant's aspect ratio. */
  height?: number;
  className?: string;
  priority?: boolean;
  alt?: string;
};

export function Logo({
  variant = 'icon',
  height = 28,
  className,
  priority = false,
  alt = 'Lively',
}: Props) {
  const width = Math.round(height * RATIO[variant]);
  return (
    <Image
      src={SRC[variant]}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
    />
  );
}
