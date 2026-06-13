"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".hero-parallax img");
      items.forEach((img, i) => {
        // Recorrido pequeño + escala mínima para que el parallax no recorte
        // (haga "zoom") las fotos. La escala solo necesita cubrir el viaje:
        // overflow por lado = (scale-1)/2 ≥ range% · scale.
        const range = 2 + (i % 3) * 1;
        const dir = i % 2 === 0 ? 1 : -1;
        gsap.set(img, { scale: 1.08, yPercent: -range * dir });
        gsap.to(img, {
          yPercent: range * dir,
          ease: "none",
          scrollTrigger: {
            trigger: img.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero-parallax relative bg-paper overflow-hidden desk:min-h-[calc(100svh-5rem)] desk:flex desk:flex-col"
    >
      <Container className="pt-10 md:pt-12 pb-10 desk:pb-6 desk:flex-1 desk:flex desk:flex-col desk:justify-center">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-8 md:gap-y-12 items-start desk:items-stretch">
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

          <div className="col-span-12 desk:col-span-7 desk:col-start-6 relative aspect-[4/3] sm:aspect-[16/10] desk:aspect-auto desk:h-auto desk:min-h-[76vh] overflow-hidden">
            {/* Imagen base: nave (llena todo el bloque) */}
            <div className="absolute inset-0 overflow-hidden">
              <StockImg
                src="/img/cliente/01.webp"
                alt="Nave de RM Dislovall con palets envueltos en Sentmenat"
                w={1400}
                q={85}
              />
            </div>
            {/* Cuña diagonal: cartón ondulado en primer plano, encima */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: "polygon(62% 0, 100% 0, 100% 100%, 38% 100%)" }}
            >
              <StockImg
                src="/img/cliente/02.webp"
                alt="Detalle de planchas de cartón ondulado"
                w={1200}
                q={85}
                labelPos="top-1 right-1"
              />
            </div>
            {/* Filo fino color paper sobre la diagonal, para un corte limpio */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none bg-paper"
              style={{ clipPath: "polygon(62% 0, 63.4% 0, 39.4% 100%, 38% 100%)" }}
            />
            <Badge className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 md:w-32 lg:w-36 aspect-square" />
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
