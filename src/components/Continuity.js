import Container from "./Container";

export default function Continuity() {
  return (
    <section className="py-section-y bg-paperSoft border-y border-border">
      <Container>
        <div className="max-w-2xl mx-auto text-center space-y-5 md:space-y-6">
          <h2 className="heading-section">
            Pensado para el ritmo real
            <span className="block italic text-wood">de cada operativa.</span>
          </h2>
          <p className="text-base md:text-lg text-inkSoft text-pretty leading-[1.5]">
            Cada cliente trabaja con necesidades distintas de producción,
            almacenaje y expedición. El servicio se adapta a cada operativa
            para garantizar continuidad, capacidad de respuesta y suministro
            estable.
          </p>
        </div>
      </Container>
    </section>
  );
}
