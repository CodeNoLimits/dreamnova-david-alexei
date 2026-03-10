"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const serviceData = [
  {
    num: "01",
    accent: "#8B7FFF",
    gradient: "135deg, rgba(139,127,255,0.14) 0%, rgba(106,95,255,0.06) 60%, transparent 100%",
    iconBg: "rgba(139,127,255,0.12)",
    iconBorder: "rgba(139,127,255,0.22)",
    tagBg: "rgba(139,127,255,0.1)",
    tagBorder: "rgba(139,127,255,0.25)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="2" y="5" width="22" height="16" rx="3" stroke="#8B7FFF" strokeWidth="1.6"/>
        <path d="M2 9.5h22" stroke="#8B7FFF" strokeWidth="1.6"/>
        <circle cx="6" cy="7.2" r="0.9" fill="#8B7FFF"/>
        <circle cx="9.2" cy="7.2" r="0.9" fill="#8B7FFF" opacity="0.5"/>
        <rect x="6" y="13" width="8" height="1.6" rx="0.8" fill="#8B7FFF" opacity="0.5"/>
        <rect x="6" y="16.5" width="5" height="1.6" rx="0.8" fill="#8B7FFF" opacity="0.3"/>
      </svg>
    ),
  },
  {
    num: "02",
    accent: "#64DFDF",
    gradient: "135deg, rgba(100,223,223,0.14) 0%, rgba(45,212,191,0.06) 60%, transparent 100%",
    iconBg: "rgba(100,223,223,0.12)",
    iconBorder: "rgba(100,223,223,0.22)",
    tagBg: "rgba(100,223,223,0.1)",
    tagBorder: "rgba(100,223,223,0.25)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="4" stroke="#64DFDF" strokeWidth="1.6"/>
        <circle cx="5.5" cy="7" r="2.2" stroke="#64DFDF" strokeWidth="1.4" opacity="0.55"/>
        <circle cx="20.5" cy="7" r="2.2" stroke="#64DFDF" strokeWidth="1.4" opacity="0.55"/>
        <circle cx="5.5" cy="19" r="2.2" stroke="#64DFDF" strokeWidth="1.4" opacity="0.55"/>
        <circle cx="20.5" cy="19" r="2.2" stroke="#64DFDF" strokeWidth="1.4" opacity="0.55"/>
        <path d="M7.5 8.5l3.5 3M15 14.5l3.5 3.5M18.5 8.5l-3.5 3M11 14.5l-3.5 3.5" stroke="#64DFDF" strokeWidth="1.1" opacity="0.45"/>
        <circle cx="13" cy="13" r="1.8" fill="#64DFDF" opacity="0.75"/>
      </svg>
    ),
  },
  {
    num: "03",
    accent: "#FF8A80",
    gradient: "135deg, rgba(255,138,128,0.14) 0%, rgba(255,107,107,0.06) 60%, transparent 100%",
    iconBg: "rgba(255,138,128,0.12)",
    iconBorder: "rgba(255,138,128,0.22)",
    tagBg: "rgba(255,138,128,0.1)",
    tagBorder: "rgba(255,138,128,0.25)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="3" y="5" width="13" height="17" rx="2.5" stroke="#FF8A80" strokeWidth="1.6"/>
        <circle cx="20" cy="9" r="4.5" stroke="#FF8A80" strokeWidth="1.4" opacity="0.6"/>
        <path d="M18 9h4M20 7v4" stroke="#FF8A80" strokeWidth="1.4" opacity="0.6" strokeLinecap="round"/>
        <rect x="6" y="10" width="6" height="1.4" rx="0.7" fill="#FF8A80" opacity="0.45"/>
        <rect x="6" y="13.5" width="8" height="1.4" rx="0.7" fill="#FF8A80" opacity="0.35"/>
        <rect x="6" y="17" width="4" height="1.4" rx="0.7" fill="#FF8A80" opacity="0.25"/>
      </svg>
    ),
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
    <section id="services" className="relative z-10 py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full mb-6 text-[11px] font-mono font-bold uppercase tracking-[0.25em] bg-[var(--accent-lavender)]/10 border border-[var(--accent-lavender)]/20 text-[var(--accent-lavender)]">
            {t("label")}
          </span>
          <h2 className="text-4xl md:text-[52px] font-black text-white mb-5 leading-[1.1] tracking-tight">
            {t("title")}
          </h2>
          <p className="text-lg text-white/50 max-w-lg mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.11 }}
              className="group relative rounded-[22px] overflow-hidden flex flex-col cursor-pointer select-none"
              style={{ minHeight: 320 }}
            >
              {/* Background gradient layer */}
              <div className="absolute inset-0" style={{ background: `linear-gradient(${svc.gradient})` }} />
              {/* Glass */}
              <div
                className="absolute inset-0"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                }}
              />
              {/* Border (base) */}
              <div
                className="absolute inset-0 rounded-[22px]"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              />
              {/* Border hover glow */}
              <div
                className="absolute inset-0 rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ boxShadow: `inset 0 0 0 1px ${svc.accent}45, 0 24px 64px ${svc.accent}10` }}
              />
              {/* Top shimmer line */}
              <div
                className="absolute top-0 inset-x-0 h-px transition-opacity duration-500 opacity-50 group-hover:opacity-100"
                style={{ background: `linear-gradient(90deg, transparent 0%, ${svc.accent}90 50%, transparent 100%)` }}
              />

              {/* Inner content */}
              <div className="relative z-10 flex flex-col h-full p-8 gap-5">

                {/* Top row: icon + number */}
                <div className="flex items-start justify-between">
                  {/* Icon box */}
                  <div
                    className="w-12 h-12 rounded-[14px] flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                    style={{
                      background: svc.iconBg,
                      border: `1px solid ${svc.iconBorder}`,
                    }}
                  >
                    {svc.icon}
                  </div>
                  {/* Step number */}
                  <span
                    className="text-[11px] font-mono font-bold tracking-widest"
                    style={{ color: `${svc.accent}60` }}
                  >
                    {svc.num}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[22px] font-extrabold text-white leading-snug tracking-tight group-hover:translate-x-0.5 transition-transform duration-300">
                  {svc.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] text-white/50 leading-[1.75] flex-grow">
                  {svc.desc}
                </p>

                {/* Footer row */}
                <div className="flex items-center justify-between pt-2 border-t border-white/[0.06]">
                  <span
                    className="text-[11px] font-mono font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                    style={{
                      background: svc.tagBg,
                      border: `1px solid ${svc.tagBorder}`,
                      color: svc.accent,
                    }}
                  >
                    {svc.tag}
                  </span>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{
                      background: `${svc.accent}15`,
                      color: svc.accent,
                    }}
                  >
                    <ArrowUpRight size={14} strokeWidth={2.5} />
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
