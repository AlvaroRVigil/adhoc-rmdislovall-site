import Container from "./Container";

const logos = Array.from({ length: 10 }, (_, i) => `cliente ${String(i + 1).padStart(2, "0")}`);

export default function Trust() {
  return (
    <section className="py-section-y">
      <Container>
        <h2 className="font-display font-extrabold text-2xl md:text-3xl tracking-tight mb-12 max-w-md text-balance">
          Confían en nosotros.
        </h2>
        <ul className="grid grid-cols-2 md:grid-cols-5 gap-px bg-border border border-border">
          {logos.map((label) => (
            <li
              key={label}
              className="bg-paper aspect-[3/2] flex items-center justify-center px-4 text-[10px] uppercase tracking-[0.22em] text-inkSoft/60 grayscale opacity-70 hover:opacity-100 hover:text-ink transition"
            >
              {label}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
