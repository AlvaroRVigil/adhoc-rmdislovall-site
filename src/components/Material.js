"use client";

import { useState } from "react";
import StockImg from "./StockImg";

const items = [
  {
    title: "Respuesta ágil",
    body:
      "Atendemos el teléfono y resolvemos en horas, no en días. Si llamas en horario laboral, te contestamos. Si lo necesitas urgente, lo priorizamos.",
  },
  {
    title: "Flexibilidad real",
    body:
      "Pedidos urgentes, pequeños o estacionales: nos adaptamos. Sin imponer mínimos rígidos ni cláusulas que penalicen tu operativa.",
  },
  {
    title: "Trato directo",
    body:
      "Hablas con la persona que toma la decisión. Sin intermediarios ni equipos comerciales que pasen el caso a producción y se pierdan los detalles.",
  },
  {
    title: "Plazos que se cumplen",
    body:
      "Cuarenta años cumpliendo entregas — esa es la métrica. Lo que decimos en la propuesta es lo que llega a tu planta.",
  },
];

export default function Material() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[100svh] items-stretch md:overflow-hidden">
      <div className="bg-paperSoft text-ink flex items-center px-section-x py-12 md:py-16 order-2 overflow-y-auto">
        <div className="w-full max-w-xl mx-auto md:mx-0 md:mr-auto md:ml-12 lg:ml-20 space-y-8">
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-[0.24em] text-inkSoft">
              · Por qué nosotros
            </p>
            <h2 className="font-display font-medium text-3xl md:text-4xl tracking-tighter leading-tight text-balance">
              El estándar
              <span className="block italic text-wood">que no negociamos.</span>
            </h2>
            <p className="text-base text-inkSoft text-pretty max-w-md pt-2 leading-[1.4]">
              No vendemos cajas. Vendemos tranquilidad operativa para empresas
              industriales que no se pueden permitir una incidencia.
            </p>
          </div>

          <ul onMouseLeave={() => setOpenIndex(-1)}>
            {items.map((it, i) => {
              const isOpen = openIndex === i;
              return (
                <li
                  key={it.title}
                  onMouseEnter={() => setOpenIndex(i)}
                  onFocus={() => setOpenIndex(i)}
                  className="border-t border-border last:border-b"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-baseline justify-between gap-8 py-7 md:py-8 text-left"
                  >
                    <h3 className="font-display font-medium text-2xl md:text-3xl tracking-tighter text-balance">
                      {it.title}
                    </h3>
                    <span
                      aria-hidden
                      className={`shrink-0 text-2xl text-inkSoft transition-transform duration-500 ease-out ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className="grid"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      transition:
                        "grid-template-rows 500ms cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    <div className="overflow-hidden">
                      <p
                        className={`pb-7 md:pb-8 pr-12 text-base text-inkSoft text-pretty leading-[1.45] transition-opacity duration-500 ${
                          isOpen ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        {it.body}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="relative bg-wood h-[40vh] md:h-full min-h-[280px] overflow-hidden order-1 md:order-1">
        <StockImg
          src="https://images.unsplash.com/photo-1770354992725-41c4acac94eb"
          alt="Detalle de la fibra de cartón ondulado"
          w={1800}
          q={85}
        />
      </div>
    </section>
  );
}
