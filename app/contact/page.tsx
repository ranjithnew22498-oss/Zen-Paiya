import type { Metadata } from 'next';
import { Mail } from 'lucide-react';
import { PageHero } from '@/components/site/page-hero';
import { ContactForm } from '@/components/site/contact-form';
import { ParticleField } from '@/components/site/particle-field';

export const metadata: Metadata = {
  title: 'Contact ZenPiya | Semiconductor & AI Talent Solutions',
  description:
    'Get in touch with ZenPiya for specialized talent solutions in Semiconductor, AI, and Deep Technology. Whether you are hiring or seeking a new opportunity, we are here to help.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title={
          <>
            Let&apos;s{' '}
            <span className="text-gradient-blue">Connect</span>
          </>
        }
        description="Whether you're looking to build a high-performing engineering team or explore your next career opportunity, ZenPiya is here to help. Our team is committed to providing responsive, personalized, and professional support for both employers and candidates."
      />

      <section className="relative py-20 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="reveal">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-brand-blue" />
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
                  Get in Touch
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-6 text-balance">
                General Enquiries
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 text-pretty">
                Reach out to us with any questions about our services, hiring
                solutions, or career opportunities. We respond to all enquiries
                promptly.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:zenpiya@zenpiya.com"
                  className="group flex items-center gap-4 rounded-lg border border-white/10 bg-card p-5 transition-all hover:border-brand-blue/30 hover:bg-[#1A1C24]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-md border border-brand-blue/30 bg-brand-blue/10">
                    <Mail className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                    <div className="text-sm font-medium text-foreground group-hover:text-brand-blue transition-colors">
                      zenpiya@zenpiya.com
                    </div>
                  </div>
                </a>
              </div>

              <div className="mt-12 relative overflow-hidden rounded-lg border border-white/10 bg-[#0D0E12] p-8">
                <div className="bg-grid-fine absolute inset-0 opacity-10" />
                <ParticleField count={10} />
                <div className="relative">
                  <h3 className="font-display text-lg font-semibold mb-2">Response Time</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We aim to respond to all enquiries within 24 hours during
                    business days.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="reveal">
              <div className="rounded-lg border border-white/10 bg-card p-8 lg:p-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
