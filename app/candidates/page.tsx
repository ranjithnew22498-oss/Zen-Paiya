import type { Metadata } from 'next';
import { PageHero } from '@/components/site/page-hero';
import { SectionHeading } from '@/components/site/section-heading';
import { FeatureCard } from '@/components/site/feature-card';
import { ProcessTimeline } from '@/components/site/process-timeline';
import { CTASection } from '@/components/site/cta-section';
import { candidatesWhyChoose, candidateProcess, candidateTips } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Semiconductor & AI Careers | ZenPiya',
  description:
    'Shape the future of technology with ZenPiya. Explore career opportunities in Semiconductor, AI, Embedded Systems, and Deep Technology with innovative organizations worldwide.',
};

export default function CandidatesPage() {
  return (
    <>
      <PageHero
        label="For Candidates"
        title={
          <>
            Shape the Future of Technology with{' '}
            <span className="text-gradient-blue">ZenPiya</span>
          </>
        }
        description="Your next career opportunity starts here. ZenPiya connects engineering professionals with innovative organizations across Semiconductor, AI, and Deep Technology."
      />

      {/* Why Choose ZenPiya */}
      <section className="relative py-20 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeading
            label="Why Choose Us"
            title="Why Choose ZenPiya for Your Career?"
            description="We understand that your career is more than a job. We help you find opportunities that match your technical expertise and career aspirations."
            className="mb-16"
          />
          <div className="stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {candidatesWhyChoose.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="relative border-y border-white/5 bg-[#0D0E12] py-20 lg:py-32">
        <div className="bg-grid-fine absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeading
            label="Career Opportunities"
            title="Opportunities Across Deep Technology"
            description="We connect professionals with roles across Semiconductor, AI, Embedded Systems, and emerging technologies. From design engineering to AI research, we have opportunities that match your expertise."
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Semiconductor Engineering', desc: 'Chip design, verification, physical design, DFT, and manufacturing roles.' },
              { title: 'AI & Machine Learning', desc: 'Generative AI, ML, deep learning, MLOps, and AI infrastructure roles.' },
              { title: 'Embedded Systems', desc: 'Firmware, RTOS, device drivers, and FPGA engineering roles.' },
              { title: 'Engineering Leadership', desc: 'Engineering manager, director, and executive roles in deep technology.' },
            ].map((item) => (
              <div key={item.title} className="reveal rounded-lg border border-white/10 bg-card p-7 transition-all duration-500 hover:border-brand-blue/30 hover:bg-[#1A1C24]">
                <h3 className="font-display text-lg font-semibold tracking-tight mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="relative py-20 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeading
            label="Our Process"
            title="Your Journey with ZenPiya"
            description="A simple, supportive process designed to help you find the right opportunity."
            align="center"
            className="mb-16"
          />
          <ProcessTimeline steps={candidateProcess} />
        </div>
      </section>

      {/* Why Professionals Trust ZenPiya */}
      <section className="relative border-y border-white/5 bg-[#0D0E12] py-20 lg:py-32">
        <div className="bg-grid-fine absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeading
            label="Trust"
            title="Why Professionals Trust ZenPiya"
            align="center"
            className="mb-16"
          />
          <div className="stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {candidatesWhyChoose.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Tips for Success */}
      <section className="relative py-20 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeading
            label="Tips for Success"
            title="Tips for a Successful Application"
            description="Make the most of your ZenPiya experience with these practical tips."
            className="mb-16"
          />
          <div className="stagger grid grid-cols-1 md:grid-cols-2 gap-4">
            {candidateTips.map((tip, i) => (
              <div
                key={tip.title}
                className="group flex gap-6 rounded-lg border border-white/10 bg-card p-7 transition-all duration-500 hover:border-brand-blue/30 hover:bg-[#1A1C24]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/5 font-display text-lg font-bold text-brand-blue">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight mb-2">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={<>Submit Your Resume and Start Your Journey</>}
        description="Share your profile with ZenPiya and let us connect you with opportunities that match your technical expertise and career goals."
        primaryCta={{ label: 'Submit Your Resume', href: '/contact' }}
        secondaryCta={{ label: 'Explore Opportunities', href: '/semiconductor-expertise' }}
      />
    </>
  );
}
