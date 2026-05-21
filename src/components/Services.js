"use client";

import { useEffect, useId, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "./Container";
import StockImg from "./StockImg";

const items = [
  {
    n: "01",
    Icon: BoxIcon,
    title: "Embalaje de cartón ondulado a medida",
    body:
      "Cajas y embalaje de cartón ondulado adaptados a cada producto, operativa y necesidad de suministro. Trabajamos una amplia variedad de formatos y soluciones.",
    tags: [
      "Cajas y formatos especiales",
      "Tipo box y embalaje industrial",
      "Cajas troqueladas",
      "Separadores e interiores troquelados",
      "Planchas y formatos de cartón",
      "Impresión y personalización",
      "Distintos canales y calidades",
    ],
    closer: "Cada caja se plantea según producto, protección y operativa del cliente.",
    video: "/video/carton-ondulado",
    poster: "/video/carton-ondulado-poster.jpg",
    img: "https://images.unsplash.com/photo-1771848194068-169d817a1d6f",
    alt: "Caja de cartón ondulado a medida",
    sticker: { text: "SERVICIO MÁS VENDIDO ·  ", color: "#9B2F23", icon: "box" },
    wide: true,
  },
  {
    n: "02",
    Icon: BoxesIcon,
    wide: true,
    sticker: { text: "SERVICIO DESTACADO ·  ", color: "#6E5945", icon: "star" },
    title: "Almacenaje y gestión de stock",
    body:
      "Servicio de almacenaje y suministro para clientes con necesidades recurrentes. Disponemos de más de 2.000 m² de instalaciones para gestión de stock, reposición y entregas programadas según la operativa y demanda de cada cliente.",
    tags: [
      "Stock dedicado",
      "Gestión de stock",
      "Entregas recurrentes o bajo demanda",
      "Continuidad de suministro",
      "Capacidad de respuesta",
    ],
    closer: "Suministro continuo adaptado a la operativa de cada cliente.",
    callout: {
      title: "¿Necesitáis más espacio de almacenaje?",
      body: "Gestionamos stock y entregas programadas de material de embalaje, tanto propio como suministrado por el cliente.",
    },
    img: "https://images.unsplash.com/photo-1672552226380-486fe900b322",
    alt: "Almacén con palets de cajas",
  },
  {
    n: "03",
    Icon: TruckIcon,
    title: "Transporte y entregas",
    body:
      "Flota propia para entregas en Cataluña y red logística para el resto del territorio. Cobertura regional como base, con capacidad de respuesta cuando el material está disponible.",
    tags: ["Flota propia", "Cobertura regional", "Red logística complementaria", "Capacidad de respuesta"],
    closer: "Si está en stock, puede salir el mismo día.",
    img: "https://images.unsplash.com/photo-1645736315000-6f788915923b",
    alt: "Carretilla y entregas",
  },
  {
    n: "04",
    Icon: PrepIcon,
    title: "Manipulado y preparación",
    body:
      "Preparamos el material para que llegue listo para su uso, almacenaje o expedición. Un servicio flexible adaptado a la operativa de cada cliente.",
    tags: [
      "Corte y acondicionamiento",
      "Montaje de kits",
      "Encolado de cajas",
      "Manipulaciones especiales",
      "Etiquetado y reempaquetado",
      "Configuración de packs",
      "Paletizado y enfardado",
    ],
    closer: "El material llega listo para usar.",
    img: "https://images.unsplash.com/photo-1772920908589-d6264e5d987f",
    alt: "Procesos de manipulado de cartón",
  },
  {
    n: "05",
    Icon: RollIcon,
    title: "Material auxiliar",
    body:
      "Precinto, film estirable, fleje y consumibles para cierre, paletizado y expedición. Material complementario para centralizar el suministro en un solo proveedor.",
    tags: ["Precinto", "Film estirable", "Fleje", "Consumibles"],
    closer: "Un solo proveedor para embalaje y material auxiliar.",
    img: "https://images.unsplash.com/photo-1709804945989-c8be542e04db",
    alt: "Material auxiliar para embalaje",
  },
];

// Marco común de los iconos de servicio (un icono distinto por servicio).
function IconWrap({ children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4 text-wood shrink-0 mt-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {children}
    </svg>
  );
}

// Cartón ondulado — caja
function BoxIcon() {
  return (
    <IconWrap>
      <path d="M12 22v-9" />
      <path d="M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z" />
      <path d="M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13" />
      <path d="M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z" />
    </IconWrap>
  );
}

// Almacenaje y stock — cajas apiladas
function BoxesIcon() {
  return (
    <IconWrap>
      <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" />
      <path d="m7 16.5-4.74-2.85" />
      <path d="m7 16.5 5-3" />
      <path d="M7 16.5v5.17" />
      <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" />
      <path d="m17 16.5-5-3" />
      <path d="m17 16.5 4.74-2.85" />
      <path d="M17 16.5v5.17" />
      <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" />
      <path d="M12 8 7.26 5.15" />
      <path d="m12 8 4.74-2.85" />
      <path d="M12 13.5V8" />
    </IconWrap>
  );
}

// Transporte y entregas — camión
function TruckIcon() {
  return (
    <IconWrap>
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </IconWrap>
  );
}

// Manipulado y preparación — caja preparada
function PrepIcon() {
  return (
    <IconWrap>
      <path d="m16 16 2 2 4-4" />
      <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0" />
      <path d="m7.5 4.27 9 5.15" />
      <path d="M3.29 7 12 12l8.71-5" />
      <path d="M12 22V12" />
    </IconWrap>
  );
}

// Bombilla — usada en los callouts informativos dentro de las cards.
function BulbIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4 text-wood shrink-0 mt-[2px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

// Material auxiliar — rollo (precinto / film)
function RollIcon() {
  return (
    <IconWrap>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v9c0 1.66 3.1 3 7 3s7-1.34 7-3V6" />
      <path d="M5 10.5c0 1.66 3.1 3 7 3s7-1.34 7-3" />
    </IconWrap>
  );
}

// Sello giratorio reutilizable: texto curvo + icono central, color configurable.
function StarSticker({ text, color, icon = "box" }) {
  const rotRef = useRef(null);
  const arcId = "sticker-" + useId().replace(/[^a-z0-9]/gi, "");

  useEffect(() => {
    // La rotación por scroll vertical solo tiene sentido en desktop, donde
    // el sello está fijo a la derecha de la card. En móvil el sello vive
    // dentro de la card del carrusel y la rotación constante distrae.
    const mql = window.matchMedia("(min-width: 1280px)");
    if (!mql.matches) return;

    let lastY = window.scrollY;
    let rot = 0;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        rot += (window.scrollY - lastY) * 0.18;
        if (rotRef.current) {
          rotRef.current.setAttribute("transform", `rotate(${rot} 100 100)`);
        }
        lastY = window.scrollY;
        raf = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden
      style={{ animation: "sticker-pulse 2.6s ease-in-out infinite" }}
      className="absolute z-20 top-3 right-3 desk:-top-6 desk:-right-6 w-20 h-20 md:w-24 md:h-24 desk:w-28 desk:h-28 pointer-events-none"
    >
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="96" fill="#ECEBE3" stroke={color} strokeWidth="7" />
        <circle cx="100" cy="100" r="44" fill={color} />
        <defs>
          <path
            id={arcId}
            d="M 100,100 m -70,0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
          />
        </defs>
        <g ref={rotRef} transform="rotate(0 100 100)" style={{ willChange: "transform" }}>
          <text
            fill={color}
            textLength="439"
            lengthAdjust="spacing"
            xmlSpace="preserve"
            style={{
              fontFamily: "var(--font-sans), system-ui, sans-serif",
              fontSize: "16.5px",
              fontWeight: 700,
            }}
          >
            <textPath href={`#${arcId}`} startOffset="0">
              {text}
            </textPath>
          </text>
        </g>
        <g
          transform="translate(100 100) scale(1.9) translate(-12 -12)"
          fill="none"
          stroke="#ECEBE3"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {icon === "star" ? (
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
          ) : (
            <>
              <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
              <path d="m3.3 7 8.7 5 8.7-5" />
              <path d="M12 22V12" />
            </>
          )}
        </g>
      </svg>
    </div>
  );
}

export default function Services() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const scrollerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    // El scroll horizontal con pin solo existe en el layout desktop (≥1280px).
    // gsap.matchMedia monta y revierte la animación de forma limpia al cruzar
    // el breakpoint — sin transform residual que desborde en vertical.
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1280px)", () => {
      const track = trackRef.current;
      if (!track) return;

      const getDistance = () =>
        Math.max(0, track.scrollWidth - window.innerWidth);

      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          scrub: true,
          start: "top top",
          end: () => `+=${getDistance()}`,
          invalidateOnRefresh: true,
        },
      });

      const refresh = () => ScrollTrigger.refresh();
      refresh();
      window.addEventListener("load", refresh);
      return () => window.removeEventListener("load", refresh);
    });

    return () => mm.revert();
  }, []);

  // Carrusel móvil/tablet: el dot activo se calcula en cada evento de scroll
  // del scroller, comparando la posición central del viewport del scroller
  // contra el centro de cada card. Más estable que tomar como referencia el
  // borde izquierdo cuando hay scroll-padding o snap-proximity de por medio.
  const rafRef = useRef(0);
  const handleScroll = (e) => {
    const scroller = e.currentTarget;
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = 0;
      const rect = scroller.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      const cards = scroller.querySelectorAll("[data-card-idx]");
      let bestIdx = 0;
      let bestDist = Infinity;
      cards.forEach((c) => {
        const r = c.getBoundingClientRect();
        const cCenter = r.left + r.width / 2;
        const dist = Math.abs(cCenter - center);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = Number(c.dataset.cardIdx);
        }
      });
      setActiveIndex(bestIdx);
    });
  };

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="relative bg-paper overflow-hidden"
    >
      <div className="desk:h-screen desk:flex desk:flex-col">
        <Container className="pt-section-y md:pt-28 pb-2">
          <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-6 items-end">
            <div className="col-span-12 desk:col-span-7 space-y-3 text-center desk:text-left">
              <p className="eyebrow">Servicios</p>
              <h2 className="font-display font-medium text-[2.125rem] md:text-4xl text-balance leading-[1.05] tracking-tighter">
                Todo lo que necesita tu operativa,
                <span className="italic text-wood"> en un solo proveedor.</span>
              </h2>
            </div>
            <p className="col-span-12 desk:col-span-4 desk:col-start-9 text-sm text-inkSoft text-pretty text-center desk:text-left max-w-sm mx-auto desk:mx-0 desk:max-w-none">
              Cinco servicios coordinados desde Sentmenat. Desliza para recorrerlos.
            </p>
          </div>
        </Container>

        <div className="desk:flex-1 desk:flex desk:items-center desk:overflow-hidden desk:pb-[2vh] pb-10 pt-8 desk:pt-0">
          <div
            ref={scrollerRef}
            onScroll={handleScroll}
            className="w-full overflow-x-auto snap-x snap-mandatory scroll-pl-section-x scroll-pr-section-x desk:snap-none desk:overflow-visible desk:scroll-pl-0 desk:scroll-pr-0 overscroll-x-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
          <div
            ref={trackRef}
            className="flex flex-row items-stretch gap-4 md:gap-6 desk:gap-8 px-section-x desk:px-0 desk:pl-section-x desk:pr-section-x desk:h-[64vh] will-change-transform"
          >
            {items.map((it, idx) => (
              <article
                key={it.n}
                data-card-idx={idx}
                className={`snap-start relative shrink-0 w-[82%] sm:w-[74%] md:w-[64%] desk:h-full bg-paperSoft border border-border flex flex-col desk:grid desk:grid-cols-2 ${
                  it.wide ? "desk:w-[80vw]" : "desk:w-[56vw]"
                }`}
              >
                {it.sticker && (
                  <StarSticker
                    text={it.sticker.text}
                    color={it.sticker.color}
                    icon={it.sticker.icon}
                  />
                )}

                <div className="relative bg-paperDeep h-[22vh] min-h-[150px] max-h-[230px] sm:h-[26vh] md:h-[30vh] desk:h-auto desk:min-h-0 desk:max-h-none overflow-hidden">
                  {it.video ? (
                    <video
                      className="absolute inset-0 w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      poster={it.poster}
                      aria-label={it.alt}
                    >
                      <source src={`${it.video}.webm`} type="video/webm" />
                      <source src={`${it.video}.mp4`} type="video/mp4" />
                    </video>
                  ) : (
                    <StockImg src={it.img} alt={it.alt} w={1400} />
                  )}

                  {/* Overlay editorial sólo en móvil/tablet: número + título sobre la imagen
                      para que el contenido textual no tenga que volver a renderizarlos
                      debajo. En desktop el grid 2 columnas mantiene número y título
                      en la mitad derecha como hasta ahora. */}
                  <div className="desk:hidden absolute inset-x-0 bottom-0 pt-16 pb-5 px-6 bg-gradient-to-t from-black/75 via-black/45 to-transparent">
                    <span className="font-mono text-[11px] tracking-widest text-paper/80">
                      {it.n}
                    </span>
                    <h3 className="mt-1 font-display font-medium text-paper text-2xl leading-[1] tracking-tighter text-balance">
                      {it.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col gap-4 overflow-hidden min-h-0">
                  {/* Número + título sólo visibles en desktop (en móvil viven sobre la imagen).
                      Se alinean en la misma línea base para ahorrar altura. */}
                  <h3 className="hidden desk:flex items-baseline gap-3 font-display font-medium text-2xl md:text-3xl leading-[1] tracking-tighter text-balance">
                    <span className="font-mono font-normal text-xs tracking-widest text-inkSoft">
                      {it.n}
                    </span>
                    <span>{it.title}</span>
                  </h3>

                  <p
                    style={{ lineHeight: 1.2 }}
                    className="text-sm md:text-base text-inkSoft text-pretty"
                  >
                    {it.body}
                  </p>

                  <ul className="border-t border-border text-ink">
                    {it.tags.map((t) => (
                      <li
                        key={t}
                        className="flex items-start gap-3 py-2 md:py-2.5 border-b border-border/60 last:border-b-0 text-[15px] md:text-base font-normal"
                      >
                        <it.Icon />
                        <span className="leading-[1.25]">{t}</span>
                      </li>
                    ))}
                  </ul>

                  {it.callout && (
                    <div className="mt-auto bg-paper px-4 py-3 flex items-start gap-2.5">
                      <BulbIcon />
                      <div className="space-y-1 -mt-[1px]">
                        <p className="text-[13px] md:text-[13.5px] font-medium text-ink leading-[1.25]">
                          {it.callout.title}
                        </p>
                        <p className="text-[13px] md:text-[13.5px] text-inkSoft leading-[1.45] text-pretty">
                          {it.callout.body}
                        </p>
                      </div>
                    </div>
                  )}

                  {it.closer && (
                    <p
                      style={{ lineHeight: 1.05 }}
                      className={`font-display italic text-base md:text-lg text-wood text-pretty pt-4 ${
                        it.callout ? "" : "mt-auto"
                      }`}
                    >
                      {it.closer}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
          </div>
        </div>

        <div className="desk:hidden flex items-center justify-center gap-3 px-section-x pb-section-y">
          <span className="font-mono text-xs tracking-widest text-ink tabular-nums">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
          <div className="relative h-[2px] flex-1 max-w-[180px] bg-ink/15 overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-ink transition-[width] duration-300 ease-out"
              style={{ width: `${((activeIndex + 1) / items.length) * 100}%` }}
            />
          </div>
          <span className="font-mono text-xs tracking-widest text-inkSoft tabular-nums">
            {String(items.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
