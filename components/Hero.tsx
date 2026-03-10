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

      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        {/* Centered hero content — single column */}
        <div className="max-w-3xl mx-auto w-full text-center flex flex-col items-center">
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
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "rgba(238,238,245,0.55)", lineHeight: 1.7 }}>
            {t("subtitle")}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16 justify-center">
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
          <div className="flex flex-wrap gap-10 justify-center">
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

        {/* Decorative image card — below hero content (desktop) */}
        <div className="hidden lg:flex justify-center items-center relative mt-16 w-full max-w-md">
          <div className="relative w-full rounded-[24px] overflow-hidden"
            style={{ boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
              alt="Digital business transformation"
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(6,6,18,0.98) 0%, rgba(6,6,18,0.4) 60%, transparent 100%)" }} />
            <div className="absolute bottom-0 left-0 right-0 p-5 flex gap-3">
              {[
                { num: "12+", label: "Clients", color: "#8B7FFF" },
                { num: "3×", label: "More Leads", color: "#64DFDF" },
                { num: "48h", label: "Go Live", color: "#FFD93D" },
              ].map((s) => (
                <div
                  key={s.num}
                  className="flex-1 rounded-xl p-3 text-center"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div className="text-xl font-black" style={{ color: s.color, fontFamily: "var(--font-space-mono)" }}>{s.num}</div>
                  <div className="text-[10px] text-white/50 uppercase tracking-wider mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full"
              style={{ background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(12px)" }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-mono text-white/70 uppercase tracking-widest">Live Projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
