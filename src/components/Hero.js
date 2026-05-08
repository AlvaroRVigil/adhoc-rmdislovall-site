"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "./Container";
import PillButton from "./PillButton";
import StockImg from "./StockImg";

const FACTS = [
  { text: "Cartón ondulado a medida", service: true },
  { text: "+40 años de experiencia" },
  { text: "Material auxiliar", service: true },
  { text: "2.000 m² de instalaciones" },
  { text: "Manipulados y procesos", service: true },
  { text: "Flota propia" },
  { text: "Transporte y entregas", service: true },
  { text: "Cobertura nacional" },
  { text: "Almacenaje y gestión de stock", service: true },
  { text: "Urgencias en 24-48h" },
  { text: "Sin mínimos rígidos" },
  { text: "Empresa familiar desde 1984" },
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
      className="hero-parallax relative md:h-auto lg:h-[calc(100svh-5rem)] min-h-[calc(100svh-4rem)] md:min-h-0 lg:min-h-[680px] bg-paper overflow-hidden flex flex-col"
    >
      <Container className="pt-10 md:pt-12 pb-6 flex-1 flex flex-col">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-8 md:gap-y-12 items-start flex-1">
          <div className="col-span-12 md:col-span-7 lg:col-span-6 space-y-5 md:space-y-7 text-center md:text-left">
            <p className="text-[10px] uppercase tracking-[0.24em] text-inkSoft">
              · Fabricación, transporte y stock propios
            </p>
            <h1 className="font-display font-medium text-[clamp(2.25rem,7vw,3rem)] tracking-tighter leading-[1.05] text-balance">
              Embalaje industrial y manipulado
              <span className="block italic text-wood">para empresas y entornos logísticos.</span>
            </h1>
            <p className="text-base text-inkSoft text-pretty max-w-md leading-[1.5] mx-auto md:mx-0">
              Trabajamos con empresas que necesitan soluciones de embalaje
              fiables, adaptadas a su operativa y capaces de responder al
              ritmo real de producción y logística.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-x-5 gap-y-3">
              <PillButton href="#contacto">Pide presupuesto</PillButton>
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 h-11 px-5 text-sm tracking-wide border border-ink text-ink hover:bg-ink hover:text-paper transition-colors"
              >
                Ver servicios →
              </a>
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 lg:col-span-6 relative aspect-[5/4] md:aspect-[4/5] md:max-h-[60vh] lg:max-h-[64vh]">
            <div className="absolute top-0 right-[2%] w-[58%] aspect-[3/4] bg-paperDeep overflow-hidden">
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
          </div>
        </div>

      </Container>

      <div className="relative border-t border-border py-7 md:py-5 overflow-hidden">
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
