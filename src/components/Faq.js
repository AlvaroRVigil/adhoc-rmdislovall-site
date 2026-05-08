import Container from "./Container";

const faqs = [
  {
    q: "¿Cuál es el mínimo de pedido?",
    a: "No imponemos un mínimo rígido. Adaptamos la producción al volumen de cada cliente — desde tiradas pequeñas y muestras hasta series grandes para producción continua. Si tienes una necesidad puntual, lo estudiamos.",
  },
  {
    q: "¿Qué plazo de entrega manejáis?",
    a: "Para formatos estándar y material auxiliar, 24–72 horas. Para cajas a medida con troquelado, entre 5 y 10 días laborables según diseño y volumen. En urgencias resolvemos en 24–48 horas siempre que la planificación lo permita.",
  },
  {
    q: "¿Hacéis envíos fuera de Cataluña?",
    a: "Sí. Trabajamos en toda España con transporte propio para Cataluña y red logística contratada para el resto del territorio. Los plazos se mantienen, el coste se ajusta según destino.",
  },
  {
    q: "¿Podéis resolver urgencias?",
    a: "Es una de nuestras señas. Tenemos transporte propio y un almacén de 2.000 m² con stock disponible. Si el material existe, sale el mismo día. Si hay que fabricarlo, priorizamos la producción.",
  },
  {
    q: "¿Cómo es el proceso de presupuesto?",
    a: "Nos cuentas qué necesitas — producto, volumen, plazo — por teléfono o formulario. Te enviamos propuesta clara con formato, precio y plazo en 24–48 horas. Sin compromiso ni letra pequeña.",
  },
  {
    q: "¿El cartón ondulado es reciclable?",
    a: "Sí, 100%. Es uno de los materiales con mejor tasa de reciclaje del mercado. La fibra se puede reutilizar varias veces antes de degradarse y reduce significativamente la huella de carbono frente a otros materiales de embalaje.",
  },
];

export default function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="py-section-y bg-paperSoft border-y border-border"
    >
      <Container>
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-8 items-start">
          <div className="col-span-12 md:col-span-4 space-y-4 md:sticky md:top-28">
            <p className="text-[10px] uppercase tracking-[0.24em] text-inkSoft">· Preguntas frecuentes</p>
            <h2 id="faq-title" className="font-display text-display-md text-balance">
              Las dudas más comunes,
              <span className="block italic text-wood">resueltas.</span>
            </h2>
            <p className="text-base text-inkSoft text-pretty max-w-sm">
              Si tu pregunta no está aquí, llámanos al 937 153 920 o
              escríbenos. Contestamos en horas, no en días.
            </p>
          </div>

          <ul className="col-span-12 md:col-span-7 md:col-start-6 lg:col-span-7 lg:col-start-6">
            {faqs.map((f, i) => (
              <li key={f.q} className="border-t border-border last:border-b">
                <details className="group">
                  <summary className="flex items-start justify-between gap-8 py-6 md:py-7 cursor-pointer list-none">
                    <div className="flex items-start gap-6">
                      <span className="font-mono text-xs text-inkSoft tracking-widest shrink-0 mt-1">
                        0{i + 1}
                      </span>
                      <h3 className="font-display text-lg md:text-xl text-balance">
                        {f.q}
                      </h3>
                    </div>
                    <span
                      aria-hidden
                      className="shrink-0 text-2xl text-inkSoft transition-transform duration-300 ease-out group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="pb-7 pl-12 pr-12 md:pr-16 text-base text-inkSoft text-pretty">
                    {f.a}
                  </p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
