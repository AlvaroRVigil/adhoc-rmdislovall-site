"use client";

import { useEffect, useRef } from "react";

// Pon a false (o borra los badges) para quitar las etiquetas de repaso.
// Solo es una ayuda temporal para la revisión:
//   [ Nº de ÁREA (negro) ] [ archivo actual (lima) ]
// El nº de área es la posición del hueco en la página (estable por recarga),
// para poder decir cosas como "en el área 1 va la foto cliente/3".
const DEBUG_LABELS = true;

// `srcMobile`: ruta de la versión recortada para móvil/tablet. Si se pasa,
// se sirve por debajo de `mobileMax` px y la versión `src` (desktop) por encima.
// `mobileMax` se ajusta al breakpoint donde el contenedor cambia de formato
// (p.ej. 1279 para las tarjetas de Servicios, 767 para la rejilla de Trabajos).
export default function StockImg({ src, srcMobile = null, mobileMax = 767, alt, className = "", w = 1200, q = 80, labelPos = "top-1 left-1" }) {
  const isLocal = src.startsWith("/") || src.startsWith("./");
  const finalSrc = isLocal ? src : `${src}?w=${w}&q=${q}&auto=format&fit=crop`;

  // Etiqueta del archivo: las dos últimas partes de la ruta sin extensión.
  // "/img/cliente/04.webp" -> "cliente/04"
  const label = finalSrc
    .split("?")[0]
    .split("/")
    .filter(Boolean)
    .slice(-2)
    .join("/")
    .replace(/\.[a-z0-9]+$/i, "");

  const areaRef = useRef(null);

  // Numera todas las áreas por orden de documento. Cada instancia lo recalcula
  // al montar (idempotente); la última en montar deja la numeración completa.
  useEffect(() => {
    if (!DEBUG_LABELS) return;
    const badges = Array.from(document.querySelectorAll("[data-area-badge]"));
    badges.forEach((b, i) => {
      b.textContent = String(i + 1);
    });
  }, []);

  const imgEl = (
    <img
      src={finalSrc}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`absolute inset-0 w-full h-full object-cover ${className}`}
    />
  );

  return (
    <>
      {srcMobile ? (
        <picture>
          <source media={`(max-width: ${mobileMax}px)`} srcSet={srcMobile} />
          {imgEl}
        </picture>
      ) : (
        imgEl
      )}
      {DEBUG_LABELS && (
        <span className={`absolute ${labelPos} z-50 flex items-stretch font-mono text-[11px] font-bold leading-none pointer-events-none select-none`}>
          <span
            ref={areaRef}
            data-area-badge
            className="px-1.5 py-0.5 bg-black text-lime-400"
          >
            ·
          </span>
          <span className="px-1.5 py-0.5 bg-lime-400 text-black">{label}</span>
        </span>
      )}
    </>
  );
}
