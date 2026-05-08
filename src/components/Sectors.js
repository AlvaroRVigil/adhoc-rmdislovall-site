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
    <ul
      aria-hidden={ariaHidden}
      className="flex shrink-0 items-center"
    >
      {sectors.map((s, i) => (
        <li
          key={`${s}-${i}`}
          className="flex items-center whitespace-nowrap"
        >
          <span className="px-8 md:px-12 text-sm md:text-base font-medium uppercase tracking-[0.22em] text-ink">
            {s}
          </span>
          <span aria-hidden className="text-wood/70 font-light text-2xl md:text-3xl select-none">
            /
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function Sectors() {
  return (
    <section
      aria-label="Sectores en los que trabajamos"
      className="relative border-y border-border py-8 overflow-hidden"
    >
      <div className="relative overflow-hidden">
        <div className="marquee-track">
          <Track />
          <Track ariaHidden />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-paper to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-paper to-transparent"
        />
      </div>
    </section>
  );
}
