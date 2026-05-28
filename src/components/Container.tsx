import { type HTMLAttributes, forwardRef } from 'react';

type Props = HTMLAttributes<HTMLDivElement> & {
  size?: 'sm' | 'md' | 'lg';
};

/** Centered, max-width container with consistent horizontal padding. */
export const Container = forwardRef<HTMLDivElement, Props>(function Container(
  { size = 'lg', className = '', ...rest },
  ref
) {
  const max = size === 'sm' ? 'max-w-3xl' : size === 'md' ? 'max-w-5xl' : 'max-w-6xl';
  return (
    <div ref={ref} className={`mx-auto ${max} px-5 sm:px-8 ${className}`} {...rest} />
  );
});
