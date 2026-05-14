# Pendientes del cliente — RM Dislovall

Información y assets que necesitamos de Ruth / Ricard para sustituir los placeholders actuales de la web. Los archivos / strings marcados con **TODO** en el código apuntan a esta lista.

---

## Revisión de copy completo (pendiente del cliente)

El cliente debe pasar **ajustes/revisión del copy** de toda la web antes de cierre. Cuando lleguen, repasar y actualizar:

- **Meta description** en [src/app/layout.js](src/app/layout.js) — afecta a Google y a previews de WhatsApp, LinkedIn, Twitter, etc.
- **Title default** en [src/app/layout.js](src/app/layout.js).
- **H1 del Hero** y todos los headlines de sección (Statement, About, Services, Material, Process, Faq, Footer).
- **Cuerpos de párrafo** en Hero, About, Material, Process.
- **FAQ** completa — preguntas y respuestas en [src/components/Faq.js](src/components/Faq.js).
- **Lista de servicios y descripciones** en [src/components/Services.js](src/components/Services.js).
- **Facts del About** en [src/components/About.js](src/components/About.js).
- **Marquee del Hero** con los facts en [src/components/Hero.js](src/components/Hero.js).
- **Copy del Badge** ("DESDE 1984 · EXPERIENCIA Y CONFIANZA") en [src/components/Badge.js](src/components/Badge.js).
- **Card del botón flotante** en [src/components/FloatingCall.js](src/components/FloatingCall.js).
- **Textos del ContactModal** y formulario.
- **Páginas legales** (`/aviso-legal`, `/privacidad`, `/cookies`) — pendientes de validación legal final.

Refrescar previews en redes tras subir cambios usando el debugger de Facebook (`developers.facebook.com/tools/debug`) o `linkedin.com/post-inspector`.

---

## Identidad visual

### Logo
- **Estado actual:** placeholder de texto "RM DISLOVALL" en Geist Sans Bold.
- **Necesitamos:** logo oficial vectorial.
- **Formatos ideales:** SVG (preferido) o AI / EPS / PDF editables.
- **Variantes útiles:**
  - Positiva (color marca sobre fondo claro)
  - Negativa (color crema sobre fondo marrón / oscuro)
- **Aplicación:** Header, Footer, Favicon.

### Favicon
- **Estado actual:** `app/icon.svg` provisional con "RM" sobre fondo marrón.
- **Necesitamos:**
  - `icon.png` 32×32
  - `apple-icon.png` 180×180
  - `icon.svg` vectorial (opcional pero recomendado)
- **Aplicación:** sustituir los archivos en `src/app/`. Next.js los auto-detecta.

### Imagen Open Graph / compartir en redes
- **Estado actual:** generada dinámicamente vía Next/og en `app/opengraph-image.js` (texto blanco sobre marrón).
- **Necesitamos:** imagen oficial 1200×630 PNG o JPG, idealmente con composición fotográfica (planta o producto + claim + logo).
- **Aplicación:** sustituir `app/opengraph-image.js` por `app/opengraph-image.png` o `.jpg` en la misma carpeta — Next la auto-detecta.

---

## Fotografía real de la empresa

Todas las imágenes actuales son stock de Unsplash. **Esto es lo que más cambia la percepción de la web** una vez sustituido. Necesitamos fotografía propia de:

- Planta / instalaciones (interior, líneas de producción, maquinaria de troquelado)
- Almacén con cajas paletizadas y estanterías
- Cajas terminadas / producto fabricado (variedad de formatos: estándar, troquelada, tipo box)
- Manipulado en proceso (etiquetado, montaje, paletizado, picking)
- Detalle de fibra / canal de cartón ondulado
- Fachada y/o equipo (opcional, para About)
- Flota propia (camiones, carretillas, expediciones)

Idealmente **8-12 fotos** en alta resolución, calidad profesional, mezcla de formato vertical y horizontal.

---

## Datos de contacto del footer

Confirmar / completar la información del bloque de contacto del footer (sección "Empezamos a trabajar"):

- **Teléfono principal:** ¿Es correcto `937 153 920`? ¿Hay un móvil / WhatsApp Business adicional?
- **Email general:** `info@rmdislovall.com` — ¿es el adecuado para consultas comerciales? ¿Existe un email distinto para presupuestos / ventas (`comercial@`, `ventas@`...) que prefieran exhibir?
- **Dirección completa:** actualmente solo "Sentmenat (Barcelona)" — ¿queremos mostrar la calle y número exactos en el footer y/o en el mapa? Útil tanto para visitas como para SEO local.
- **Horario:** "Lunes a viernes · 7:00 — 15:00". Confirmar si es correcto y si tienen alguna línea de **urgencias 24h** o atención fuera de horario que merezca aparecer.
- **Festivos / cierres anuales:** ¿quieren reflejar fechas de cierre (ej. agosto, navidades) o lo dejamos genérico?
- **Idiomas de atención:** ¿catalán, inglés además de castellano? Si sí, podemos indicarlo.
- **Redes sociales:** ¿LinkedIn, Instagram, otras? Si tienen, las añadimos al footer.

## Datos legales y fiscales

Necesarios para `app/aviso-legal/page.js` y para el schema LocalBusiness en `components/JsonLd.js`.

- **CIF/NIF** de RM Dislovall S.L.
- **Domicilio social completo** (calle, número, código postal — Sentmenat)
- **Datos del Registro Mercantil de Barcelona:**
  - Tomo
  - Folio
  - Hoja
  - Inscripción
- **Email para asuntos legales** (si es distinto de `info@rmdislovall.com`)

---

## Política de privacidad

- **Plazo de conservación de datos** del formulario web (sugerido: 1 año desde la última comunicación, o hasta finalización del contacto comercial).
- **Encargado del tratamiento** externo (si tienen una gestoría / proveedor que procese datos del CRM o emails).
- **Cesiones a terceros** que apliquen (CRM, ERP, plataforma de email marketing, etc.). Si no hay → declararlo así.

---

## Política de cookies

- Confirmar que **no se usa Google Analytics ni similar** (la web actualmente no carga ningún tracker).
- Si en el futuro se añade analytics, marketing pixels o similar, hay que:
  1. Actualizar la página `/cookies` para declararlo.
  2. **Sustituir el banner actual** (que es disclosure básico) por una solución real con bloqueo previo y consentimiento granular por categorías. Recomendado: [vanilla-cookieconsent](https://cookieconsent.orestbida.com) (open source, gratis) o equivalente comercial (Cookiebot / OneTrust / Iubenda).
  3. Añadir un link "Preferencias de cookies" en el footer que reabra el banner.

> **Nota:** el banner actual es proporcional al estado real de la web (sin trackers). Cumple su función informativa de buena fe. La obligación de bloqueo previo y consentimiento granular solo aplica cuando hay cookies de analítica/marketing reales — entonces hay que migrar a la solución completa descrita arriba.

---

## Logos de clientes (opcional)

Para sustituir la barra-marquee de sectores por logos reales:

- **6-12 logos** de clientes destacados (con autorización explícita para uso público).
- Formato SVG monocromo si es posible (mejor adaptación a la paleta tierra del sitio).

---

## Certificaciones (opcional)

- ¿RM Dislovall tiene ISO 9001, ISO 14001, FSC u otras certificaciones?
- Si sí: pasarnos los logos oficiales + número de certificación. Es **prueba silenciosa de calidad** muy potente para B2B industrial.

---

## Datos de valor comercial (para "Nosotros" y SEO)

Datos cuantitativos reales que refuercen el posicionamiento sin inventar nada. Si Ruth/Ricard tienen alguna de estas métricas, las usamos en la sección **Quiénes somos** y/o como fact pills en otras secciones.

Lo más útil para B2B industrial:

- **Volumen de producción anual** — m² de cartón fabricado / año, número de cajas / año, toneladas procesadas / año.
- **Clientes activos** — número aproximado de cuentas con pedido recurrente. Si son muchos, decir "+ X clientes activos".
- **Antigüedad media de los clientes** — "X años de relación media con nuestros clientes" es un argumento muy fuerte.
- **% de pedidos entregados en plazo** — si tienen registro (ej. "98 % de pedidos entregados en plazo").
- **Tiempo medio de respuesta a un presupuesto** — "Presupuesto en 24-48 h" es un compromiso vendible.
- **Capacidad productiva diaria/semanal** — paletas/día, m²/día, cajas/turno.
- **Flota propia** — número de vehículos.
- **Plantilla** — empleados directos (sin caer en "más de X profesionales").
- **Sectores cubiertos** — número de sectores distintos en cartera.
- **Pedidos urgentes resueltos al año** — si lo trackean.
- **Tipologías de producto** — número de referencias activas en catálogo.

Aplicación en la web: 4-6 de estos datos, los más sólidos, para reemplazar/complementar los facts actuales en `components/About.js` y para incluir como prueba en otras secciones (Hero marquee, Diferencial).

> Si no tienen métricas registradas, mejor mantener los facts actuales (que son verificables) que inventar números.

Para enriquecer la sección "Trabajos":

- **3-6 casos reales** con:
  - Sector / cliente (puede ir anonimizado: "Cliente del sector alimentación")
  - Tipo de embalaje fabricado
  - Foto del proyecto
  - Métrica destacable si es posible (volumen, tiempo de respuesta, plazo cumplido…)

---

## Verificaciones SEO

- **Token de Google Search Console** (si quieren registrar el sitio para monitorizar posicionamiento).
- **Token de Bing Webmaster Tools** (opcional).
- Una vez tengamos los tokens, se añaden en `metadata.verification` en `layout.js`.

---

## URL definitiva del sitio

- Confirmar dominio final: `rmdislovall.com` (actualmente todo el SEO y schema apunta ahí).
- Si va a ser otro dominio, hay que actualizar:
  - `SITE_URL` en `app/layout.js`
  - `url` y `@id` en `components/JsonLd.js`
  - `app/sitemap.js` y `app/robots.js`

---

## Otros / nice-to-have

- Vídeo institucional o de la planta (si tienen) — añadir como sección de fondo/loop en home.
- Dossier comercial PDF descargable.
- Línea directa de WhatsApp B2B (si la usan).
