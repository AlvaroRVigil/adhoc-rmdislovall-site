import Container from "./Container";
import StockImg from "./StockImg";

export default function CtaCase() {
  return (
    <section className="bg-ink text-paper py-section-y overflow-hidden">
      <Container>
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-12 items-center">
          <div className="col-span-12 md:col-span-7 space-y-6 md:space-y-8">
            <p className="text-[10px] uppercase tracking-[0.24em] text-paper/60">
              · ¿Tienes un proyecto?
            </p>
            <h2 className="font-display font-medium text-display-xl tracking-tighter leading-[1.02] text-balance">
              Descubre cómo tu
              <span className="block italic text-woodSoft">próximo embalaje.</span>
            </h2>
            <p className="text-base md:text-lg text-paper/75 max-w-md text-pretty leading-[1.45]">
              Cuéntanos qué necesitas — producto, volumen, plazo. Te
              proponemos la solución concreta en 24-48 horas.
            </p>
            <div className="pt-2">
              <a
                href="#contacto"
                className="inline-flex items-center bg-paper text-ink pl-2 pr-7 py-2 rounded-full text-sm tracking-wide hover:bg-woodSoft transition-colors"
              >
                <span
                  aria-hidden
                  className="w-9 h-9 rounded-full bg-ink/10 flex items-center justify-center mr-3"
                >
                  <span className="block w-2 h-2 rounded-full bg-ink" />
                </span>
                Cuéntanos tu caso
              </a>
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 relative">
            <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] overflow-hidden">
              <StockImg
                src="https://images.unsplash.com/photo-1771848194068-169d817a1d6f"
                alt="Caja de cartón ondulado a medida"
                w={1400}
                q={85}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
