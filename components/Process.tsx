"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const stepAccents = ["#8B7FFF", "#64DFDF", "#FFD93D", "#FF8A80"];

const StepIcon = ({ accent, index }: { accent: string; index: number }) => {
  const size = 28;
  const common = { stroke: accent, strokeWidth: 1.8, fill: "none" };
  if (index === 0) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className="shrink-0">
        <circle cx="12" cy="12" r="9" {...common} />
        <circle cx="12" cy="12" r="5" {...common} opacity={0.7} />
        <circle cx="12" cy="12" r="1.5" fill={accent} />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className="shrink-0">
        <path d="M13 2L11 13h4l-2 9 8-12h-4l2-8z" stroke={accent} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    );
  }
  if (index === 2) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className="shrink-0">
        <path d="M4 15l8-8 4 4-8 8-4-4z" {...common} />
        <path d="M12 7l4 4" {...common} opacity={0.7} />
        <path d="M16 11l4-4" {...common} opacity={0.5} />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className="shrink-0">
      <path d="M12 22v-8M9 14l3-3 3 3M12 6c-2.5 0-4.5 2-5 4.5-.5 2.5 1.5 5 5 5s5.5-2.5 5-5c-.5-2.5-2.5-4.5-5-4.5z" stroke={accent} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default function Process() {
  const t = useTranslations("process");

  const steps = [
    { num: "01", title: t("s1_title"), desc: t("s1_desc"), accent: stepAccents[0] },
    { num: "02", title: t("s2_title"), desc: t("s2_desc"), accent: stepAccents[1] },
    { num: "03", title: t("s3_title"), desc: t("s3_desc"), accent: stepAccents[2] },
    { num: "04", title: t("s4_title"), desc: t("s4_desc"), accent: stepAccents[3] },
  ];

  return (
    <section id="process" className="relative z-10 py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative flex flex-col items-center text-center">
        {/* Ambient glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(139,127,255,0.06) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* ── Header (centered) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 w-full flex flex-col items-center text-center"
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-0 w-full gradient-text-hero">
            {t("title")}
          </h2>
        </motion.div>

        {/* ── Timeline line (desktop, centered) ── */}
        <div className="hidden lg:block relative w-full max-w-3xl mx-auto mb-8">
          <div
            className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 rounded-full"
            style={{ background: "linear-gradient(90deg, #8B7FFF22, #64DFDF44, #FFD93D44, #FF8A8022)" }}
          />
          <div className="relative flex justify-between">
            {steps.map((step, i) => (
              <div
                key={i}
                className="w-4 h-4 rounded-full shrink-0"
                style={{
                  background: step.accent,
                  boxShadow: `0 0 12px ${step.accent}88`,
                  border: "2px solid rgba(6,6,12,0.9)",
                }}
              />
            ))}
          </div>
        </div>

        {/* ── Step Cards (centered grid) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 w-full max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${step.accent}30`,
                backdropFilter: "blur(20px)",
                boxShadow: `0 12px 40px rgba(0,0,0,0.25), 0 0 0 1px ${step.accent}15, inset 0 1px 0 rgba(255,255,255,0.06)`,
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${step.accent}12 0%, transparent 70%)`,
                  boxShadow: `inset 0 0 0 1px ${step.accent}30`,
                }}
              />

              <div
                className="absolute top-6 right-4 text-5xl font-black leading-none pointer-events-none select-none opacity-[0.07]"
                style={{ color: step.accent, fontFamily: "var(--font-space-mono)" }}
              >
                {step.num}
              </div>

              <div
                className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `${step.accent}18`,
                  border: `1px solid ${step.accent}35`,
                  boxShadow: `0 8px 24px ${step.accent}20`,
                }}
              >
                <StepIcon accent={step.accent} index={i} />
              </div>

              <div
                className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-4"
                style={{
                  background: `${step.accent}12`,
                  color: step.accent,
                  border: `1px solid ${step.accent}25`,
                }}
              >
                {step.num}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 relative z-10" style={{ lineHeight: 1.3 }}>
                {step.title}
              </h3>

              <p className="text-sm leading-relaxed relative z-10" style={{ color: "rgba(238,238,245,0.55)" }}>
                {step.desc}
              </p>

              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-3/4 transition-all duration-500 rounded-full"
                style={{ background: `linear-gradient(90deg, transparent, ${step.accent}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* ── CTA Button (centered) ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="flex justify-center w-full"
        >
          <a
            href="#cta"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              background: "linear-gradient(135deg, #8B7FFF, #64DFDF)",
              boxShadow: "0 8px 32px rgba(139,127,255,0.35)",
              fontSize: "15px",
            }}
          >
            ✦ {t("cta_start")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
