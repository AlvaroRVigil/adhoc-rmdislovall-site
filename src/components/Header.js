"use client";

import { useEffect, useRef, useState } from "react";
import Container from "./Container";
import { siteConfig } from "@/lib/siteConfig";
import { openContactModal } from "@/lib/contactModal";

const NAV = [
  { href: "#nosotros", id: "nosotros", label: "Nosotros" },
  { href: "#servicios", id: "servicios", label: "Servicios" },
  { href: "#trabajos", id: "trabajos", label: "Trabajos" },
  { href: "#faq", id: "faq", label: "FAQ" },
];

export default function Header() {
  const [active, setActive] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const phoneCopyTimer = useRef(null);

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

  // Bloquea el scroll del body mientras el menú móvil está abierto.
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur-md">
      <Container className="flex items-center justify-between h-16 md:h-20 gap-8">
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
            className="h-7 md:h-9 desk:h-8 w-auto"
          />
        </a>

        <nav className="hidden desk:flex items-center gap-7 text-[15px]">
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
            <button
              type="button"
              onClick={openContactModal}
              className="inline-flex items-center justify-center h-10 px-4 border border-ink text-ink text-[15px] tracking-wide hover:bg-wood hover:text-paper hover:border-wood transition-colors"
            >
              ¿Hablamos?
            </button>
            <a
              href={siteConfig.phone.href}
              onClick={async (e) => {
                // En táctil mantiene el comportamiento de llamada; con ratón
                // copia el número y muestra el estado "copiado".
                if (window.matchMedia("(pointer: coarse)").matches) return;
                e.preventDefault();
                try {
                  await navigator.clipboard.writeText(siteConfig.phone.label);
                  setPhoneCopied(true);
                  if (phoneCopyTimer.current) clearTimeout(phoneCopyTimer.current);
                  phoneCopyTimer.current = setTimeout(() => setPhoneCopied(false), 2200);
                } catch {
                  window.location.href = siteConfig.phone.href;
                }
              }}
              className="inline-flex items-center justify-center gap-2 h-10 min-w-[152px] px-4 bg-ink text-paper text-[15px] tracking-wide hover:bg-wood transition-colors"
              aria-label={phoneCopied ? "Número copiado al portapapeles" : `Llamar al ${siteConfig.phone.label}`}
            >
              {phoneCopied ? (
                <>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Copiado
                </>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  {siteConfig.phone.label}
                </>
              )}
            </a>
          </div>
        </nav>

        {/* Botón de menú — solo móvil */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          className="desk:hidden -mr-1 inline-flex items-center justify-center w-10 h-10 text-ink"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
            <path d="M3 6h18" />
            <path d="M3 12h18" />
            <path d="M3 18h18" />
          </svg>
        </button>
      </Container>

      {/* Menú móvil */}
      <div
        className={`desk:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <div
          className="absolute inset-0 bg-ink/40"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute inset-x-0 top-0 bg-paper px-section-x pt-5 pb-8 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex items-center justify-between h-11">
            <img
              src="/brand/logo-horizontal.svg"
              alt="RM Dislovall"
              width={1000}
              height={217}
              className="h-7 w-auto"
            />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Cerrar menú"
              className="inline-flex items-center justify-center w-10 h-10 text-ink"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
                <path d="M6 6 18 18" />
                <path d="M18 6 6 18" />
              </svg>
            </button>
          </div>

          <nav className="mt-6 flex flex-col">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={n.href}
                onClick={() => setMenuOpen(false)}
                className="py-3.5 border-t border-border font-display font-medium text-2xl tracking-tighter text-ink"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="mt-6 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                openContactModal();
              }}
              className="inline-flex items-center justify-center h-12 bg-ink text-paper text-[15px] tracking-wide hover:bg-wood transition-colors"
            >
              ¿Hablamos?
            </button>
            <a
              href={siteConfig.phone.href}
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 h-12 border border-ink text-ink text-[15px] tracking-wide"
              aria-label={`Llamar al ${siteConfig.phone.label}`}
            >
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              {siteConfig.phone.label}
            </a>
            <a
              href={siteConfig.email.href}
              onClick={() => setMenuOpen(false)}
              className="text-center text-sm text-inkSoft py-1"
            >
              {siteConfig.email.label}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
