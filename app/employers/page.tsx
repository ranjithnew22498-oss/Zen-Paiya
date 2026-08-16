import type { Metadata } from 'next';
import { PageHero } from '@/components/site/page-hero';
import { SectionHeading } from '@/components/site/section-heading';
import { FeatureCard } from '@/components/site/feature-card';
import { ServiceCard } from '@/components/site/service-card';
import { ProcessTimeline } from '@/components/site/process-timeline';
import { CTASection } from '@/components/site/cta-section';
import { employersWhyPartner, services, recruitmentProcess } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Engineering Recruitment Solutions for Employers | ZenPiya',
  description:
    'Build high-performing engineering teams with ZenPiya. Specialized technology expertise, quality-driven recruitment, and faster hiring for Semiconductor, AI, and Deep Technology organizations.',
};

export default function EmployersPage() {
  return (
    <>
      <PageHero
        label="For Employers"
        title={
          <>
            Build High-Performing Engineering Teams with{' '}
            <span className="text-gradient-blue">ZenPiya</span>
          </>
        }
        description="ZenPiya partners with technology organizations to identify, attract, and secure exceptional engineering professionals across Semiconductor, AI, and Deep Technology."
      />

      {/* Why Partner */}
      <section className="relative py-20 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeading
            label="Why Partner with Us"
            title="Why Partner with ZenPiya?"
            description="We combine deep technical expertise with a global network to deliver exceptional engineering talent."
            className="mb-16"
          />
          <div className="stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {employersWhyPartner.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Technology Expertise */}
      <section className="relative border-y border-white/5 bg-[#0D0E12] py-20 lg:py-32">
        <div className="bg-grid-fine absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeading
            label="Technology Expertise"
            title="Specialized Technology Expertise"
            description="We understand the technical nuances of every role we recruit for, from chip design to AI infrastructure."
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Semiconductor', desc: 'Chip design, verification, physical design, DFT, analog, embedded, and manufacturing.' },
              { title: 'Artificial Intelligence', desc: 'Generative AI, ML, deep learning, computer vision, NLP, MLOps, and AI infrastructure.' },
              { title: 'Embedded Systems', desc: 'Firmware, RTOS, device drivers, FPGA, and board-level engineering.' },
              { title: 'Deep Technology', desc: 'Robotics, autonomous systems, edge computing, and emerging technologies.' },
            ].map((item) => (
              <div key={item.title} className="reveal rounded-lg border border-white/10 bg-card p-7 transition-all duration-500 hover:border-brand-blue/30 hover:bg-[#1A1C24]">
                <h3 className="font-display text-lg font-semibold tracking-tight mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality-Driven Recruitment & Faster Hiring */}
      <section className="relative py-20 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="reveal relative overflow-hidden rounded-lg border border-white/10 bg-card p-8 lg:p-12">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-brand-blue/10 blur-[80px]" />
              <div className="relative">
                <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-blue">Quality</div>
                <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-4 text-balance">
                  Quality-Driven Recruitment
                </h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Every candidate undergoes a rigorous technical evaluation to
                  ensure they meet the highest engineering standards. We
                  present only qualified, pre-screened professionals who align
                  with your technical requirements and team culture.
                </p>
              </div>
            </div>
            <div className="reveal relative overflow-hidden rounded-lg border border-white/10 bg-card p-8 lg:p-12">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-brand-blue/10 blur-[80px]" />
              <div className="relative">
                <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-blue">Speed</div>
                <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-4 text-balance">
                  Faster Hiring, Without Compromise
                </h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Our streamlined recruitment process reduces time-to-hire
                  without compromising on quality. We leverage our extensive
                  engineering network and advanced sourcing strategies to
                  deliver qualified candidates quickly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tailored Talent Solutions */}
      <section className="relative border-y border-white/5 bg-[#0D0E12] py-20 lg:py-32">
        <div className="bg-grid-fine absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeading
            label="Our Hiring Solutions"
            title="Tailored Talent Solutions for Your Engineering Goals"
            description="From permanent placement to managed teams, we offer engagement models that fit your hiring needs."
            className="mb-16"
          />
          <div className="stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <ServiceCard key={service.number} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="relative py-20 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeading
            label="Our Process"
            title="Our Recruitment Process"
            description="A proven five-step process designed for engineering excellence."
            align="center"
            className="mb-16"
          />
          <ProcessTimeline steps={recruitmentProcess} />
        </div>
      </section>

      {/* Why Clients Choose ZenPiya */}
      <section className="relative border-y border-white/5 bg-[#0D0E12] py-20 lg:py-32">
        <div className="bg-grid-fine absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeading
            label="Why Clients Choose Us"
            title="Why Clients Choose ZenPiya"
            align="center"
            className="mb-16"
          />
          <div className="stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {employersWhyPartner.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={<>Request Talent for Your Engineering Team</>}
        description="Partner with ZenPiya to access highly skilled professionals who help accelerate innovation and reduce hiring timelines."
        primaryCta={{ label: 'Request Talent', href: '/contact' }}
        secondaryCta={{ label: 'Schedule a Consultation', href: '/contact' }}
      />
    </>
  );
}
