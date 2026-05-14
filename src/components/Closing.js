import Container from "./Container";

export default function Closing() {
  return (
    <section className="bg-ink text-paper">
      <Container className="py-section-y">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-12 min-h-[60vh] items-end">
          <h2 className="col-span-12 md:col-span-10 font-display font-medium text-display-xl tracking-tighter leading-[1.02] text-balance text-paper/90">
            ¿Listo para empezar
            <span className="block text-paper/55">tu próximo embalaje?</span>
          </h2>
          <a
            href="#contacto"
            className="col-span-12 md:col-span-2 md:justify-self-end inline-flex text-base text-paper underline underline-offset-[6px] decoration-1 hover:text-accentSoft hover:decoration-woodSoft transition-colors"
          >
            Contáctanos →
          </a>
        </div>
      </Container>
    </section>
  );
}
