export default function manifest() {
  return {
    name: "RM Dislovall",
    short_name: "RM Dislovall",
    description:
      "Embalaje de cartón ondulado, manipulado, almacenaje y transporte. Todo tu suministro en un solo proveedor.",
    start_url: "/",
    scope: "/",
    display: "browser",
    background_color: "#FBF7F2",
    theme_color: "#30271D",
    lang: "es-ES",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
