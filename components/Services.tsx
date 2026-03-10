"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const serviceData = [
  {
    num: "01",
    accent: "#8B7FFF",
    // Unsplash: sleek laptop with beautiful website on screen
    imgUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=75",
    gradient: "to top, rgba(6,6,18,0.97) 0%, rgba(20,16,50,0.85) 55%, rgba(139,127,255,0.15) 100%",
    iconBg: "rgba(139,127,255,0.15)",
    iconBorder: "rgba(139,127,255,0.3)",
    tagBg: "rgba(139,127,255,0.12)",
    tagBorder: "rgba(139,127,255,0.3)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="4" width="20" height="14" rx="2.5" stroke="#8B7FFF" strokeWidth="1.6"/>
        <path d="M2 8.5h20" stroke="#8B7FFF" strokeWidth="1.6"/>
        <circle cx="5.5" cy="6.3" r="0.8" fill="#8B7FFF"/>
        <circle cx="8" cy="6.3" r="0.8" fill="#8B7FFF" opacity="0.5"/>
        <rect x="5" y="12" width="7" height="1.4" rx="0.7" fill="#8B7FFF" opacity="0.5"/>
        <rect x="5" y="14.8" width="4.5" height="1.4" rx="0.7" fill="#8B7FFF" opacity="0.3"/>
        <path d="M8 22h8M12 18v4" stroke="#8B7FFF" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "02",
    accent: "#64DFDF",
    // Unsplash: futuristic AI neural network visualization
    imgUrl: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=900&q=75",
    gradient: "to top, rgba(6,6,18,0.97) 0%, rgba(10,30,35,0.85) 55%, rgba(100,223,223,0.15) 100%",
    iconBg: "rgba(100,223,223,0.15)",
    iconBorder: "rgba(100,223,223,0.3)",
    tagBg: "rgba(100,223,223,0.1)",
    tagBorder: "rgba(100,223,223,0.3)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3.5" stroke="#64DFDF" strokeWidth="1.6"/>
        <circle cx="4.5" cy="6" r="1.8" stroke="#64DFDF" strokeWidth="1.4" opacity="0.6"/>
        <circle cx="19.5" cy="6" r="1.8" stroke="#64DFDF" strokeWidth="1.4" opacity="0.6"/>
        <circle cx="4.5" cy="18" r="1.8" stroke="#64DFDF" strokeWidth="1.4" opacity="0.6"/>
        <circle cx="19.5" cy="18" r="1.8" stroke="#64DFDF" strokeWidth="1.4" opacity="0.6"/>
        <path d="M6.2 7l3.5 3M14.3 14l3.5 3.5M17.8 7l-3.5 3M9.7 14l-3.5 3.5" stroke="#64DFDF" strokeWidth="1.1" opacity="0.5"/>
        <circle cx="12" cy="12" r="1.5" fill="#64DFDF" opacity="0.8"/>
      </svg>
    ),
  },
  {
    num: "03",
    accent: "#FF8A80",
    // Unsplash: person filming/creating content with phone, warm studio light
    imgUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=900&q=75",
    gradient: "to top, rgba(6,6,18,0.97) 0%, rgba(35,12,12,0.85) 55%, rgba(255,138,128,0.15) 100%",
    iconBg: "rgba(255,138,128,0.15)",
    iconBorder: "rgba(255,138,128,0.3)",
    tagBg: "rgba(255,138,128,0.1)",
    tagBorder: "rgba(255,138,128,0.3)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="4" width="11" height="14" rx="2" stroke="#FF8A80" strokeWidth="1.6"/>
        <circle cx="17" cy="8" r="3.8" stroke="#FF8A80" strokeWidth="1.4" opacity="0.65"/>
        <path d="M15.2 8h3.6M17 6.2V9.8" stroke="#FF8A80" strokeWidth="1.4" opacity="0.65" strokeLinecap="round"/>
        <rect x="4.5" y="8" width="5.5" height="1.3" rx="0.65" fill="#FF8A80" opacity="0.4"/>
        <rect x="4.5" y="11" width="7" height="1.3" rx="0.65" fill="#FF8A80" opacity="0.3"/>
        <rect x="4.5" y="14" width="3.5" height="1.3" rx="0.65" fill="#FF8A80" opacity="0.2"/>
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
    <section id="services" className="relative z-10 py-28 px-4 sm:px-6 overflow-x-hidden">
      <div className="max-w-6xl mx-auto w-full">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 px-2"
        >
          <span className="inline-block px-4 py-1.5 rounded-full mb-6 text-[11px] font-mono font-bold uppercase tracking-[0.25em] bg-[var(--accent-lavender)]/10 border border-[var(--accent-lavender)]/20 text-[var(--accent-lavender)]">
            {t("label")}
          </span>
          <h2 className="text-4xl md:text-[52px] font-black text-white mb-5 leading-[1.1] tracking-tight">
            {t("title")}
          </h2>
          <p className="text-base md:text-lg text-white/50 max-w-md mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.11 }}
              className="group relative rounded-[22px] overflow-hidden flex flex-col cursor-pointer"
              style={{ minHeight: 360 }}
            >
              {/* ── Background image ── */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={svc.imgUrl}
                alt=""
                aria-hidden
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* ── Gradient overlay ── */}
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(${svc.gradient})` }}
              />

              {/* ── Border ── */}
              <div
                className="absolute inset-0 rounded-[22px] transition-all duration-500"
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}
              />
              {/* ── Hover border glow ── */}
              <div
                className="absolute inset-0 rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ boxShadow: `inset 0 0 0 1.5px ${svc.accent}55, 0 30px 70px ${svc.accent}12` }}
              />
              {/* ── Top shimmer ── */}
              <div
                className="absolute top-0 inset-x-0 h-[1px] opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${svc.accent}, transparent)` }}
              />

              {/* ── Content ── */}
              <div className="relative z-10 flex flex-col h-full p-8 gap-4">

                {/* Top row */}
                <div className="flex items-start justify-between">
                  <div
                    className="w-12 h-12 rounded-[14px] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: svc.iconBg,
                      border: `1px solid ${svc.iconBorder}`,
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {svc.icon}
                  </div>
                  <span
                    className="text-[11px] font-mono font-bold tracking-widest mt-1"
                    style={{ color: `${svc.accent}70` }}
                  >
                    {svc.num}
                  </span>
                </div>

                {/* Spacer to push content to bottom */}
                <div className="flex-1" />

                {/* Title */}
                <h3 className="text-[21px] font-extrabold text-white leading-snug tracking-tight">
                  {svc.title}
                </h3>

                {/* Description */}
                <p className="text-[13.5px] text-white/60 leading-[1.7]">
                  {svc.desc}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 mt-1 border-t border-white/[0.07]">
                  <span
                    className="text-[10px] font-mono font-black uppercase tracking-widest px-3 py-1.5 rounded-full"
                    style={{
                      background: svc.tagBg,
                      border: `1px solid ${svc.tagBorder}`,
                      color: svc.accent,
                    }}
                  >
                    {svc.tag}
                  </span>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0"
                    style={{
                      background: `${svc.accent}18`,
                      color: svc.accent,
                      border: `1px solid ${svc.accent}30`,
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
