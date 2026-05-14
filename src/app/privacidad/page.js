import LegalPage from "@/components/LegalPage";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Política de privacidad",
  description:
    "Política de privacidad y tratamiento de datos personales de RM Dislovall S.L. conforme al RGPD y la LOPDGDD.",
  alternates: { canonical: "/privacidad" },
};

export default function Privacidad() {
  return (
    <LegalPage
      eyebrow="Política de privacidad"
      title="Tratamiento de datos personales y derechos del usuario."
      lastUpdated="Mayo 2026"
    >
      <p>
        En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y de la Ley
        Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y
        garantía de los derechos digitales (LOPDGDD), RM Dislovall S.L. informa
        a los usuarios sobre el tratamiento de sus datos personales.
      </p>

      <h2 className="font-display font-medium text-xl md:text-2xl tracking-tighter pt-4">
        1. Responsable del tratamiento
      </h2>
      <ul className="list-disc pl-5 space-y-1 text-inkSoft">
        <li>
          <strong className="text-ink">Titular:</strong> {siteConfig.legalName}
        </li>
        <li>
          <strong className="text-ink">CIF:</strong> {siteConfig.cif}
        </li>
        <li>
          <strong className="text-ink">Domicilio:</strong>{" "}
          {siteConfig.address.street}, {siteConfig.address.postalCode}{" "}
          {siteConfig.address.locality} ({siteConfig.address.region}),{" "}
          {siteConfig.address.country}
        </li>
        <li>
          <strong className="text-ink">Contacto:</strong>{" "}
          <a href={siteConfig.email.href} className="underline underline-offset-4 decoration-1 hover:text-accent">
            {siteConfig.email.label}
          </a>
        </li>
      </ul>

      <h2 className="font-display font-medium text-xl md:text-2xl tracking-tighter pt-6">
        2. Finalidad del tratamiento
      </h2>
      <p>
        Los datos personales recogidos a través del formulario de contacto del
        sitio web (nombre, empresa, teléfono, email y mensaje) se tratan con
        las siguientes finalidades:
      </p>
      <ul className="list-disc pl-5 space-y-1 text-inkSoft">
        <li>Atender las consultas y solicitudes de presupuesto recibidas.</li>
        <li>
          Mantener una comunicación comercial directa con potenciales clientes.
        </li>
        <li>Gestionar relaciones contractuales con clientes activos.</li>
      </ul>

      <h2 className="font-display font-medium text-xl md:text-2xl tracking-tighter pt-6">
        3. Base legal
      </h2>
      <p>
        La base legal para el tratamiento es el consentimiento del usuario,
        otorgado al enviar el formulario, así como el interés legítimo en
        responder a la consulta planteada.
      </p>

      <h2 className="font-display font-medium text-xl md:text-2xl tracking-tighter pt-6">
        4. Plazo de conservación
      </h2>
      <p>
        Los datos se conservarán durante{" "}
        <span className="bg-paperDeep/40 px-1 rounded text-inkSoft">
          [pendiente confirmar plazo: sugerido 1 año desde la última comunicación, o hasta la finalización de la relación comercial]
        </span>
        . Pasado ese plazo se eliminarán de forma segura, salvo que exista una
        obligación legal de conservación superior.
      </p>

      <h2 className="font-display font-medium text-xl md:text-2xl tracking-tighter pt-6">
        5. Cesión de datos a terceros
      </h2>
      <p>
        Los datos no se ceden a terceros salvo obligación legal.{" "}
        <span className="bg-paperDeep/40 px-1 rounded text-inkSoft">
          [pendiente: si existe encargado del tratamiento externo (gestoría, CRM, plataforma de email), declararlo aquí]
        </span>
      </p>

      <h2 className="font-display font-medium text-xl md:text-2xl tracking-tighter pt-6">
        6. Derechos del usuario
      </h2>
      <p>
        El usuario podrá ejercer en cualquier momento los derechos de acceso,
        rectificación, supresión, oposición, limitación del tratamiento y
        portabilidad de sus datos, dirigiéndose por escrito a{" "}
        <a href="mailto:info@rmdislovall.com" className="underline underline-offset-4 decoration-1 hover:text-accent">
          info@rmdislovall.com
        </a>{" "}
        acompañando copia de su documento de identidad.
      </p>
      <p>
        Asimismo, el usuario puede presentar una reclamación ante la Agencia
        Española de Protección de Datos (
        <a
          href="https://www.aepd.es"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4 decoration-1 hover:text-accent"
        >
          aepd.es
        </a>
        ) si considera vulnerados sus derechos.
      </p>

      <h2 className="font-display font-medium text-xl md:text-2xl tracking-tighter pt-6">
        7. Seguridad
      </h2>
      <p>
        RM Dislovall S.L. aplica las medidas técnicas y organizativas
        razonables para garantizar la integridad y confidencialidad de los
        datos personales tratados.
      </p>
    </LegalPage>
  );
}
