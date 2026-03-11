"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Check, MessageSquare } from "lucide-react";

export default function Pricing() {
  const t = useTranslations("pricing");
  const locale = useLocale();

  const WHATSAPP_NUMBER = "972544636377";

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
      accent: "#64DFDF",
      accentBg: "rgba(100,223,223,0.06)",
      accentBorder: "rgba(100,223,223,0.15)",
      btnLabel: t("btn_outline"),
    },
    {
      name: t("pkg2_name"),
      sub: t("pkg2_sub"),
      price: t("pkg2_price"),
      features: pkg2Features,
      plan: "business" as const,
      featured: true,
      accent: "#8B7FFF",
      accentBg: "rgba(139,127,255,0.1)",
      accentBorder: "rgba(139,127,255,0.4)",
      btnLabel: t("btn_primary"),
    },
    {
      name: t("pkg3_name"),
      sub: t("pkg3_sub"),
      price: t("pkg3_price"),
      features: pkg3Features,
      plan: "premium" as const,
      featured: false,
      accent: "#FF8A80",
      accentBg: "rgba(255,138,128,0.06)",
      accentBorder: "rgba(255,138,128,0.15)",
      btnLabel: t("btn_outline"),
    },
  ];

  return (
    <section id="pricing" className="relative z-10 py-28 px-4 sm:px-6 overflow-hidden">
      {/* Section divider */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(139,127,255,0.4), transparent)" }}
      />

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(139,127,255,0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <div
            className="inline-block px-4 py-1.5 rounded-full mb-5 text-[11px] font-mono font-bold uppercase tracking-[0.25em]"
            style={{
              background: "rgba(139,127,255,0.1)",
              border: "1px solid rgba(139,127,255,0.2)",
              color: "#8B7FFF",
            }}
          >
            {t("label")}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            {t("title")}
          </h2>
          <p className="text-base md:text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.plan}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative rounded-[22px] flex flex-col transition-all duration-500 hover:-translate-y-1 ${
                tier.featured ? "md:-mt-4 md:mb-4" : ""
              }`}
              style={{
                background: tier.featured
                  ? "linear-gradient(160deg, rgba(139,127,255,0.12), rgba(100,223,223,0.06))"
                  : "rgba(255,255,255,0.03)",
                border: `1px solid ${tier.accentBorder}`,
                backdropFilter: "blur(20px)",
                boxShadow: tier.featured
                  ? "0 0 50px rgba(139,127,255,0.12), 0 20px 60px rgba(0,0,0,0.4)"
                  : "0 8px 32px rgba(0,0,0,0.2)",
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full"
                style={{
                  width: tier.featured ? "80%" : "60%",
                  background: `linear-gradient(90deg, transparent, ${tier.accent}, transparent)`,
                  opacity: tier.featured ? 1 : 0.5,
                }}
              />

              {/* Popular badge */}
              {tier.featured && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-[10px] font-black text-white whitespace-nowrap z-10 uppercase tracking-[0.15em]"
                  style={{
                    background: "linear-gradient(135deg, #8B7FFF, #6A5FFF)",
                    boxShadow: "0 4px 20px rgba(139,127,255,0.5)",
                    fontFamily: "var(--font-space-mono)",
                  }}
                >
                  {t("popular")}
                </div>
              )}

              <div className="p-7 sm:p-8 flex flex-col flex-1">
                {/* Name + sub + price */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-white mb-1">{tier.name}</h3>
                  <p className="text-sm text-white/40 mb-5">{tier.sub}</p>
                  <div
                    className="font-black leading-none"
                    style={{
                      fontFamily: "var(--font-space-mono)",
                      color: tier.featured ? "#8B7FFF" : "var(--text-primary)",
                      fontSize: tier.featured ? "2.75rem" : "2.25rem",
                    }}
                  >
                    {tier.price}
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px mb-6" style={{ background: `${tier.accentBorder}` }} />

                {/* Features — LEFT aligned, not centered */}
                <ul className="space-y-3.5 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm text-white/65"
                    >
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{
                          background: `${tier.accent}15`,
                          border: `1px solid ${tier.accent}25`,
                        }}
                      >
                        <Check
                          size={11}
                          strokeWidth={3}
                          style={{ color: tier.accent }}
                        />
                      </div>
                      <span className="leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => openWhatsApp(tier.plan)}
                  className="w-full py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
                  style={
                    tier.featured
                      ? {
                          background: "linear-gradient(135deg, #8B7FFF, #6A5FFF)",
                          color: "#fff",
                          boxShadow: "0 8px 32px rgba(139,127,255,0.35)",
                        }
                      : {
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          color: "var(--text-primary)",
                        }
                  }
                >
                  <MessageSquare size={15} strokeWidth={2} />
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
