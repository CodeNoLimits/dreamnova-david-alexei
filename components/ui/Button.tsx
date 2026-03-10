"use client";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function Button({ children, variant = "primary", onClick, href, className = "" }: ButtonProps) {
  const base = "inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm transition-all duration-300 cursor-pointer";
  const styles = {
    primary: "text-white rounded-[var(--radius-button)]",
    outline: "border border-[var(--glass-border)] text-[var(--text-primary)] hover:border-[var(--glass-highlight)] rounded-[var(--radius-button)]",
  };

  const primaryStyle = {
    background: "linear-gradient(135deg, var(--accent-lavender), #6A5FFF)",
    boxShadow: "0 4px 20px rgba(139,127,255,0.4)",
  };

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${styles[variant]} ${className}`}
        style={variant === "primary" ? primaryStyle : {}}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles[variant]} ${className}`}
      style={variant === "primary" ? primaryStyle : {}}
    >
      {children}
    </button>
  );
}
