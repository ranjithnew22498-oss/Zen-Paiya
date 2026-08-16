'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export function ScrollReveal() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal, .stagger').forEach((el) => {
        el.classList.add('is-visible');
      });
      return;
    }

    observerRef.current?.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    requestAnimationFrame(() => {
      document.querySelectorAll('.reveal, .stagger').forEach((el) => {
        if (!el.classList.contains('is-visible')) {
          observerRef.current?.observe(el);
        }
      });
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [pathname]);

  return null;
}
