import Container from "./Container";

const items = [
  {
    n: "01",
    title: "Respuesta ágil",
    body: "Atendemos el teléfono y resolvemos en horas, no en días.",
  },
  {
    n: "02",
    title: "Flexibilidad real",
    body: "Pedidos urgentes, pequeños o estacionales: nos adaptamos.",
  },
  {
    n: "03",
    title: "Trato directo",
    body: "Hablas con la persona que toma la decisión.",
  },
  {
    n: "04",
    title: "Plazos que se cumplen",
    body: "40 años cumpliendo entregas. Esa es la métrica.",
  },
];

export default function Differential() {
  return (
    <section className="py-section-y">
      <Container>
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-12">
          <div className="col-span-12 md:col-span-5">
            <p className="eyebrow mb-6">
              Por qué nosotros
            </p>
            <h2 className="font-display font-extrabold text-display-lg tracking-tight text-balance">
              Lo que no se rompe,
              <span className="block text-wood">se queda.</span>
            </h2>
            <p className="text-base text-inkSoft text-pretty mt-8 max-w-sm">
              No vendemos cajas. Vendemos tranquilidad operativa para empresas
              industriales que no se pueden permitir una incidencia.
            </p>
          </div>

          <ul className="col-span-12 md:col-span-7 md:col-start-7 lg:col-start-7 space-y-px bg-border border border-border">
            {items.map((it) => (
              <li
                key={it.n}
                className="bg-paper px-6 md:px-10 py-8 md:py-10 flex gap-8 items-baseline"
              >
                <span className="font-mono text-xs text-inkSoft tracking-widest shrink-0">{it.n}</span>
                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-xl md:text-2xl tracking-tight">
                    {it.title}
                  </h3>
                  <p className="text-sm text-inkSoft text-pretty max-w-md">
                    {it.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
