import { ArrowRight, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type ServiceCardProps = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
};

export function ServiceCard({
  number,
  title,
  description,
  icon: Icon,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        'group relative flex flex-col rounded-lg border border-white/10 bg-card p-8 transition-all duration-500 hover:border-brand-blue/30 hover:bg-[#1A1C24]',
        className
      )}
    >
      <div className="flex items-start justify-between mb-6">
        <span className="font-display text-5xl font-bold text-white/10 transition-colors duration-500 group-hover:text-brand-blue/20">
          {number}
        </span>
        <div className="flex h-12 w-12 items-center justify-center rounded-md border border-white/10 bg-white/5 transition-all duration-500 group-hover:border-brand-blue/30 group-hover:bg-brand-blue/10">
          <Icon className="h-6 w-6 text-muted-foreground transition-colors duration-500 group-hover:text-brand-blue" />
        </div>
      </div>
      <h3 className="font-display text-xl font-bold tracking-tight mb-3">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
        {description}
      </p>
      <div className="flex items-center gap-2 text-sm font-medium text-brand-blue opacity-0 transition-all duration-300 group-hover:opacity-100">
        Learn More
        <ArrowRight className="h-4 w-4" />
      </div>
    </div>
  );
}
