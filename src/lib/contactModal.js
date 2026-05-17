// Disparador global del modal de contacto.
// Cualquier CTA llama a openContactModal(); ContactModalHost lo escucha y abre el formulario.
export function openContactModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("rmd:open-contact"));
  }
}
