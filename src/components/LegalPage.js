import Footer from "./Footer";
import Container from "./Container";

export default function LegalPage({ eyebrow, title, lastUpdated, children }) {
  return (
    <>
      <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur-md">
        <Container className="flex items-center justify-between h-16 md:h-20 gap-8">
          <a
            href="/"
            className="flex items-center gap-3 shrink-0"
            aria-label="RM Dislovall — inicio"
          >
            <img
              src="/brand/logo-horizontal.svg"
              alt="RM Dislovall"
              width={1000}
              height={217}
              className="h-7 md:h-8 w-auto"
            />
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-[15px] text-ink hover:text-accent transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
            Volver al inicio
          </a>
        </Container>
      </header>
      <main className="relative z-10 bg-paper mb-0 md:mb-[820px] pt-16 md:pt-24 pb-section-y">
        <Container className="max-w-3xl">
          <p className="eyebrow mb-4">
            {eyebrow}
          </p>
          <h1 className="font-display font-medium text-[2.125rem] md:text-4xl tracking-tighter leading-[1.05] text-balance mb-6">
            {title}
          </h1>
          {lastUpdated && (
            <p className="text-xs text-inkSoft mb-12 border-b border-border pb-6">
              Última actualización: {lastUpdated}
            </p>
          )}
          <div className="prose-legal space-y-6 text-base text-ink leading-[1.65]">
            {children}
          </div>
          <div className="mt-16 pt-8 border-t border-border">
            <a
              href="/"
              className="text-sm text-inkSoft underline underline-offset-4 decoration-1 hover:text-accent hover:decoration-wood transition"
            >
              ← Volver al inicio
            </a>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
