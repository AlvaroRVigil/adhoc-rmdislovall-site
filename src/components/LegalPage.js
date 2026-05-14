import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";

export default function LegalPage({ eyebrow, title, lastUpdated, children }) {
  return (
    <>
      <Header />
      <main className="relative z-10 bg-paper mb-[100svh] md:mb-[820px] pt-16 md:pt-24 pb-section-y">
        <Container className="max-w-3xl">
          <p className="eyebrow mb-4">
            · {eyebrow}
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
