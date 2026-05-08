import ImageTrail from "./ImageTrail";

const TRAIL_PARAMS = "?w=400&q=80&auto=format&fit=crop";
const trailItems = [
  `https://images.unsplash.com/photo-1773125929765-99d4d67e831d${TRAIL_PARAMS}`,
  `https://images.unsplash.com/photo-1770354992725-41c4acac94eb${TRAIL_PARAMS}`,
  `https://images.unsplash.com/photo-1587293852726-70cdb56c2866${TRAIL_PARAMS}`,
  `https://images.unsplash.com/photo-1553413077-190dd305871c${TRAIL_PARAMS}`,
  `https://images.unsplash.com/photo-1771848194068-169d817a1d6f${TRAIL_PARAMS}`,
  `https://images.unsplash.com/photo-1772920908589-d6264e5d987f${TRAIL_PARAMS}`,
  `https://images.unsplash.com/photo-1709804945989-c8be542e04db${TRAIL_PARAMS}`,
  `https://images.unsplash.com/photo-1672552226380-486fe900b322${TRAIL_PARAMS}`,
  `https://images.unsplash.com/photo-1645736315000-6f788915923b${TRAIL_PARAMS}`,
];

export default function Statement() {
  return (
    <section
      aria-label="Propósito de RM Dislovall"
      className="relative min-h-[100svh] bg-woodSoft text-ink overflow-hidden"
    >
      <div className="absolute inset-0">
        <ImageTrail items={trailItems} variant={1} />
      </div>

      <div className="relative z-10 min-h-[100svh] flex items-center px-section-x py-16 md:py-24 pointer-events-none">
        <div className="w-full max-w-container mx-auto grid grid-cols-12 gap-x-4 md:gap-x-8">
          <p
            style={{
              fontFamily: "var(--font-sans), Arial, sans-serif",
              fontSize: "clamp(1.5rem, 3.5vw, 40px)",
              fontWeight: 400,
              lineHeight: "1.15",
              margin: "auto",
              textAlign: "center",
            }}
            className="col-span-12 md:col-start-3 md:col-end-11 font-normal tracking-normal text-pretty"
          >
            Cuarenta años fabricando embalaje a medida para empresas que no
            pueden permitirse un error. No vendemos cajas: vendemos
            tranquilidad operativa.
          </p>
        </div>
      </div>
    </section>
  );
}
