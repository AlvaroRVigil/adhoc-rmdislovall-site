"use client";

import { useEffect, useState } from "react";
import ContactModal from "./ContactModal";

// Instancia única del modal de contacto, montada a nivel de página.
// Se abre desde cualquier CTA mediante openContactModal().
export default function ContactModalHost() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener("rmd:open-contact", onOpen);
    return () => window.removeEventListener("rmd:open-contact", onOpen);
  }, []);

  return <ContactModal open={open} onClose={() => setOpen(false)} />;
}
