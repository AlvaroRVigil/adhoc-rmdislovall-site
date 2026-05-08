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
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-6 md:gap-y-8 items-end mb-12 md:mb-16">
          <div className="col-span-12 md:col-span-6 space-y-4 text-center md:text-left">
            <p className="text-[10px] uppercase tracking-[0.24em] text-inkSoft">· Trabajos recientes</p>
            <h2 className="font-display font-medium text-[2.125rem] md:text-4xl tracking-tighter leading-[1.05] text-balance">
              Cada sector,
              <span className="italic text-wood"> una operativa distinta.</span>
            </h2>
          </div>
          <p className="col-span-12 md:col-span-5 md:col-start-8 text-sm text-inkSoft text-pretty text-center md:text-left max-w-sm mx-auto md:mx-0 md:max-w-none">
            Ejemplos del trabajo en distintos sectores. Cada caso se plantea
            según producto, volumen, operativa de envasado y ritmo de
            expediciones.
          </p>
        </div>
      </Container>

      <div className="md:hidden">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-section-x pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {works.map((w, i) => (
            <article
              key={w.title}
              className="snap-start shrink-0 w-[78%] space-y-4"
            >
              <div className="relative aspect-[4/5] bg-paperDeep overflow-hidden">
                <StockImg src={w.src} alt={w.alt} w={1100} />
              </div>
              <div className="flex items-baseline justify-between text-[10px] uppercase tracking-[0.22em] text-inkSoft">
                <span>{w.sector}</span>
                <span className="font-mono text-ink">0{i + 1}</span>
              </div>
              <h3 className="font-display text-xl text-balance">
                {w.title}
              </h3>
              <p className="text-sm text-inkSoft text-pretty">{w.body}</p>
            </article>
          ))}
        </div>
      </div>

      <Container>
        <div className="hidden md:grid md:grid-cols-3 gap-x-6 gap-y-12">
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

        <div className="flex items-center justify-center mt-12 md:mt-20">
          <PillButton href="#contacto">Cuéntanos tu caso</PillButton>
        </div>
      </Container>
    </section>
  );
}
