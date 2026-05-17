"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "./Container";
import PillButton from "./PillButton";
import StockImg from "./StockImg";
import Badge from "./Badge";

const FACTS = [
  { text: "Cartón ondulado a medida", service: true },
  { text: "+40 años de experiencia" },
  { text: "Almacenaje y gestión de stock", service: true },
  { text: "+2.000 m² de instalaciones" },
  { text: "Manipulado y preparación", service: true },
  { text: "Transporte propio" },
  { text: "Transporte y entregas", service: true },
  { text: "Cobertura regional" },
  { text: "Material auxiliar", service: true },
  { text: "Respuesta ágil" },
  { text: "Suministro continuo", service: true },
  { text: "Trato directo" },
];

function HeroFactsTrack({ ariaHidden = false }) {
  return (
    <ul
      aria-hidden={ariaHidden}
      className="flex shrink-0 items-center"
    >
      {FACTS.map((f, i) => (
        <li key={`${f.text}-${i}`} className="flex items-center whitespace-nowrap">
          <span
            className={`px-7 md:px-12 text-[11px] md:text-base uppercase tracking-[0.18em] md:tracking-[0.22em] text-ink ${
              f.service ? "font-bold" : "font-medium"
            }`}
          >
            {f.text}
          </span>
          <span aria-hidden className="text-wood/70 font-light text-lg md:text-3xl select-none">
            /
          </span>
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
      className="hero-parallax relative bg-paper overflow-hidden desk:h-[calc(100svh-5rem)] desk:flex desk:flex-col"
    >
      <Container className="pt-10 md:pt-12 pb-10 desk:pb-6 desk:flex-1 desk:min-h-0 desk:flex desk:flex-col desk:justify-center">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-8 md:gap-y-12 items-start">
          <div className="col-span-12 desk:col-span-5 space-y-5 md:space-y-7 text-center desk:text-left">
            <p className="eyebrow">
              Soluciones de embalaje · Logística · Gestión de stock
            </p>
            <h1 className="font-display font-medium text-4xl md:text-5xl lg:text-6xl desk:text-5xl 2xl:text-[4.5rem] tracking-tighter leading-[1.02] text-balance">
              Embalaje de cartón ondulado
              <span className="block italic text-wood">y soluciones de suministro.</span>
            </h1>
            <p className="text-base text-inkSoft text-pretty max-w-md leading-[1.5] mx-auto desk:mx-0">
              Ayudamos a empresas industriales y logísticas a optimizar su
              embalaje y su suministro con soluciones a medida de cada producto
              y cada operativa. Nos adaptamos a tu forma de trabajar, no al revés.
            </p>
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

          <div className="col-span-12 desk:col-span-6 desk:col-start-7 relative aspect-[5/4] desk:aspect-[4/5] desk:h-[76vh] desk:max-h-none">
            <div className="absolute top-0 right-0 w-[60%] aspect-[3/4] bg-paperDeep overflow-hidden">
              <StockImg
                src="https://images.unsplash.com/photo-1773125929765-99d4d67e831d"
                alt="Cajas de cartón ondulado en almacén de RM Dislovall"
                w={1400}
                q={85}
              />
            </div>
            <div className="absolute top-[22%] left-[18%] w-[44%] aspect-square bg-woodSoft overflow-hidden">
              <StockImg
                src="https://images.unsplash.com/photo-1591648241334-ce4ae86f3e9c"
                alt="Detalle de fibra de cartón ondulado"
                w={900}
                q={85}
              />
            </div>
            <div className="absolute bottom-[10%] left-0 w-[42%] aspect-[3/4] bg-wood overflow-hidden">
              <StockImg
                src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866"
                alt="Cajas de cartón en estanterías"
                w={900}
                q={85}
              />
            </div>
            <Badge className="absolute z-10 top-[70%] left-1/2 w-24 sm:w-28 md:w-32 lg:w-36 aspect-square -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>

      </Container>

      <div className="relative border-t border-border py-7 md:py-5 overflow-hidden md:shrink-0">
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
