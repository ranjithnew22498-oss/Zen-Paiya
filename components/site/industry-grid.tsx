import { cn } from '@/lib/utils';

type IndustryGridProps = {
  industries: string[];
  className?: string;
};

export function IndustryGrid({ industries, className }: IndustryGridProps) {
  return (
    <div className={cn('grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3', className)}>
      {industries.map((industry) => (
        <div
          key={industry}
          className="group flex items-center gap-3 rounded-lg border border-white/10 bg-card p-5 transition-all duration-300 hover:border-brand-blue/30 hover:bg-[#1A1C24]"
        >
          <span className="h-2 w-2 rounded-full bg-brand-blue/40 transition-colors group-hover:bg-brand-blue" />
          <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
            {industry}
          </span>
        </div>
      ))}
    </div>
  );
}
