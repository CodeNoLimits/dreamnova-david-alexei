"use client";

import { useTranslations } from "next-intl";

const projects = [
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqsjREzZ948BDkFTvvt7I4OEXE3EkbheGEgrnfkgXD-lt-MdutTBuHcA-jsy-1I2ulV1qXT_5j-oWAf8oDQAPJlUwj66_yAXIwvUMI0DXfcGcnPH3UF5NjFJ8O34cwY4JTOX_voJEDaYDob4AMwSDUYEvhGYnCMnODWYzPglSB0IIefYYq7uWmQOfEwjr1Lkf1HhCj3CniYy4wni2m6CmIOy5Kho1VfcWxgF8wZDrMH9FFfE3MOoTqHGsaYiCNkuG82U1ad9rRykIE",
    alt: "Barukh Sagit luxury jewelry ring",
    accent: "#FBBF24",
    hoverClass: "amber",
    tags: [{ label: "Next.js", color: "amber" }, { label: "Supabase", color: "amber" }],
    url: "https://barukh-sagit-jewelry.vercel.app",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxPUNSth7GFbjhjZNLo3h3X6kBceeDU4K6QlfaxvKTFbiO8NbqfY7aD-WRxtCb9o1ZMtGAUl5wVTJLgTWS26vSYriB8SRuR5DfL5Fm2mCr4BsPvOWx4KkP0rS8Mv_CdoSjza1m18medPpOuWE68Z547b31Lzy4LpqlQXMAAIX6cpewQlQghqfkg9Ml0T9x24IE96x3M_YJZA2_KnA9q_EkO8_4VcCEe7UGRT10a1td45jgXWRrGekRqeDcyj_aA4i2saQHwK_wzD-d",
    alt: "Kavkom Solar panels on roof",
    accent: "#2DD4BF",
    hoverClass: "teal",
    tags: [{ label: "HTML5", color: "teal" }, { label: "AI Lead Gen", color: "teal" }],
    url: "#",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDF-MOVTD5E16tqXTH_C9Y6WJaV3bE-qxyhZiQn2CdoDfOLw6XVxj6fRP03xeoYvQjCUj8OLI4l-fEZ7fcHv9QQj8wB9lLUnZjENK9XvuR5EsZRRrIoev1a2m-WC-rKZSRf5zM4lVynYp6BS3VCHDez9sOlTF5spzJy-Q9g2cBFSsW4KC8K2Uf_dlTfJd7b-Xx4PIVucCW7xOy0t5jLH-C3t0cV-O1mikxOV3j23c0NWUu6vF17eOdYIF7N8_IpxImgowU-Nm3aLLq8",
    alt: "Esther Ifrah Breslov books library",
    accent: "#FF8A80",
    hoverClass: "rose",
    tags: [{ label: "Shopify", color: "rose" }, { label: "Next.js", color: "rose" }],
    url: "https://ultime-esther-ifra-breslev.vercel.app",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrlY0If1Lx05pZhCBEz96btDHfsvmmvfkR7-yymYd7fVkC3JnuMJBbYIhqpqSBH0T-JtPoDGRt69w5qck2j6qpo-SJpF5t6XpSTV6g3CqCTXPLYtdeyUR6Fh1wpsDgUtvwntk1KRcMzGS9G2jdXTmghskQ3PNd2tyuye4MHV7vTdG_gl2WSs3nUcXZ3jwZTHd8LXV3vTTxeRzFgW9T-vTPctxRMnjKXqMo_6aV6SZzSVruGFjyn3hiFuWuV79J3AL0UiG7-1Hgj9gw",
    alt: "HaEsh Sheli modern books stack",
    accent: "#8B7FFF",
    hoverClass: "primary",
    tags: [{ label: "React", color: "primary" }, { label: "E-Commerce", color: "primary" }],
    url: "https://haesh-sheli-new.vercel.app",
  },
];

const tagColors: Record<string, { bg: string; border: string; text: string }> = {
  amber:   { bg: "rgba(251,191,36,0.1)",   border: "rgba(251,191,36,0.2)",   text: "#FBBF24" },
  teal:    { bg: "rgba(45,212,191,0.1)",   border: "rgba(45,212,191,0.2)",   text: "#2DD4BF" },
  rose:    { bg: "rgba(255,138,128,0.1)",  border: "rgba(255,138,128,0.2)",  text: "#FF8A80" },
  primary: { bg: "rgba(139,127,255,0.1)",  border: "rgba(139,127,255,0.2)",  text: "#8B7FFF" },
};

export default function Portfolio() {
  const t = useTranslations("portfolio");

  const items = [
    { title: t("p1_title"), desc: t("p1_desc"), ...projects[0] },
    { title: t("p2_title"), desc: t("p2_desc"), ...projects[1] },
    { title: t("p3_title"), desc: t("p3_desc"), ...projects[2] },
    { title: t("p4_title"), desc: t("p4_desc"), ...projects[3] },
  ];

  return (
    <section id="portfolio" className="relative z-10 max-w-7xl mx-auto px-4 py-24">
      {/* Star grid background */}
      <div className="absolute inset-0 star-grid opacity-30 pointer-events-none" />
      {/* Central crystal glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(140,128,255,0.08), transparent 70%)", filter: "blur(80px)" }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span
            className="font-mono text-xs uppercase tracking-widest mb-4 block font-semibold"
            style={{ color: "#8B7FFF" }}
          >
            {t("label")}
          </span>
          <h2 className="text-5xl font-bold leading-tight mb-6 tracking-tight" style={{ color: "#EEEEF5" }}>
            {t("title")} <br />
            <span style={{ color: "rgba(139,127,255,0.8)" }}>for Modern Visionaries</span>
          </h2>
          <p className="text-lg" style={{ color: "rgba(238,238,245,0.5)" }}>
            {t("subtitle")}
          </p>
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative prismatic-hover rounded-xl p-2 overflow-hidden transition-all duration-500 cursor-pointer"
              style={{
                background: "rgba(10,10,15,0.8)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              onClick={() => item.url !== "#" && window.open(item.url, "_blank")}
            >
              {/* Image */}
              <div className="relative rounded-lg overflow-hidden mb-6" style={{ aspectRatio: "16/9" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, #06060C 0%, transparent 60%)", opacity: 0.6 }}
                />
              </div>

              <div className="px-4 pb-4">
                {/* Tags */}
                <div className="flex gap-2 mb-4">
                  {item.tags.map((tag) => {
                    const c = tagColors[tag.color];
                    return (
                      <span
                        key={tag.label}
                        className="text-xs uppercase tracking-wider font-bold px-2 py-1 rounded"
                        style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.text }}
                      >
                        {tag.label}
                      </span>
                    );
                  })}
                </div>

                <h3
                  className="text-2xl font-bold mb-2 transition-colors duration-300"
                  style={{ color: "#EEEEF5" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = item.accent)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#EEEEF5")}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(238,238,245,0.5)" }}>
                  {item.desc}
                </p>

                <div
                  className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors duration-300"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  {item.url !== "#" ? "View Live →" : "Coming Soon"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
