'use client';

import { cn } from '@/lib/utils';

type MarqueeProps = {
  items: string[];
  className?: string;
  speed?: 'normal' | 'slow';
};

export function TechnologyMarquee({ items, className, speed = 'normal' }: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div className={cn('relative overflow-hidden', className)}>
      <div className="flex w-max">
        <div className={cn('flex', speed === 'slow' ? 'marquee-slow' : 'marquee')}>
          {doubled.map((item, i) => (
            <span
              key={i}
              className="mx-3 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-foreground/80 whitespace-nowrap"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
    </div>
  );
}
