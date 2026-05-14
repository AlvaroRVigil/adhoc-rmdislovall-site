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
      className="hero-parallax relative bg-paper overflow-hidden xl:h-[calc(100svh-5rem)] xl:flex xl:flex-col"
    >
      <Container className="pt-10 md:pt-12 pb-10 xl:pb-6 xl:flex-1 xl:min-h-0 xl:flex xl:flex-col xl:justify-center">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-8 md:gap-y-12 items-start">
          <div className="col-span-12 xl:col-span-5 space-y-5 md:space-y-7 text-center xl:text-left">
            <p className="eyebrow">
              Fabricación, transporte y stock propios
            </p>
            <h1 className="font-display font-medium text-4xl md:text-5xl lg:text-6xl xl:text-5xl 2xl:text-[4.5rem] tracking-tighter leading-[1.02] text-balance">
              Embalaje industrial
              <span className="block italic text-wood">para empresas y entornos logísticos.</span>
            </h1>
            <p className="text-base text-inkSoft text-pretty max-w-md leading-[1.5] mx-auto xl:mx-0">
              Trabajamos con empresas industriales y logísticas que necesitan
              soluciones de embalaje fiables, adaptadas a su operativa y
              preparadas para responder al ritmo real de producción,
              almacenaje y expedición.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center xl:justify-start gap-x-5 gap-y-3">
              <PillButton href="#contacto">Pide presupuesto</PillButton>
              <a
                href="#servicios"
                className="btn-outline gap-2"
              >
                Ver servicios →
              </a>
            </div>
          </div>

          <div className="col-span-12 xl:col-span-6 xl:col-start-7 relative aspect-[5/4] xl:aspect-[4/5] xl:h-[76vh] xl:max-h-none">
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
