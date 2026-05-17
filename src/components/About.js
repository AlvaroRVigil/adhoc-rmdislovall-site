import Container from "./Container";
import StockImg from "./StockImg";

const facts = [
  { k: "Experiencia", v: "+40 años en el sector" },
  { k: "Instalaciones", v: "2.000 m²" },
  { k: "Cobertura", v: "Cataluña y resto de España" },
  { k: "Servicios integrados", v: "Diseño · Suministro · Manipulado · Logística" },
  { k: "Respuesta", v: "Ágil ante urgencias" },
  { k: "Modelo", v: "Empresa familiar, interlocución directa" },
];

export default function About() {
  return (
    <section id="nosotros" className="py-section-y">
      <Container>
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-12 items-start">
          <div className="col-span-12 desk:col-span-4">
            <div className="relative aspect-[4/5] md:aspect-[16/10] desk:aspect-[4/5] bg-paperDeep overflow-hidden">
              <StockImg
                src="https://images.unsplash.com/photo-1672552226380-486fe900b322"
                alt="Almacén de RM Dislovall en Sentmenat con cajas y palets"
                w={1200}
              />
            </div>
          </div>

          <div className="col-span-12 desk:col-span-7 desk:col-start-6 space-y-6 text-center desk:text-left">
            <p className="eyebrow">Quiénes somos</p>
            <h2 className="heading-section">
              Empresa familiar,
              <span className="block italic text-wood">mentalidad operativa.</span>
            </h2>
            <p className="text-base md:text-lg text-inkSoft text-pretty leading-[1.45] max-w-xl mx-auto desk:mx-0">
              RM Dislovall trabaja con empresas industriales y logísticas que
              necesitan un proveedor fiable para su operativa de embalaje.
            </p>
            <p className="text-base text-inkSoft text-pretty leading-[1.45] max-w-xl mx-auto desk:mx-0">
              El enfoque no está en ofrecer un catálogo genérico, sino en
              adaptarse a las necesidades reales de producción, manipulado y
              suministro de cada cliente.
            </p>
            <p className="text-base text-inkSoft text-pretty leading-[1.45] max-w-xl mx-auto desk:mx-0">
              Trabajamos con sectores como alimentación, automoción, logística
              y farmacéutico — donde el embalaje forma parte directa de la
              operativa diaria.
            </p>

            <dl className="grid grid-cols-1 md:grid-cols-3 mt-10 md:mt-14 border-t border-border">
              {facts.map((f, i) => {
                const classes = [
                  "py-7 md:py-9 text-left",
                  "border-b border-border md:border-b-0",
                  i % 3 !== 0 ? "md:border-l md:border-border md:pl-8" : "",
                  i % 3 !== 2 ? "md:pr-8" : "",
                  i >= 3 ? "md:border-t md:border-border" : "",
                ]
                  .filter(Boolean)
                  .join(" ");
                return (
                  <div key={f.k} className={classes}>
                    <dt className="text-[10px] uppercase tracking-[0.22em] text-inkSoft mb-4">
                      {f.k}
                    </dt>
                    <dd className="font-display font-medium text-lg md:text-xl tracking-tight leading-[1.1] text-ink text-balance">
                      {f.v}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
