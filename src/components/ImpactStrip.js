import Container from "./Container";

const items = [
  { k: "Atención", v: "inmediata" },
  { k: "Entregas", v: "urgentes" },
  { k: "Servicio", v: "personalizado" },
  { k: "Integración", v: "en tu operativa" },
];

export default function ImpactStrip() {
  return (
    <section className="bg-paperSoft border-y border-border">
      <Container className="py-10 md:py-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <h2 className="font-display font-bold text-display-md max-w-md text-balance">
            Cuando lo necesitas, respondemos.
          </h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 md:gap-x-10">
            {items.map((it) => (
              <li key={it.k} className="space-y-1">
                <p className="text-xs uppercase tracking-[0.18em] text-inkSoft">{it.k}</p>
                <p className="text-base font-medium">{it.v}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
