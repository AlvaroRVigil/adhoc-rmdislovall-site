import Container from "./Container";

const steps = [
  {
    n: "01",
    tag: "Día 1",
    title: "Explícanos qué necesitas",
    body:
      "Nos indicas el tipo de embalaje, medidas, calidad, cantidad y servicios necesarios para cada proyecto.",
  },
  {
    n: "02",
    tag: "24-48h",
    title: "Te proponemos la solución",
    body:
      "Definimos embalaje, servicio, precio y plazo de entrega según cada necesidad.",
  },
  {
    n: "03",
    tag: "Gestión",
    title: "Gestionamos todo el proceso",
    body:
      "Preparamos y gestionamos el suministro del material con seguimiento y respuesta ágil durante todo el proceso.",
  },
  {
    n: "04",
    tag: "En tu planta",
    title: "Recibes el material a tiempo",
    body:
      "Material listo para usar y adaptado a tu operativa.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="py-section-y">
      <Container>
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-6 md:gap-y-8 items-end mb-16 md:mb-20">
          <div className="col-span-12 desk:col-span-7 space-y-4 text-center desk:text-left">
            <p className="eyebrow">
              Cómo trabajamos
            </p>
            <h2 className="heading-section">
              Una sola interlocución,
              <span className="italic text-wood"> de principio a fin.</span>
            </h2>
          </div>
          <p className="col-span-12 desk:col-span-4 desk:col-start-9 text-sm text-inkSoft text-pretty text-center desk:text-left max-w-sm mx-auto desk:mx-0 desk:max-w-none">
            Una sola persona al otro lado del teléfono, desde la primera
            consulta hasta la entrega del material.
          </p>
        </div>
      </Container>

      <ol className="border-t border-border">
        {steps.map((s) => (
          <li
            key={s.n}
            className="border-b border-border px-section-x py-9 desk:grid desk:grid-cols-12 desk:gap-x-8 desk:gap-y-3 desk:items-center group desk:hover:bg-paperSoft desk:transition-colors"
          >
              <div className="flex items-center justify-between mb-4 desk:hidden">
                <span className="font-mono text-xs tracking-widest text-inkSoft">
                  {s.n}
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-inkSoft">
                  {s.tag}
                </span>
              </div>

              <span className="hidden desk:block desk:col-span-1 font-mono text-xs tracking-widest text-inkSoft">
                {s.n}
              </span>

              <h3 className="desk:col-span-5 font-display font-medium text-[1.75rem] md:text-3xl tracking-tighter leading-[1.1] text-balance mb-3 desk:mb-0">
                {s.title}
              </h3>

              <p className="desk:col-span-4 desk:col-start-7 text-sm text-inkSoft text-pretty leading-[1.45]">
                {s.body}
              </p>

              <span className="hidden desk:block desk:col-span-2 desk:col-start-11 text-[10px] uppercase tracking-[0.22em] text-inkSoft desk:text-right">
                {s.tag}
              </span>
            </li>
        ))}
      </ol>
    </section>
  );
}
