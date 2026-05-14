import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Política de cookies",
  description:
    "Información sobre el uso de cookies en el sitio web de RM Dislovall S.L.",
  alternates: { canonical: "/cookies" },
};

export default function Cookies() {
  return (
    <LegalPage
      eyebrow="Política de cookies"
      title="Información sobre las cookies utilizadas en este sitio."
      lastUpdated="Mayo 2026"
    >
      <h2 className="font-display font-medium text-xl md:text-2xl tracking-tighter pt-4">
        1. Qué son las cookies
      </h2>
      <p>
        Las cookies son pequeños archivos de texto que un sitio web almacena en
        el dispositivo del usuario al navegar. Permiten reconocer al usuario
        entre visitas y mejorar la experiencia.
      </p>

      <h2 className="font-display font-medium text-xl md:text-2xl tracking-tighter pt-6">
        2. Cookies utilizadas en este sitio
      </h2>
      <p>
        El sitio web de RM Dislovall S.L. utiliza el siguiente tipo de
        cookies:
      </p>
      <ul className="list-disc pl-5 space-y-2 text-inkSoft">
        <li>
          <strong className="text-ink">Cookies técnicas (necesarias):</strong>{" "}
          imprescindibles para el funcionamiento del sitio. No requieren
          consentimiento del usuario.
        </li>
        <li>
          <strong className="text-ink">Cookies de terceros:</strong> el sitio
          carga contenidos embebidos de servicios externos que pueden instalar
          sus propias cookies:
          <ul className="list-[circle] pl-5 mt-1 space-y-1">
            <li>
              <strong>OpenStreetMap</strong> — para mostrar el mapa de
              ubicación. Más info en{" "}
              <a
                href="https://wiki.osmfoundation.org/wiki/Privacy_Policy"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 decoration-1 hover:text-accent"
              >
                osmfoundation.org
              </a>
              .
            </li>
            <li>
              <strong>Unsplash CDN</strong> — para servir las imágenes del
              sitio. Más info en{" "}
              <a
                href="https://unsplash.com/privacy"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 decoration-1 hover:text-accent"
              >
                unsplash.com/privacy
              </a>
              .
            </li>
          </ul>
        </li>
      </ul>
      <p>
        Actualmente el sitio <strong className="text-ink">no utiliza cookies de analítica ni de publicidad</strong>.
      </p>

      <h2 className="font-display font-medium text-xl md:text-2xl tracking-tighter pt-6">
        3. Cómo gestionar o eliminar cookies
      </h2>
      <p>
        El usuario puede configurar su navegador para aceptar, rechazar o
        eliminar las cookies en cualquier momento. Las instrucciones varían
        según el navegador:
      </p>
      <ul className="list-disc pl-5 space-y-1 text-inkSoft">
        <li>
          <a
            href="https://support.google.com/chrome/answer/95647"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 decoration-1 hover:text-accent"
          >
            Google Chrome
          </a>
        </li>
        <li>
          <a
            href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 decoration-1 hover:text-accent"
          >
            Mozilla Firefox
          </a>
        </li>
        <li>
          <a
            href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 decoration-1 hover:text-accent"
          >
            Safari
          </a>
        </li>
        <li>
          <a
            href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 decoration-1 hover:text-accent"
          >
            Microsoft Edge
          </a>
        </li>
      </ul>

      <h2 className="font-display font-medium text-xl md:text-2xl tracking-tighter pt-6">
        4. Cambios en esta política
      </h2>
      <p>
        RM Dislovall S.L. podrá actualizar esta política de cookies cuando se
        introduzcan nuevos servicios o cookies en el sitio. Cualquier cambio
        se reflejará en la fecha de la última actualización.
      </p>
    </LegalPage>
  );
}
