"use client";

import { useState } from "react";
import StockImg from "./StockImg";

const items = [
  {
    title: "Adaptación a necesidades reales",
    body:
      "Cada cliente trabaja con un producto, volumen y operativa distintos. El embalaje y los servicios se diseñan según producción, almacenaje y expedición — no al revés.",
  },
  {
    title: "Respuesta ágil",
    body:
      "Capacidad de reacción ante urgencias, ajustes de entrega y necesidades operativas del cliente.",
  },
  {
    title: "Relación continua con el cliente",
    body:
      "El servicio se plantea desde la continuidad y la interlocución directa. Una sola persona acompaña el pedido desde la primera consulta hasta la entrega.",
  },
];

export default function Material() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="grid grid-cols-1 desk:grid-cols-2 desk:min-h-[100svh] items-stretch">
      <div className="bg-paperSoft text-ink flex items-center px-section-x py-section-y md:py-16 order-2 overflow-y-auto">
        <div className="w-full max-w-xl mx-auto space-y-8">
          <div className="space-y-4 text-center desk:text-left">
            <p className="eyebrow">
              Forma de trabajar
            </p>
            <h2 className="heading-section">
              Adaptación, respuesta
              <span className="block italic text-wood">y relación continua.</span>
            </h2>
            <p className="text-base text-inkSoft text-pretty max-w-md pt-2 leading-[1.45] mx-auto desk:mx-0">
              Cada empresa trabaja con necesidades distintas de producción,
              almacenaje y expedición. El servicio se plantea desde la
              continuidad, la capacidad de adaptación y una atención cercana
              durante todo el suministro.
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

      <div className="relative bg-wood h-[42vh] max-h-[480px] min-h-[300px] mx-section-x desk:mx-0 desk:h-full desk:max-h-none desk:min-h-[280px] overflow-hidden order-1">
        <StockImg
          src="/img/cliente/09.webp"
          alt="Almacén logístico con estanterías de cajas de cartón"
          w={1800}
          q={85}
        />      </div>
    </section>
  );
}
