export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://rmdislovall.com#business",
    name: "RM Dislovall S.L.",
    legalName: "RM Dislovall S.L.",
    description:
      "Embalaje de cartón ondulado a medida, manipulado, almacenaje y transporte propio. Todo tu suministro de embalaje en un solo proveedor, con más de 40 años de experiencia con empresas industriales y logísticas en Cataluña.",
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
      "Embalaje de cartón ondulado a medida",
      "Manipulado y preparación de pedidos",
      "Transporte y entregas con flota propia",
      "Almacenaje y gestión de stock",
      "Material auxiliar y consumibles de embalaje",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
