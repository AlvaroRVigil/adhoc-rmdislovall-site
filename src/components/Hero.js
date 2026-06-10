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
        const range = 7 + (i % 3) * 2;
        const dir = i % 2 === 0 ? 1 : -1;
        gsap.set(img, { scale: 1.15, yPercent: -range * dir });
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

          <div className="col-span-12 desk:col-span-6 desk:col-start-7 relative aspect-[5/4] md:aspect-[16/10] md:w-full md:max-w-[40rem] md:justify-self-center desk:max-w-none desk:w-auto desk:justify-self-auto desk:aspect-[4/5] desk:h-[76vh] desk:max-h-none">
            <div className="absolute top-0 left-0 md:left-[2%] w-[60%] aspect-[4/3] bg-paperDeep overflow-hidden desk:left-auto desk:right-0 desk:w-[60%] desk:aspect-[3/4]">
              <StockImg
                src="/img/cliente/6.webp"
                alt="Almacén de RM Dislovall con carretilla y cajas paletizadas"
                w={1400}
                q={85}
              />
              <span aria-hidden className="absolute top-2 left-2 z-[60] inline-flex items-center justify-center min-w-[34px] h-[26px] px-2 bg-[#16a34a] text-paper text-[11px] font-mono font-bold tracking-wider leading-none pointer-events-none">#1</span>
            </div>
            <div className="absolute bottom-[14%] left-[10%] w-[28%] aspect-square bg-woodSoft overflow-hidden desk:bottom-auto desk:top-[22%] desk:left-[18%] desk:w-[44%]">
              <img
                src="/img/cliente/3.webp"
                alt="Detalle de planchas de cartón ondulado"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span aria-hidden className="absolute top-2 left-2 z-[60] inline-flex items-center justify-center min-w-[34px] h-[26px] px-2 bg-wood text-paper text-[11px] font-mono font-bold tracking-wider leading-none pointer-events-none">#2</span>
            </div>
            <div className="absolute bottom-0 right-[10%] w-[42%] md:w-[33%] md:bottom-[6%] md:right-[12%] aspect-[3/4] bg-wood overflow-hidden desk:w-[42%] desk:bottom-[10%] desk:left-0 desk:right-auto">
              <StockImg
                src="/img/cliente/2.webp"
                alt="Fachada de la nave de RM Dislovall en Sentmenat"
                w={900}
                q={85}
              />
              <span aria-hidden className="absolute top-2 left-2 z-[60] inline-flex items-center justify-center min-w-[34px] h-[26px] px-2 bg-wood text-paper text-[11px] font-mono font-bold tracking-wider leading-none pointer-events-none">#3</span>
            </div>
            <Badge className="absolute z-10 top-[12%] right-[4%] w-24 sm:w-28 md:w-32 lg:w-36 aspect-square desk:top-[70%] desk:right-auto desk:left-1/2 desk:-translate-x-1/2 desk:-translate-y-1/2" />
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
