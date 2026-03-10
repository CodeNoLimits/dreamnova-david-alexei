"use client";

import { useTranslations } from "next-intl";

const stepIcons = ["◆", "⬡", "✦", "▲"];
const stepColors = ["#8B7FFF", "#64DFDF", "#8B7FFF", "#64DFDF"];

export default function Process() {
  const t = useTranslations("process");

  const steps = [
    { num: "01", icon: stepIcons[0], color: stepColors[0], title: t("s1_title"), desc: t("s1_desc") },
    { num: "02", icon: stepIcons[1], color: stepColors[1], title: t("s2_title"), desc: t("s2_desc") },
    { num: "03", icon: stepIcons[2], color: stepColors[2], title: t("s3_title"), desc: t("s3_desc") },
    { num: "04", icon: stepIcons[3], color: stepColors[3], title: t("s4_title"), desc: t("s4_desc") },
  ];

  return (
    <section id="process" className="relative z-10 max-w-7xl mx-auto px-4 py-24">
      {/* Header */}
      <div className="text-center mb-20 space-y-4">
        <span
          className="font-mono text-xs uppercase tracking-widest font-medium block"
          style={{ color: "#8B7FFF" }}
        >
          {t("label")}
        </span>
        <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tight max-w-3xl mx-auto leading-tight">
          {t("title").split("Digital Gold").length > 1 ? (
            <>
              {t("title").split("Digital Gold")[0]}
              <span
                style={{
                  background: "linear-gradient(to right, #8B7FFF, #64DFDF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Digital Gold
              </span>
            </>
          ) : (
            t("title")
          )}
        </h2>
      </div>

      {/* Steps grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <div key={i} className="group relative flex flex-col h-full">
            <div
              className="prismatic-hover relative rounded-xl p-8 flex flex-col h-full overflow-hidden transition-all duration-500"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(24px)",
              }}
            >
              {/* Faded big number */}
              <span
                className="absolute -top-4 -right-2 font-mono text-8xl font-black pointer-events-none select-none"
                style={{ color: "rgba(255,255,255,0.04)", fontFamily: "var(--font-space-mono)" }}
              >
                {step.num}
              </span>

              {/* Icon */}
              <div
                className="mb-6 w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `${step.color}15`,
                  border: `1px solid ${step.color}30`,
                  color: step.color,
                }}
              >
                {step.icon}
              </div>

              <h3 className="text-xl font-bold mb-3" style={{ color: "#EEEEF5" }}>
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed font-light" style={{ color: "rgba(238,238,245,0.5)" }}>
                {step.desc}
              </p>
            </div>
          </div>
        ))}

        {/* Connection lines (desktop only) */}
        <div className="hidden lg:block absolute top-1/2 left-0 w-full -z-10" style={{ opacity: 0.2 }}>
          <div className="flex justify-between items-center w-full px-16">
            <div className="h-px flex-1 mx-4" style={{ background: "linear-gradient(to right, transparent, #8B7FFF, #64DFDF)" }} />
            <div className="h-px flex-1 mx-4" style={{ background: "linear-gradient(to right, #64DFDF, #8B7FFF, #64DFDF)" }} />
            <div className="h-px flex-1 mx-4" style={{ background: "linear-gradient(to right, #64DFDF, #8B7FFF, transparent)" }} />
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-20 flex flex-col items-center">
        <div
          className="inline-flex p-1 rounded-full mb-8"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
        >
          <div className="flex items-center gap-2 px-4 py-2">
            <span className="w-2 h-2 rounded-full" style={{ background: "#64DFDF" }} />
            <span
              className="font-mono text-xs uppercase tracking-widest"
              style={{ color: "rgba(238,238,245,0.6)", fontFamily: "var(--font-space-mono)" }}
            >
              System Status: Optimal
            </span>
          </div>
        </div>
        <button
          onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
          className="px-8 py-4 rounded-full font-bold text-sm tracking-wide text-white transition-all"
          style={{
            background: "#8B7FFF",
            boxShadow: "0 0 20px rgba(139,127,255,0.4)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 30px rgba(139,127,255,0.6)")}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 20px rgba(139,127,255,0.4)")}
        >
          BEGIN YOUR TRANSFORMATION
        </button>
      </div>
    </section>
  );
}
