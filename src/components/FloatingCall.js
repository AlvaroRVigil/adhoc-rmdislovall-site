"use client";

import { useEffect, useState } from "react";
import ContactModal from "./ContactModal";

export default function FloatingCall() {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let raf = 0;
    const check = () => {
      const distance =
        document.documentElement.scrollHeight -
        window.scrollY -
        window.innerHeight;
      setHidden(distance < 240);
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        check();
        raf = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    check();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        data-scroll-fade
        aria-label="Solicitar presupuesto"
        className={`fixed bottom-5 right-5 md:bottom-6 md:right-6 z-40 w-14 h-14 md:w-16 md:h-16 rounded-full bg-ink text-paper shadow-lg shadow-ink/30 flex items-center justify-center hover:bg-wood transition-[opacity,transform,background-color] duration-500 ease-out ${
          hidden || open
            ? "opacity-0 pointer-events-none translate-y-3"
            : "opacity-100 translate-y-0"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      </button>

      <ContactModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
