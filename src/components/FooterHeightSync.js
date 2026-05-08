"use client";

import { useEffect } from "react";

export default function FooterHeightSync() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    if (!main || !footer) return;

    const sync = () => {
      const h = footer.offsetHeight;
      if (h > 0) main.style.marginBottom = `${h}px`;
    };

    sync();

    const ro = new ResizeObserver(sync);
    ro.observe(footer);
    window.addEventListener("resize", sync);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", sync);
    };
  }, []);

  return null;
}
