/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export estático: genera HTML plano en out/ para servir desde el Plesk de ANW
  // (sin SSR). La web no usa rutas API ni next/image, así que es compatible.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
