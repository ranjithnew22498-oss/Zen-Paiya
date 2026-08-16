import { ParticleField } from './particle-field';

type PageHeroProps = {
  label?: string;
  title: React.ReactNode;
  description?: string;
};

export function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div className="bg-grid-pattern absolute inset-0 opacity-20" />
      <div className="absolute left-1/4 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-brand-blue/8 blur-[150px]" />
      <ParticleField count={15} />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="reveal max-w-4xl">
          {label && (
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-brand-blue" />
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
                {label}
              </span>
            </div>
          )}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] text-balance">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
