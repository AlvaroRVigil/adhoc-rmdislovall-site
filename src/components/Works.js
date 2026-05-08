import Container from "./Container";
import PillButton from "./PillButton";
import StockImg from "./StockImg";

const works = [
  {
    sector: "Alimentación",
    title: "Caja troquelada para producto fresco",
    body:
      "Diseño con ventilación, etiquetado integrado y troquel optimizado para línea automática.",
    src: "https://images.unsplash.com/photo-1771848194068-169d817a1d6f",
    alt: "Caja troquelada para producto alimentario",
  },
  {
    sector: "Automoción",
    title: "Embalaje a medida para componentes",
    body:
      "Canal doble con separadores internos para piezas de alto valor. Reutilización en circuito cerrado.",
    src: "https://images.unsplash.com/photo-1772920908589-d6264e5d987f",
    alt: "Capas de cartón para embalaje industrial",
  },
  {
    sector: "E-commerce",
    title: "Packs y preparación de pedidos",
    body:
      "Picking, etiquetado y paletizado bajo demanda. El producto llega a tu plataforma listo para distribuir.",
    src: "https://images.unsplash.com/photo-1709804945989-c8be542e04db",
    alt: "Cajas apiladas listas para distribución",
  },
];

export default function Works() {
  return (
    <section id="trabajos" className="py-section-y">
      <Container>
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-8 items-end mb-16">
          <div className="col-span-12 md:col-span-6 space-y-4">
            <p className="text-[10px] uppercase tracking-[0.24em] text-inkSoft">· Trabajos recientes</p>
            <h2 className="font-display font-medium text-3xl md:text-4xl tracking-tighter leading-tight text-balance">
              Cada sector,
              <span className="italic text-wood"> una operativa distinta.</span>
            </h2>
          </div>
          <p className="col-span-12 md:col-span-5 md:col-start-8 text-sm text-inkSoft text-pretty">
            Ejemplos representativos del trabajo que hacemos para empresas de
            distintos sectores. Cada proyecto se diseña de cero según producto,
            volumen y operativa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12">
          {works.map((w, i) => (
            <article key={w.title} className="space-y-4">
              <div className="relative aspect-[4/5] bg-paperDeep overflow-hidden">
                <StockImg src={w.src} alt={w.alt} w={1100} />
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

        <div className="flex items-center justify-center mt-20">
          <PillButton href="#contacto">Cuéntanos tu caso</PillButton>
        </div>
      </Container>
    </section>
  );
}
