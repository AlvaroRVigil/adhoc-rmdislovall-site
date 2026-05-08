"use client";

import { useState } from "react";
import StockImg from "./StockImg";

const items = [
  {
    title: "Adaptación a necesidades reales",
    body:
      "Cada cliente trabaja con un producto, un volumen y una operativa distintos. El embalaje y el manipulado se diseñan según producción, almacenaje y expedición — no al revés.",
  },
  {
    title: "Respuesta ágil",
    body:
      "Pedidos urgentes, ajustes en plazo o necesidades operativas no previstas: el servicio se gestiona en horas, con flota propia y stock disponible.",
  },
  {
    title: "Relación continua con el cliente",
    body:
      "El servicio se plantea desde la continuidad y la interlocución directa. Una sola persona acompaña el pedido del briefing a la entrega, sin intermediarios.",
  },
];

export default function Material() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 md:h-[100svh] md:max-h-[100svh] items-stretch md:overflow-hidden">
      <div className="bg-paperSoft text-ink flex items-center px-section-x py-section-y md:py-16 order-2 overflow-y-auto">
        <div className="w-full max-w-xl mx-auto space-y-8">
          <div className="space-y-4 text-center md:text-left">
            <p className="text-[10px] uppercase tracking-[0.24em] text-inkSoft">
              · Forma de trabajar
            </p>
            <h2 className="font-display font-medium text-[2.125rem] md:text-4xl tracking-tighter leading-[1.05] text-balance">
              Adaptación, respuesta
              <span className="block italic text-wood">y relación continua.</span>
            </h2>
            <p className="text-base text-inkSoft text-pretty max-w-md pt-2 leading-[1.45] mx-auto md:mx-0">
              Cada empresa trabaja con necesidades distintas de producción,
              almacenaje y expedición. El servicio se plantea desde la
              continuidad, la capacidad de adaptación y una respuesta alineada
              con la operativa de cada cliente.
            </p>
          </div>

          <ul>
            {items.map((it, i) => {
              const isOpen = openIndex === i;
              return (
                <li
                  key={it.title}
                  className="border-t border-border last:border-b"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
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

      <div className="relative bg-wood h-[60vh] md:h-full min-h-[420px] md:min-h-[280px] overflow-hidden order-1 md:order-1">
        <StockImg
          src="https://images.unsplash.com/photo-1553413077-190dd305871c"
          alt="Almacén logístico con estanterías de cajas de cartón"
          w={1800}
          q={85}
        />
      </div>
    </section>
  );
}
