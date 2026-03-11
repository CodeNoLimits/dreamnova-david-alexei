"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const stepAccents = ["#8B7FFF", "#64DFDF", "#FFD93D", "#FF8A80"];

const StepIcon = ({ accent, index }: { accent: string; index: number }) => {
  const size = 28;
  if (index === 0) {
    // Discovery — magnifying glass / target
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="7" stroke={accent} strokeWidth="1.6" />
        <circle cx="11" cy="11" r="3" stroke={accent} strokeWidth="1.2" opacity="0.5" />
        <circle cx="11" cy="11" r="1" fill={accent} />
        <path d="M16 16l4.5 4.5" stroke={accent} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (index === 1) {
    // Build — code brackets
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M8 5L3 12l5 7" stroke={accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 5l5 7-5 7" stroke={accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 3l-4 18" stroke={accent} strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
      </svg>
    );
  }
  if (index === 2) {
    // Launch — rocket
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M12 2c-2 4-3 8-3 12h6c0-4-1-8-3-12z" stroke={accent} strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M9 14l-2 3h10l-2-3" stroke={accent} strokeWidth="1.4" strokeLinejoin="round" opacity="0.7" />
        <path d="M10 20l2 2 2-2" stroke={accent} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
        <circle cx="12" cy="10" r="1.5" fill={accent} opacity="0.8" />
      </svg>
    );
  }
  // Growth — trending up
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M3 17l5-5 4 4 9-10" stroke={accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 6h6v6" stroke={accent} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="8" cy="12" r="1.5" fill={accent} opacity="0.4" />
      <circle cx="12" cy="16" r="1.5" fill={accent} opacity="0.3" />
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
    <section id="process" className="relative z-10 py-28 px-4 sm:px-6 overflow-hidden">
      {/* Section divider */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,217,61,0.4), transparent)" }}
      />

      <div className="max-w-5xl mx-auto relative">
        {/* Ambient glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(139,127,255,0.05) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div
            className="inline-block px-4 py-1.5 rounded-full mb-5 text-[11px] font-mono font-bold uppercase tracking-[0.25em]"
            style={{
              background: "rgba(255,217,61,0.1)",
              border: "1px solid rgba(255,217,61,0.2)",
              color: "#FFD93D",
            }}
          >
            {t("label")}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight gradient-text-hero">
            {t("title")}
          </h2>
        </motion.div>

        {/* Timeline — desktop: horizontal connected line */}
        <div className="hidden lg:block mb-12">
          <div className="relative flex items-center justify-between max-w-3xl mx-auto">
            {/* Connecting line */}
            <div
              className="absolute top-1/2 left-[8%] right-[8%] h-px -translate-y-1/2"
              style={{ background: "linear-gradient(90deg, #8B7FFF44, #64DFDF44, #FFD93D44, #FF8A8044)" }}
            />
            {/* Nodes */}
            {steps.map((step) => (
              <div key={step.num} className="relative z-10 flex flex-col items-center">
                <div
                  className="w-3.5 h-3.5 rounded-full"
                  style={{
                    background: step.accent,
                    boxShadow: `0 0 16px ${step.accent}80`,
                    border: "2.5px solid #06060C",
                  }}
                />
                <span
                  className="text-[10px] font-mono font-bold mt-2 tracking-wider"
                  style={{ color: `${step.accent}80` }}
                >
                  {step.num}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl p-7 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: `1px solid ${step.accent}20`,
                backdropFilter: "blur(16px)",
                boxShadow: `0 8px 30px rgba(0,0,0,0.2)`,
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${step.accent}10 0%, transparent 70%)`,
                  boxShadow: `inset 0 0 0 1px ${step.accent}30`,
                }}
              />

              {/* Mobile step indicator */}
              <div
                className="lg:hidden text-[10px] font-mono font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-4"
                style={{
                  background: `${step.accent}12`,
                  color: step.accent,
                  border: `1px solid ${step.accent}25`,
                }}
              >
                {step.num}
              </div>

              {/* Icon */}
              <div
                className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `${step.accent}12`,
                  border: `1px solid ${step.accent}28`,
                  boxShadow: `0 6px 20px ${step.accent}15`,
                }}
              >
                <StepIcon accent={step.accent} index={i} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-2.5 relative z-10" style={{ lineHeight: 1.3 }}>
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed relative z-10 text-white/50">
                {step.desc}
              </p>

              {/* Bottom shimmer on hover */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-3/4 transition-all duration-500 rounded-full"
                style={{ background: `linear-gradient(90deg, transparent, ${step.accent}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center"
        >
          <a
            href="#cta"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-white transition-all duration-300 hover:scale-105 active:scale-95 text-sm"
            style={{
              background: "linear-gradient(135deg, #8B7FFF, #64DFDF)",
              boxShadow: "0 8px 32px rgba(139,127,255,0.3)",
            }}
          >
            {t("cta_start")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
