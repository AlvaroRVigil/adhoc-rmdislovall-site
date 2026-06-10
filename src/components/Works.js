import Container from "./Container";
import PillButton from "./PillButton";
import StockImg from "./StockImg";

const works = [
  {
    sector: "Alimentación",
    title: "Cajas troqueladas y automontables",
    body:
      "Formatos adaptados para almacenaje, protección y expedición de producto alimentario.",
    src: "/img/cliente/11.webp",
    alt: "Caja troquelada para producto alimentario",
  },
  {
    sector: "Automoción / Industria",
    title: "Box industrial y protección interior",
    body:
      "Canal doble con interiores troquelados y formatos resistentes para piezas y componentes.",
    src: "/img/cliente/12.webp",
    modified: true,
    alt: "Embalaje industrial con interiores troquelados",
  },
  {
    sector: "Logística / Suministro",
    title: "Stock y entregas programadas",
    body:
      "Gestión de stock y suministro recurrente adaptado a la operativa de cada cliente.",
    src: "/img/cliente/13.webp",
    alt: "Almacén con palets etiquetados",
  },
];

export default function Works() {
  return (
    <section id="trabajos" className="py-section-y">
      <Container>
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-6 md:gap-y-8 items-end mb-12 md:mb-16">
          <div className="col-span-12 desk:col-span-6 space-y-4 text-center desk:text-left">
            <p className="eyebrow">Trabajos recientes</p>
            <h2 className="heading-section">
              Cada sector,
              <span className="italic text-wood"> una operativa distinta.</span>
            </h2>
          </div>
          <p className="col-span-12 desk:col-span-5 desk:col-start-8 text-sm text-inkSoft text-pretty text-center desk:text-left max-w-sm mx-auto desk:mx-0 desk:max-w-none">
            Ejemplos de trabajo en distintos sectores. Cada caso se plantea
            según producto, volumen, operativa de envasado y ritmo de
            expedición.
          </p>
        </div>
      </Container>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10 md:gap-y-12">
          {works.map((w, i) => (
            <article key={w.title} className="space-y-4">
              <div className="relative aspect-[16/10] md:aspect-[4/5] bg-paperDeep overflow-hidden">
                <StockImg src={w.src} alt={w.alt} w={1100} />
                <span aria-hidden className={`absolute top-2 left-2 z-[60] inline-flex items-center justify-center min-w-[34px] h-[26px] px-2 text-paper text-[11px] font-mono font-bold tracking-wider leading-none pointer-events-none ${w.modified ? "bg-[#16a34a]" : "bg-wood"}`}>#{i + 11}</span>
              </div>
              <div className="flex items-baseline justify-between text-[10px] uppercase tracking-[0.22em] text-inkSoft">
                <span>{w.sector}</span>
                <span className="font-mono text-ink">0{i + 1}</span>
              </div>
              <h3 className="font-display text-xl md:text-2xl text-balance">
                {w.title}
              </h3>
              <p className="text-sm text-inkSoft text-pretty">{w.body}</p>
            </article>
          ))}
        </div>

        <div className="flex items-center justify-center mt-12 md:mt-20">
          <PillButton contact>¿Hablamos?</PillButton>
        </div>
      </Container>
    </section>
  );
}
