export default function Badge({ className = "" }) {
  const text = "DESDE 1984 · EXPERIENCIA Y CONFIANZA · ";
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      aria-hidden
    >
      <div
        className="relative w-full h-full"
        style={{
          animation: "badge-spin 28s linear infinite",
          transformOrigin: "center",
        }}
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full text-paper"
          fill="currentColor"
        >
          <circle cx="100" cy="100" r="98" fill="#9B2F23" />
          <circle
            cx="100"
            cy="100"
            r="88"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.4"
            strokeWidth="0.8"
          />
          <defs>
            <path
              id="badge-arc"
              d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
            />
          </defs>
          <text
            fill="currentColor"
            style={{
              fontFamily: "var(--font-sans), system-ui, sans-serif",
              fontSize: "16px",
              fontWeight: 600,
              letterSpacing: "3px",
            }}
          >
            <textPath href="#badge-arc" startOffset="0">
              {text + text}
            </textPath>
          </text>
        </svg>
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ animation: "badge-spin-reverse 28s linear infinite" }}
        >
          <span
            className="font-display font-medium text-paper leading-[0.9] text-center tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            40
            <span className="block font-normal tracking-[0.22em] uppercase text-[0.32em] mt-1.5">
              años
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
