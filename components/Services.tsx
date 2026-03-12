"use client";

import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const serviceData = [
  { num: "01", imgUrl: "/images/premium_websites_service_1773260963386.png", accent: "#ffffff" },
  { num: "02", imgUrl: "/images/ai_automation_service_1773260977848.png", accent: "#f3f4f6" },
  { num: "03", imgUrl: "/images/social_media_service_1773260995527.png", accent: "#e5e7eb" },
  { num: "04", imgUrl: "/images/A_sleek_futuristic_workspace_at_night_a_large_curv_d0b0bcfb2e.jpeg", accent: "#d1d5db" },
  { num: "05", imgUrl: "/images/Craftsman_in_modernized_shop_663f0bf1d1.jpeg", accent: "#d1d5db" },
];

interface SvcData {
  num: string;
  imgUrl: string;
  accent: string;
  title: string;
  desc: string;
  tag: string;
}

function ServiceCard({ svc, variants }: { svc: SvcData; variants: object }) {
  return (
    <motion.div
      variants={variants}
      className="group relative rounded-[2rem] overflow-hidden flex flex-col cursor-pointer bg-black border border-white/10 hover:border-white/30 transition-colors duration-500"
      style={{ minHeight: 600 }}
    >
      <div className="absolute inset-0 h-1/2 overflow-hidden bg-[#0a0a0a]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={svc.imgUrl}
          alt={svc.title}
          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale hover:grayscale-0"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>
      <div className="relative z-10 flex flex-col h-full bg-gradient-to-t from-black via-black/95 to-transparent p-8 sm:p-10 justify-end mt-auto">
        <div className="flex justify-between items-end mb-8 w-full">
          <span className="text-6xl font-light tracking-tighter text-white/20 group-hover:text-white transition-colors duration-500">
            {svc.num}
          </span>
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500 text-white translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
            <ArrowUpRight strokeWidth={1.5} size={20} />
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-3xl font-bold text-white leading-tight tracking-tight">
            {svc.title}
          </h3>
          <p className="text-white/70 leading-relaxed font-light text-base">
            {svc.desc}
          </p>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10">
          <span className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-white/70 group-hover:text-white transition-colors duration-300">
            {svc.tag}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const t = useTranslations("services");
  const containerRef = useRef<HTMLDivElement>(null);
  
  const services = [
    { title: t("s1_title"), desc: t("s1_desc"), tag: t("s1_tag"), ...serviceData[0] },
    { title: t("s2_title"), desc: t("s2_desc"), tag: t("s2_tag"), ...serviceData[1] },
    { title: t("s3_title"), desc: t("s3_desc"), tag: t("s3_tag"), ...serviceData[2] },
    { title: t("s4_title"), desc: t("s4_desc"), tag: t("s4_tag"), ...serviceData[3] },
    { title: t("s5_title"), desc: t("s5_desc"), tag: t("s5_tag"), ...serviceData[4] },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <section id="services" ref={containerRef} className="relative z-10 py-32 px-6 overflow-hidden bg-black">
      <div className="max-w-[1400px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="mb-24 px-2"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full mb-8 text-xs font-mono font-medium uppercase tracking-[0.25em] bg-white text-black">
                {t("label")}
              </span>
              <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-bold text-white leading-[0.95] tracking-tighter">
                {t("title")}
              </h2>
            </div>
            <p className="text-lg md:text-xl text-white/70 max-w-md leading-relaxed font-light">
              {t("subtitle")}
            </p>
          </div>
        </motion.div>

        <div className="space-y-8 w-full">
          {/* Row 1 — 3 cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
          >
            {services.slice(0, 3).map((svc, i) => (
              <ServiceCard key={i} svc={svc} variants={itemVariants} />
            ))}
          </motion.div>

          {/* Row 2 — 2 cards centered */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full lg:w-2/3 mx-auto"
          >
            {services.slice(3).map((svc, i) => (
              <ServiceCard key={i + 3} svc={svc} variants={itemVariants} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
