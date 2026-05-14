import Container from "./Container";
import { siteConfig } from "@/lib/siteConfig";

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
                  href={siteConfig.phone.href}
                  className="block font-display font-medium text-[clamp(2rem,4.5vw,3.25rem)] tracking-tighter leading-none hover:text-accent transition-colors"
                >
                  {siteConfig.phone.label}
                </a>
                <a
                  href={siteConfig.whatsapp.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm text-inkSoft hover:text-accent transition-colors"
                  aria-label={`WhatsApp ${siteConfig.whatsapp.label}`}
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden>
                    <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.9-2.1-.2-.5-.5-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2 0 1.3.9 2.5 1.1 2.7.1.2 1.8 2.8 4.3 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.7.1.5-.1 1.7-.7 1.9-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.4 5L2 22l5.2-1.4c1.5.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2"/>
                  </svg>
                  WhatsApp · {siteConfig.whatsapp.label}
                </a>
                <p className="text-sm text-inkSoft mt-3">
                  L–V · {siteConfig.hours.range}
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-inkSoft mb-4">
                  Escríbenos
                </p>
                <a
                  href="mailto:info@rmdislovall.com"
                  className="block font-display font-medium text-xl md:text-2xl tracking-tight hover:text-accent transition-colors break-all"
                >
                  info@rmdislovall.com
                </a>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-inkSoft mb-4">
                  Visítanos
                </p>
                <p className="font-display font-medium text-xl md:text-2xl tracking-tight">
                  Calle Cementiri Nou, 8
                  <span className="block text-inkSoft">08181 Sentmenat · Barcelona</span>
                </p>
                <a
                  href={siteConfig.location.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-3 text-sm underline underline-offset-4 decoration-1 hover:text-accent hover:decoration-wood transition"
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
