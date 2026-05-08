import Container from "./Container";

const blocks = [
  {
    n: "01",
    title: "Embalaje industrial",
    body: "Soluciones de cartón ondulado adaptadas a necesidades de protección, transporte y almacenaje.",
  },
  {
    n: "02",
    title: "Manipulado y preparación",
    body: "Preparación y manipulado según necesidades operativas y de expedición.",
  },
  {
    n: "03",
    title: "Suministro para operativas logísticas",
    body: "Suministro continuo para empresas con necesidades recurrentes de embalaje.",
  },
];

export default function QueHacemos() {
  return (
    <section
      aria-labelledby="que-hacemos"
      className="bg-woodSoft pt-section-y pb-12 md:pb-16"
    >
      <Container>
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-4 md:gap-y-10 items-end mb-12 text-center md:text-left">
          <p className="col-span-12 md:col-span-3 text-[10px] uppercase tracking-[0.24em] text-inkSoft">
            · Qué hacemos
          </p>
          <h2
            id="que-hacemos"
            className="col-span-12 md:col-span-9 font-display font-medium text-[2.125rem] md:text-4xl tracking-tighter leading-[1.05] text-balance"
          >
            Tres áreas de servicio,
            <span className="italic text-wood"> coordinadas desde Sentmenat.</span>
          </h2>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10">
          {blocks.map((b) => (
            <li
              key={b.n}
              className="bg-woodSoft p-8 md:p-10 flex flex-col gap-4 hover:bg-paperSoft transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-widest text-inkSoft">{b.n}</span>
              </div>
              <h3 className="font-display font-medium text-xl md:text-2xl tracking-tighter leading-[1.15] text-balance">
                {b.title}
              </h3>
              <p className="text-sm md:text-base text-inkSoft text-pretty leading-[1.45] mt-auto">
                {b.body}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
