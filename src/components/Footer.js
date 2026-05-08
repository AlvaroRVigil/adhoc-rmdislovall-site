"use client";

import { useEffect, useState } from "react";
import Container from "./Container";

const fieldClass =
  "w-full bg-transparent border-b border-woodSoft/25 focus:border-woodSoft outline-none py-3 text-sm text-woodSoft placeholder:text-woodSoft/40 transition-colors";

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
      <Container className="pt-10 md:pt-16 flex flex-col">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-12 gap-y-12">
          <aside className="col-span-12 md:col-span-5 space-y-8" style={revealStyle(revealed, 0)}>
            <p className="text-[10px] uppercase tracking-[0.24em] text-woodSoft/55">
              · Empezamos a trabajar
            </p>
            <h2 className="font-display font-medium text-3xl md:text-4xl tracking-tighter leading-tight text-balance">
              Cuéntanos qué necesitas
              <span className="block italic text-woodSoft">y nos ponemos a ello.</span>
            </h2>

            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-woodSoft/15 pt-6">
              <div>
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
              <div>
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
              <div>
                <dt className="text-[10px] uppercase tracking-[0.22em] text-woodSoft/55 mb-1">Dónde estamos</dt>
                <dd className="text-base">
                  Sentmenat
                  <span className="block text-woodSoft/65">Barcelona</span>
                  <a
                    href="https://www.openstreetmap.org/?mlat=41.6125&mlon=2.1320#map=15/41.6125/2.1320"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-1 text-xs underline underline-offset-4 decoration-1 hover:text-woodSoft/80 hover:decoration-woodSoft/80 transition"
                  >
                    Cómo llegar →
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.22em] text-woodSoft/55 mb-1">Horario</dt>
                <dd className="text-base">
                  Lunes a viernes
                  <span className="block text-woodSoft/65">7:00 — 15:00</span>
                </dd>
              </div>
            </dl>
          </aside>

          <form
            className="col-span-12 md:col-span-7 md:pl-8 md:border-l md:border-woodSoft/15 space-y-6"
            style={revealStyle(revealed, 120)}
          >
            <p className="text-[10px] uppercase tracking-[0.24em] text-woodSoft/55">· Solicita presupuesto</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
              <label className="block">
                <span className="sr-only">Nombre</span>
                <input className={fieldClass} type="text" name="nombre" placeholder="Nombre" required />
              </label>
              <label className="block">
                <span className="sr-only">Empresa</span>
                <input className={fieldClass} type="text" name="empresa" placeholder="Empresa" />
              </label>
              <label className="block">
                <span className="sr-only">Teléfono</span>
                <input className={fieldClass} type="tel" name="telefono" placeholder="Teléfono" required />
              </label>
              <label className="block">
                <span className="sr-only">Email</span>
                <input className={fieldClass} type="email" name="email" placeholder="Email (opcional)" />
              </label>
            </div>
            <label className="block">
              <span className="sr-only">Mensaje</span>
              <textarea
                className="w-full bg-transparent border border-woodSoft/25 focus:border-woodSoft outline-none p-4 text-sm text-woodSoft placeholder:text-woodSoft/40 transition-colors resize-none mt-3"
                rows={4}
                name="mensaje"
                placeholder="Cuéntanos qué necesitas — producto, volumen, plazo"
                required
              />
            </label>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
              <p className="text-[11px] text-woodSoft/55 max-w-xs leading-[1.5]">
                Al enviar aceptas nuestra política de privacidad. Te respondemos
                en menos de 24 horas laborables.
              </p>
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-woodSoft text-ink px-7 py-3.5 text-sm tracking-wide hover:bg-woodSoft transition-colors shrink-0"
              >
                Enviar solicitud
              </button>
            </div>
          </form>
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
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          <span>© {new Date().getFullYear()} RM Dislovall S.L.</span>
          <span className="text-woodSoft/40">Sentmenat, Barcelona — desde 1984</span>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          <a href="/aviso-legal" className="hover:text-woodSoft transition-colors">Aviso legal</a>
          <a href="/privacidad" className="hover:text-woodSoft transition-colors">Privacidad</a>
          <a href="/cookies" className="hover:text-woodSoft transition-colors">Cookies</a>
        </div>
      </Container>
    </footer>
  );
}
