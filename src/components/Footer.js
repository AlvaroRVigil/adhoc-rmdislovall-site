"use client";

import { useEffect, useState } from "react";
import Container from "./Container";
import { siteConfig } from "@/lib/siteConfig";
import { openContactModal } from "@/lib/contactModal";

const easeOut = "cubic-bezier(0.16, 1, 0.3, 1)";

function revealStyle(revealed, delayMs) {
  return {
    opacity: revealed ? 1 : 0,
    transform: revealed ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 800ms ${easeOut} ${revealed ? delayMs : 0}ms, transform 800ms ${easeOut} ${revealed ? delayMs : 0}ms`,
    willChange: "opacity, transform",
  };
}

const cellLabel = "text-eyebrow uppercase text-woodSoft/55 mb-1 tracking-label";

export default function Footer() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let raf = 0;
    const check = () => {
      const distance =
        document.documentElement.scrollHeight -
        window.scrollY -
        window.innerHeight;
      setRevealed(distance < 480);
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
    <footer
      id="contacto"
      className="fixed inset-x-0 bottom-0 bg-wood text-woodSoft z-0 flex flex-col overflow-hidden max-h-[100svh]"
    >
      <Container className="pt-section-y md:pt-16 flex flex-col">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-12 gap-y-12">
          <aside className="col-span-12 md:col-span-5 space-y-8 text-center md:text-left" style={revealStyle(revealed, 0)}>
            <p className="eyebrow-dark">¿Empezamos a trabajar?</p>
            <h2 className="heading-section">
              Cuéntanos qué necesitas
              <span className="block italic text-woodSoft">y nos ponemos a ello.</span>
            </h2>

            <button
              type="button"
              onClick={openContactModal}
              className="btn-light"
            >
              Solicitar presupuesto
            </button>
          </aside>

          <dl
            className="col-span-12 md:col-span-7 md:pl-8 md:border-l md:border-woodSoft/15 grid grid-cols-1 md:grid-cols-2 text-center md:text-left border border-woodSoft/15 md:border-0 md:gap-x-6 md:gap-y-8 [&>*:last-child]:border-b-0 md:[&>*]:border-0"
            style={revealStyle(revealed, 120)}
          >
            <div className="p-5 md:p-0 border-b border-woodSoft/15 md:border-0">
              <dt className={cellLabel}>Llámanos</dt>
              <dd>
                <a
                  href={siteConfig.phone.href}
                  className="font-display font-medium text-2xl tracking-tighter hover:text-paper transition-colors"
                >
                  {siteConfig.phone.label}
                </a>
              </dd>
            </div>
            <div className="p-5 md:p-0 border-b border-woodSoft/15 md:border-0">
              <dt className={cellLabel}>Escríbenos</dt>
              <dd className="flex flex-col items-center md:items-start gap-2">
                <a
                  href={siteConfig.email.href}
                  className="text-sm md:text-base hover:text-paper transition-colors [overflow-wrap:anywhere]"
                >
                  {siteConfig.email.label}
                </a>
                <a
                  href={siteConfig.whatsapp.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 h-9 border border-woodSoft/40 text-xs uppercase tracking-[0.18em] text-woodSoft hover:bg-woodSoft hover:text-wood transition-colors"
                  aria-label="Escribir por WhatsApp"
                >
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden>
                    <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.9-2.1-.2-.5-.5-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2 0 1.3.9 2.5 1.1 2.7.1.2 1.8 2.8 4.3 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.7.1.5-.1 1.7-.7 1.9-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.4 5L2 22l5.2-1.4c1.5.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2"/>
                  </svg>
                  WhatsApp
                </a>
              </dd>
            </div>
            <div className="p-5 md:p-0 border-b border-woodSoft/15 md:border-0">
              <dt className={cellLabel}>Dónde estamos</dt>
              <dd className="text-base">
                <a
                  href={siteConfig.location.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Cómo llegar a ${siteConfig.city} (${siteConfig.region})`}
                  className="inline-flex items-center gap-1.5 hover:text-accentSoft/80 transition"
                >
                  {siteConfig.city}
                  <svg
                    viewBox="0 0 24 24"
                    width="13"
                    height="13"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                    className="-mt-0.5"
                  >
                    <path d="M7 17 L17 7" />
                    <path d="M8 7 H17 V16" />
                  </svg>
                </a>
                <span className="block text-woodSoft/65">{siteConfig.region}</span>
              </dd>
            </div>
            <div className="p-5 md:p-0 border-b border-woodSoft/15 md:border-0">
              <dt className={cellLabel}>Horario</dt>
              <dd className="text-base">
                {siteConfig.hours.days}
                <span className="block text-woodSoft/65">{siteConfig.hours.range}</span>
              </dd>
            </div>
          </dl>
        </div>
      </Container>

      <div
        className="hidden desk:block mx-auto w-full max-w-container px-section-x overflow-hidden mt-10 md:mt-14 pb-6 md:pb-8"
        style={revealStyle(revealed, 240)}
      >
        <img
          src="/brand/logo-tipografico.svg"
          alt="RM Dislovall"
          width={806}
          height={95}
          className="block w-full h-auto select-none pointer-events-none"
          draggable={false}
        />
      </div>

      <Container
        className="pb-6 flex flex-col md:flex-row md:justify-between gap-2 text-xs text-woodSoft/55 border-t border-woodSoft/15 pt-4"
        style={revealStyle(revealed, 320)}
      >
        <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center md:justify-start">
          <span>© {new Date().getFullYear()} {siteConfig.legalName}</span>
          <span className="text-woodSoft/40">
            {siteConfig.city}, {siteConfig.region}
          </span>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center md:justify-start">
          <a href="/aviso-legal" className="hover:text-accentSoft transition-colors">Aviso legal</a>
          <a href="/privacidad" className="hover:text-accentSoft transition-colors">Privacidad</a>
          <a href="/cookies" className="hover:text-accentSoft transition-colors">Cookies</a>
          <button
            type="button"
            onClick={() =>
              window.dispatchEvent(new Event("rmdislovall:open-cookies"))
            }
            className="hover:text-accentSoft transition-colors text-left"
          >
            Preferencias de cookies
          </button>
        </div>
      </Container>

    </footer>
  );
}
