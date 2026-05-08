import Container from "./Container";

const steps = [
  {
    n: "01",
    tag: "Día 1",
    title: "Cuéntanos qué necesitas",
    body:
      "Por teléfono o formulario. Tomamos los datos clave: producto, volumen, plazo, operativa.",
  },
  {
    n: "02",
    tag: "24-48h",
    title: "Te proponemos la solución",
    body:
      "Formato, plazo y precio claros desde el principio. Sin letra pequeña ni alternativas innecesarias.",
  },
  {
    n: "03",
    tag: "Producción",
    title: "Lo gestionamos todo",
    body:
      "Fabricación, manipulado, almacenaje y coordinación con transporte. Una sola persona al frente.",
  },
  {
    n: "04",
    tag: "En tu planta",
    title: "Recibes el material a tiempo",
    body:
      "Listo para usar. Si surge algo, lo resolvemos en horas — no en días.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="py-section-y">
      <Container>
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-8 items-end mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-7 space-y-4">
            <p className="text-[10px] uppercase tracking-[0.24em] text-inkSoft">
              · Cómo trabajamos
            </p>
            <h2 className="font-display font-medium text-3xl md:text-4xl tracking-tighter leading-tight text-balance">
              Fácil, rápido,
              <span className="italic text-wood"> sin complicaciones.</span>
            </h2>
          </div>
          <p className="col-span-12 md:col-span-4 md:col-start-9 text-sm text-inkSoft text-pretty">
            Cuatro pasos. Una sola persona al otro lado del teléfono. La
            misma desde que pides hasta que recibes.
          </p>
        </div>

        <ol className="border-t border-border">
          {steps.map((s) => (
            <li
              key={s.n}
              className="border-b border-border grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-3 items-baseline py-7 md:py-9 group hover:bg-paperSoft transition-colors"
            >
              <span className="col-span-2 md:col-span-1 font-mono text-xs tracking-widest text-inkSoft pt-1">
                {s.n}
              </span>

              <h3 className="col-span-10 md:col-span-5 font-display font-medium text-2xl md:text-3xl tracking-tighter leading-[1.1] text-balance">
                {s.title}
              </h3>

              <p className="col-span-12 md:col-span-4 md:col-start-7 text-sm text-inkSoft text-pretty leading-[1.45]">
                {s.body}
              </p>

              <span className="col-span-12 md:col-span-2 md:col-start-11 text-[10px] uppercase tracking-[0.22em] text-inkSoft md:text-right pt-1">
                {s.tag}
              </span>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
