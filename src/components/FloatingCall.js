"use client";

import { useEffect, useRef, useState } from "react";
import ContactModal from "./ContactModal";
import { siteConfig } from "@/lib/siteConfig";

export default function FloatingCall() {
  const [hidden, setHidden] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const wrapperRef = useRef(null);
  const closeTimer = useRef(null);
  const copyTimer = useRef(null);

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

  useEffect(() => {
    if (!expanded) return;
    const onClickAway = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setExpanded(false);
      }
    };
    const onKey = (e) => {
      if (e.key === "Escape") setExpanded(false);
    };
    window.addEventListener("mousedown", onClickAway);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("mousedown", onClickAway);
      window.removeEventListener("keydown", onKey);
    };
  }, [expanded]);

  const isHidden = hidden || modalOpen;
  const wrapperState = isHidden
    ? "opacity-0 pointer-events-none translate-y-3"
    : "opacity-100 translate-y-0";

  return (
    <>
      {/* El contenedor no captura toques en su zona vacía (si no, su caja
          invisible de ~320px bloquearía los CTAs que quedan debajo en móvil).
          Solo el botón flotante y la tarjeta abierta reactivan pointer-events. */}
      <div
        ref={wrapperRef}
        className={`fixed right-5 md:right-6 bottom-5 md:bottom-6 z-40 flex flex-col items-end gap-3 transition-[opacity,transform] duration-500 ease-out pointer-events-none ${wrapperState}`}
      >
        <div
          role="dialog"
          aria-label="Opciones de contacto"
          style={{
            clipPath: expanded
              ? "circle(160% at 100% 100%)"
              : "circle(0% at 100% 100%)",
            transformOrigin: "bottom right",
            transition:
              "clip-path 450ms cubic-bezier(0.22, 1, 0.36, 1), opacity 250ms ease-out, transform 350ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
          className={`w-[320px] bg-paper border border-border shadow-2xl shadow-ink/25 ${
            expanded
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          <header className="px-6 pt-6 pb-5">
            <p className="eyebrow mb-3">¿Hablamos?</p>
            <p className="font-display font-medium text-[1.0625rem] leading-[1.25] tracking-tight text-ink text-balance">
              Si tienes un proyecto o una duda, te respondemos.
            </p>
          </header>

          <button
            type="button"
            onClick={async (e) => {
              const isCoarse =
                typeof window !== "undefined" &&
                window.matchMedia("(pointer: coarse)").matches;
              if (isCoarse) {
                window.location.href = siteConfig.phone.href;
                return;
              }
              e.preventDefault();
              try {
                await navigator.clipboard.writeText(siteConfig.phone.label);
                setCopied(true);
                if (copyTimer.current) clearTimeout(copyTimer.current);
                copyTimer.current = setTimeout(() => setCopied(false), 2200);
              } catch {
                window.location.href = siteConfig.phone.href;
              }
            }}
            aria-label={`Copiar el número ${siteConfig.phone.label}`}
            className="group/opt w-full text-left block border-t border-border px-6 py-5 hover:bg-paperSoft transition-colors"
          >
            <div className="flex items-start gap-4">
              <span className="shrink-0 w-10 h-10 rounded-full bg-wood text-paper flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <div className="flex-1 min-w-0 pt-0.5">
                <div className="flex items-baseline justify-between gap-3">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-inkSoft">
                    Llámanos
                  </div>
                  <span
                    aria-hidden
                    className="shrink-0 text-inkSoft transition-transform duration-200 group-hover/opt:translate-x-0.5 group-hover/opt:text-wood"
                  >
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </div>
                <div className="font-display font-medium text-[1.125rem] tracking-tight text-ink leading-none mt-2.5">
                  {siteConfig.phone.label}
                </div>
                <p
                  className={`text-[11px] leading-snug mt-2.5 transition-colors ${
                    copied ? "text-wood" : "text-inkSoft"
                  }`}
                  aria-live="polite"
                >
                  {copied ? "Número copiado al portapapeles" : `L–V · ${siteConfig.hours.range}`}
                </p>
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => {
              setExpanded(false);
              setModalOpen(true);
            }}
            className="group/opt w-full text-left block border-t border-border px-6 py-5 hover:bg-paperSoft transition-colors"
          >
            <div className="flex items-start gap-4">
              <span className="shrink-0 w-10 h-10 rounded-full bg-ink text-paper flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              <div className="flex-1 min-w-0 pt-0.5">
                <div className="flex items-baseline justify-between gap-3">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-inkSoft">
                    Escríbenos
                  </div>
                  <span
                    aria-hidden
                    className="shrink-0 text-inkSoft transition-transform duration-200 group-hover/opt:translate-x-0.5 group-hover/opt:text-wood"
                  >
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </div>
                <div className="font-display font-medium text-[1.125rem] tracking-tight text-ink leading-none mt-2.5">
                  Solicita presupuesto
                </div>
                <p className="text-[11px] text-inkSoft mt-2.5 leading-snug">
                  Respuesta en menos de 24 h
                </p>
              </div>
            </div>
          </button>
        </div>

        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          aria-label={expanded ? "Cerrar opciones de contacto" : "Abrir opciones de contacto"}
          data-scroll-fade
          className="pointer-events-auto w-14 h-14 md:w-16 md:h-16 rounded-full bg-ink text-paper shadow-lg shadow-ink/30 flex items-center justify-center hover:bg-wood transition-colors"
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
            className={`transition-transform duration-300 ease-out ${expanded ? "rotate-45" : "rotate-0"}`}
          >
            {expanded ? (
              <>
                <path d="M12 5v14" />
                <path d="M5 12h14" />
              </>
            ) : (
              <>
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </>
            )}
          </svg>
        </button>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
