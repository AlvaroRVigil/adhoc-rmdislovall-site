import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export const metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: false },
};

function EmptyBox() {
  return (
    <svg
      viewBox="0 0 320 260"
      className="w-[240px] md:w-[320px] h-auto text-ink"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <defs>
        <pattern
          id="flute"
          width="6"
          height="6"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(35)"
        >
          <line x1="0" y1="0" x2="0" y2="6" stroke="currentColor" strokeWidth="0.6" opacity="0.35" />
        </pattern>
      </defs>

      <line x1="30" y1="222" x2="290" y2="222" strokeWidth="1" opacity="0.2" />

      <g strokeWidth="1.4">
        <path d="M90 130 L160 152 L160 220 L90 198 Z" fill="url(#flute)" />
        <path d="M160 152 L230 130 L230 198 L160 220 Z" />
        <path d="M90 130 L160 108 L230 130" />

        <path d="M90 130 L120 80 L186 100 L160 152" opacity="0.55" />
        <path d="M230 130 L260 88 L194 70 L160 108" opacity="0.4" />
      </g>

      <g strokeWidth="1.2">
        <rect x="178" y="172" width="44" height="22" fill="#ECEBE3" />
        <text
          x="200"
          y="187"
          textAnchor="middle"
          fontFamily="ui-monospace, Menlo, monospace"
          fontSize="11"
          letterSpacing="2"
          fill="currentColor"
          stroke="none"
        >
          404
        </text>
      </g>

      <g stroke="#A89279" strokeWidth="1.2" opacity="0.7">
        <line x1="62" y1="60" x2="74" y2="48" />
        <line x1="58" y1="74" x2="70" y2="74" />
        <line x1="74" y1="84" x2="86" y2="92" />
      </g>
      <g stroke="#A89279" strokeWidth="1.2" opacity="0.7">
        <line x1="258" y1="60" x2="246" y2="48" />
        <line x1="262" y1="74" x2="250" y2="74" />
        <line x1="246" y1="84" x2="234" y2="92" />
      </g>
    </svg>
  );
}

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="relative z-10 bg-paper mb-0 md:mb-[820px] min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-5rem)] flex items-center py-section-y">
        <Container>
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-8 md:gap-10">
            <p className="eyebrow">
              404 — Página no encontrada
            </p>

            <EmptyBox />

            <h1 className="font-display font-medium text-[2.5rem] md:text-display-lg tracking-tighter leading-[1.02] text-balance">
              La página que buscas
              <span className="block italic text-wood">no está aquí.</span>
            </h1>

            <p className="text-base md:text-lg text-inkSoft text-pretty leading-[1.45] max-w-md">
              Es posible que el enlace haya cambiado o que la página ya no
              exista. Si necesitas ayuda, contacta directamente con nosotros.
            </p>

            <div className="flex flex-wrap gap-x-5 gap-y-3 items-center justify-center pt-2">
              <a
                href="/"
                className="inline-flex items-center justify-center h-12 bg-ink text-paper px-7 text-sm tracking-wide hover:bg-wood transition-colors"
              >
                Volver al inicio
              </a>
              <a
                href="tel:+34937153920"
                className="inline-flex items-center justify-center h-12 px-5 text-sm tracking-wide border border-ink text-ink hover:bg-ink hover:text-paper transition-colors"
              >
                Llamar al 937 153 920
              </a>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
