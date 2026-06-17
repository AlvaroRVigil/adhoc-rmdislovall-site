"use client";

import { useEffect, useRef } from "react";

// Pon a false (o borra los badges) para quitar las etiquetas de repaso.
// Solo es una ayuda temporal para la revisión:
//   [ Nº de ÁREA (negro) ] [ archivo actual (lima) ]
// El nº de área es la posición del hueco en la página (estable por recarga),
// para poder decir cosas como "en el área 1 va la foto cliente/3".
const DEBUG_LABELS = true;

// Sistema de 3 tiers por franjas fijas:
//   - `src` (normal): base, se usa en todas las pantallas salvo override.
//   - `srcTablet`: sustituye SOLO en tablet (768–1279 px).
//   - `srcMobile`: sustituye SOLO en mobile (<768 px).
// Un tier sin variante cae a `src`. P.ej. normal+tablet ⇒ en mobile vuelve a normal.
const MOBILE_MAX = 767; // < 768 = mobile
const TABLET_MIN = 768;
const TABLET_MAX = 1279; // 768–1279 = tablet ; ≥1280 = desktop
export default function StockImg({ src, srcTablet = null, srcMobile = null, alt, className = "", w = 1200, q = 80, labelPos = "top-1 left-1" }) {
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
      {srcTablet || srcMobile ? (
        <picture>
          {srcMobile && (
            <source media={`(max-width: ${MOBILE_MAX}px)`} srcSet={srcMobile} />
          )}
          {srcTablet && (
            <source
              media={`(min-width: ${TABLET_MIN}px) and (max-width: ${TABLET_MAX}px)`}
              srcSet={srcTablet}
            />
          )}
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
