import Container from "./Container";
import PillButton from "./PillButton";

export default function CtaFinal() {
  return (
    <section className="bg-ink text-paper py-section-y">
      <Container>
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-10 items-end">
          <div className="col-span-12 md:col-span-8 space-y-8">
            <p className="text-[10px] uppercase tracking-[0.24em] text-paper/60">· Empezamos</p>
            <h2 className="font-display font-extrabold text-display-xl tracking-tight text-balance">
              ¿Necesitas embalaje
              <span className="block text-woodSoft">hoy?</span>
            </h2>
            <p className="text-lg text-paper/75 max-w-md text-pretty">
              Llama al 937 153 920 y te damos respuesta antes de colgar.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 flex md:justify-end">
            <div className="flex flex-col gap-3 items-start md:items-end">
              <PillButton href="tel:+34937153920" dark={false}>
                Llamar ahora
              </PillButton>
              <a
                href="#contacto"
                className="text-sm text-paper/70 underline underline-offset-4 decoration-1 hover:text-woodSoft hover:decoration-woodSoft transition"
              >
                Pedir presupuesto →
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
