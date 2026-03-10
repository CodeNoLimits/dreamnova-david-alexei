import { ImageResponse } from "next/og"

export const dynamic = "force-static"
export const runtime = "nodejs"
export const alt = "TerraMind — Dream Nova Consult"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #06060C 0%, #0D0D1E 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(212,175,55,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.05) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            display: "flex",
          }}
        />

        {/* Status badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "32px",
            padding: "10px 24px",
            borderRadius: "999px",
            border: "1px solid rgba(212,175,55,0.3)",
            background: "rgba(212,175,55,0.05)",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#D4AF37",
            }}
          />
          <span style={{ color: "#D4AF37", fontSize: "16px", fontWeight: 600 }}>
            TERRAMIND ONLINE
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "white",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: "20px",
            padding: "0 80px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span>Votre Empire Digital</span>
          <span style={{ color: "#D4AF37" }}>Commence Maintenant</span>
        </div>

        {/* Subline */}
        <div
          style={{
            fontSize: "22px",
            color: "rgba(255,255,255,0.5)",
            textAlign: "center",
            marginBottom: "48px",
            display: "flex",
          }}
        >
          Systèmes IA autonomes · ROI ×3.4 · Déploiement 72h
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: "48px" }}>
          {[
            { v: "84+", l: "Projets" },
            { v: "×3.4", l: "ROI moyen" },
            { v: "72h", l: "Délai" },
            { v: "7", l: "Agents IA" },
          ].map((s) => (
            <div
              key={s.l}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <span style={{ fontSize: "32px", fontWeight: 700, color: "#D4AF37" }}>
                {s.v}
              </span>
              <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)" }}>
                {s.l}
              </span>
            </div>
          ))}
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            right: "48px",
            fontSize: "14px",
            color: "rgba(212,175,55,0.4)",
            display: "flex",
          }}
        >
          dreamnova-consult.vercel.app
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
