'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Cpu } from 'lucide-react';
import { navItems } from '@/lib/data';
import { cn } from '@/lib/utils';
import { ButtonLink } from './buttons';
import Image from 'next/image';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const [mobileExpertiseOpen, setMobileExpertiseOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setExpertiseOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/images/logo-mark.png"
                alt="Zenpiya"
                width={32}
                height={32}
                priority
                className="h-8 w-8"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setExpertiseOpen(true)}
                    onMouseLeave={() => setExpertiseOpen(false)}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors hover:text-brand-blue",
                        isActive("/semiconductor-expertise") ||
                          isActive("/ai-expertise")
                          ? "text-brand-blue"
                          : "text-foreground/80",
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-300",
                          expertiseOpen && "rotate-180",
                        )}
                      />
                    </button>
                    {expertiseOpen && (
                      <div className="absolute top-full left-0 pt-2 w-[320px]">
                        <div className="rounded-lg border border-white/10 bg-[#16181F] p-2 shadow-2xl backdrop-blur-xl">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block rounded-md p-4 transition-colors hover:bg-white/5"
                            >
                              <div className="text-sm font-semibold text-foreground">
                                {child.label}
                              </div>
                              <div className="mt-1 text-xs text-muted-foreground">
                                {child.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href!}
                    className={cn(
                      "px-4 py-2 text-sm font-medium transition-colors hover:text-brand-blue",
                      isActive(item.href!)
                        ? "text-brand-blue"
                        : "text-foreground/80",
                    )}
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <ButtonLink href="/contact" size="sm">
                Hire Top Talent
              </ButtonLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex h-10 w-10 items-center justify-center text-foreground"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] lg:hidden transition-all duration-500",
          mobileOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-xl"
          onClick={() => setMobileOpen(false)}
        />
        <div className="relative flex h-full flex-col">
          <div className="flex h-20 items-center justify-between px-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-brand-blue/10 border border-brand-blue/30">
                <Cpu className="h-5 w-5 text-brand-blue" />
              </div>
              <span className="font-display text-xl font-bold tracking-tight">
                ZEN<span className="text-brand-blue">PIYA</span>
              </span>
            </Link>
            <button
              className="flex h-10 w-10 items-center justify-center"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-6 py-8">
            <div className="space-y-1">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <button
                      className="flex w-full items-center justify-between py-4 text-lg font-medium text-foreground"
                      onClick={() =>
                        setMobileExpertiseOpen(!mobileExpertiseOpen)
                      }
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 transition-transform",
                          mobileExpertiseOpen && "rotate-180",
                        )}
                      />
                    </button>
                    {mobileExpertiseOpen && (
                      <div className="ml-4 space-y-1 border-l border-white/10 pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block py-3 text-base text-muted-foreground hover:text-brand-blue"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href!}
                    className={cn(
                      "block py-4 text-lg font-medium transition-colors",
                      isActive(item.href!)
                        ? "text-brand-blue"
                        : "text-foreground hover:text-brand-blue",
                    )}
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </div>
          </nav>

          <div className="border-t border-white/10 p-6 space-y-3">
            <ButtonLink href="/employers" variant="primary" className="w-full">
              Hire Top Talent
            </ButtonLink>
            <ButtonLink
              href="/candidates"
              variant="secondary"
              className="w-full"
            >
              Explore Opportunities
            </ButtonLink>
          </div>
        </div>
      </div>
    </>
  );
}
