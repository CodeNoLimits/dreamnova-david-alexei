"use client";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  featured?: boolean;
}

export default function GlassCard({ children, className = "", featured = false }: GlassCardProps) {
  return (
    <div
      className={`glass-card p-6 ${featured ? "ring-1 ring-[var(--accent-lavender)]/40" : ""} ${className}`}
      style={featured ? {
        background: "rgba(139,127,255,0.08)",
        boxShadow: "0 0 40px rgba(139,127,255,0.1)",
      } : {}}
    >
      {children}
    </div>
  );
}
