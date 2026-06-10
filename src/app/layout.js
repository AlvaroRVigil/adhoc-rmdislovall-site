import { GeistSans } from "geist/font/sans";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import FooterHeightSync from "@/components/FooterHeightSync";
import Loader from "@/components/Loader";

const SITE_URL = "https://rmdislovall.com";
const SITE_NAME = "RM Dislovall";
const TITLE_DEFAULT =
  "RM Dislovall — Soluciones de embalaje, logística y gestión de stock.";
const DESCRIPTION =
  "Embalaje de cartón ondulado a medida, manipulado, almacenaje y transporte. Todo tu suministro en un solo proveedor.";

/*
  PENDIENTES DE ACTIVOS DEL CLIENTE
  ---------------------------------
  - app/icon.svg          → favicon provisional (RM en marrón). Sustituir por el icono oficial cuando lo aporte el cliente. Idealmente formatos: icon.png 32×32, apple-icon.png 180×180, icon.svg vectorial.
  - app/opengraph-image.js → OG/Twitter image generada vía Next/og (texto sobre marrón). Sustituir por una imagen real (1200×630 PNG/JPG) cuando se disponga de una composición fotográfica oficial. Reemplazar este archivo por opengraph-image.png/.jpg en la misma carpeta — Next la auto-detecta.
*/

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE_DEFAULT,
    template: "%s · RM Dislovall",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "RM Dislovall S.L.", url: SITE_URL }],
  creator: "RM Dislovall S.L.",
  publisher: "RM Dislovall S.L.",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "embalaje industrial",
    "embalaje cartón ondulado",
    "cajas a medida Barcelona",
    "proveedor embalaje cartón ondulado Cataluña",
    "cartonajes Sentmenat",
    "manipulado embalaje",
    "transporte cajas Barcelona",
    "almacenaje y stock embalaje",
    "material auxiliar embalaje",
    "transporte embalaje Sentmenat",
    "embalaje B2B",
    "suministro logístico embalaje",
  ],
  category: "Industrial packaging",
  classification: "Business",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE_DEFAULT,
    description: DESCRIPTION,
    /* images se auto-detecta desde app/opengraph-image.js */
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE_DEFAULT,
    description: DESCRIPTION,
    /* images se auto-detecta desde app/twitter-image.js */
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    /* TODO cuando aporte el cliente: google: "...", yandex: "..." */
  },
  other: {
    "geo.region": "ES-CT",
    "geo.placename": "Sentmenat",
    "geo.position": "41.6125;2.1320",
    ICBM: "41.6125, 2.1320",
  },
};

export const viewport = {
  themeColor: "#30271D",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={GeistSans.variable}
          style={{ "--font-sans": "var(--font-geist-sans)" }}
    >
      <body>
        <Loader />
        {children}
        <CookieBanner />
        <FooterHeightSync />
      </body>
    </html>
  );
}
