export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://rmdislovall.com#business",
    name: "RM Dislovall S.L.",
    legalName: "RM Dislovall S.L.",
    description:
      "Soluciones de embalaje de cartón ondulado a medida, manipulados, transporte propio y almacenaje. Más de 40 años de experiencia sirviendo a empresas industriales en Cataluña.",
    url: "https://rmdislovall.com",
    telephone: "+34937153920",
    email: "info@rmdislovall.com",
    vatID: "ESB66048273",
    taxID: "B66048273",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle Cementiri Nou, 8",
      postalCode: "08181",
      addressLocality: "Sentmenat",
      addressRegion: "Barcelona",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.6125,
      longitude: 2.132,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "17:00",
      },
    ],
    areaServed: [
      { "@type": "AdministrativeArea", name: "Cataluña" },
      { "@type": "Country", name: "España" },
    ],
    knowsAbout: [
      "Embalaje de cartón ondulado",
      "Cajas a medida",
      "Manipulados industriales",
      "Picking y paletizado",
      "Almacenaje y stock bajo demanda",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
