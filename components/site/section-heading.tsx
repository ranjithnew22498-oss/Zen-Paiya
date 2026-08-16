import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  label?: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionHeading({
  label,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'reveal max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {label && (
        <div
          className={cn(
            'mb-5 flex items-center gap-3',
            align === 'center' && 'justify-center'
          )}
        >
          <span className="h-px w-8 bg-brand-blue" />
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            {label}
          </span>
        </div>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}
