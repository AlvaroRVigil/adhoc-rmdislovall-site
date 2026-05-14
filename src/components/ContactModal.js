"use client";

import { useEffect } from "react";

export default function ContactModal({ open, onClose }) {
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

              <form className="space-y-5 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
                  <label className="block">
                    <span className="sr-only">Nombre</span>
                    <input className="field-dark" type="text" name="nombre" placeholder="Nombre" required />
                  </label>
                  <label className="block">
                    <span className="sr-only">Empresa</span>
                    <input className="field-dark" type="text" name="empresa" placeholder="Empresa" />
                  </label>
                  <label className="block">
                    <span className="sr-only">Teléfono</span>
                    <input className="field-dark" type="tel" name="telefono" placeholder="Teléfono" required />
                  </label>
                  <label className="block">
                    <span className="sr-only">Email</span>
                    <input className="field-dark" type="email" name="email" placeholder="Email (opcional)" />
                  </label>
                </div>
                <label className="block">
                  <span className="sr-only">Mensaje</span>
                  <textarea
                    className="textarea-dark"
                    rows={4}
                    name="mensaje"
                    placeholder="Cuéntanos qué necesitas — producto, volumen, plazo"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
