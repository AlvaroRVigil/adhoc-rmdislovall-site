"use client";

import { useEffect, useRef, useState } from "react";

const INVERT_SELECTOR = ".bg-wood, .bg-accent, [data-cursor-invert]";

export default function Cursor() {
  const ref = useRef(null);
  const [inverted, setInverted] = useState(false);
  // El cursor personalizado se muestra según el tipo de puntero (ratón), no
  // según el ancho de pantalla. Así nunca se "pierde" en ventanas de escritorio
  // estrechas; en táctil (móvil/tablet) simplemente no aparece.
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    setActive(true);
    document.documentElement.classList.add("cursor-none");

    let raf = 0;
    let nx = -100;
    let ny = -100;
    const move = (e) => {
      nx = e.clientX;
      ny = e.clientY;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          if (ref.current) {
            ref.current.style.left = nx + "px";
            ref.current.style.top = ny + "px";
          }
          raf = 0;
        });
      }
    };
    const over = (e) => {
      const t = e.target;
      const hit = t && t.closest && t.closest(INVERT_SELECTOR);
      setInverted(Boolean(hit));
    };
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    return () => {
      document.documentElement.classList.remove("cursor-none");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 z-[100] w-4 h-4 rounded-full transition-colors duration-200 ease-out ${
        active ? "block" : "hidden"
      } ${inverted ? "bg-paper" : "bg-wood"}`}
      style={{ left: "-100px", top: "-100px" }}
    />
  );
}
