"use client";

import { openContactModal } from "@/lib/contactModal";

export default function PillButton({ href, contact = false, children, dark = true, className = "" }) {
  const base =
    "inline-flex items-center gap-3 pl-2 pr-6 py-2 text-sm tracking-wide transition-colors";
  const variant = dark
    ? "bg-ink text-paper hover:bg-wood"
    : "bg-paper text-ink border border-ink hover:bg-wood hover:text-paper hover:border-wood";
  const inner = (
    <>
      <span
        className={`w-7 h-7 rounded-full flex items-center justify-center ${
          dark ? "bg-paper/15" : "bg-ink/10"
        }`}
        aria-hidden
      >
        <span className="block w-2 h-2 rounded-full bg-current" />
      </span>
      {children}
    </>
  );

  if (contact) {
    return (
      <button
        type="button"
        onClick={openContactModal}
        className={`${base} ${variant} ${className}`}
      >
        {inner}
      </button>
    );
  }

  return (
    <a href={href} className={`${base} ${variant} ${className}`}>
      {inner}
    </a>
  );
}
