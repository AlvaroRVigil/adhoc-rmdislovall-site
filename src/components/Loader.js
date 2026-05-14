"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [stage, setStage] = useState("entering");

  useEffect(() => {
    if (typeof window === "undefined") return;
    let enterRaf;
    let liftTimer;
    let goneTimer;
    enterRaf = requestAnimationFrame(() => {
      enterRaf = requestAnimationFrame(() => setStage("visible"));
    });
    const reveal = () => {
      liftTimer = setTimeout(() => setStage("lifting"), 650);
      goneTimer = setTimeout(() => setStage("gone"), 1900);
    };
    if (document.readyState === "complete") {
      reveal();
    } else {
      window.addEventListener("load", reveal, { once: true });
    }
    return () => {
      if (enterRaf) cancelAnimationFrame(enterRaf);
      clearTimeout(liftTimer);
      clearTimeout(goneTimer);
      window.removeEventListener("load", reveal);
    };
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (stage === "visible" || stage === "lifting") {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [stage]);

  if (stage === "gone") return null;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[200] bg-paperDeep flex items-center justify-center"
      style={{
        transform: stage === "lifting" ? "translateY(-100%)" : "translateY(0)",
        transition: "transform 1100ms cubic-bezier(0.7, 0, 0.3, 1)",
        willChange: "transform",
      }}
    >
      <img
        src="/brand/logo-horizontal.svg"
        alt=""
        width={1000}
        height={217}
        className="w-44 md:w-56 h-auto"
        style={{
          opacity: stage === "visible" ? 1 : 0,
          transform:
            stage === "entering"
              ? "translateY(14px)"
              : stage === "lifting"
              ? "translateY(-14px)"
              : "translateY(0)",
          transition:
            "opacity 600ms ease-out, transform 800ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />
    </div>
  );
}
