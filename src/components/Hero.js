"use client";

import { useRef } from "react";
import Container from "./Container";
import PillButton from "./PillButton";
import StockImg from "./StockImg";
import Badge from "./Badge";

const FACTS = [
  { text: "Soluciones a medida", service: true },
  { text: "+40 años de experiencia" },
  { text: "Gestión de stock", service: true },
  { text: "Trato directo" },
  { text: "Respuesta ágil", service: true },
  { text: "Transporte propio" },
  { text: "Suministro continuo", service: true },
  { text: "Cobertura regional" },
  { text: "Manipulado y preparación", service: true },
  { text: "Entregas bajo demanda" },
  { text: "Flexibilidad operativa", service: true },
  { text: "+2.000 m² de instalaciones" },
  { text: "Logística y suministro", service: true },
  { text: "Stock para clientes" },
];

function HeroFactsTrack({ ariaHidden = false }) {
  return (
    <ul aria-hidden={ariaHidden} className="flex shrink-0 items-center">
      {FACTS.map((f, i) => (
        <li key={`${f.text}-${i}`} className="flex items-center whitespace-nowrap">
          <span className="px-6 md:px-9 text-[11px] md:text-[13px] uppercase tracking-[0.2em] font-medium text-ink">
            {f.text}
          </span>
          <span aria-hidden className="h-[6px] w-[6px] shrink-0 rotate-45 bg-wood/50" />
        </li>
      ))}
    </ul>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="hero-parallax relative bg-paper overflow-hidden desk:min-h-[calc(100svh-5rem)] desk:flex desk:flex-col"
    >
      <Container className="pt-10 md:pt-12 pb-10 desk:pb-6 desk:flex-1 desk:flex desk:flex-col desk:justify-center">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-8 md:gap-y-12 items-start">
          <div className="col-span-12 desk:col-span-5 space-y-5 md:space-y-7 text-center desk:text-left">
            <p className="eyebrow">
              Soluciones de embalaje · Logística · Gestión de stock
            </p>
            <h1 className="font-display font-medium text-4xl md:text-[4rem] 2xl:text-[4.5rem] tracking-tighter leading-[1.02] text-balance">
              Embalaje de cartón ondulado
              <span className="block italic text-wood">y soluciones de suministro.</span>
            </h1>
            <p className="text-base text-inkSoft text-pretty max-w-[34rem] leading-[1.5] mx-auto desk:mx-0">
              Ayudamos a empresas industriales y logísticas a optimizar su
              embalaje y su suministro con soluciones a medida de cada producto
              y cada operativa.
            </p>
            <div className="flex items-start gap-4 max-w-[34rem] mx-auto desk:mx-0 pt-1">
              <span aria-hidden className="hidden desk:block h-px w-10 bg-wood mt-[0.95rem] shrink-0" />
              <p className="font-display text-lg md:text-xl tracking-tight leading-[1.25] text-ink text-balance">
                Nos adaptamos a tu forma de trabajar.{" "}
                <span className="italic text-wood">Hacemos que todo encaje.</span>
              </p>
            </div>
            <div className="pt-2 flex flex-wrap items-center justify-center desk:justify-start gap-x-5 gap-y-3">
              <PillButton contact>¿Hablamos?</PillButton>
              <a
                href="#servicios"
                className="btn-outline gap-2"
              >
                Ver servicios →
              </a>
            </div>
          </div>

          <div className="col-span-12 desk:col-span-7 desk:col-start-6 relative aspect-[3/2] max-[767px]:aspect-square desk:aspect-square overflow-hidden">
            {/* Imagen base: nave. Su caja es SOLO el rectángulo que envuelve su
                cuña izquierda (de 0 a 68% del ancho), no el bloque entero, para
                que object-cover no gaste foto bajo la máscara del cartón.
                El clip va relativo a esa caja del 68%. */}
            <div
              className="absolute left-0 top-0 h-full w-[68%] overflow-hidden"
              style={{ clipPath: "polygon(0 0, 100% 0, 73.5% 100%, 0 100%)" }}
            >
              <StockImg
                src="/img/cliente/01.webp"
                srcTablet="/img/cliente/01-tablet.webp"
                alt="Nave de RM Dislovall con palets envueltos en Sentmenat"
                className="object-right"
                w={1400}
                q={85}
              />
            </div>
            {/* Cuña diagonal: cartón ondulado. Caja = rectángulo de su cuña
                derecha (de 50% a 100% del ancho). Clip relativo a esa caja. */}
            <div
              className="absolute right-0 top-0 h-full w-[50%] overflow-hidden"
              style={{ clipPath: "polygon(36% 0, 100% 0, 100% 100%, 0 100%)" }}
            >
              <StockImg
                src="/img/cliente/02.webp"
                alt="Detalle de planchas de cartón ondulado"
                className="object-center"
                w={1200}
                q={85}
              />
            </div>
            {/* Filo fino color paper sobre la diagonal, para un corte limpio */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none bg-paper"
              style={{ clipPath: "polygon(68% 0, 69% 0, 51% 100%, 50% 100%)" }}
            />
            <Badge className="absolute z-10 bottom-5 right-5 md:bottom-7 md:right-7 w-28 md:w-32 lg:w-36 aspect-square" />
          </div>
        </div>

      </Container>

      <div className="relative border-t border-border py-5 md:py-6 overflow-hidden md:shrink-0">
        <div className="marquee-track" style={{ animationDuration: "70s" }}>
          <HeroFactsTrack />
          <HeroFactsTrack ariaHidden />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-16 bg-gradient-to-r from-paper to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-16 bg-gradient-to-l from-paper to-transparent"
        />
      </div>
    </section>
  );
}
