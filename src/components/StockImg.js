export default function StockImg({ src, alt, className = "", w = 1200, q = 80 }) {
  const isLocal = src.startsWith("/") || src.startsWith("./");
  const finalSrc = isLocal ? src : `${src}?w=${w}&q=${q}&auto=format&fit=crop`;
  return (
    <img
      src={finalSrc}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`absolute inset-0 w-full h-full object-cover ${className}`}
    />
  );
}
