"use client";

import { useState } from "react";
import Container from "./Container";

const faqs = [
  {
    q: "¿Cuál es el pedido mínimo?",
    a: "Trabajamos según el tipo de embalaje, medidas y volumen de cada proyecto. Podemos asumir tanto tiradas pequeñas como grandes volúmenes, siempre dentro de unos mínimos de fabricación según formato y cantidad.",
  },
  {
    q: "¿Qué plazo de entrega manejáis?",
    a: "Depende del tipo de embalaje y del servicio contratado. En primeras producciones, el plazo habitual es de unos 10 días laborables. Una vez el producto ya está en marcha, normalmente trabajamos sobre 7 días. Para clientes con servicio de stock, hacemos entregas en 24–48 h según disponibilidad.",
  },
  {
    q: "¿Hacéis envíos fuera de Cataluña?",
    a: "Sí. Trabajamos principalmente en Cataluña con transporte propio y también realizamos envíos al resto de España mediante red logística.",
  },
  {
    q: "¿Podéis resolver urgencias?",
    a: "Sí, dentro de lo que permite la planificación. Si el material está en stock, podemos preparar entregas rápidas; si hay que producirlo, priorizamos el pedido. Los plazos y costes de transporte se ajustan según destino y servicio.",
  },
  {
    q: "¿Cómo funciona el proceso de presupuesto?",
    a: "Nos indicas el tipo de embalaje, medidas, calidad, cantidad y plazo necesario por teléfono o formulario. Preparamos una propuesta clara con formato, precio y plazo de entrega según cada proyecto.",
  },
  {
    q: "¿El cartón ondulado es reciclable?",
    a: "Sí. El cartón ondulado es un material reciclable y reutilizable, ampliamente utilizado por su resistencia, versatilidad y menor impacto ambiental frente a otros materiales de embalaje.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="py-section-y bg-paperSoft border-t border-border"
    >
      <Container>
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-8 items-start">
          <div className="col-span-12 desk:col-span-4 space-y-4 desk:sticky desk:top-28 text-center desk:text-left">
            <p className="eyebrow">Preguntas frecuentes</p>
            <h2 id="faq-title" className="heading-section">
              Las dudas más comunes,
              <span className="block italic text-wood">resueltas.</span>
            </h2>
            <p className="text-base text-inkSoft text-pretty max-w-sm mx-auto desk:mx-0">
              Si tu pregunta no está aquí, llámanos al 937 153 920 o
              escríbenos. Contestamos en horas, no en días.
            </p>
          </div>

          <ul className="col-span-12 desk:col-span-7 desk:col-start-6">
            {faqs.map((f, i) => {
              const isOpen = openIndex === i;
              return (
                <li
                  key={f.q}
                  className="group/faq border-t border-border last:border-b"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-start justify-between gap-8 py-6 md:py-7 text-left"
                  >
                    <div className="flex items-start gap-6">
                      <span className="font-mono text-xs text-inkSoft tracking-widest shrink-0 mt-1">
                        0{i + 1}
                      </span>
                      <h3 className="font-display text-lg md:text-xl text-balance">
                        {f.q}
                      </h3>
                    </div>
                    <span
                      aria-hidden
                      className={`shrink-0 text-2xl text-inkSoft transition-transform duration-500 ease-out md:group-hover/faq:rotate-45 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:group-hover/faq:grid-rows-[1fr] ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p
                        className={`pb-7 pl-12 pr-12 md:pr-16 text-base text-inkSoft text-pretty transition-opacity duration-500 md:group-hover/faq:opacity-100 ${
                          isOpen ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        {f.a}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
