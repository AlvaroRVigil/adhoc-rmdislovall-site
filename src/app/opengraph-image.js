import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "RM Dislovall — Embalaje industrial y manipulado para empresas y entornos logísticos";

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#30271D",
          color: "#DBC8B6",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica",
        }}
      >
        <div
          style={{
            fontSize: 18,
            letterSpacing: 4,
            opacity: 0.7,
            textTransform: "uppercase",
            display: "flex",
            gap: 16,
          }}
        >
          <span>RM Dislovall</span>
          <span>·</span>
          <span>Sentmenat · Barcelona</span>
          <span>·</span>
          <span>Desde 1984</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 92,
              fontWeight: 600,
              lineHeight: 0.96,
              letterSpacing: -3,
              color: "#ECEBE3",
            }}
          >
            <span>Embalaje industrial</span>
            <span>y manipulado.</span>
          </div>
          <div
            style={{
              fontSize: 28,
              fontStyle: "italic",
              color: "#A89279",
              maxWidth: 900,
              lineHeight: 1.25,
            }}
          >
            Para empresas y entornos logísticos.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 16,
            opacity: 0.6,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <span>Cartón ondulado · Manipulado · Logística</span>
          <span>rmdislovall.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
