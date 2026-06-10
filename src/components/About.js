import Container from "./Container";
import StockImg from "./StockImg";
import AboutFacts from "./AboutFacts";

export default function About() {
  return (
    <section id="nosotros" className="py-section-y">
      <Container>
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-12 items-start">
          <div className="col-span-12 desk:col-span-4">
            <div className="relative aspect-[4/5] md:aspect-[16/10] desk:aspect-[4/5] bg-paperDeep overflow-hidden">
              <StockImg
                src="/img/cliente/4.webp"
                alt="Fachada de la nave de RM Dislovall en Sentmenat"
                w={1200}
              />
              <span aria-hidden className="absolute top-2 left-2 z-[60] inline-flex items-center justify-center min-w-[34px] h-[26px] px-2 bg-wood text-paper text-[11px] font-mono font-bold tracking-wider leading-none pointer-events-none">#4</span>
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
              necesitan <span className="text-ink font-medium">un proveedor fiable</span> para su operativa de embalaje.
            </p>
            <p className="text-base text-inkSoft text-pretty leading-[1.45] max-w-xl mx-auto desk:mx-0">
              El enfoque no está en ofrecer un catálogo genérico, sino en
              <span className="text-ink font-medium"> adaptarse a las necesidades reales</span> de
              producción, manipulado y suministro de cada cliente.
            </p>
            <p className="text-base text-inkSoft text-pretty leading-[1.45] max-w-xl mx-auto desk:mx-0">
              Trabajamos con sectores como <span className="text-ink font-medium">alimentación, automoción, logística y sector químico</span> — donde el embalaje forma parte directa de la
              operativa diaria.
            </p>

            <AboutFacts />
          </div>
        </div>
      </Container>
    </section>
  );
}
