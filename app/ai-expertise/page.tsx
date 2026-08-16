import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/site/page-hero';
import { SectionHeading } from '@/components/site/section-heading';
import { FeatureCard } from '@/components/site/feature-card';
import { RoleGrid } from '@/components/site/role-grid';
import { IndustryGrid } from '@/components/site/industry-grid';
import { CTASection } from '@/components/site/cta-section';
import { TechnologyMarquee } from '@/components/site/marquee';
import {
  aiExpertise,
  aiTechnologies,
  aiRoles,
  aiIndustries,
  aiHiringSolutions,
  aiWhyZenpiya,
} from '@/lib/data';

export const metadata: Metadata = {
  title: 'AI Talent Solutions | ZenPiya',
  description:
    'From Generative AI to Autonomous Systems, ZenPiya connects organizations with world-class AI professionals ready to accelerate digital transformation across every industry.',
};

export default function AIExpertisePage() {
  const allTech = [
    ...aiTechnologies.frameworks,
    ...aiTechnologies.llmFrameworks,
    ...aiTechnologies.programming,
    ...aiTechnologies.vectorDatabases,
    ...aiTechnologies.cloud,
    ...aiTechnologies.devops,
  ];

  return (
    <>
      <PageHero
        label="AI Expertise"
        title={
          <>
            Powering Global AI Innovation with{' '}
            <span className="text-gradient-blue">Elite AI Engineers</span>
          </>
        }
        description="From Generative AI to Autonomous Systems, ZenPiya connects organizations with world-class AI professionals ready to accelerate digital transformation across every industry."
      />

      {/* Hero CTAs */}
      <section className="relative pb-16">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="reveal flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="group inline-flex h-14 items-center justify-center rounded-sm bg-brand-blue px-8 text-base font-medium text-white transition-all hover:bg-brand-blue-dark hover:shadow-[0_0_30px_rgba(47,128,237,0.4)]"
            >
              Hire AI Talent
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex h-14 items-center justify-center rounded-sm border border-white/10 bg-white/5 px-8 text-base font-medium text-foreground backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20"
            >
              Talk to Our Experts
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* AI Expertise Areas */}
      <section className="relative border-y border-white/5 bg-[#0D0E12] py-20 lg:py-32">
        <div className="bg-grid-fine absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeading
            label="AI Expertise"
            title="Elite Talent Across Every AI Domain"
            description="We recruit AI professionals across the full spectrum of artificial intelligence, from research to production deployment."
            className="mb-16"
          />
          <div className="stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {aiExpertise.map((area) => (
              <div
                key={area.title}
                className="group rounded-lg border border-white/10 bg-card p-7 transition-all duration-500 hover:border-brand-blue/30 hover:bg-[#1A1C24]"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-white/5 transition-all duration-500 group-hover:border-brand-blue/30 group-hover:bg-brand-blue/10">
                  <area.icon className="h-5 w-5 text-muted-foreground transition-colors duration-500 group-hover:text-brand-blue" />
                </div>
                <h3 className="font-display text-lg font-semibold tracking-tight mb-2">{area.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{area.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {area.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="relative py-20 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeading
            label="Technologies"
            title="AI Technologies We Recruit For"
            description="We source talent proficient in the latest AI frameworks, programming languages, vector databases, cloud platforms, and DevOps tools."
            className="mb-12"
          />
          <div className="reveal space-y-8">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-4">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {aiTechnologies.frameworks.map((t) => (
                  <span key={t} className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-foreground/80 transition-all hover:border-brand-blue/30 hover:bg-brand-blue/10">{t}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-4">LLM Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {aiTechnologies.llmFrameworks.map((t) => (
                  <span key={t} className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-foreground/80 transition-all hover:border-brand-blue/30 hover:bg-brand-blue/10">{t}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-4">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {aiTechnologies.programming.map((t) => (
                  <span key={t} className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-foreground/80 transition-all hover:border-brand-blue/30 hover:bg-brand-blue/10">{t}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-4">Vector Databases</h3>
              <div className="flex flex-wrap gap-2">
                {aiTechnologies.vectorDatabases.map((t) => (
                  <span key={t} className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-foreground/80 transition-all hover:border-brand-blue/30 hover:bg-brand-blue/10">{t}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-4">Cloud Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {aiTechnologies.cloud.map((t) => (
                  <span key={t} className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-foreground/80 transition-all hover:border-brand-blue/30 hover:bg-brand-blue/10">{t}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-4">DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {aiTechnologies.devops.map((t) => (
                  <span key={t} className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-foreground/80 transition-all hover:border-brand-blue/30 hover:bg-brand-blue/10">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Roles */}
      <section className="relative border-y border-white/5 bg-[#0D0E12] py-20 lg:py-32">
        <div className="bg-grid-fine absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeading
            label="AI Roles"
            title="AI Roles We Recruit For"
            description="From executive leadership to specialized engineering roles, we place AI professionals across the entire organization."
            className="mb-12"
          />
          <div className="reveal">
            <RoleGrid roles={aiRoles} />
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="relative py-20 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeading
            label="Industries"
            title="Industries We Serve"
            description="AI is transforming every industry. We connect AI talent with organizations across all sectors."
            className="mb-12"
          />
          <div className="reveal">
            <IndustryGrid industries={aiIndustries} />
          </div>
        </div>
      </section>

      {/* AI Hiring Solutions */}
      <section className="relative border-y border-white/5 bg-[#0D0E12] py-20 lg:py-32">
        <div className="bg-grid-fine absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeading
            label="Hiring Solutions"
            title="AI Hiring Solutions"
            description="Flexible engagement models designed for AI teams of any size, from individual hires to managed teams."
            className="mb-16"
          />
          <div className="stagger grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {aiHiringSolutions.map((solution) => (
              <div
                key={solution.title}
                className="group flex flex-col items-center justify-center rounded-lg border border-white/10 bg-card p-6 text-center transition-all duration-500 hover:border-brand-blue/30 hover:bg-[#1A1C24]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md border border-white/10 bg-white/5 transition-all group-hover:border-brand-blue/30 group-hover:bg-brand-blue/10">
                  <solution.icon className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-brand-blue" />
                </div>
                <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground text-center">
                  {solution.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ZenPiya for AI */}
      <section className="relative py-20 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeading
            label="Why ZenPiya"
            title="Why AI Organizations Choose ZenPiya"
            align="center"
            className="mb-16"
          />
          <div className="stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {aiWhyZenpiya.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Technology Marquee */}
      <section className="relative overflow-hidden border-y border-white/5 bg-[#0D0E12] py-10">
        <TechnologyMarquee items={allTech} speed="slow" />
      </section>

      <CTASection
        title={<>Build Your Next AI Engineering Team</>}
        description="Partner with ZenPiya to access elite AI professionals who accelerate digital transformation and drive innovation."
        primaryCta={{ label: 'Request Talent', href: '/contact' }}
        secondaryCta={{ label: 'Talk to Our Experts', href: '/contact' }}
      />
    </>
  );
}
