"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Process() {
  const t = useTranslations("process");

  const steps = [
    {
      num: "01",
      title: t("s1_title"),
      desc: t("s1_desc"),
      accent: "#8B7FFF",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="5" fill="#8B7FFF" opacity="0.9" />
          <circle cx="14" cy="14" r="9" stroke="#8B7FFF" strokeWidth="1.5" opacity="0.4" />
          <circle cx="14" cy="14" r="13" stroke="#8B7FFF" strokeWidth="1" opacity="0.15" />
        </svg>
      ),
    },
    {
      num: "02",
      title: t("s2_title"),
      desc: t("s2_desc"),
      accent: "#64DFDF",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect x="5" y="5" width="18" height="18" rx="4" stroke="#64DFDF" strokeWidth="1.5" opacity="0.5" />
          <rect x="9" y="9" width="10" height="10" rx="2" fill="#64DFDF" opacity="0.8" />
        </svg>
      ),
    },
    {
      num: "03",
      title: t("s3_title"),
      desc: t("s3_desc"),
      accent: "#FFD93D",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M14 3L17 11H25L19 16L21 24L14 19L7 24L9 16L3 11H11L14 3Z" fill="#FFD93D" opacity="0.85" />
        </svg>
      ),
    },
    {
      num: "04",
      title: t("s4_title"),
      desc: t("s4_desc"),
      accent: "#FF8A80",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M14 4C14 4 8 10 8 15a6 6 0 0012 0C20 10 14 4 14 4Z" fill="#FF8A80" opacity="0.8" />
          <circle cx="14" cy="19" r="2" fill="#fff" opacity="0.6" />
        </svg>
      ),
    },
  ];

  return (
    <section id="process" className="relative z-10 py-32 px-6 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(139,127,255,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-block px-4 py-1.5 rounded-full mb-6 text-xs font-mono uppercase tracking-[0.2em] text-[var(--accent-lavender)] bg-[var(--accent-lavender)]/10 border border-[var(--accent-lavender)]/20">
            {t("label")}
          </div>
          <h2 className="text-4xl md:text-6xl font-black leading-tight text-white">
            {t("title")}
          </h2>
        </motion.div>

        {/* Desktop — Horizontal Timeline */}
        <div className="hidden lg:block">
          {/* Connecting line */}
          <div className="relative mb-8">
            <div
              className="absolute top-1/2 left-[12.5%] right-[12.5%] h-px -translate-y-1/2"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(139,127,255,0.5), rgba(100,223,223,0.5), rgba(255,216,61,0.5), rgba(255,138,128,0.5), transparent)",
              }}
            />
            {/* Connector dots */}
            <div className="flex justify-between px-[10%]">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, type: "spring" }}
                  className="w-3 h-3 rounded-full"
                  style={{
                    background: step.accent,
                    boxShadow: `0 0 12px ${step.accent}, 0 0 0 2px #06060C, 0 0 0 4px ${step.accent}60`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Step cards */}
          <div className="grid grid-cols-4 gap-6 mt-16">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="group relative"
              >
                <div
                  className="rounded-2xl p-7 h-full flex flex-col relative overflow-hidden transition-all duration-500 hover:-translate-y-2"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: `1px solid ${step.accent}25`,
                    backdropFilter: "blur(20px)",
                  }}
                >
                  {/* Glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${step.accent}12 0%, transparent 70%)`,
                    }}
                  />
                  {/* Top border accent */}
                  <div
                    className="absolute top-0 left-4 right-4 h-px"
                    style={{ background: `linear-gradient(90deg, transparent, ${step.accent}80, transparent)` }}
                  />

                  {/* Step number — faded bg */}
                  <span
                    className="absolute -bottom-4 -right-2 text-8xl font-black pointer-events-none select-none"
                    style={{ color: `${step.accent}08`, fontFamily: "var(--font-space-mono)" }}
                  >
                    {step.num}
                  </span>

                  {/* Icon */}
                  <div className="mb-6 relative z-10">
                    {step.icon}
                  </div>

                  {/* Step number badge */}
                  <div
                    className="text-xs font-mono mb-3 relative z-10"
                    style={{ color: `${step.accent}90` }}
                  >
                    STEP {step.num}
                  </div>

                  <h3 className="text-lg font-bold mb-3 text-white relative z-10 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed relative z-10" style={{ color: "rgba(238,238,245,0.5)" }}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile — Vertical Timeline */}
        <div className="lg:hidden flex flex-col gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5"
            >
              {/* Timeline left */}
              <div className="flex flex-col items-center">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: `${step.accent}18`,
                    boxShadow: `0 0 16px ${step.accent}30, 0 0 0 1px ${step.accent}30`,
                  }}
                >
                  {step.icon}
                </div>
                {i < steps.length - 1 && (
                  <div
                    className="w-px flex-1 my-2"
                    style={{ background: `linear-gradient(to bottom, ${step.accent}40, ${steps[i+1].accent}20)` }}
                  />
                )}
              </div>

              {/* Content */}
              <div className="pb-10 flex-1">
                <div className="text-xs font-mono mb-1" style={{ color: `${step.accent}90` }}>
                  STEP {step.num}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(238,238,245,0.5)" }}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom status */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex flex-col items-center justify-center gap-6 text-center w-full"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{
              background: "rgba(100,223,223,0.08)",
              border: "1px solid rgba(100,223,223,0.2)",
            }}
          >
            <div className="w-2 h-2 rounded-full bg-[var(--accent-teal)] pulse-dot" />
            <span className="text-xs font-mono uppercase tracking-widest" style={{ color: "rgba(100,223,223,0.8)" }}>
              System Status: Optimal
            </span>
          </div>

          <a
            href="#cta"
            onClick={(e) => { e.preventDefault(); document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" }); }}
            className="group relative inline-flex items-center justify-center px-10 py-4 rounded-full font-black text-white transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #8B7FFF, #6A5FFF)",
              boxShadow: "0 8px 32px rgba(139,127,255,0.45)",
              letterSpacing: "0.08em",
              fontSize: "13px",
            }}
          >
            {t("cta_start") ?? "BEGIN YOUR TRANSFORMATION"}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
