import Container from "./Container";
import StockImg from "./StockImg";

const facts = [
  { k: "Experiencia", v: "Desde 1984" },
  { k: "Instalaciones productivas", v: "2.000 m²" },
  { k: "Cobertura", v: "Cataluña y resto de España" },
  { k: "Servicios integrados", v: "Diseño · Producción · Manipulado · Logística" },
  { k: "Respuesta a urgencias", v: "24–48 h" },
  { k: "Modelo", v: "Empresa familiar, interlocución directa" },
];

export default function About() {
  return (
    <section id="nosotros" className="py-section-y">
      <Container>
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-12 items-start">
          <div className="col-span-12 md:col-span-5 lg:col-span-4">
            <div className="relative aspect-[4/5] bg-paperDeep overflow-hidden">
              <StockImg
                src="https://images.unsplash.com/photo-1672552226380-486fe900b322"
                alt="Almacén de RM Dislovall en Sentmenat con cajas y palets"
                w={1200}
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 lg:col-span-7 lg:col-start-6 space-y-6 text-center md:text-left">
            <p className="text-[10px] uppercase tracking-[0.24em] text-inkSoft">· Quiénes somos</p>
            <h2 className="font-display font-medium text-[2.125rem] md:text-4xl tracking-tighter leading-[1.05] text-balance">
              Empresa familiar,
              <span className="block italic text-wood">mentalidad operativa.</span>
            </h2>
            <p className="text-base md:text-lg text-inkSoft text-pretty leading-[1.45] max-w-xl">
              RM Dislovall trabaja con empresas industriales y logísticas que
              necesitan un proveedor fiable para su operativa de embalaje.
            </p>
            <p className="text-base text-inkSoft text-pretty leading-[1.45] max-w-xl mx-auto md:mx-0">
              El enfoque no está en ofrecer un catálogo genérico, sino en
              adaptarse a las necesidades reales de producción, manipulado y
              suministro de cada cliente.
            </p>
            <p className="text-base text-inkSoft text-pretty leading-[1.45] max-w-xl mx-auto md:mx-0">
              Trabajamos con sectores como alimentación, automoción, logística,
              e-commerce y farmacéutico — donde el embalaje forma parte directa
              de la operativa diaria.
            </p>

            <dl className="grid grid-cols-2 md:grid-cols-3 mt-4 border border-border md:border-0 md:border-t md:gap-y-6 md:gap-x-6 md:pt-8 [&>*:nth-last-child(-n+2)]:border-b-0 md:[&>*]:border-0">
              {facts.map((f, i) => (
                <div
                  key={f.k}
                  className={`p-5 text-left border-b border-border md:p-0 md:border-0 ${
                    i % 2 === 0 ? "border-r border-border md:border-r-0" : ""
                  }`}
                >
                  <dt className="text-[10px] uppercase tracking-[0.22em] text-inkSoft mb-2 md:mb-1">
                    {f.k}
                  </dt>
                  <dd className="text-base text-ink">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
