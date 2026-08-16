'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';
type Size = 'default' | 'lg' | 'sm';

const baseStyles =
  'inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50';

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-brand-blue text-white hover:bg-brand-blue-dark hover:shadow-[0_0_30px_rgba(47,128,237,0.4)]',
  secondary:
    'bg-white/5 text-foreground border border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm',
  ghost: 'text-foreground hover:text-brand-blue',
  outline:
    'border border-brand-blue/50 text-brand-blue hover:bg-brand-blue hover:text-white',
};

const sizeStyles: Record<Size, string> = {
  default: 'h-11 px-6 text-sm',
  lg: 'h-14 px-8 text-base',
  sm: 'h-9 px-4 text-sm',
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  withArrow?: boolean;
};

type LinkProps = CommonProps & {
  href: string;
};

type ButtonProps = CommonProps & {
  onClick?: () => void;
  type?: 'button' | 'submit';
};

export function PrimaryButton({ href, ...props }: LinkProps) {
  return <ArrowLink href={href} variant="primary" {...props} />;
}

export function SecondaryButton({ href, ...props }: LinkProps) {
  return <ArrowLink href={href} variant="secondary" {...props} />;
}

export function OutlineButton({ href, ...props }: LinkProps) {
  return <ArrowLink href={href} variant="outline" {...props} />;
}

function ArrowLink({
  href,
  variant = 'primary',
  size = 'default',
  className,
  children,
  withArrow = true,
}: LinkProps) {
  return (
    <Link
      href={href}
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], 'group rounded-sm', className)}
    >
      <span>{children}</span>
      {withArrow && (
        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </Link>
  );
}

export function ButtonLink({
  href,
  variant = 'primary',
  size = 'default',
  className,
  children,
  withArrow = false,
}: LinkProps) {
  return (
    <Link
      href={href}
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], 'rounded-sm', className)}
    >
      {children}
      {withArrow && <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </Link>
  );
}

export function ActionButton({
  variant = 'primary',
  size = 'default',
  className,
  children,
  withArrow = false,
  onClick,
  type = 'button',
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], 'group rounded-sm', className)}
    >
      {children}
      {withArrow && <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </button>
  );
}
