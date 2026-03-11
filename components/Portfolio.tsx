"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Play } from "lucide-react";

const projects = [
  {
    img: "/images/portfolio-haesh.jpg",
    fallbackImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrlY0If1Lx05pZhCBEz96btDHfsvmmvfkR7-yymYd7fVkC3JnuMJBbYIhqpqSBH0T-JtPoDGRt69w5qck2j6qpo-SJpF5t6XpSTV6g3CqCTXPLYtdeyUR6Fh1wpsDgUtvwntk1KRcMzGS9G2jdXTmghskQ3PNd2tyuye4MHV7vTdG_gl2WSs3nUcXZ3jwZTHd8LXV3vTTxeRzFgW9T-vTPctxRMnjKXqMo_6aV6SZzSVruGFjyn3hiFuWuV79J3AL0UiG7-1Hgj9gw",
    alt: "HaEsh Sheli — Keren Rabbi Yisrael",
    accent: "#8B7FFF",
    tags: [{ label: "React 18", color: "#8B7FFF" }, { label: "Vite", color: "#8B7FFF" }, { label: "Stripe + PayPal", color: "#8B7FFF" }, { label: "6 langues", color: "#8B7FFF" }],
    url: "https://haesh-sheli-new.vercel.app",
    featured: true,
  },
  {
    img: "/images/portfolio-esther.jpg",
    fallbackImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuDF-MOVTD5E16tqXTH_C9Y6WJaV3bE-qxyhZiQn2CdoDfOLw6XVxj6fRP03xeoYvQjCUj8OLI4l-fEZ7fcHv9QQj8wB9lLUnZjENK9XvuR5EsZRRrIoev1a2m-WC-rKZSRf5zM4lVynYp6BS3VCHDez9sOlTF5spzJy-Q9g2cBFSsW4KC8K2Uf_dlTfJd7b-Xx4PIVucCW7xOy0t5jLH-C3t0cV-O1mikxOV3j23c0NWUu6vF17eOdYIF7N8_IpxImgowU-Nm3aLLq8",
    alt: "Esther Ifrah Breslev",
    accent: "#FF8A80",
    tags: [{ label: "Next.js", color: "#FF8A80" }, { label: "Mode Breslev", color: "#FF8A80" }, { label: "RTL", color: "#FF8A80" }],
    url: "https://breslev-esther-ifrah.vercel.app",
    featured: false,
  },
  {
    img: "/images/portfolio-moulindore.jpg",
    fallbackImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxPUNSth7GFbjhjZNLo3h3X6kBceeDU4K6QlfaxvKTFbiO8NbqfY7aD-WRxtCb9o1ZMtGAUl5wVTJLgTWS26vSYriB8SRuR5DfL5Fm2mCr4BsPvOWx4KkP0rS8Mv_CdoSjza1m18medPpOuWE68Z547b31Lzy4LpqlQXMAAIX6cpewQlQghqfkg9Ml0T9x24IE96x3M_YJZA2_KnA9q_EkO8_4VcCEe7UGRT10a1td45jgXWRrGekRqeDcyj_aA4i2saQHwK_wzD-d",
    alt: "Moulin d'Ore — March\u00e9 Naturel",
    accent: "#C9A84C",
    tags: [{ label: "Next.js", color: "#C9A84C" }, { label: "E-Commerce", color: "#C9A84C" }, { label: "Organic", color: "#C9A84C" }],
    url: "https://moulindore.co.il",
    featured: false,
  },
  {
    img: "/images/Craftsman_sitting_outside_shop_3b20abc2db.jpeg",
    alt: "Barukh Sagit — Bijoux J\u00e9rusalem",
    accent: "#FBBF24",
    tags: [{ label: "Next.js", color: "#FBBF24" }, { label: "Supabase", color: "#FBBF24" }, { label: "Bijoux", color: "#FBBF24" }],
    url: "https://barukh-sagit-jewelry.vercel.app",
    featured: false,
  },
];

const flowVideos = [
  {
    src: "/videos/hero-market-dolly.mp4",
    poster: "/images/Craftsman_in_modernized_shop_663f0bf1d1.jpeg",
    accent: "#FFD93D",
  },
  {
    src: "/videos/hero-craftsman-reveal.mp4",
    poster: "/images/Craftsman_sitting_outside_shop_3326895852.jpeg",
    accent: "#8B7FFF",
  },
  {
    src: "/videos/The_craftsman_smiles_and_picks_up_his_phone__the_s_e0d9416879.mp4",
    poster: "/images/Craftsman_in_modernized_shop_f42d81f724.jpeg",
    accent: "#64DFDF",
  },
  {
    src: "/videos/Use_last_frame_of_clip_3_as_starting_framethe_floa_f328ac1a07.mp4",
    poster: "/images/A_sleek_futuristic_workspace_at_night_a_large_curv_d0b0bcfb2e.jpeg",
    accent: "#FF8A80",
  },
];

export default function Portfolio() {
  const t = useTranslations("portfolio");
  const locale = useLocale();
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const items = [
    { title: t("p1_title"), desc: t("p1_desc"), ...projects[0] },
    { title: t("p2_title"), desc: t("p2_desc"), ...projects[1] },
    { title: t("p3_title"), desc: t("p3_desc"), ...projects[2] },
    { title: t("p4_title"), desc: t("p4_desc"), ...projects[3] },
  ];

  const videoLabels = {
    he: { tag: "AI \u05e7\u05d5\u05dc\u05e0\u05d5\u05e2 \u2014 Veo 3.1", titles: ["\u05e9\u05d5\u05e7 \u05de\u05d7\u05e0\u05d4 \u05d9\u05d4\u05d5\u05d3\u05d4 \u2014 \u05e9\u05e2\u05ea \u05d6\u05d4\u05d1", "\u05d0\u05d5\u05de\u05df \u05d7\u05d5\u05e9\u05e3 \u05e2\u05d5\u05dc\u05dd \u05d3\u05d9\u05d2\u05d9\u05d8\u05dc\u05d9", "\u05d4\u05d0\u05d5\u05de\u05df \u05de\u05d7\u05d9\u05d9\u05da", "\u05e2\u05d5\u05dc\u05dd \u05d3\u05d9\u05d2\u05d9\u05d8\u05dc\u05d9 \u05e6\u05e3"] },
    en: { tag: "AI Cinematic \u2014 Veo 3.1", titles: ["Jerusalem Market \u2014 Golden Hour", "Craftsman Digital Reveal", "The Craftsman Smiles", "Floating Digital World"] },
    fr: { tag: "Cin\u00e9matique IA \u2014 Veo 3.1", titles: ["March\u00e9 J\u00e9rusalem \u2014 Heure Dor\u00e9e", "Artisan R\u00e9v\u00e9lation Digitale", "L'Artisan Sourit", "Monde Digital Flottant"] },
  };

  const vLabels = videoLabels[locale as keyof typeof videoLabels] || videoLabels.en;

  return (
    <section id="portfolio" className="relative z-10 py-24 px-4 sm:px-6 overflow-hidden">
      {/* Section divider glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(100,223,223,0.4), transparent)" }}
      />

      {/* Background glow */}
      <div className="absolute inset-0 star-grid opacity-15 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <div className="inline-block px-4 py-1.5 rounded-full mb-5 text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[var(--accent-teal)] bg-[var(--accent-teal)]/10 border border-[var(--accent-teal)]/20">
            {t("label")}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            {t("title")}
          </h2>
          <p className="text-base md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">{t("subtitle")}</p>
        </motion.div>

        {/* Project Grid — 2×2 balanced */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-1"
              style={{
                background: "rgba(10,10,18,0.85)",
                border: `1px solid ${item.accent}18`,
                backdropFilter: "blur(12px)",
              }}
              onClick={() => item.url !== "#" && window.open(item.url, "_blank")}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: `inset 0 0 0 1px ${item.accent}40, 0 20px 50px ${item.accent}10` }}
              />

              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    if (item.fallbackImg) (e.target as HTMLImageElement).src = item.fallbackImg;
                  }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(6,6,12,0.95) 0%, rgba(6,6,12,0.2) 50%, transparent 100%)" }} />

                {/* Live badge */}
                {item.url !== "#" && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono text-white/70 uppercase tracking-widest">Live</span>
                  </div>
                )}

                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"
                  style={{ background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)` }}
                />
              </div>

              {/* Info */}
              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {item.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md"
                      style={{
                        background: `${tag.color}12`,
                        border: `1px solid ${tag.color}22`,
                        color: tag.color,
                      }}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-[var(--accent-lavender)] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/45">{item.desc}</p>
                  </div>
                  {item.url !== "#" && (
                    <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{ background: `${item.accent}15`, border: `1px solid ${item.accent}25` }}
                    >
                      <ExternalLink size={14} style={{ color: item.accent }} />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Cinematic Videos — FLOW */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, transparent, rgba(139,127,255,0.3))" }} />
            <div className="flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ background: "rgba(139,127,255,0.1)", border: "1px solid rgba(139,127,255,0.25)" }}
            >
              <Play size={12} className="text-[var(--accent-lavender)]" fill="currentColor" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--accent-lavender)]">
                {vLabels.tag}
              </span>
            </div>
            <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, rgba(100,223,223,0.3), transparent)" }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {flowVideos.map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1"
                style={{
                  background: "rgba(10,10,18,0.85)",
                  border: `1px solid ${video.accent}18`,
                  backdropFilter: "blur(12px)",
                }}
              >
                {/* Video */}
                <div className="relative">
                  <video
                    className="w-full"
                    style={{ maxHeight: "260px", objectFit: "cover", display: "block" }}
                    poster={video.poster}
                    controls={activeVideo === i}
                    playsInline
                    preload="none"
                    onPlay={() => setActiveVideo(i)}
                    onPause={() => setActiveVideo(null)}
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>

                  {/* Play overlay */}
                  {activeVideo !== i && (
                    <button
                      className="absolute inset-0 flex items-center justify-center group/play"
                      onClick={() => {
                        const vids = document.querySelectorAll("video");
                        // Find the right video (skip hero video if any)
                        let vidIndex = 0;
                        vids.forEach((v, idx) => {
                          if (v.querySelector(`source[src="${video.src}"]`)) vidIndex = idx;
                        });
                        const vid = vids[vidIndex] as HTMLVideoElement;
                        if (vid) { vid.controls = true; vid.play(); setActiveVideo(i); }
                      }}
                    >
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover/play:scale-110"
                        style={{
                          background: `${video.accent}20`,
                          border: `2px solid ${video.accent}50`,
                          backdropFilter: "blur(8px)",
                        }}
                      >
                        <Play size={22} style={{ color: video.accent }} fill="currentColor" className="ml-0.5" />
                      </div>
                    </button>
                  )}

                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px]"
                    style={{ background: `linear-gradient(90deg, transparent, ${video.accent}, transparent)` }}
                  />
                </div>

                {/* Info */}
                <div className="p-4 sm:p-5">
                  <h4 className="text-sm sm:text-base font-bold text-white">{vLabels.titles[i]}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
