import { cn } from '@/lib/utils';

type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

type ProcessTimelineProps = {
  steps: ProcessStep[];
  className?: string;
};

export function ProcessTimeline({ steps, className }: ProcessTimelineProps) {
  return (
    <div className={cn('relative', className)}>
      {/* Connecting line */}
      <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block" />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-4">
        {steps.map((step) => (
          <div key={step.number} className="reveal relative">
            <div className="flex items-center gap-4 lg:flex-col lg:items-start">
              <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#16181F] transition-all duration-500 hover:border-brand-blue/50 hover:bg-brand-blue/10">
                <span className="font-display text-xl font-bold text-brand-blue">
                  {step.number}
                </span>
              </div>
              <div className="lg:mt-6">
                <h3 className="font-display text-base font-semibold tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
