"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Play } from "lucide-react";

const projects = [
  {
    // HaEsh Sheli — FEATURED (most impressive — Keren Rabbi Yisrael)
    img: "/images/portfolio-haesh.jpg",
    fallbackImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrlY0If1Lx05pZhCBEz96btDHfsvmmvfkR7-yymYd7fVkC3JnuMJBbYIhqpqSBH0T-JtPoDGRt69w5qck2j6qpo-SJpF5t6XpSTV6g3CqCTXPLYtdeyUR6Fh1wpsDgUtvwntk1KRcMzGS9G2jdXTmghskQ3PNd2tyuye4MHV7vTdG_gl2WSs3nUcXZ3jwZTHd8LXV3vTTxeRzFgW9T-vTPctxRMnjKXqMo_6aV6SZzSVruGFjyn3hiFuWuV79J3AL0UiG7-1Hgj9gw",
    alt: "HaEsh Sheli — Keren Rabbi Yisrael",
    accent: "#8B7FFF",
    tags: [{ label: "React 18", color: "#8B7FFF" }, { label: "Vite", color: "#8B7FFF" }, { label: "Stripe + PayPal", color: "#8B7FFF" }, { label: "6 langues", color: "#8B7FFF" }],
    url: "https://haesh-sheli-new.vercel.app",
    featured: true,
  },
  {
    // Esther Ifrah — mode féminine Breslev
    img: "/images/portfolio-esther.jpg",
    fallbackImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuDF-MOVTD5E16tqXTH_C9Y6WJaV3bE-qxyhZiQn2CdoDfOLw6XVxj6fRP03xeoYvQjCUj8OLI4l-fEZ7fcHv9QQj8wB9lLUnZjENK9XvuR5EsZRRrIoev1a2m-WC-rKZSRf5zM4lVynYp6BS3VCHDez9sOlTF5spzJy-Q9g2cBFSsW4KC8K2Uf_dlTfJd7b-Xx4PIVucCW7xOy0t5jLH-C3t0cV-O1mikxOV3j23c0NWUu6vF17eOdYIF7N8_IpxImgowU-Nm3aLLq8",
    alt: "Esther Ifrah Breslev",
    accent: "#FF8A80",
    tags: [{ label: "Next.js", color: "#FF8A80" }, { label: "Mode Breslev", color: "#FF8A80" }, { label: "RTL", color: "#FF8A80" }],
    url: "https://breslev-esther-ifrah.vercel.app",
    featured: false,
  },
  {
    // Moulin d'Ore — marché bio
    img: "/images/portfolio-moulindore.jpg",
    fallbackImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxPUNSth7GFbjhjZNLo3h3X6kBceeDU4K6QlfaxvKTFbiO8NbqfY7aD-WRxtCb9o1ZMtGAUl5wVTJLgTWS26vSYriB8SRuR5DfL5Fm2mCr4BsPvOWx4KkP0rS8Mv_CdoSjza1m18medPpOuWE68Z547b31Lzy4LpqlQXMAAIX6cpewQlQghqfkg9Ml0T9x24IE96x3M_YJZA2_KnA9q_EkO8_4VcCEe7UGRT10a1td45jgXWRrGekRqeDcyj_aA4i2saQHwK_wzD-d",
    alt: "Moulin d'Ore — Marché Naturel",
    accent: "#C9A84C",
    tags: [{ label: "Next.js", color: "#C9A84C" }, { label: "E-Commerce", color: "#C9A84C" }, { label: "Organic", color: "#C9A84C" }],
    url: "https://moulindore.co.il",
    featured: false,
  },
  {
    // Barukh Sagit — bijouterie Jérusalem
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqsjREzZ948BDkFTvvt7I4OEXE3EkbheGEgrnfkgXD-lt-MdutTBuHcA-jsy-1I2ulV1qXT_5j-oWAf8oDQAPJlUwj66_yAXIwvUMI0DXfcGcnPH3UF5NjFJ8O34cwY4JTOX_voJEDaYDob4AMwSDUYEvhGYnCMnODWYzPglSB0IIefYYq7uWmQOfEwjr1Lkf1HhCj3CniYy4wni2m6CmIOy5Kho1VfcWxgF8wZDrMH9FFfE3MOoTqHGsaYiCNkuG82U1ad9rRykIE",
    alt: "Barukh Sagit — Bijoux Jérusalem",
    accent: "#FBBF24",
    tags: [{ label: "Next.js", color: "#FBBF24" }, { label: "Supabase", color: "#FBBF24" }, { label: "Bijoux", color: "#FBBF24" }],
    url: "https://barukh-sagit-jewelry.vercel.app",
    featured: false,
  },
  {
    // Kavkom Solar
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxPUNSth7GFbjhjZNLo3h3X6kBceeDU4K6QlfaxvKTFbiO8NbqfY7aD-WRxtCb9o1ZMtGAUl5wVTJLgTWS26vSYriB8SRuR5DfL5Fm2mCr4BsPvOWx4KkP0rS8Mv_CdoSjza1m18medPpOuWE68Z547b31Lzy4LpqlQXMAAIX6cpewQlQghqfkg9Ml0T9x24IE96x3M_YJZA2_KnA9q_EkO8_4VcCEe7UGRT10a1td45jgXWRrGekRqeDcyj_aA4i2saQHwK_wzD-d",
    alt: "Kavkom Solar",
    accent: "#2DD4BF",
    tags: [{ label: "HTML5", color: "#2DD4BF" }, { label: "AI Lead Gen", color: "#2DD4BF" }],
    url: "https://ariel-solar-panels-kavkom.vercel.app",
    featured: false,
  },
];

const flowVideos = [
  {
    src: "/videos/hero-market-dolly.mp4",
    poster: "/images/Craftsman_in_modernized_shop_663f0bf1d1.jpeg",
    title: "Jerusalem Market — Golden Hour Dolly",
    desc: "Cinematic dolly shot, Mahane Yehuda arches, stone architecture at golden hour",
    tag: "Veo 3.1 · Dolly Shot",
    accent: "#FFD93D",
  },
  {
    src: "/videos/hero-craftsman-reveal.mp4",
    poster: "/images/Craftsman_sitting_outside_shop_3326895852.jpeg",
    title: "Craftsman Digital Reveal",
    desc: "Artisan picks up phone, social media appears, pull-back to reveal Jerusalem panorama",
    tag: "Veo 3.1 · Pull-back Reveal",
    accent: "#8B7FFF",
  },
  {
    src: "/videos/The_craftsman_smiles_and_picks_up_his_phone__the_s_e0d9416879.mp4",
    poster: "/images/Craftsman_in_modernized_shop_f42d81f724.jpeg",
    title: "The Craftsman Smiles",
    desc: "Artisan in modern shop, warm atmosphere, AI-assisted digital transformation story",
    tag: "Veo 3.1 · Character Story",
    accent: "#64DFDF",
  },
  {
    src: "/videos/Use_last_frame_of_clip_3_as_starting_framethe_floa_f328ac1a07.mp4",
    poster: "/images/A_sleek_futuristic_workspace_at_night_a_large_curv_d0b0bcfb2e.jpeg",
    title: "Floating Digital World",
    desc: "Futuristic workspace at night, holograms, seamless brand-to-digital transformation",
    tag: "Veo 3.1 · Futuristic Scene",
    accent: "#FF8A80",
  },
];

export default function Portfolio() {
  const t = useTranslations("portfolio");
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const items = [
    { title: t("p1_title"), desc: t("p1_desc"), ...projects[0] },
    { title: t("p2_title"), desc: t("p2_desc"), ...projects[1] },
    { title: t("p3_title"), desc: t("p3_desc"), ...projects[2] },
    { title: t("p4_title"), desc: t("p4_desc"), ...projects[3] },
    { title: t("p5_title"), desc: t("p5_desc"), ...projects[4] },
  ];

  return (
    <section id="portfolio" className="relative z-10 py-24 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 star-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-block px-4 py-1.5 rounded-full mb-4 text-xs font-mono uppercase tracking-[0.2em] text-[var(--accent-lavender)] bg-[var(--accent-lavender)]/10 border border-[var(--accent-lavender)]/20">
            {t("label")}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            {t("title")}
          </h2>
          <p className="text-lg text-white/50 max-w-2xl">{t("subtitle")}</p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-7 mb-24">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer prismatic-hover transition-all duration-500"
              style={{
                background: "rgba(10,10,18,0.8)",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(12px)",
              }}
              onClick={() => item.url !== "#" && window.open(item.url, "_blank")}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #06060C 0%, rgba(6,6,12,0.3) 50%, transparent 100%)" }} />

                {/* Live badge */}
                {item.url !== "#" && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono text-white/70 uppercase tracking-widest">Live</span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md"
                      style={{
                        background: `${tag.color}12`,
                        border: `1px solid ${tag.color}25`,
                        color: tag.color,
                      }}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-[var(--accent-lavender)] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/50">{item.desc}</p>
                  </div>
                  {item.url !== "#" && (
                    <ExternalLink
                      size={16}
                      className="shrink-0 mt-1 text-white/20 group-hover:text-[var(--accent-lavender)] transition-colors"
                    />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ─── AI Cinematic Videos — FLOW section ─── */}
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
                AI Cinematic — Veo 3.1
              </span>
            </div>
            <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, rgba(100,223,223,0.3), transparent)" }} />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {flowVideos.map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(10,10,18,0.8)",
                  border: `1px solid ${video.accent}20`,
                  backdropFilter: "blur(12px)",
                }}
              >
                {/* Video */}
                <div className="relative">
                  <video
                    className="w-full"
                    style={{ maxHeight: "280px", objectFit: "cover", display: "block" }}
                    poster={video.poster}
                    controls={activeVideo === i}
                    playsInline
                    preload="none"
                    onPlay={() => setActiveVideo(i)}
                    onPause={() => setActiveVideo(null)}
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>

                  {/* Play overlay when not active */}
                  {activeVideo !== i && (
                    <button
                      className="absolute inset-0 flex items-center justify-center group/play"
                      onClick={() => {
                        const vid = document.querySelectorAll("video")[i + 1] as HTMLVideoElement;
                        if (vid) { vid.controls = true; vid.play(); setActiveVideo(i); }
                      }}
                    >
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover/play:scale-110"
                        style={{
                          background: `${video.accent}20`,
                          border: `2px solid ${video.accent}60`,
                          backdropFilter: "blur(8px)",
                        }}
                      >
                        <Play size={24} style={{ color: video.accent }} fill="currentColor" className="ml-1" />
                      </div>
                    </button>
                  )}

                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5"
                    style={{ background: `linear-gradient(90deg, transparent, ${video.accent}, transparent)` }}
                  />
                </div>

                {/* Info */}
                <div className="p-5">
                  <div
                    className="inline-block text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full mb-3"
                    style={{ color: video.accent, background: `${video.accent}12`, border: `1px solid ${video.accent}25` }}
                  >
                    {video.tag}
                  </div>
                  <h4 className="text-base font-bold text-white mb-1.5">{video.title}</h4>
                  <p className="text-sm text-white/45 leading-relaxed">{video.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
