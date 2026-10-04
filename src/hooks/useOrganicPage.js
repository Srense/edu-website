import { useEffect, useRef } from "react";

/**
 * Hook that sets up the organic design system behaviors:
 * - Scroll-reveal IntersectionObserver for [data-reveal] elements
 * - Nav scroll shadow (nlx-scrolled class)
 * 
 * Returns a ref to attach to the root .landing-organic wrapper div.
 */
export function useOrganicPage() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // Nav shadow on scroll
    const onScroll = () => {
      root.classList.toggle('nlx-scrolled', window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Scroll-reveal with IntersectionObserver
    const els = Array.from(root.querySelectorAll('[data-reveal]'));
    let io;
    let timeout;

    if (!('IntersectionObserver' in window)) {
      els.forEach(e => e.classList.add('in'));
    } else {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in');
              io.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
      );
      els.forEach(e => io.observe(e));

      // Fallback: reveal items already in view
      requestAnimationFrame(() => {
        const vh = window.innerHeight;
        els.forEach(e => {
          if (!e.classList.contains('in')) {
            const r = e.getBoundingClientRect();
            if (r.top < vh * 0.92 && r.bottom > 0) {
              e.classList.add('in');
              io.unobserve(e);
            }
          }
        });
      });

      // Safety fallback
      timeout = setTimeout(() => {
        els.forEach(e => e.classList.add('in'));
      }, 2500);

      return () => {
        window.removeEventListener('scroll', onScroll);
        io.disconnect();
        clearTimeout(timeout);
      };
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return rootRef;
}
