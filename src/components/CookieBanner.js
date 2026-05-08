"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "rmdislovall:cookies";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        const t = setTimeout(() => setVisible(true), 600);
        return () => clearTimeout(t);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const dismiss = (choice) => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ choice, ts: Date.now() })
      );
    } catch {
      /* localStorage no disponible */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed inset-x-3 bottom-3 md:inset-x-auto md:left-6 md:right-6 md:bottom-6 lg:max-w-md lg:left-6 lg:right-auto z-50 bg-ink text-paper border border-paper/15 shadow-lg shadow-ink/30"
    >
      <img
        src="/cookie-mascot.png"
        alt=""
        aria-hidden
        className="absolute -top-8 right-3 md:-top-[3.8rem] md:right-4 w-24 md:w-40 h-auto pointer-events-none select-none drop-shadow-[0_4px_12px_rgba(35,32,29,0.35)]"
      />
      <div className="p-5 md:p-6 space-y-4">
        <p className="text-[10px] uppercase tracking-[0.22em] text-paper/55">
          Cookies
        </p>
        <p className="text-sm leading-[1.5] text-paper/85">
          Solo usamos las cookies necesarias para que la web funcione bien.
          Sin seguimiento ni publicidad.{" "}
          <a
            href="/cookies"
            className="underline underline-offset-4 decoration-1 hover:text-woodSoft hover:decoration-woodSoft transition"
          >
            Más información
          </a>
          .
        </p>
        <div className="flex flex-col sm:flex-row gap-2 pt-1">
          <button
            type="button"
            onClick={() => dismiss("accept")}
            className="flex-1 inline-flex items-center justify-center bg-paper text-ink px-5 py-3 text-sm tracking-wide hover:bg-woodSoft transition-colors"
          >
            Aceptar
          </button>
          <button
            type="button"
            onClick={() => dismiss("reject")}
            className="flex-1 inline-flex items-center justify-center border border-paper/35 text-paper px-5 py-3 text-sm tracking-wide hover:bg-paper/10 transition-colors"
          >
            Rechazar
          </button>
        </div>
      </div>
    </div>
  );
}
