export default function PillButton({ href, children, dark = true, className = "" }) {
  const base =
    "inline-flex items-center gap-3 pl-2 pr-6 py-2 text-sm tracking-wide transition-colors";
  const variant = dark
    ? "bg-ink text-paper hover:bg-woodDeep"
    : "bg-paper text-ink border border-ink hover:bg-ink hover:text-paper";
  return (
    <a href={href} className={`${base} ${variant} ${className}`}>
      <span
        className={`w-7 h-7 rounded-full flex items-center justify-center ${
          dark ? "bg-paper/15" : "bg-ink/10"
        }`}
        aria-hidden
      >
        <span className="block w-2 h-2 rounded-full bg-current" />
      </span>
      {children}
    </a>
  );
}
