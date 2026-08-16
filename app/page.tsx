import Link from 'next/link';
import { ArrowRight, Cpu, Brain, Building2, User } from 'lucide-react';
import { ParticleField } from '@/components/site/particle-field';
import { SectionHeading } from '@/components/site/section-heading';
import { ExpertiseCard } from '@/components/site/expertise-card';
import { ServiceCard } from '@/components/site/service-card';
import { FeatureCard } from '@/components/site/feature-card';
import { ProcessTimeline } from '@/components/site/process-timeline';
import { CTASection } from '@/components/site/cta-section';
import { TechnologyMarquee } from '@/components/site/marquee';
import {
  capabilities,
  services,
  whyZenpiya,
  recruitmentProcess,
  semiconductorTechnologies,
} from '@/lib/data';

const heroImage =
  'https://images.pexels.com/photos/163170/board-printed-circuit-board-computer-electronics-163170.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop';

const splitImage =
  'https://images.pexels.com/photos/6755078/pexels-photo-6755078.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop';

const semiconductorImage =
  'https://images.pexels.com/photos/51165/cpu-processor-electronics-computer-51165.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop';

const aiImage =
  'https://images.pexels.com/photos/17485657/pexels-photo-17485657.png?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop';

const employersImage =
  'https://images.pexels.com/photos/3861457/pexels-photo-3861457.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop';

const candidatesImage =
  'https://images.pexels.com/photos/8439001/pexels-photo-8439001.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop';

export default function Home() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-screen overflow-hidden flex items-center">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${heroImage}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        </div>
        <div className="bg-grid-pattern absolute inset-0 z-0 opacity-10" />
        <ParticleField count={25} />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-10 w-full pt-32 pb-20">
          <div className="max-w-4xl">
            <div className="reveal mb-8 flex items-center gap-3">
              <span className="h-px w-12 bg-brand-blue" />
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
                Semiconductor &middot; AI &middot; Deep Technology
              </span>
            </div>

            <h1 className="reveal font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.02] text-balance">
              Engineering
              <br />
              the Future with
              <br />
              World-Class
              <br />
              <span className="text-gradient-blue">AI &amp; Semiconductor</span>
              <br />
              Talent.
            </h1>

            <p className="reveal mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed text-pretty">
              Specialized Talent Solutions for Semiconductor, Artificial
              Intelligence, and Deep Technology
            </p>

            <p className="reveal mt-6 text-base text-muted-foreground/80 max-w-2xl leading-relaxed text-pretty">
              ZenPiya is a global talent solutions partner dedicated to helping
              organizations build exceptional engineering teams. We connect
              innovative companies with highly skilled professionals across
              Semiconductor, Artificial Intelligence, Embedded Systems, and
              emerging technologies—enabling businesses to accelerate
              innovation, scale with confidence, and stay ahead in a rapidly
              evolving world.
            </p>

            <div className="reveal mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/employers"
                className="group inline-flex h-14 items-center justify-center rounded-sm bg-brand-blue px-8 text-base font-medium text-white transition-all hover:bg-brand-blue-dark hover:shadow-[0_0_30px_rgba(47,128,237,0.4)]"
              >
                Hire Top Talent
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/candidates"
                className="group inline-flex h-14 items-center justify-center rounded-sm border border-white/10 bg-white/5 px-8 text-base font-medium text-foreground backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20"
              >
                Explore Opportunities
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2 text-muted-foreground/50">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="h-12 w-px bg-gradient-to-b from-brand-blue/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* SECTION 2 — TRUST / CAPABILITIES */}
      <section className="relative border-y border-white/5 bg-[#0D0E12] py-12 lg:py-16">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="stagger grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="group flex flex-col items-center text-center"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md border border-white/10 bg-white/5 transition-all duration-500 group-hover:border-brand-blue/30 group-hover:bg-brand-blue/10">
                  <cap.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-brand-blue" />
                </div>
                <span className="text-xs md:text-sm font-medium text-muted-foreground leading-tight">
                  {cap.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — BUILDING THE TEAMS */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="bg-grid-fine absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-brand-blue" />
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
                  Our Purpose
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-balance">
                Building the Teams Behind{' '}
                <span className="text-gradient-blue">Tomorrow&apos;s Technology</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
                From advanced chip design and AI-driven computing to embedded
                systems and next-generation digital solutions, ZenPiya partners
                with organizations to identify, attract, and secure exceptional
                professionals who transform ideas into breakthrough innovations.
              </p>
            </div>
            <div className="reveal relative">
              <div className="relative overflow-hidden rounded-lg border border-white/10">
                <div
                  className="aspect-[4/3] bg-cover bg-center"
                  style={{ backgroundImage: `url('${splitImage}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-brand-blue/10" />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden md:block">
                <div className="rounded-lg border border-brand-blue/30 bg-[#16181F] p-6 backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <Cpu className="h-8 w-8 text-brand-blue" />
                    <div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground">
                        Specialized In
                      </div>
                      <div className="text-sm font-semibold">
                        Deep Technology Talent
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — TWO CORE EXPERTISE AREAS */}
      <section className="relative py-20 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeading
            label="Core Expertise"
            title="Two Areas of Deep Technical Expertise"
            description="ZenPiya specializes in the two most critical technology domains driving the future of innovation."
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ExpertiseCard
              title="SEMICONDUCTOR"
              description="Powering the Semiconductor Industry with Exceptional Talent"
              href="/semiconductor-expertise"
              cta="Explore Semiconductor Expertise"
              imageUrl={semiconductorImage}
            />
            <ExpertiseCard
              title="AI"
              description="Powering Global AI Innovation with Elite AI Engineers"
              href="/ai-expertise"
              cta="Explore AI Expertise"
              imageUrl={aiImage}
            />
          </div>
        </div>
      </section>

      {/* SECTION 5 — SERVICES */}
      <section className="relative border-y border-white/5 bg-[#0D0E12] py-20 lg:py-32">
        <div className="bg-grid-fine absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeading
            label="Services"
            title="Talent Solutions Built Around Your Engineering Goals."
            description="From permanent placement to project-based hiring, ZenPiya offers flexible engagement models for every technology hiring need."
            className="mb-16"
          />
          <div className="stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <ServiceCard key={service.number} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — WHY ZENPIYA */}
      <section className="relative py-20 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeading
            label="Why ZenPiya"
            title="Why Companies Choose ZenPiya"
            description="We combine deep technical expertise with a global network to deliver exceptional talent outcomes."
            align="center"
            className="mb-16"
          />
          <div className="stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyZenpiya.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — RECRUITMENT PROCESS */}
      <section className="relative border-y border-white/5 bg-[#0D0E12] py-20 lg:py-32">
        <div className="bg-grid-fine absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeading
            label="Our Process"
            title="A Recruitment Process Built for Engineering Excellence"
            description="Our five-step process ensures precise candidate matching for your most technical roles."
            align="center"
            className="mb-16"
          />
          <ProcessTimeline steps={recruitmentProcess} />
        </div>
      </section>

      {/* SECTION 8 — FOR EMPLOYERS / FOR CANDIDATES */}
      <section className="relative py-20 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Employers Panel */}
            <div className="group relative flex min-h-[400px] flex-col justify-end overflow-hidden rounded-lg border border-white/10 p-8 lg:p-10 transition-all duration-500 hover:border-brand-blue/40">
              <div className="absolute inset-0 z-0">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${employersImage}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
              </div>
              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md border border-brand-blue/30 bg-brand-blue/10">
                  <Building2 className="h-6 w-6 text-brand-blue" />
                </div>
                <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-blue">
                  For Employers
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-4 text-balance">
                  Build High-Performing Engineering Teams with ZenPiya
                </h3>
                <Link
                  href="/employers"
                  className="group/link inline-flex items-center gap-2 text-sm font-medium text-brand-blue"
                >
                  Request Talent
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Candidates Panel */}
            <div className="group relative flex min-h-[400px] flex-col justify-end overflow-hidden rounded-lg border border-white/10 p-8 lg:p-10 transition-all duration-500 hover:border-brand-blue/40">
              <div className="absolute inset-0 z-0">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${candidatesImage}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
              </div>
              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md border border-brand-blue/30 bg-brand-blue/10">
                  <User className="h-6 w-6 text-brand-blue" />
                </div>
                <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-blue">
                  For Candidates
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-4 text-balance">
                  Shape the Future of Technology with ZenPiya
                </h3>
                <Link
                  href="/candidates"
                  className="group/link inline-flex items-center gap-2 text-sm font-medium text-brand-blue"
                >
                  Submit Your Resume
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Marquee */}
      <section className="relative overflow-hidden border-y border-white/5 bg-[#0D0E12] py-10">
        <TechnologyMarquee items={semiconductorTechnologies} />
      </section>

      {/* SECTION 9 — FINAL CTA */}
      <CTASection
        title={
          <>
            Build Your Next{' '}
            <span className="text-gradient-blue">Engineering Team.</span>
          </>
        }
        description="Partner with ZenPiya to access highly skilled professionals who help accelerate innovation, reduce hiring timelines, and deliver business success."
        primaryCta={{ label: 'Request Talent', href: '/contact' }}
        secondaryCta={{ label: 'Contact Our Team', href: '/contact' }}
      />
    </>
  );
}
