import Container from "./Container";

const fieldClass =
  "w-full bg-transparent border-b border-border focus:border-ink outline-none py-3 text-base placeholder:text-inkSoft/50 transition-colors";

export default function Contact() {
  return (
    <section id="contacto" className="bg-paper py-section-y border-t border-border">
      <Container>
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-8 items-end mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-8 space-y-5">
            <p className="eyebrow">
              · Empezamos a trabajar
            </p>
            <h2 className="font-display font-medium text-display-xl tracking-tighter leading-[1.02] text-balance">
              Cuéntanos qué necesitas
              <span className="block italic text-wood">y nos ponemos a ello.</span>
            </h2>
          </div>
          <p className="col-span-12 md:col-span-4 md:col-start-9 text-base text-inkSoft text-pretty">
            Contesta el teléfono una persona, no un menú. Si prefieres por
            escrito, el formulario también vale.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-x-4 md:gap-x-12 gap-y-16 lg:gap-y-0">
          <aside className="col-span-12 md:col-span-5 lg:col-span-4">
            <div className="space-y-12">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-inkSoft mb-4">
                  Llámanos
                </p>
                <a
                  href="tel:+34937153920"
                  className="block font-display font-medium text-[clamp(2rem,4.5vw,3.25rem)] tracking-tighter leading-none hover:text-wood transition-colors"
                >
                  937 153 920
                </a>
                <p className="text-sm text-inkSoft mt-3">
                  L–V · 7:00 — 15:00
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-inkSoft mb-4">
                  Escríbenos
                </p>
                <a
                  href="mailto:info@rmdislovall.com"
                  className="block font-display font-medium text-xl md:text-2xl tracking-tight hover:text-wood transition-colors break-all"
                >
                  info@rmdislovall.com
                </a>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-inkSoft mb-4">
                  Visítanos
                </p>
                <p className="font-display font-medium text-xl md:text-2xl tracking-tight">
                  Sentmenat
                  <span className="block text-inkSoft">Barcelona</span>
                </p>
                <a
                  href="https://www.openstreetmap.org/?mlat=41.6125&mlon=2.1320#map=15/41.6125/2.1320"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-3 text-sm underline underline-offset-4 decoration-1 hover:text-wood hover:decoration-wood transition"
                >
                  Cómo llegar →
                </a>
              </div>
            </div>
          </aside>

          <form className="col-span-12 md:col-span-7 md:col-start-7 lg:col-span-7 lg:col-start-6 space-y-8 md:pl-8 md:border-l md:border-border">
            <p className="text-[10px] uppercase tracking-[0.22em] text-inkSoft">
              · Solicita presupuesto
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
              <label className="block">
                <span className="sr-only">Nombre</span>
                <input className={fieldClass} type="text" name="nombre" placeholder="Nombre" required />
              </label>
              <label className="block">
                <span className="sr-only">Empresa</span>
                <input className={fieldClass} type="text" name="empresa" placeholder="Empresa" />
              </label>
              <label className="block">
                <span className="sr-only">Teléfono</span>
                <input className={fieldClass} type="tel" name="telefono" placeholder="Teléfono" required />
              </label>
              <label className="block">
                <span className="sr-only">Email</span>
                <input className={fieldClass} type="email" name="email" placeholder="Email (opcional)" />
              </label>
            </div>
            <label className="block">
              <span className="sr-only">Mensaje</span>
              <textarea
                className={`${fieldClass} resize-none`}
                rows={4}
                name="mensaje"
                placeholder="Cuéntanos qué necesitas — producto, volumen, plazo"
                required
              />
            </label>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-4">
              <p className="text-xs text-inkSoft max-w-sm">
                Al enviar aceptas nuestra política de privacidad. Te respondemos
                en menos de 24 horas laborables.
              </p>
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-ink text-paper px-8 py-4 text-sm tracking-wide hover:bg-wood transition-colors shrink-0"
              >
                Enviar solicitud
              </button>
            </div>
          </form>
        </div>

      </Container>
    </section>
  );
}
