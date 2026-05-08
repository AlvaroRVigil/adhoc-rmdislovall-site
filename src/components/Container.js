export default function Container({ children, className = "", style, id }) {
  return (
    <div
      id={id}
      style={style}
      className={`mx-auto w-full max-w-container px-section-x ${className}`}
    >
      {children}
    </div>
  );
}
