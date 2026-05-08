import Container from "./Container";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur-md">
      <Container className="flex items-center justify-between h-16 md:h-20 gap-8">
        <a href="#" className="flex items-baseline gap-3 shrink-0" aria-label="RM Dislovall — inicio">
          <span className="font-display text-base tracking-tight uppercase">
            RM Dislovall
          </span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.24em] text-inkSoft">
            desde 1984
          </span>
        </a>

        <nav className="flex items-center gap-6 text-sm">
          <a href="#nosotros" className="hidden md:inline hover:text-wood transition-colors">Nosotros</a>
          <a href="#servicios" className="hidden md:inline hover:text-wood transition-colors">Servicios</a>
          <a href="#trabajos" className="hidden md:inline hover:text-wood transition-colors">Trabajos</a>
          <a href="#faq" className="hidden md:inline hover:text-wood transition-colors">FAQ</a>
          <a
            href="#contacto"
            className="underline underline-offset-4 decoration-1 hover:text-wood hover:decoration-wood transition-colors"
          >
            Contacto
          </a>
        </nav>
      </Container>
    </header>
  );
}
