"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const serviceData = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="8" width="28" height="20" rx="3" stroke="#8B7FFF" strokeWidth="1.8" />
        <path d="M4 13h28" stroke="#8B7FFF" strokeWidth="1.8" />
        <circle cx="8" cy="10.5" r="1" fill="#8B7FFF" />
        <circle cx="12" cy="10.5" r="1" fill="#8B7FFF" opacity="0.5" />
        <circle cx="16" cy="10.5" r="1" fill="#8B7FFF" opacity="0.3" />
        <rect x="9" y="18" width="10" height="2" rx="1" fill="#8B7FFF" opacity="0.5" />
        <rect x="9" y="22" width="6" height="2" rx="1" fill="#8B7FFF" opacity="0.3" />
      </svg>
    ),
    accent: "#8B7FFF",
    gradient: "from-[#8B7FFF]/15 via-[#6A5FFF]/8 to-transparent",
    borderGlow: "rgba(139,127,255,0.35)",
    tagBg: "rgba(139,127,255,0.12)",
    tagBorder: "rgba(139,127,255,0.3)",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="6" stroke="#64DFDF" strokeWidth="1.8" />
        <circle cx="8" cy="10" r="3" stroke="#64DFDF" strokeWidth="1.5" opacity="0.6" />
        <circle cx="28" cy="10" r="3" stroke="#64DFDF" strokeWidth="1.5" opacity="0.6" />
        <circle cx="8" cy="26" r="3" stroke="#64DFDF" strokeWidth="1.5" opacity="0.6" />
        <circle cx="28" cy="26" r="3" stroke="#64DFDF" strokeWidth="1.5" opacity="0.6" />
        <path d="M11 10.5L15 15M21 21L25 25.5M25 10.5L21 15M15 21L11 25.5" stroke="#64DFDF" strokeWidth="1.2" opacity="0.5" />
        <circle cx="18" cy="18" r="2.5" fill="#64DFDF" opacity="0.8" />
      </svg>
    ),
    accent: "#64DFDF",
    gradient: "from-[#64DFDF]/15 via-[#2DD4BF]/8 to-transparent",
    borderGlow: "rgba(100,223,223,0.35)",
    tagBg: "rgba(100,223,223,0.12)",
    tagBorder: "rgba(100,223,223,0.3)",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="5" y="7" width="16" height="22" rx="3" stroke="#FF8A80" strokeWidth="1.8" />
        <circle cx="27" cy="13" r="6" stroke="#FF8A80" strokeWidth="1.5" opacity="0.6" />
        <path d="M24 13h6M27 10v6" stroke="#FF8A80" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />
        <rect x="8" y="12" width="7" height="1.5" rx="0.75" fill="#FF8A80" opacity="0.5" />
        <rect x="8" y="16" width="10" height="1.5" rx="0.75" fill="#FF8A80" opacity="0.4" />
        <rect x="8" y="20" width="5" height="1.5" rx="0.75" fill="#FF8A80" opacity="0.3" />
      </svg>
    ),
    accent: "#FF8A80",
    gradient: "from-[#FF8A80]/15 via-[#FF6B6B]/8 to-transparent",
    borderGlow: "rgba(255,138,128,0.35)",
    tagBg: "rgba(255,138,128,0.12)",
    tagBorder: "rgba(255,138,128,0.3)",
  },
];

export default function Services() {
  const t = useTranslations("services");

  const services = [
    { title: t("s1_title"), desc: t("s1_desc"), tag: t("s1_tag"), ...serviceData[0] },
    { title: t("s2_title"), desc: t("s2_desc"), tag: t("s2_tag"), ...serviceData[1] },
    { title: t("s3_title"), desc: t("s3_desc"), tag: t("s3_tag"), ...serviceData[2] },
  ];

  return (
    <section id="services" className="relative z-10 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full mb-5 text-xs font-mono uppercase tracking-[0.2em] text-[var(--accent-lavender)] bg-[var(--accent-lavender)]/10 border border-[var(--accent-lavender)]/20">
            {t("label")}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            {t("title")}
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer flex flex-col"
              style={{ minHeight: 340 }}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${svc.gradient} opacity-100`}
              />
              {/* Glass base */}
              <div
                className="absolute inset-0 transition-all duration-500 group-hover:opacity-80"
                style={{
                  background: "rgba(255,255,255,0.035)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                }}
              />
              {/* Border */}
              <div
                className="absolute inset-0 rounded-2xl transition-all duration-500"
                style={{
                  border: `1px solid rgba(255,255,255,0.09)`,
                  boxShadow: `inset 0 1px 0 rgba(255,255,255,0.08)`,
                }}
              />
              {/* Hover border glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ boxShadow: `0 0 0 1px ${svc.borderGlow}, 0 20px 60px ${svc.accent}15` }}
              />
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(90deg, transparent, ${svc.accent}, transparent)` }}
              />

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col h-full">
                {/* Icon container */}
                <div className="mb-7 relative">
                  <div
                    className="absolute inset-0 scale-[2.5] rounded-full"
                    style={{ background: `radial-gradient(circle, ${svc.accent}20, transparent 70%)` }}
                  />
                  <div
                    className="relative w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${svc.accent}12`,
                      border: `1px solid ${svc.accent}25`,
                    }}
                  >
                    {svc.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                  {svc.title}
                </h3>
                <p className="text-sm text-white/55 leading-relaxed flex-grow mb-8">
                  {svc.desc}
                </p>

                {/* Footer row */}
                <div className="flex items-center justify-between mt-auto">
                  <span
                    className="text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                    style={{
                      background: svc.tagBg,
                      border: `1px solid ${svc.tagBorder}`,
                      color: svc.accent,
                    }}
                  >
                    {svc.tag}
                  </span>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0"
                    style={{ background: `${svc.accent}20`, color: svc.accent }}
                  >
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
