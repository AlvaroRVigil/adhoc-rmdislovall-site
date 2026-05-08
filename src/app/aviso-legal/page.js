import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Aviso legal",
  description:
    "Información legal de RM Dislovall S.L. — datos identificativos, condiciones de uso y propiedad intelectual.",
  alternates: { canonical: "/aviso-legal" },
};

export default function AvisoLegal() {
  return (
    <LegalPage
      eyebrow="Aviso legal"
      title="Información legal y condiciones de uso del sitio."
      lastUpdated="Mayo 2026"
    >
      <h2 className="font-display font-medium text-xl md:text-2xl tracking-tighter pt-4">
        1. Datos identificativos del titular
      </h2>
      <p>
        En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de
        Servicios de la Sociedad de la Información y de Comercio Electrónico
        (LSSI-CE), se informa a los usuarios de los siguientes datos:
      </p>
      <ul className="list-disc pl-5 space-y-1 text-inkSoft">
        <li>
          <strong className="text-ink">Razón social:</strong> RM Dislovall S.L.
        </li>
        <li>
          <strong className="text-ink">CIF:</strong>{" "}
          <span className="bg-paperDeep/40 px-1 rounded text-inkSoft">
            [pendiente: aportar CIF]
          </span>
        </li>
        <li>
          <strong className="text-ink">Domicilio social:</strong>{" "}
          <span className="bg-paperDeep/40 px-1 rounded text-inkSoft">
            [pendiente: dirección postal completa, Sentmenat (Barcelona)]
          </span>
        </li>
        <li>
          <strong className="text-ink">Email:</strong>{" "}
          <a href="mailto:info@rmdislovall.com" className="underline underline-offset-4 decoration-1 hover:text-wood">
            info@rmdislovall.com
          </a>
        </li>
        <li>
          <strong className="text-ink">Teléfono:</strong>{" "}
          <a href="tel:+34937153920" className="underline underline-offset-4 decoration-1 hover:text-wood">
            937 153 920
          </a>
        </li>
        <li>
          <strong className="text-ink">Datos registrales:</strong>{" "}
          <span className="bg-paperDeep/40 px-1 rounded text-inkSoft">
            [pendiente: tomo, folio, hoja e inscripción del Registro Mercantil de Barcelona]
          </span>
        </li>
      </ul>

      <h2 className="font-display font-medium text-xl md:text-2xl tracking-tighter pt-6">
        2. Objeto del sitio
      </h2>
      <p>
        El presente sitio web tiene por objeto presentar las actividades,
        servicios e información comercial de RM Dislovall S.L., dedicada a la
        fabricación de embalaje de cartón ondulado, manipulado, transporte y
        almacenaje para empresas industriales y logísticas.
      </p>

      <h2 className="font-display font-medium text-xl md:text-2xl tracking-tighter pt-6">
        3. Condiciones de uso
      </h2>
      <p>
        El acceso y uso de este sitio web atribuye la condición de usuario y
        supone la aceptación plena, sin reservas, de todas y cada una de las
        cláusulas del presente Aviso Legal. El usuario se compromete a utilizar
        el sitio web conforme a la legalidad vigente, a la buena fe y al
        respeto a terceros.
      </p>

      <h2 className="font-display font-medium text-xl md:text-2xl tracking-tighter pt-6">
        4. Propiedad intelectual e industrial
      </h2>
      <p>
        Todos los contenidos del sitio (textos, imágenes, logos, diseño,
        código fuente y demás elementos) son titularidad de RM Dislovall S.L. o
        de terceros que han autorizado su uso. Queda prohibida su reproducción,
        distribución, transformación o cualquier otro uso sin autorización
        expresa.
      </p>

      <h2 className="font-display font-medium text-xl md:text-2xl tracking-tighter pt-6">
        5. Limitación de responsabilidad
      </h2>
      <p>
        RM Dislovall S.L. no garantiza la inexistencia de interrupciones o
        errores en el acceso al sitio, ni responde por los daños y perjuicios
        que pudieran derivarse del uso del mismo, salvo lo expresamente
        previsto por la legislación aplicable.
      </p>

      <h2 className="font-display font-medium text-xl md:text-2xl tracking-tighter pt-6">
        6. Legislación aplicable y jurisdicción
      </h2>
      <p>
        Este aviso legal se rige por la legislación española. Para la
        resolución de cualquier controversia, las partes se someten a los
        Juzgados y Tribunales del domicilio del titular del sitio, salvo que
        la legislación aplicable disponga otro fuero.
      </p>
    </LegalPage>
  );
}
