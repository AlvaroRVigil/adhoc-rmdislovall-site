"use client";

import { useEffect, useState } from "react";
import Container from "./Container";

const NAV = [
  { href: "#nosotros", id: "nosotros", label: "Nosotros" },
  { href: "#servicios", id: "servicios", label: "Servicios" },
  { href: "#trabajos", id: "trabajos", label: "Trabajos" },
  { href: "#faq", id: "faq", label: "FAQ" },
  { href: "#contacto", id: "contacto", label: "Contacto" },
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

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {NAV.map((n) => {
            const isActive = active === n.id;
            const isContact = n.id === "contacto";
            const baseClasses = isContact
              ? "underline underline-offset-4 decoration-1"
              : "";
            return (
              <a
                key={n.id}
                href={n.href}
                aria-current={isActive ? "true" : undefined}
                className={`${baseClasses} transition-colors ${
                  isActive
                    ? "text-wood decoration-wood"
                    : "text-ink hover:text-accent hover:decoration-wood"
                }`}
              >
                {n.label}
              </a>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}
