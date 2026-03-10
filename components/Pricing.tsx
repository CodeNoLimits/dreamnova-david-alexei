"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Pricing() {
  const t = useTranslations("pricing");
  const locale = useLocale();

  const WHATSAPP_NUMBER = "972544636377"; // Alexei

  const openWhatsApp = (plan: "starter" | "business" | "premium") => {
    const msg = encodeURIComponent(t(`wa_${plan}`));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  const pkg1Features = [t("pkg1_f1"), t("pkg1_f2"), t("pkg1_f3"), t("pkg1_f4"), t("pkg1_f5")];
  const pkg2Features = [t("pkg2_f1"), t("pkg2_f2"), t("pkg2_f3"), t("pkg2_f4"), t("pkg2_f5"), t("pkg2_f6")];
  const pkg3Features = [t("pkg3_f1"), t("pkg3_f2"), t("pkg3_f3"), t("pkg3_f4"), t("pkg3_f5"), t("pkg3_f6")];

  const tiers = [
    {
      name: t("pkg1_name"),
      sub: t("pkg1_sub"),
      price: t("pkg1_price"),
      features: pkg1Features,
      plan: "starter" as const,
      featured: false,
      accent: "rgba(100,223,223,0.6)",
      accentBg: "rgba(100,223,223,0.06)",
      accentBorder: "rgba(100,223,223,0.18)",
      btnLabel: t("btn_outline"),
      btnStyle: "outline",
    },
    {
      name: t("pkg2_name"),
      sub: t("pkg2_sub"),
      price: t("pkg2_price"),
      features: pkg2Features,
      plan: "business" as const,
      featured: true,
      accent: "rgba(139,127,255,0.9)",
      accentBg: "rgba(139,127,255,0.1)",
      accentBorder: "rgba(139,127,255,0.5)",
      btnLabel: t("btn_primary"),
      btnStyle: "filled",
    },
    {
      name: t("pkg3_name"),
      sub: t("pkg3_sub"),
      price: t("pkg3_price"),
      features: pkg3Features,
      plan: "premium" as const,
      featured: false,
      accent: "rgba(255,138,128,0.6)",
      accentBg: "rgba(255,138,128,0.06)",
      accentBorder: "rgba(255,138,128,0.18)",
      btnLabel: t("btn_outline"),
      btnStyle: "outline",
    },
  ];

  return (
    <section id="pricing" className="relative z-10 py-32 px-6 text-center overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(139,127,255,0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div
            className="inline-block px-4 py-1.5 rounded-full mb-5 text-xs font-mono uppercase tracking-[0.2em]"
            style={{
              background: "rgba(139,127,255,0.1)",
              border: "1px solid rgba(139,127,255,0.2)",
              color: "#8B7FFF",
            }}
          >
            {t("label")}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            {t("title")}
          </h2>
          <p className="text-base md:text-lg max-w-xl mx-auto" style={{ color: "rgba(238,238,245,0.5)" }}>
            {t("subtitle")}
          </p>
        </motion.div>

        {/* ── Pricing Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.plan}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-[24px] flex flex-col"
              style={{
                background: tier.featured
                  ? "linear-gradient(160deg, rgba(139,127,255,0.14), rgba(100,223,223,0.07))"
                  : "rgba(255,255,255,0.04)",
                border: `1px solid ${tier.accentBorder}`,
                backdropFilter: "blur(20px)",
                boxShadow: tier.featured
                  ? "0 0 60px rgba(139,127,255,0.15), 0 24px 64px rgba(0,0,0,0.4)"
                  : "0 8px 32px rgba(0,0,0,0.2)",
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 h-px rounded-full"
                style={{
                  width: "70%",
                  background: `linear-gradient(90deg, transparent, ${tier.accent}, transparent)`,
                }}
              />

              {/* Popular badge */}
              {tier.featured && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-[11px] font-black text-white whitespace-nowrap z-10"
                  style={{
                    background: "linear-gradient(135deg, #8B7FFF, #6A5FFF)",
                    boxShadow: "0 4px 20px rgba(139,127,255,0.5)",
                    letterSpacing: "0.12em",
                    fontFamily: "var(--font-space-mono)",
                  }}
                >
                  ✦ {t("popular")} ✦
                </div>
              )}

              <div className="p-8 flex flex-col flex-1 text-center items-center">
                {/* Name + sub */}
                <div className="mb-6 w-full" dir="ltr">
                  <h3
                    className="text-xl font-bold mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {tier.name}
                  </h3>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    {tier.sub}
                  </p>
                  <div
                    className="mt-4 font-black"
                    style={{
                      fontFamily: "var(--font-space-mono)",
                      color: tier.featured ? "#8B7FFF" : "var(--text-primary)",
                      fontSize: tier.featured ? "3rem" : "2.5rem",
                      lineHeight: 1,
                    }}
                  >
                    {tier.price}
                  </div>
                </div>

                {/* Divider */}
                <div
                  className="h-px mb-6 w-full"
                  style={{ background: `${tier.accentBorder}` }}
                />

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1 w-full list-none pl-0" dir="ltr">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center justify-center gap-2.5 text-sm"
                      style={{ color: "rgba(238,238,245,0.7)" }}
                    >
                      <Check
                        size={14}
                        className="shrink-0"
                        style={{ color: tier.featured ? "#8B7FFF" : "#64DFDF" }}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => openWhatsApp(tier.plan)}
                  className="w-full py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 hover:scale-[1.03] active:scale-95"
                  style={
                    tier.btnStyle === "filled"
                      ? {
                          background: "linear-gradient(135deg, #8B7FFF, #6A5FFF)",
                          color: "#fff",
                          boxShadow: "0 8px 32px rgba(139,127,255,0.4)",
                        }
                      : {
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          color: "var(--text-primary)",
                        }
                  }
                >
                  {tier.btnLabel}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
