"use client";

import { useEffect, useState } from "react";
import Container from "./Container";
import ContactModal from "./ContactModal";

const easeOut = "cubic-bezier(0.16, 1, 0.3, 1)";

function revealStyle(revealed, delayMs) {
  return {
    opacity: revealed ? 1 : 0,
    transform: revealed ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 800ms ${easeOut} ${revealed ? delayMs : 0}ms, transform 800ms ${easeOut} ${revealed ? delayMs : 0}ms`,
    willChange: "opacity, transform",
  };
}

export default function Footer() {
  const [revealed, setRevealed] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

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
      className="fixed inset-x-0 bottom-0 bg-ink text-woodSoft z-0 flex flex-col overflow-hidden max-h-[100svh]"
    >
      <Container className="pt-section-y md:pt-16 flex flex-col">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-12 gap-y-12">
          <aside className="col-span-12 md:col-span-5 space-y-8 text-center md:text-left" style={revealStyle(revealed, 0)}>
            <p className="text-[10px] uppercase tracking-[0.24em] text-woodSoft/55">
              · ¿Empezamos a trabajar?
            </p>
            <h2 className="font-display font-medium text-[2.125rem] md:text-4xl tracking-tighter leading-[1.05] text-balance">
              Cuéntanos qué necesitas
              <span className="block italic text-woodSoft">y nos ponemos a ello.</span>
            </h2>

            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center bg-woodSoft text-ink px-7 h-12 text-sm tracking-wide hover:bg-paper transition-colors"
            >
              Solicitar presupuesto
            </button>
          </aside>

          <dl
            className="col-span-12 md:col-span-7 md:pl-8 md:border-l md:border-woodSoft/15 grid grid-cols-2 text-center md:text-left border border-woodSoft/15 md:border-0 md:gap-x-6 md:gap-y-8 [&>*:nth-last-child(-n+2)]:border-b-0 md:[&>*]:border-0"
            style={revealStyle(revealed, 120)}
          >
            <div className="p-5 md:p-0 border-b border-r border-woodSoft/15 md:border-0">
              <dt className="text-[10px] uppercase tracking-[0.22em] text-woodSoft/55 mb-1">Llámanos</dt>
              <dd>
                <a
                  href="tel:+34937153920"
                  className="font-display font-medium text-2xl tracking-tighter hover:text-woodSoft/80 transition-colors"
                >
                  937 153 920
                </a>
              </dd>
            </div>
            <div className="p-5 md:p-0 border-b border-woodSoft/15 md:border-0">
              <dt className="text-[10px] uppercase tracking-[0.22em] text-woodSoft/55 mb-1">Escríbenos</dt>
              <dd>
                <a
                  href="mailto:info@rmdislovall.com"
                  className="text-base hover:text-woodSoft/80 transition-colors break-all"
                >
                  info@rmdislovall.com
                </a>
              </dd>
            </div>
            <div className="p-5 md:p-0 border-b border-r border-woodSoft/15 md:border-0">
              <dt className="text-[10px] uppercase tracking-[0.22em] text-woodSoft/55 mb-1">Dónde estamos</dt>
              <dd className="text-base">
                <a
                  href="https://www.openstreetmap.org/?mlat=41.6125&mlon=2.1320#map=15/41.6125/2.1320"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Cómo llegar a Sentmenat (Barcelona)"
                  className="inline-flex items-center gap-1.5 hover:text-woodSoft/80 transition"
                >
                  Sentmenat
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
                <span className="block text-woodSoft/65">Barcelona</span>
              </dd>
            </div>
            <div className="p-5 md:p-0 border-b border-woodSoft/15 md:border-0">
              <dt className="text-[10px] uppercase tracking-[0.22em] text-woodSoft/55 mb-1">Horario</dt>
              <dd className="text-base">
                Lunes a viernes
                <span className="block text-woodSoft/65">7:00 — 15:00</span>
              </dd>
            </div>
          </dl>
        </div>
      </Container>

      <div
        className="w-full px-2 md:px-4 text-center overflow-hidden mt-10 md:mt-14"
        style={revealStyle(revealed, 240)}
      >
        <p
          className="font-display font-medium tracking-[-0.05em] leading-none whitespace-nowrap text-woodSoft select-none"
          style={{ fontSize: "14.3vw" }}
        >
          RM DISLOVALL
        </p>
      </div>

      <Container
        className="pb-6 flex flex-col md:flex-row md:justify-between gap-2 text-xs text-woodSoft/55 border-t border-woodSoft/15 pt-4"
        style={revealStyle(revealed, 320)}
      >
        <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center md:justify-start">
          <span>© {new Date().getFullYear()} RM Dislovall S.L.</span>
          <span className="text-woodSoft/40">Sentmenat, Barcelona — desde 1984</span>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center md:justify-start">
          <a href="/aviso-legal" className="hover:text-woodSoft transition-colors">Aviso legal</a>
          <a href="/privacidad" className="hover:text-woodSoft transition-colors">Privacidad</a>
          <a href="/cookies" className="hover:text-woodSoft transition-colors">Cookies</a>
        </div>
      </Container>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </footer>
  );
}
