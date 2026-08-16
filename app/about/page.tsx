import type { Metadata } from 'next';
import { PageHero } from '@/components/site/page-hero';
import { SectionHeading } from '@/components/site/section-heading';
import { FeatureCard } from '@/components/site/feature-card';
import { CTASection } from '@/components/site/cta-section';
import { ParticleField } from '@/components/site/particle-field';
import { coreValues, whyZenpiya } from '@/lib/data';
import { Target, Eye, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About ZenPiya | Semiconductor & AI Talent Solutions',
  description:
    'ZenPiya is a global talent solutions partner connecting exceptional engineering professionals with innovative organizations across Semiconductor, AI, and Deep Technology.',
};

const aboutImage =
  'https://images.pexels.com/photos/3861457/pexels-photo-3861457.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop';

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title={
          <>
            Connecting Exceptional Talent with{' '}
            <span className="text-gradient-blue">Tomorrow&apos;s Technologies</span>
          </>
        }
        description="ZenPiya is a global talent solutions partner dedicated to helping organizations build exceptional engineering teams across Semiconductor, Artificial Intelligence, Embedded Systems, and emerging technologies."
      />

      {/* About ZenPiya */}
      <section className="relative py-20 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-brand-blue" />
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
                  About ZenPiya
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-balance">
                A Global Talent Partner for Deep Technology
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
                ZenPiya is a global talent solutions company focused on
                Semiconductor, Artificial Intelligence, Embedded Systems, and
                Deep Technology. We connect exceptional engineering
                professionals with innovative organizations, enabling businesses
                to accelerate innovation, scale with confidence, and stay ahead
                in a rapidly evolving world.
              </p>
              <p className="mt-4 text-base text-muted-foreground/80 leading-relaxed text-pretty">
                Unlike generic recruitment agencies, ZenPiya brings deep
                technical recruitment expertise. Our specialists understand the
                nuances of engineering roles across chip design, AI
                infrastructure, embedded systems, and emerging technologies.
              </p>
            </div>
            <div className="reveal relative">
              <div className="relative overflow-hidden rounded-lg border border-white/10">
                <div
                  className="aspect-[4/3] bg-cover bg-center"
                  style={{ backgroundImage: `url('${aboutImage}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-brand-blue/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="relative border-y border-white/5 bg-[#0D0E12] py-20 lg:py-32">
        <div className="bg-grid-fine absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeading
            label="Our Expertise"
            title="Deep Technical Recruitment Across Critical Technology Domains"
            description="We specialize in the technology areas that drive the future of innovation."
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Semiconductor', desc: 'Chip design, verification, manufacturing, and silicon validation talent.' },
              { title: 'Artificial Intelligence', desc: 'Generative AI, machine learning, MLOps, and AI infrastructure talent.' },
              { title: 'Embedded Systems', desc: 'Firmware, device drivers, RTOS, and FPGA engineering talent.' },
              { title: 'Deep Technology', desc: 'Emerging technology professionals across advanced engineering domains.' },
            ].map((item) => (
              <div key={item.title} className="reveal rounded-lg border border-white/10 bg-card p-7 transition-all duration-500 hover:border-brand-blue/30 hover:bg-[#1A1C24]">
                <h3 className="font-display text-lg font-semibold tracking-tight mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-20 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="reveal relative overflow-hidden rounded-lg border border-white/10 bg-card p-8 lg:p-12">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-brand-blue/10 blur-[80px]" />
              <div className="relative">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-md border border-brand-blue/30 bg-brand-blue/10">
                  <Target className="h-6 w-6 text-brand-blue" />
                </div>
                <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-blue">Our Mission</div>
                <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-4 text-balance">
                  To connect exceptional engineering talent with organizations driving technological advancement.
                </h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  We exist to bridge the gap between innovative companies and
                  the highly skilled professionals who build the future. Our
                  mission is to enable organizations to accelerate innovation
                  by providing access to the best engineering talent in
                  Semiconductor, AI, and Deep Technology.
                </p>
              </div>
            </div>
            <div className="reveal relative overflow-hidden rounded-lg border border-white/10 bg-card p-8 lg:p-12">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-brand-blue/10 blur-[80px]" />
              <div className="relative">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-md border border-brand-blue/30 bg-brand-blue/10">
                  <Eye className="h-6 w-6 text-brand-blue" />
                </div>
                <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-blue">Our Vision</div>
                <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-4 text-balance">
                  To be the world&apos;s most trusted talent partner for deep technology organizations.
                </h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  We envision a future where every technology company can
                  access the engineering talent it needs to innovate and
                  grow. Our vision is to be the global standard for specialized
                  recruitment in Semiconductor, AI, and Deep Technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative border-y border-white/5 bg-[#0D0E12] py-20 lg:py-32">
        <div className="bg-grid-fine absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeading
            label="Our Core Values"
            title="The Principles That Guide Everything We Do"
            align="center"
            className="mb-16"
          />
          <div className="stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {coreValues.map((value) => (
              <FeatureCard key={value.title} {...value} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ZenPiya */}
      <section className="relative py-20 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeading
            label="Why Choose ZenPiya"
            title="Why Companies and Professionals Choose ZenPiya"
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

      {/* Building the Future Together */}
      <section className="relative overflow-hidden border-y border-white/5 bg-[#0D0E12] py-20 lg:py-32">
        <div className="bg-grid-pattern absolute inset-0 opacity-10" />
        <ParticleField count={15} />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/8 blur-[120px]" />
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10 text-center">
          <div className="reveal mx-auto max-w-3xl">
            <div className="mb-6 flex h-16 w-16 mx-auto items-center justify-center rounded-md border border-brand-blue/30 bg-brand-blue/10">
              <Sparkles className="h-8 w-8 text-brand-blue" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-balance">
              Building the Future,{' '}
              <span className="text-gradient-blue">Together</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
              We believe that the future is built by exceptional engineering
              teams. ZenPiya is committed to being the trusted partner that
              connects those teams with the organizations that need them.
              Together, we can build the technologies that shape tomorrow.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title={<>Let&apos;s Build the Future Together</>}
        description="Whether you're looking to build a high-performing engineering team or explore your next career opportunity, ZenPiya is here to help."
        primaryCta={{ label: 'Contact Our Team', href: '/contact' }}
        secondaryCta={{ label: 'Explore Services', href: '/services' }}
      />
    </>
  );
}
