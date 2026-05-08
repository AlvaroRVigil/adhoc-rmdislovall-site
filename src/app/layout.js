import { GeistSans } from "geist/font/sans";
import "./globals.css";

const SITE_URL = "https://rmdislovall.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "RM Dislovall — Embalaje de cartón ondulado a medida en Barcelona",
    template: "%s · RM Dislovall",
  },
  description:
    "Fabricantes de embalaje de cartón ondulado a medida en Sentmenat (Barcelona) desde 1984. Cajas, manipulados, transporte propio y almacenaje. Pide presupuesto.",
  keywords: [
    "embalaje cartón ondulado",
    "cajas a medida Barcelona",
    "fabricante embalaje industrial",
    "cartonajes Sentmenat",
    "manipulados embalaje",
    "transporte cajas Barcelona",
    "embalaje B2B",
  ],
  authors: [{ name: "RM Dislovall S.L." }],
  creator: "RM Dislovall S.L.",
  publisher: "RM Dislovall S.L.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "RM Dislovall — Embalaje de cartón ondulado a medida en Barcelona",
    description:
      "Fabricantes de embalaje de cartón ondulado a medida en Sentmenat (Barcelona) desde 1984. Cajas, manipulados, transporte propio y almacenaje.",
    url: SITE_URL,
    siteName: "RM Dislovall",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RM Dislovall — Embalaje de cartón ondulado a medida",
    description:
      "Cajas, manipulados, transporte propio y almacenaje. Sentmenat (Barcelona). Desde 1984.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  other: {
    "geo.region": "ES-CT",
    "geo.placename": "Sentmenat",
    "geo.position": "41.6125;2.1320",
    ICBM: "41.6125, 2.1320",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={GeistSans.variable}
          style={{ "--font-sans": "var(--font-geist-sans)" }}
    >
      <body>{children}</body>
    </html>
  );
}
