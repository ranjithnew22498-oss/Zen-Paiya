import Link from 'next/link';
import { Cpu, ArrowRight, Mail } from 'lucide-react';
import { navItems } from '@/lib/data';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#0D0E12]">
      <div className="bg-grid-fine absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10 py-16 lg:py-20">
        {/* CTA Banner */}
        <div className="mb-16 lg:mb-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
                Let&apos;s Build the{' '}
                <span className="text-gradient-blue">Future Together</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-md text-pretty">
                Partner with ZenPiya to access highly skilled professionals who help accelerate innovation.
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex h-14 items-center justify-center rounded-sm bg-brand-blue px-8 text-base font-medium text-white transition-all hover:bg-brand-blue-dark hover:shadow-[0_0_30px_rgba(47,128,237,0.4)]"
            >
              Contact Our Team
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
               <Image
                src="/images/logo-mark.png"
                alt="Zenpiya"
                width={64}
                height={64}
                priority
                className="h-16 w-16"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Connecting Exceptional Talent with Tomorrow&apos;s Technologies
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) =>
                item.children ? (
                  item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="text-sm text-foreground/70 transition-colors hover:text-brand-blue"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href!}
                      className="text-sm text-foreground/70 transition-colors hover:text-brand-blue"
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
              Expertise
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/semiconductor-expertise" className="text-sm text-foreground/70 transition-colors hover:text-brand-blue">
                  Semiconductor
                </Link>
              </li>
              <li>
                <Link href="/ai-expertise" className="text-sm text-foreground/70 transition-colors hover:text-brand-blue">
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-foreground/70 transition-colors hover:text-brand-blue">
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
              Get in Touch
            </h3>
            <a
              href="mailto:zenpiya@zenpiya.com"
              className="group flex items-center gap-3 text-sm text-foreground/70 transition-colors hover:text-brand-blue"
            >
              <Mail className="h-4 w-4 text-brand-blue" />
              zenpiya@zenpiya.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} ZenPiya. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Semiconductor &middot; AI &middot; Embedded Systems &middot; Deep Technology
          </p>
        </div>
      </div>
    </footer>
  );
}
