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
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-6 md:gap-y-8 items-end mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-7 space-y-4 text-center md:text-left">
            <p className="eyebrow">
              · Cómo trabajamos
            </p>
            <h2 className="heading-section">
              Una sola interlocución,
              <span className="italic text-wood"> del pedido a la entrega.</span>
            </h2>
          </div>
          <p className="col-span-12 md:col-span-4 md:col-start-9 text-sm text-inkSoft text-pretty text-center md:text-left max-w-sm mx-auto md:mx-0 md:max-w-none">
            Una sola persona al otro lado del teléfono — la misma desde el
            briefing hasta que el material entra en tu planta.
          </p>
        </div>
      </Container>

      <ol className="border-t border-border">
        {steps.map((s) => (
          <li
            key={s.n}
            className="border-b border-border px-section-x py-9 md:py-9 md:grid md:grid-cols-12 md:gap-x-8 md:gap-y-3 md:items-baseline group md:hover:bg-paperSoft md:transition-colors"
          >
              <div className="flex items-center justify-between mb-4 md:hidden">
                <span className="font-mono text-xs tracking-widest text-inkSoft">
                  {s.n}
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-inkSoft">
                  {s.tag}
                </span>
              </div>

              <span className="hidden md:block md:col-span-1 font-mono text-xs tracking-widest text-inkSoft pt-1">
                {s.n}
              </span>

              <h3 className="md:col-span-5 font-display font-medium text-[1.75rem] md:text-3xl tracking-tighter leading-[1.1] text-balance mb-3 md:mb-0">
                {s.title}
              </h3>

              <p className="md:col-span-4 md:col-start-7 text-sm text-inkSoft text-pretty leading-[1.45]">
                {s.body}
              </p>

              <span className="hidden md:block md:col-span-2 md:col-start-11 text-[10px] uppercase tracking-[0.22em] text-inkSoft md:text-right pt-1">
                {s.tag}
              </span>
            </li>
        ))}
      </ol>
    </section>
  );
}
