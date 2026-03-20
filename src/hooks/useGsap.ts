import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollFadeIn = (selector: string, stagger = 0.15) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(selector, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: selector,
          start: "top 85%",
        },
      });
    });
    return () => ctx.revert();
  }, [selector, stagger]);
};

export const useParallax = (selector: string, yPercent = -20) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(selector, {
        yPercent,
        ease: "none",
        scrollTrigger: {
          trigger: selector,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, [selector, yPercent]);
};

export { gsap, ScrollTrigger };
