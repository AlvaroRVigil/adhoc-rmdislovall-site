const sectors = [
  "Alimentación",
  "Automoción",
  "Logística",
  "E-commerce",
  "Industrial",
  "Farmacéutico",
  "Cosmética",
  "Hortofrutícola",
  "Distribución",
];

function Track({ ariaHidden = false }) {
  return (
    <ul aria-hidden={ariaHidden} className="flex shrink-0 items-center">
      {sectors.map((s, i) => (
        <li key={`${s}-${i}`} className="flex items-center whitespace-nowrap">
          <span className="px-6 md:px-9 text-[11px] md:text-[13px] uppercase tracking-[0.2em] font-medium text-ink">
            {s}
          </span>
          <span aria-hidden className="h-[6px] w-[6px] shrink-0 rotate-45 bg-wood/50" />
        </li>
      ))}
    </ul>
  );
}

export default function Sectors() {
  return (
    <section
      aria-label="Sectores en los que trabajamos"
      className="relative bg-paperSoft border-y border-border py-5 md:py-6 overflow-hidden"
    >
      <div className="relative overflow-hidden">
        <div className="marquee-track">
          <Track />
          <Track ariaHidden />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-paperSoft to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-paperSoft to-transparent"
        />
      </div>
    </section>
  );
}
