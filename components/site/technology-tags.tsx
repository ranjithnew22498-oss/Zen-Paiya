import { cn } from '@/lib/utils';

type TechnologyTagsProps = {
  technologies: string[];
  className?: string;
};

export function TechnologyTags({ technologies, className }: TechnologyTagsProps) {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {technologies.map((tech) => (
        <span
          key={tech}
          className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-foreground/80 transition-all duration-300 hover:border-brand-blue/30 hover:bg-brand-blue/10 hover:text-foreground"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}
