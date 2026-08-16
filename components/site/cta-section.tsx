import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ParticleField } from './particle-field';

type CTASectionProps = {
  title: React.ReactNode;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function CTASection({ title, description, primaryCta, secondaryCta }: CTASectionProps) {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#0D0E12]">
      <div className="bg-grid-pattern absolute inset-0 opacity-20" />
      <ParticleField count={20} />
      <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-brand-blue/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10 py-20 lg:py-32">
        <div className="reveal mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-balance">
            {title}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
            {description}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={primaryCta.href}
              className="group inline-flex h-14 items-center justify-center rounded-sm bg-brand-blue px-8 text-base font-medium text-white transition-all hover:bg-brand-blue-dark hover:shadow-[0_0_30px_rgba(47,128,237,0.4)]"
            >
              {primaryCta.label}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="group inline-flex h-14 items-center justify-center rounded-sm border border-white/10 bg-white/5 px-8 text-base font-medium text-foreground backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20"
              >
                {secondaryCta.label}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
