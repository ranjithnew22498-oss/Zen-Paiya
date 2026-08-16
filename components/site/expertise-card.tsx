'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type ExpertiseCardProps = {
  title: string;
  description: string;
  href: string;
  cta: string;
  imageUrl: string;
  className?: string;
};

export function ExpertiseCard({
  title,
  description,
  href,
  cta,
  imageUrl,
  className,
}: ExpertiseCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-lg border border-white/10 bg-card p-8 transition-all duration-500 hover:border-brand-blue/40',
        className
      )}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${imageUrl}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-brand-blue/0 transition-colors duration-500 group-hover:bg-brand-blue/10" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-blue">
          Expertise
        </div>
        <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-3">
          {title}
        </h3>
        <p className="text-sm md:text-base text-muted-foreground mb-6 max-w-md leading-relaxed">
          {description}
        </p>
        <div className="inline-flex items-center gap-2 text-sm font-medium text-brand-blue">
          {cta}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
