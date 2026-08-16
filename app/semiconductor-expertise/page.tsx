import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/site/page-hero';
import { SectionHeading } from '@/components/site/section-heading';
import { FeatureCard } from '@/components/site/feature-card';
import { RoleGrid } from '@/components/site/role-grid';
import { TechnologyTags } from '@/components/site/technology-tags';
import { IndustryGrid } from '@/components/site/industry-grid';
import { CTASection } from '@/components/site/cta-section';
import { TechnologyMarquee } from '@/components/site/marquee';
import {
  semiconductorExpertise,
  semiconductorTechnologies,
  semiconductorIndustries,
  semiconductorRoles,
  semiconductorWhyZenpiya,
  semiconductorHiringSolutions,
} from '@/lib/data';

export const metadata: Metadata = {
  title: 'Semiconductor Talent Solutions | ZenPiya',
  description:
    'From chip design to silicon manufacturing, ZenPiya connects semiconductor organizations with highly skilled engineering professionals who accelerate innovation and product development.',
};

export default function SemiconductorPage() {
  return (
    <>
      <PageHero
        label="Semiconductor Expertise"
        title={
          <>
            Powering the Semiconductor Industry with{' '}
            <span className="text-gradient-blue">Exceptional Talent</span>
          </>
        }
        description="From chip design to silicon manufacturing, ZenPiya connects semiconductor organizations with highly skilled engineering professionals who accelerate innovation and product development."
      />

      {/* Hero CTAs */}
      <section className="relative pb-16">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="reveal flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="group inline-flex h-14 items-center justify-center rounded-sm bg-brand-blue px-8 text-base font-medium text-white transition-all hover:bg-brand-blue-dark hover:shadow-[0_0_30px_rgba(47,128,237,0.4)]"
            >
              Hire Semiconductor Talent
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

      {/* Why Semiconductor Companies Choose ZenPiya */}
      <section className="relative border-y border-white/5 bg-[#0D0E12] py-20 lg:py-32">
        <div className="bg-grid-fine absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeading
            label="Why Choose Us"
            title="Why Semiconductor Companies Choose ZenPiya"
            description="The semiconductor industry is evolving rapidly. AI chips, automotive electronics, high-performance computing, IoT, and next-generation communication technologies demand specialized engineering talent."
            className="mb-16"
          />
          <div className="stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {semiconductorWhyZenpiya.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Categories */}
      <section className="relative py-20 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeading
            label="Expertise Categories"
            title="Deep Expertise Across the Semiconductor Value Chain"
            description="From front-end design to back-end manufacturing, we recruit across every stage of semiconductor development."
            className="mb-16"
          />
          <div className="stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {semiconductorExpertise.map((area) => (
              <div
                key={area.title}
                className="group rounded-lg border border-white/10 bg-card p-7 transition-all duration-500 hover:border-brand-blue/30 hover:bg-[#1A1C24]"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-white/5 transition-all duration-500 group-hover:border-brand-blue/30 group-hover:bg-brand-blue/10">
                  <area.icon className="h-5 w-5 text-muted-foreground transition-colors duration-500 group-hover:text-brand-blue" />
                </div>
                <h3 className="font-display text-lg font-semibold tracking-tight mb-4">{area.title}</h3>
                <ul className="space-y-2">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1 w-1 rounded-full bg-brand-blue/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="relative border-y border-white/5 bg-[#0D0E12] py-20 lg:py-32">
        <div className="bg-grid-fine absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeading
            label="Technologies"
            title="Technologies We Recruit For"
            description="We source talent across the full semiconductor technology stack."
            className="mb-12"
          />
          <div className="reveal">
            <TechnologyTags technologies={semiconductorTechnologies} />
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="relative py-20 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeading
            label="Industries"
            title="Industries We Serve"
            description="We connect semiconductor talent with organizations across multiple technology-driven industries."
            className="mb-12"
          />
          <div className="reveal">
            <IndustryGrid industries={semiconductorIndustries} />
          </div>
        </div>
      </section>

      {/* Hiring Solutions */}
      <section className="relative border-y border-white/5 bg-[#0D0E12] py-20 lg:py-32">
        <div className="bg-grid-fine absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeading
            label="Hiring Solutions"
            title="Flexible Hiring Solutions for Semiconductor Teams"
            className="mb-16"
          />
          <div className="stagger grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {semiconductorHiringSolutions.map((solution) => (
              <div
                key={solution.title}
                className="group flex flex-col items-center justify-center rounded-lg border border-white/10 bg-card p-6 text-center transition-all duration-500 hover:border-brand-blue/30 hover:bg-[#1A1C24]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md border border-white/10 bg-white/5 transition-all group-hover:border-brand-blue/30 group-hover:bg-brand-blue/10">
                  <solution.icon className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-brand-blue" />
                </div>
                <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                  {solution.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Semiconductor Roles */}
      <section className="relative py-20 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeading
            label="Roles We Fill"
            title="Semiconductor Roles We Recruit For"
            description="From design to manufacturing, we place engineering professionals across the entire semiconductor lifecycle."
            className="mb-12"
          />
          <div className="reveal">
            <RoleGrid roles={semiconductorRoles} />
          </div>
        </div>
      </section>

      {/* Technology Marquee */}
      <section className="relative overflow-hidden border-y border-white/5 bg-[#0D0E12] py-10">
        <TechnologyMarquee items={semiconductorTechnologies} speed="slow" />
      </section>

      <CTASection
        title={<>Build Your Next Semiconductor Engineering Team</>}
        description="Partner with ZenPiya to access highly skilled semiconductor professionals who accelerate innovation and product development."
        primaryCta={{ label: 'Request Talent', href: '/contact' }}
        secondaryCta={{ label: 'Talk to Our Experts', href: '/contact' }}
      />
    </>
  );
}
