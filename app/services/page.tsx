import type { Metadata } from 'next';
import { PageHero } from '@/components/site/page-hero';
import { SectionHeading } from '@/components/site/section-heading';
import { ServiceCard } from '@/components/site/service-card';
import { CTASection } from '@/components/site/cta-section';
import { services } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Talent Solutions Services | ZenPiya',
  description:
    'Permanent hiring, contract staffing, executive search, RPO, project-based hiring, global talent solutions, and workforce consulting for Semiconductor, AI, and Deep Technology organizations.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title={
          <>
            Talent Solutions Built for the World&apos;s{' '}
            <span className="text-gradient-blue">Most Advanced Technology Teams</span>
          </>
        }
        description="From permanent placement to workforce consulting, ZenPiya offers flexible engagement models designed for Semiconductor, AI, and Deep Technology organizations."
      />

      {/* Services Grid */}
      <section className="relative py-20 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeading
            label="Our Services"
            title="Comprehensive Talent Solutions for Every Hiring Need"
            description="Each service is tailored to the specific requirements of deep technology organizations."
            className="mb-16"
          />
          <div className="stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <ServiceCard key={service.number} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="relative border-y border-white/5 bg-[#0D0E12] py-20 lg:py-32">
        <div className="bg-grid-fine absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeading
            label="Detailed Overview"
            title="Engagement Models Built for Engineering Excellence"
            className="mb-16"
          />
          <div className="space-y-4">
            {services.map((service) => (
              <div
                key={service.number}
                className="reveal group grid grid-cols-1 lg:grid-cols-[120px_1fr_auto] gap-6 lg:gap-12 rounded-lg border border-white/10 bg-card p-8 transition-all duration-500 hover:border-brand-blue/30 hover:bg-[#1A1C24]"
              >
                <div className="font-display text-5xl font-bold text-white/10 transition-colors group-hover:text-brand-blue/20">
                  {service.number}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5">
                      <service.icon className="h-5 w-5 text-brand-blue" />
                    </div>
                    <h3 className="font-display text-xl font-bold tracking-tight">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{service.description}</p>
                </div>
                <div className="hidden lg:flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all group-hover:border-brand-blue/30 group-hover:bg-brand-blue/10">
                    <svg className="h-5 w-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={<>Ready to Build Your Engineering Team?</>}
        description="Contact ZenPiya today to discuss your hiring needs and discover how our specialized talent solutions can help your organization succeed."
        primaryCta={{ label: 'Request Talent', href: '/contact' }}
        secondaryCta={{ label: 'Schedule a Consultation', href: '/contact' }}
      />
    </>
  );
}
