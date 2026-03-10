"use client";

import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-4 z-10 overflow-hidden"
    >
      {/* Background Video (Desktop only) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20 hidden lg:block"
        style={{ zIndex: -1 }}
      >
        <source src="/videos/hero-market-dolly.mp4" type="video/mp4" />
      </video>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left — text */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}>
            <span className="pulse-dot" />
            <span className="text-xs font-mono uppercase tracking-widest" style={{ color: "#64DFDF" }}>
              {t("badge")}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            <span style={{ color: "#EEEEF5" }}>{t("title1")}</span>
            <br />
            <span className="gradient-text-hero">{t("title2")}</span>
            <br />
            <span style={{ color: "#EEEEF5" }}>{t("title3")}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg mb-10 max-w-xl" style={{ color: "rgba(238,238,245,0.55)", lineHeight: 1.7 }}>
            {t("subtitle")}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16">
            <button
              onClick={() => scrollTo("pricing")}
              className="px-8 py-4 rounded-xl font-bold text-white transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #6961ff, #8B7FFF)",
                boxShadow: "0 4px 24px rgba(105,97,255,0.4)",
              }}
            >
              {t("cta1")} →
            </button>
            <button
              onClick={() => scrollTo("portfolio")}
              className="px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#EEEEF5",
              }}
            >
              {t("cta2")}
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-10">
            {[
              { num: t("stat1_num"), label: t("stat1_label") },
              { num: t("stat2_num"), label: t("stat2_label") },
              { num: t("stat3_num"), label: t("stat3_label") },
            ].map((stat, i) => (
              <div key={i}>
                <div
                  className="text-3xl font-bold mb-0.5"
                  style={{ fontFamily: "var(--font-space-mono)", color: "#8B7FFF" }}
                >
                  {stat.num}
                </div>
                <div className="text-xs uppercase tracking-widest" style={{ color: "rgba(238,238,245,0.35)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — floating UI card decoration (desktop only) */}
        <div className="hidden lg:flex justify-center items-center relative">
          <div
            className="relative w-80 h-64 rounded-2xl p-6"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(24px)",
              boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
            }}
          >
            {/* Mock UI inside card */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full" style={{ background: "#FF8A80" }} />
              <div className="w-2 h-2 rounded-full" style={{ background: "#FFD93D" }} />
              <div className="w-2 h-2 rounded-full" style={{ background: "#64DFDF" }} />
              <div className="flex-1 h-1.5 rounded-full ms-2" style={{ background: "rgba(255,255,255,0.06)" }} />
            </div>
            <div className="space-y-2 mb-4">
              <div className="h-2.5 rounded-full w-3/4" style={{ background: "rgba(139,127,255,0.3)" }} />
              <div className="h-2.5 rounded-full w-full" style={{ background: "rgba(255,255,255,0.06)" }} />
              <div className="h-2.5 rounded-full w-5/6" style={{ background: "rgba(255,255,255,0.06)" }} />
            </div>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {["#6961ff", "#2DD4BF", "#FBBF24"].map((c, i) => (
                <div key={i} className="h-16 rounded-xl" style={{ background: `${c}20`, border: `1px solid ${c}30` }} />
              ))}
            </div>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full" style={{ background: "#2DD4BF" }} />
              <div className="w-2 h-2 rounded-full" style={{ background: "#6961ff", opacity: 0.5 }} />
              <div className="w-2 h-2 rounded-full" style={{ background: "#FBBF24", opacity: 0.5 }} />
            </div>
          </div>
          {/* Decorative glow behind card */}
          <div
            className="absolute inset-0 rounded-2xl"
            style={{ background: "radial-gradient(circle, rgba(105,97,255,0.15), transparent 70%)", filter: "blur(40px)" }}
          />
        </div>
      </div>
    </section>
  );
}
