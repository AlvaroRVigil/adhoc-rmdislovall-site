"use client";

import { useEffect, useState } from "react";
import Container from "./Container";
import { siteConfig } from "@/lib/siteConfig";

const NAV = [
  { href: "#nosotros", id: "nosotros", label: "Nosotros" },
  { href: "#servicios", id: "servicios", label: "Servicios" },
  { href: "#trabajos", id: "trabajos", label: "Trabajos" },
  { href: "#faq", id: "faq", label: "FAQ" },
];

export default function Header() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      {
        rootMargin: "-25% 0% -55% 0%",
        threshold: 0,
      }
    );

    sections.forEach((s) => observer.observe(s));

    const checkBottom = () => {
      const distance =
        document.documentElement.scrollHeight -
        window.scrollY -
        window.innerHeight;
      if (distance < 240) setActive("contacto");
    };
    window.addEventListener("scroll", checkBottom, { passive: true });
    checkBottom();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", checkBottom);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur-md">
      <Container className="flex items-center justify-center md:justify-between h-16 md:h-20 gap-8">
        <a
          href="/"
          className="flex items-center gap-3 shrink-0"
          aria-label="RM Dislovall — inicio"
        >
          <img
            src="/brand/logo-horizontal.svg"
            alt="RM Dislovall"
            width={1000}
            height={217}
            className="h-7 md:h-8 w-auto"
          />
          <span className="eyebrow hidden md:inline">
            desde 1984
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-[15px]">
          {NAV.map((n) => {
            const isActive = active === n.id;
            return (
              <a
                key={n.id}
                href={n.href}
                aria-current={isActive ? "true" : undefined}
                className={`transition-colors ${
                  isActive
                    ? "text-wood"
                    : "text-ink hover:text-accent"
                }`}
              >
                {n.label}
              </a>
            );
          })}
          <div className="flex items-center">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center h-10 px-4 border border-ink text-ink text-[15px] tracking-wide hover:bg-wood hover:text-paper hover:border-wood transition-colors"
            >
              Contacto
            </a>
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center gap-2 h-10 px-4 bg-ink text-paper text-[15px] tracking-wide hover:bg-wood transition-colors"
              aria-label={`Llamar al ${siteConfig.phone.label}`}
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              {siteConfig.phone.label}
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
}
