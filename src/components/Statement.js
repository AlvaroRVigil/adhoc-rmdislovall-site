import ImageTrail from "./ImageTrail";

const TRAIL_PARAMS = "?w=400&q=80&auto=format&fit=crop";
const trailItems = [
  `https://images.unsplash.com/photo-1773125929765-99d4d67e831d${TRAIL_PARAMS}`,
  `https://images.unsplash.com/photo-1591648241334-ce4ae86f3e9c${TRAIL_PARAMS}`,
  `https://images.unsplash.com/photo-1587293852726-70cdb56c2866${TRAIL_PARAMS}`,
  `https://images.unsplash.com/photo-1553413077-190dd305871c${TRAIL_PARAMS}`,
  `https://images.unsplash.com/photo-1771848194068-169d817a1d6f${TRAIL_PARAMS}`,
  `https://images.unsplash.com/photo-1772920908589-d6264e5d987f${TRAIL_PARAMS}`,
  `https://images.unsplash.com/photo-1709804945989-c8be542e04db${TRAIL_PARAMS}`,
  `https://images.unsplash.com/photo-1672552226380-486fe900b322${TRAIL_PARAMS}`,
  `https://images.unsplash.com/photo-1645736315000-6f788915923b${TRAIL_PARAMS}`,
];

function Icon({ children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-12 h-12 md:w-14 md:h-14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {children}
    </svg>
  );
}

const PackageIcon = () => (
  <Icon>
    <path d="m7.5 4.27 9 5.15" />
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="m3.3 7 8.7 5 8.7-5" />
    <path d="M12 22V12" />
  </Icon>
);

const BoxesIcon = () => (
  <Icon>
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
  </Icon>
);

const TruckIcon = () => (
  <Icon>
    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
    <path d="M15 18H9" />
    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
    <circle cx="17" cy="18" r="2" />
    <circle cx="7" cy="18" r="2" />
  </Icon>
);

const blocks = [
  {
    title: "Embalaje de cartón ondulado",
    body: "Embalaje de cartón ondulado adaptado a cada producto y operativa.",
    Icon: PackageIcon,
  },
  {
    title: "Manipulado y preparación",
    body: "Preparación y acondicionamiento según necesidades operativas y de expedición.",
    Icon: BoxesIcon,
  },
  {
    title: "Gestión de stock y suministro",
    body: "Suministro continuo para clientes con reposiciones recurrentes.",
    Icon: TruckIcon,
  },
];

export default function Statement() {
  return (
    <section
      aria-label="Propósito y áreas de servicio"
      className="relative min-h-[100svh] bg-woodSoft text-ink overflow-hidden"
    >
      <div className="absolute inset-0 z-0 hidden md:block">
        <ImageTrail items={trailItems} variant={1} />
      </div>

      <div className="relative z-10 min-h-[100svh] flex items-center justify-center px-section-x pt-24 pb-16 md:py-16 pointer-events-none">
        <div className="w-full max-w-5xl mx-auto">
          <p className="text-center eyebrow mb-5">
            A qué nos dedicamos
          </p>
          <h2 className="text-center mx-auto max-w-4xl mb-10 md:mb-14 font-display font-medium text-display-md tracking-tighter leading-[1.08] text-balance">
            Más de 40 años de experiencia en embalaje, manipulado y suministro
            para empresas industriales y logísticas.
          </h2>

          <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5 lg:auto-rows-fr">
            {blocks.map((b) => {
              const IconComp = b.Icon;
              return (
                <li
                  key={b.title}
                  className="bg-woodSoft/80 backdrop-blur-md border border-ink/20 p-8 md:p-10 flex flex-col items-center text-center gap-5 md:gap-6 h-full"
                >
                  <div className="text-ink">
                    <IconComp />
                  </div>
                  <h3 className="font-display font-medium text-xl md:text-2xl tracking-tighter leading-[1.05] text-balance">
                    {b.title}
                  </h3>
                  <div className="w-10 border-t border-ink/25" />
                  <p className="text-sm text-inkSoft text-pretty leading-[1.4] max-w-xs">
                    {b.body}
                  </p>
                </li>
              );
            })}
          </ul>

          <div className="mt-8 md:mt-10 text-center">
            <a
              href="#servicios"
              className="pointer-events-auto inline-flex items-center text-sm uppercase tracking-[0.18em] text-ink underline underline-offset-[6px] decoration-1 hover:text-accent hover:decoration-wood transition-colors"
            >
              Ver todos los servicios →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
