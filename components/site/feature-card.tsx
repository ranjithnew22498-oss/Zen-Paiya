import { type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
};

export function FeatureCard({
  title,
  description,
  icon: Icon,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        'group relative flex flex-col rounded-lg border border-white/10 bg-card p-7 transition-all duration-500 hover:border-brand-blue/30 hover:bg-[#1A1C24]',
        className
      )}
    >
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-white/5 transition-all duration-500 group-hover:border-brand-blue/30 group-hover:bg-brand-blue/10">
        <Icon className="h-5 w-5 text-muted-foreground transition-colors duration-500 group-hover:text-brand-blue" />
      </div>
      <h3 className="font-display text-lg font-semibold tracking-tight mb-2">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}
