"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

    const handler = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href || href.length < 2) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();

      const isFixed = getComputedStyle(target).position === "fixed";
      const useFade = link.dataset.scrollFade !== undefined;

      const computeY = () => {
        if (isFixed) return document.documentElement.scrollHeight;
        const pinnedTrigger = ScrollTrigger.getAll().find(
          (t) => t.trigger === target && t.pin
        );
        if (pinnedTrigger) return pinnedTrigger.start + 1;
        return target.getBoundingClientRect().top + window.scrollY;
      };

      if (useFade) {
        const overlay = document.createElement("div");
        overlay.style.cssText = `
          position: fixed;
          inset: 0;
          background: #30271D;
          opacity: 0;
          transition: opacity 260ms ease-out;
          z-index: 9999;
          pointer-events: auto;
        `;
        document.body.appendChild(overlay);
        // Force reflow then trigger transition
        // eslint-disable-next-line no-unused-expressions
        overlay.offsetHeight;
        overlay.style.opacity = "1";

        setTimeout(() => {
          window.scrollTo({ top: computeY(), behavior: "instant" });
          ScrollTrigger.update();
          overlay.style.opacity = "0";
        }, 280);

        setTimeout(() => {
          overlay.remove();
        }, 600);
        return;
      }

      const pinnedTrigger = ScrollTrigger.getAll().find(
        (t) => t.trigger === target && t.pin
      );
      let scrollDest;
      if (isFixed) {
        scrollDest = "max";
      } else if (pinnedTrigger) {
        scrollDest = { y: pinnedTrigger.start + 1, autoKill: false };
      } else {
        scrollDest = { y: target, offsetY: 0, autoKill: false };
      }

      gsap.to(window, {
        duration: 1.8,
        ease: "expo.inOut",
        scrollTo: scrollDest,
        overwrite: true,
        onUpdate: () => ScrollTrigger.update(),
      });
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return null;
}
