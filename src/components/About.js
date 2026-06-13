import StockImg from "./StockImg";
import AboutFacts from "./AboutFacts";

export default function About() {
  return (
    <section
      id="nosotros"
      className="grid grid-cols-1 desk:grid-cols-2 desk:min-h-[100svh] items-stretch"
    >
      {/* Texto (derecha en desktop, debajo de la imagen en móvil) */}
      <div className="bg-paperSoft text-ink flex items-center px-section-x py-section-y md:py-16 order-2 overflow-y-auto">
        <div className="w-full max-w-xl mx-auto space-y-8 text-center desk:text-left">
          <div className="space-y-4">
            <p className="eyebrow">Quiénes somos</p>
            <h2 className="heading-section">
              Empresa familiar,
              <span className="block italic text-wood">mentalidad operativa.</span>
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-base md:text-lg text-inkSoft text-pretty leading-[1.45]">
              RM Dislovall trabaja con empresas industriales y logísticas que
              necesitan <span className="text-ink font-medium">un proveedor fiable</span> para su operativa de embalaje.
            </p>
            <p className="text-base text-inkSoft text-pretty leading-[1.45]">
              El enfoque no está en ofrecer un catálogo genérico, sino en
              <span className="text-ink font-medium"> adaptarse a las necesidades reales</span> de
              producción, manipulado y suministro de cada cliente.
            </p>
            <p className="text-base text-inkSoft text-pretty leading-[1.45]">
              Trabajamos con sectores como <span className="text-ink font-medium">alimentación, automoción, logística y sector químico</span> — donde el embalaje forma parte directa de la
              operativa diaria.
            </p>
          </div>

          <AboutFacts />
        </div>
      </div>

      {/* Imagen (izquierda en desktop, arriba en móvil) — a media pantalla */}
      <div className="relative bg-paperDeep h-[42vh] max-h-[480px] min-h-[300px] mx-section-x desk:mx-0 desk:h-full desk:max-h-none desk:min-h-[280px] overflow-hidden order-1">
        <StockImg
          src="/img/cliente/03.webp"
          alt="Fachada de la nave de RM Dislovall en Sentmenat"
          w={1400}
          q={85}
        />      </div>
    </section>
  );
}
