"use client";

import { useTranslations, useLocale } from "next-intl";
import GlassCard from "./ui/GlassCard";
import SectionHeader from "./ui/SectionHeader";

export default function Pricing() {
  const t = useTranslations("pricing");
  const locale = useLocale();

  const WHATSAPP_NUMBER = "972524000000"; // Placeholder for David

  const openWhatsApp = (plan: "starter" | "business" | "premium") => {
    const msg = encodeURIComponent(t(`wa_${plan}`));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  const pkg1Features = [t("pkg1_f1"), t("pkg1_f2"), t("pkg1_f3"), t("pkg1_f4"), t("pkg1_f5")];
  const pkg2Features = [t("pkg2_f1"), t("pkg2_f2"), t("pkg2_f3"), t("pkg2_f4"), t("pkg2_f5"), t("pkg2_f6")];
  const pkg3Features = [t("pkg3_f1"), t("pkg3_f2"), t("pkg3_f3"), t("pkg3_f4"), t("pkg3_f5"), t("pkg3_f6")];

  return (
    <section id="pricing" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
      <SectionHeader label={t("label")} title={t("title")} subtitle={t("subtitle")} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* STARTER */}
        <GlassCard className="p-8">
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>
              {t("pkg1_name")}
            </h3>
            <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>{t("pkg1_sub")}</p>
            <div className="text-4xl font-bold" style={{ fontFamily: "var(--font-space-mono)", color: "var(--accent-lavender)" }}>
              {t("pkg1_price")}
            </div>
          </div>
          <ul className="space-y-3 mb-8">
            {pkg1Features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                <span style={{ color: "var(--accent-teal)" }}>✓</span> {f}
              </li>
            ))}
          </ul>
          <button
            onClick={() => openWhatsApp("starter")}
            className="w-full py-3 rounded-[var(--radius-button)] font-semibold text-sm transition-all duration-300"
            style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--glass-border)",
              color: "var(--text-primary)",
            }}
          >
            {t("btn_outline")}
          </button>
        </GlassCard>

        {/* BUSINESS — Featured */}
        <GlassCard featured className="p-8 relative">
          <div
            className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-white"
            style={{ background: "var(--accent-lavender)" }}
          >
            {t("popular")}
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>
              {t("pkg2_name")}
            </h3>
            <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>{t("pkg2_sub")}</p>
            <div className="text-4xl font-bold" style={{ fontFamily: "var(--font-space-mono)", color: "var(--accent-lavender)" }}>
              {t("pkg2_price")}
            </div>
          </div>
          <ul className="space-y-3 mb-8">
            {pkg2Features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                <span style={{ color: "var(--accent-teal)" }}>✓</span> {f}
              </li>
            ))}
          </ul>
          <button
            onClick={() => openWhatsApp("business")}
            className="w-full py-3 rounded-[var(--radius-button)] font-semibold text-sm text-white transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, var(--accent-lavender), #6A5FFF)",
              boxShadow: "0 4px 20px rgba(139,127,255,0.4)",
            }}
          >
            {t("btn_primary")}
          </button>
        </GlassCard>

        {/* PREMIUM */}
        <GlassCard className="p-8">
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>
              {t("pkg3_name")}
            </h3>
            <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>{t("pkg3_sub")}</p>
            <div className="text-4xl font-bold" style={{ fontFamily: "var(--font-space-mono)", color: "var(--accent-lavender)" }}>
              {t("pkg3_price")}
            </div>
          </div>
          <ul className="space-y-3 mb-8">
            {pkg3Features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                <span style={{ color: "var(--accent-teal)" }}>✓</span> {f}
              </li>
            ))}
          </ul>
          <button
            onClick={() => openWhatsApp("premium")}
            className="w-full py-3 rounded-[var(--radius-button)] font-semibold text-sm transition-all duration-300"
            style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--glass-border)",
              color: "var(--text-primary)",
            }}
          >
            {t("btn_outline")}
          </button>
        </GlassCard>
      </div>
      </div>
    </section>
  );
}
