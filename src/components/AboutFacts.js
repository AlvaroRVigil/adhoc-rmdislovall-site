"use client";

import { useEffect, useRef, useState } from "react";

// Datos clave de "Quiénes somos". En móvil se muestran como carrusel
// horizontal (swipe) para no comerse tanta altura; en md+ vuelven al grid.
const facts = [
  { k: "Experiencia", v: "+40 años en el sector" },
  { k: "Instalaciones", v: "+2.000 m²" },
  { k: "Cobertura", v: "Cataluña y resto de España" },
  { k: "Soluciones integradas", v: "Diseño de embalaje, Suministro, Manipulado y Logística" },
  { k: "Respuesta", v: "Ágil ante urgencias" },
  { k: "Modelo", v: "Empresa familiar, interlocución directa" },
];

export default function AboutFacts() {
  const scrollerRef = useRef(null);
  const dotsRef = useRef(null);
  const rafRef = useRef(0);
  const activeRef = useRef(0);
  const loopRef = useRef(0);
  const cycleStartRef = useRef(0);
  const visibleRef = useRef(false);
  const [active, setActive] = useState(0);

  const AUTOPLAY_MS = 4500;

  const goTo = (idx) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const c = scroller.querySelector(`[data-fact="${idx}"]`);
    if (c) {
      scroller.scrollTo({
        left: c.offsetLeft - (scroller.clientWidth - c.clientWidth) / 2,
        behavior: "smooth",
      });
    }
  };

  const onScroll = (e) => {
    const scroller = e.currentTarget;
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = 0;
      const rect = scroller.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      let best = 0;
      let bestDist = Infinity;
      scroller.querySelectorAll("[data-fact]").forEach((c) => {
        const r = c.getBoundingClientRect();
        const dist = Math.abs(r.left + r.width / 2 - center);
        if (dist < bestDist) {
          bestDist = dist;
          best = Number(c.dataset.fact);
        }
      });
      setActive(best);
      activeRef.current = best;
      // Cualquier reposo del scroll (auto o manual) reinicia el contador
      // del progreso: la barra siempre cuenta desde la card recién centrada.
      cycleStartRef.current = 0;
    });
  };

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const setFill = (pct) => {
      const fill = dotsRef.current?.querySelector("[data-fill]");
      if (fill) fill.style.width = `${pct}%`;
    };

    // Bucle de autoplay + barra de progreso. Avanza al llegar a AUTOPLAY_MS
    // y pinta el relleno del dot activo en cada frame (sin re-render).
    const loop = (now) => {
      if (!cycleStartRef.current) cycleStartRef.current = now;
      let elapsed = now - cycleStartRef.current;
      if (elapsed >= AUTOPLAY_MS) {
        goTo((activeRef.current + 1) % facts.length);
        cycleStartRef.current = now;
        elapsed = 0;
      }
      setFill(Math.min(100, (elapsed / AUTOPLAY_MS) * 100));
      loopRef.current = requestAnimationFrame(loop);
    };

    const startLoop = () => {
      if (loopRef.current) return;
      cycleStartRef.current = 0;
      loopRef.current = requestAnimationFrame(loop);
    };
    const stopLoop = () => {
      if (loopRef.current) cancelAnimationFrame(loopRef.current);
      loopRef.current = 0;
      setFill(0);
    };

    const isCarousel = () => window.matchMedia("(max-width: 767px)").matches;
    const sync = () => {
      if (visibleRef.current && isCarousel()) startLoop();
      else stopLoop();
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
        sync();
      },
      { threshold: 0.4 }
    );
    io.observe(scroller);
    window.addEventListener("resize", sync);
    return () => {
      io.disconnect();
      window.removeEventListener("resize", sync);
      stopLoop();
    };
  }, []);

  return (
    <>
      {/* Móvil / tablet pequeño: carrusel horizontal con dots */}
      <div className="md:hidden mt-10">
        <dl
          ref={scrollerRef}
          onScroll={onScroll}
          className="flex items-stretch gap-3 overflow-x-auto snap-x snap-mandatory -mx-section-x px-section-x overscroll-x-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {facts.map((f, i) => (
            <div
              key={f.k}
              data-fact={i}
              className="snap-center shrink-0 w-[80%] flex flex-col items-center justify-center gap-4 border border-border bg-paperSoft/40 px-5 py-7 text-center"
            >
              <dt className="order-1 text-[10px] uppercase tracking-[0.24em] text-inkSoft">
                {f.k}
              </dt>
              <span aria-hidden className="order-2 w-10 border-t border-ink/20" />
              <dd className="order-3 font-display font-medium text-xl leading-[1.15] tracking-tight text-ink text-balance">
                {f.v}
              </dd>
            </div>
          ))}
        </dl>

        <div ref={dotsRef} className="flex items-center justify-center gap-2 mt-6">
          {facts.map((f, i) => (
            <button
              key={f.k}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ir al dato ${i + 1}`}
              aria-current={i === active}
              className={`relative h-1.5 rounded-full overflow-hidden transition-all duration-300 ease-out ${
                i === active ? "w-7 bg-ink/15" : "w-1.5 bg-ink/20 hover:bg-ink/35"
              }`}
            >
              {i === active && (
                <span
                  data-fill
                  aria-hidden
                  className="absolute inset-y-0 left-0 bg-wood rounded-full"
                  style={{ width: "0%" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* md+: grid (sin cambios respecto al original) */}
      <dl className="hidden md:grid grid-cols-2 mt-12 border-t border-border">
        {facts.map((f, i) => {
          const classes = [
            "py-7 text-left",
            i % 2 !== 0 ? "border-l border-border pl-8" : "",
            i % 2 === 0 ? "pr-8" : "",
            i >= 2 ? "border-t border-border" : "",
          ]
            .filter(Boolean)
            .join(" ");
          return (
            <div key={f.k} className={classes}>
              <dt className="text-[10px] uppercase tracking-[0.22em] text-inkSoft mb-4">
                {f.k}
              </dt>
              <dd className="font-display font-medium text-base tracking-tight leading-[1.2] text-ink text-balance">
                {f.v}
              </dd>
            </div>
          );
        })}
      </dl>
    </>
  );
}
