"use client";

import { useEffect, useState } from "react";

export default function ContactModal({ open, onClose }) {
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nombre = (data.get("nombre") || "").toString().trim();
    const empresa = (data.get("empresa") || "").toString().trim();
    const telefono = (data.get("telefono") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const mensaje = (data.get("mensaje") || "").toString().trim();
    const lines = [
      `Nombre: ${nombre}`,
      empresa ? `Empresa: ${empresa}` : null,
      `Teléfono: ${telefono}`,
      `Email: ${email}`,
      "",
      "Mensaje:",
      mensaje,
    ].filter(Boolean);
    const subject = "Nueva solicitud web — RM Dislovall";
    const body = lines.join("\n");
    const href = `mailto:info@rmdislovall.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  };

  const copyPhone = async () => {
    const number = "937 153 920";
    try {
      await navigator.clipboard.writeText(number);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = number;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch {}
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (open) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const onKey = (e) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = previous;
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [open, onClose]);

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-50 transition-opacity duration-300 ease-out ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        className={`absolute inset-0 bg-ink text-woodSoft flex flex-col overflow-hidden transition-transform duration-300 ease-out ${
          open ? "translate-y-0" : "translate-y-4"
        }`}
      >
        <div className="absolute top-4 right-4 md:top-6 md:right-6 z-10">
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="w-11 h-11 inline-flex items-center justify-center border border-woodSoft/25 text-woodSoft hover:bg-woodSoft hover:text-ink transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M6 6 L18 18" />
              <path d="M18 6 L6 18" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="min-h-full flex items-center justify-center px-section-x py-16 md:py-20">
            <div className="w-full max-w-xl mx-auto">
              <div className="text-center mb-8 md:mb-10">
                <p className="eyebrow-dark mb-3">Solicita presupuesto</p>
                <h2 id="contact-modal-title" className="heading-section">
                  Cuéntanos qué necesitas
                  <span className="block italic text-woodSoft/80">y nos ponemos a ello.</span>
                </h2>
              </div>

              <form className="space-y-5 md:space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
                  <label className="block">
                    <span className="sr-only">Nombre</span>
                    <input className="field-dark" type="text" name="nombre" placeholder="Nombre" required />
                  </label>
                  <label className="block">
                    <span className="sr-only">Empresa</span>
                    <input className="field-dark" type="text" name="empresa" placeholder="Empresa (opcional)" />
                  </label>
                  <label className="block">
                    <span className="sr-only">Teléfono</span>
                    <input className="field-dark" type="tel" name="telefono" placeholder="Teléfono" required />
                  </label>
                  <label className="block">
                    <span className="sr-only">Email</span>
                    <input className="field-dark" type="email" name="email" placeholder="Email" required />
                  </label>
                </div>
                <label className="block">
                  <span className="sr-only">Mensaje</span>
                  <textarea
                    className="textarea-dark"
                    rows={4}
                    name="mensaje"
                    placeholder="Cuéntanos qué necesitas — tipo de embalaje, medidas, calidad, cantidad"
                    required
                  />
                </label>
                <p className="text-[11px] text-woodSoft/55 leading-[1.5] text-center">
                  Al enviar aceptas nuestra política de privacidad. Te respondemos
                  en menos de 24 horas laborables.
                </p>
                <button
                  type="submit"
                  className="btn-light w-full h-14 text-base font-medium"
                >
                  Enviar solicitud
                </button>
              </form>

              <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-woodSoft/15 text-center">
                <p className="text-[11px] uppercase tracking-[0.22em] text-woodSoft/55 mb-3">
                  ¿Prefieres llamarnos?
                </p>
                <button
                  type="button"
                  onClick={copyPhone}
                  aria-label="Copiar número de teléfono"
                  className="group relative inline-block font-display text-2xl md:text-3xl tracking-tight text-woodSoft hover:text-wood transition-colors"
                >
                  937 153 920
                  <span
                    aria-live="polite"
                    className={`pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-2 text-[11px] uppercase tracking-[0.22em] transition-opacity duration-200 ${
                      copied ? "opacity-100 text-wood" : "opacity-0 text-woodSoft/55"
                    }`}
                  >
                    Copiado
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
