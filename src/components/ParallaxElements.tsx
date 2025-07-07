
import { useEffect } from 'react';

export const ParallaxElements = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);

      // Floating background elements
      window.gsap.to('.parallax-slow', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: 'body',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

      window.gsap.to('.parallax-medium', {
        yPercent: -80,
        ease: 'none',
        scrollTrigger: {
          trigger: 'body',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

      window.gsap.to('.parallax-fast', {
        yPercent: -120,
        ease: 'none',
        scrollTrigger: {
          trigger: 'body',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Slow moving elements */}
      <div className="parallax-slow absolute top-20 left-10 w-2 h-2 bg-secondary/30 rounded-full"></div>
      <div className="parallax-slow absolute top-40 right-20 w-1 h-1 bg-accent/40 rounded-full"></div>
      <div className="parallax-slow absolute top-60 left-1/3 w-3 h-3 bg-secondary/20 rounded-full"></div>

      {/* Medium speed elements */}
      <div className="parallax-medium absolute top-80 right-10 w-4 h-4 bg-accent/30 rounded-full"></div>
      <div className="parallax-medium absolute top-96 left-20 w-2 h-2 bg-secondary/40 rounded-full"></div>
      <div className="parallax-medium absolute top-32 right-1/3 w-1 h-1 bg-accent/50 rounded-full"></div>

      {/* Fast moving elements */}
      <div className="parallax-fast absolute top-52 left-1/4 w-3 h-3 bg-secondary/25 rounded-full"></div>
      <div className="parallax-fast absolute top-72 right-1/4 w-2 h-2 bg-accent/35 rounded-full"></div>
      <div className="parallax-fast absolute top-44 left-3/4 w-1 h-1 bg-secondary/45 rounded-full"></div>

      {/* Geometric shapes */}
      <div className="parallax-slow absolute top-1/3 left-5 w-8 h-8 border border-secondary/20 rotate-45"></div>
      <div className="parallax-medium absolute top-2/3 right-5 w-6 h-6 border border-accent/20 rotate-12"></div>
      <div className="parallax-fast absolute top-1/2 left-1/2 w-4 h-4 border border-secondary/15 -rotate-45"></div>
    </div>
  );
};
