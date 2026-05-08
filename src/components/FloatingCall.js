export default function FloatingCall() {
  return (
    <a
      href="tel:+34937153920"
      className="md:hidden fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 bg-ink text-paper px-5 py-4 shadow-lg shadow-ink/20 text-sm tracking-wide"
      aria-label="Llamar a RM Dislovall"
    >
      <span className="w-2 h-2 rounded-full bg-paper" aria-hidden />
      Llamar ahora
    </a>
  );
}
