"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "./Container";
import PillButton from "./PillButton";
import StockImg from "./StockImg";

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
      className="hero-parallax relative h-[calc(100svh-4rem)] md:h-[calc(100svh-5rem)] min-h-[600px] bg-paper overflow-hidden flex flex-col"
    >
      <Container className="pt-10 md:pt-12 pb-6 flex-1 flex flex-col">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-8 md:gap-y-12 items-start flex-1">
          <div className="col-span-12 md:col-span-7 lg:col-span-6 space-y-5 md:space-y-7">
            <p className="text-[10px] uppercase tracking-[0.24em] text-inkSoft">
              · Expertos en embalaje de cartón ondulado
            </p>
            <h1 className="font-display font-medium text-[clamp(1.875rem,4.6vw,3rem)] tracking-tighter leading-[1.1] text-balance">
              Embalaje industrial y manipulado
              <span className="block italic text-wood">para empresas y entornos logísticos.</span>
            </h1>
            <p className="text-base text-inkSoft text-pretty max-w-md leading-[1.5]">
              Trabajamos con empresas que necesitan soluciones de embalaje
              fiables, adaptadas a su operativa y capaces de responder al
              ritmo real de producción y logística.
            </p>
            <div className="pt-2">
              <PillButton href="#nosotros">Conócenos</PillButton>
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 lg:col-span-6 relative aspect-[5/4] md:aspect-[4/5]">
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
                src="https://images.unsplash.com/photo-1770354992725-41c4acac94eb"
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

        <div className="mt-6 md:mt-8 border-t border-border pt-4 md:pt-6 grid grid-cols-2 md:grid-cols-4 gap-y-3 md:gap-y-4 gap-x-4 md:gap-x-8 text-[10px] uppercase tracking-[0.22em] md:tracking-[0.24em] text-inkSoft">
          <div><span className="font-mono text-ink mr-2 text-sm">01</span> +40 años</div>
          <div><span className="font-mono text-ink mr-2 text-sm">02</span> 2.000 m² de almacén</div>
          <div><span className="font-mono text-ink mr-2 text-sm">03</span> Transporte propio</div>
          <div><span className="font-mono text-ink mr-2 text-sm">04</span> Empresa familiar</div>
        </div>
      </Container>
    </section>
  );
}
