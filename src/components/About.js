import Container from "./Container";
import StockImg from "./StockImg";

const facts = [
  { k: "Año fundación", v: "1984" },
  { k: "Sede", v: "Sentmenat (Barcelona)" },
  { k: "Instalaciones", v: "2.000 m²" },
  { k: "Equipo", v: "Familiar, propio" },
  { k: "Cobertura", v: "Cataluña y resto de España" },
  { k: "Horario", v: "L–V · 7:00–15:00" },
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

          <div className="col-span-12 md:col-span-7 lg:col-span-7 lg:col-start-6 space-y-6">
            <p className="text-[10px] uppercase tracking-[0.24em] text-inkSoft">· Quiénes somos</p>
            <h2 className="font-display font-medium text-3xl md:text-4xl tracking-tighter leading-tight text-balance">
              Empresa familiar,
              <span className="block italic text-wood">mentalidad operativa.</span>
            </h2>
            <p className="text-lg text-inkSoft text-pretty max-w-xl">
              RM Dislovall S.L. lleva fabricando embalaje de cartón ondulado
              en Sentmenat (Barcelona) desde 1984. Más de 40 años especializados
              en soluciones a medida para empresas industriales y logísticas
              que no pueden permitirse una rotura de stock.
            </p>
            <p className="text-base text-inkSoft text-pretty max-w-xl">
              Lo que diferencia a un buen proveedor industrial no es el
              catálogo: es estar disponible cuando hace falta, cumplir el plazo
              y resolver lo imprevisto. Eso es lo que hemos construido en estos
              cuarenta años.
            </p>
            <p className="text-base text-inkSoft text-pretty max-w-xl">
              Trabajamos con empresas de alimentación, automoción, logística,
              e-commerce y farmacéutico. Lo que tienen en común es que
              dependen del embalaje para no parar la línea — y por eso nos
              llaman a nosotros.
            </p>

            <dl className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-6 border-t border-border pt-8 mt-4">
              {facts.map((f) => (
                <div key={f.k}>
                  <dt className="text-[10px] uppercase tracking-[0.22em] text-inkSoft mb-1">
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
