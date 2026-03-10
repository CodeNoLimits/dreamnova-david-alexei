"use client";

import { useTranslations } from "next-intl";
import SectionHeader from "./ui/SectionHeader";

const serviceIcons = [
  { emoji: "◆", color: "#b794f4", glow: "rgba(183,148,244,0.3)" },
  { emoji: "✦", color: "#4fd1c5", glow: "rgba(79,209,197,0.3)" },
  { emoji: "▲", color: "#FF8A80", glow: "rgba(255,138,128,0.3)" },
];

export default function Services() {
  const t = useTranslations("services");

  const services = [
    { title: t("s1_title"), desc: t("s1_desc"), tag: t("s1_tag"), tagColor: "#4fd1c5", ...serviceIcons[0] },
    { title: t("s2_title"), desc: t("s2_desc"), tag: t("s2_tag"), tagColor: "#4fd1c5", ...serviceIcons[1] },
    { title: t("s3_title"), desc: t("s3_desc"), tag: t("s3_tag"), tagColor: "#4fd1c5", ...serviceIcons[2] },
  ];

  return (
    <section id="services" className="relative z-10 max-w-7xl mx-auto px-4 py-24">
      <SectionHeader label={t("label")} title={t("title")} subtitle={t("subtitle")} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((svc, i) => (
          <div
            key={i}
            className="card-hover-crystal relative rounded-xl p-8 flex flex-col overflow-hidden transition-all duration-500"
            style={{
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
            }}
          >
            {/* Crystal top border on hover */}
            <div className="crystal-border-top" />

            {/* Icon with glow */}
            <div className="mb-8 relative">
              <div
                className="absolute inset-0 rounded-full scale-150"
                style={{ background: svc.glow, filter: "blur(20px)" }}
              />
              <div
                className="relative w-12 h-12 flex items-center justify-center text-2xl font-bold"
                style={{ color: svc.color }}
              >
                {svc.emoji}
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4" style={{ color: "#EEEEF5" }}>
              {svc.title}
            </h3>
            <p className="text-sm mb-8 flex-grow leading-relaxed" style={{ color: "rgba(238,238,245,0.5)" }}>
              {svc.desc}
            </p>

            <div className="mt-auto">
              <span
                className="inline-block px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-full"
                style={{
                  background: "rgba(79,209,197,0.1)",
                  border: "1px solid rgba(79,209,197,0.2)",
                  color: svc.tagColor,
                }}
              >
                {svc.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
