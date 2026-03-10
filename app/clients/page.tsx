"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Users,
  AlertTriangle,
  CheckCircle,
  Clock,
  Phone,
  Mail,
  Search,
  Filter,
  TrendingUp,
  TrendingDown,
  Minus,
  Activity,
  Calendar,
  MessageSquare,
  Sparkles,
} from "lucide-react"

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

type ClientStatus = "active" | "warning" | "critical" | "cold"
type Priority = "HIGH" | "MEDIUM" | "LOW"

interface Client {
  name: string
  project: string
  projectSlug: string
  status: ClientStatus
  statusLabel: string
  lastContact: string
  daysSinceContact: number
  priority: Priority
  phone?: string
  email?: string
  stack: string
  progress: number
  revenue: string
  notes: string
}

const clients: Client[] = [
  {
    name: "Baroukh Sagit",
    project: "Bijoux Luxe",
    projectSlug: "barukh-sagit",
    status: "critical",
    statusLabel: "CRITIQUE - 19 jours de silence",
    lastContact: "23 Jan 2026",
    daysSinceContact: 19,
    priority: "HIGH",
    phone: "+972 54-345-4014",
    stack: "Next.js 16 / Supabase / Vercel",
    progress: 95,
    revenue: "2 300 \u20ac/mois",
    notes: "Site bijoux luxe presque fini (95%). Aucune r\u00e9ponse depuis 19 jours. Relance urgente n\u00e9cessaire.",
  },
  {
    name: "Esther Ifrah",
    project: "Livres Breslev",
    projectSlug: "esther-ifrah",
    status: "critical",
    statusLabel: "CRITIQUE - menace de quitter",
    lastContact: "8 F\u00e9v 2026",
    daysSinceContact: 3,
    priority: "HIGH",
    phone: "+972 58-514-8500",
    stack: "Shopify / Next.js",
    progress: 85,
    revenue: "1 500 \u20ac/mois",
    notes: "A menac\u00e9 de quitter le projet. Probl\u00e8mes de communication. N\u00e9cessite attention imm\u00e9diate.",
  },
  {
    name: "Ariel TI48",
    project: "Kavkom Solar",
    projectSlug: "ariel-kavkom",
    status: "active",
    statusLabel: "OK - satisfait",
    lastContact: "10 F\u00e9v 2026",
    daysSinceContact: 1,
    priority: "LOW",
    stack: "HTML / Netlify",
    progress: 88,
    revenue: "490 \u20ac/mois",
    notes: "Client satisfait. Panneaux solaires site bien avanc\u00e9. Maintenance r\u00e9guli\u00e8re.",
  },
  {
    name: "Albert El Harrar",
    project: "Projet Fran\u00e7ais",
    projectSlug: "albert-harrar",
    status: "cold",
    statusLabel: "FROID - r\u00e9-engagement n\u00e9cessaire",
    lastContact: "15 Jan 2026",
    daysSinceContact: 27,
    priority: "MEDIUM",
    phone: "+33 6 88 06 97 51",
    stack: "\u00c0 d\u00e9finir",
    progress: 10,
    revenue: "0 \u20ac",
    notes: "Client froid. Aucun contact depuis presque un mois. Strat\u00e9gie de r\u00e9-engagement \u00e0 mettre en place.",
  },
  {
    name: "Moshe Myara",
    project: "Ha-Mazon",
    projectSlug: "moshe-myara",
    status: "warning",
    statusLabel: "Partenaire actif - suivi n\u00e9cessaire",
    lastContact: "9 F\u00e9v 2026",
    daysSinceContact: 2,
    priority: "MEDIUM",
    phone: "+33 6 50 58 75 11",
    stack: "FastAPI / Next.js",
    progress: 35,
    revenue: "5 400 \u20ac/mois",
    notes: "Partenaire actif, COO du projet Ha-Mazon. Suivi r\u00e9gulier n\u00e9cessaire pour la lev\u00e9e de fonds.",
  },
]

/* ------------------------------------------------------------------ */
/*  HELPERS                                                            */
/* ------------------------------------------------------------------ */

const statusConfig: Record<ClientStatus, { color: string; bg: string; border: string; icon: React.ElementType; dotClass: string }> = {
  active: {
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    icon: CheckCircle,
    dotClass: "bg-emerald-400",
  },
  warning: {
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    icon: Clock,
    dotClass: "bg-amber-400",
  },
  critical: {
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
    icon: AlertTriangle,
    dotClass: "bg-red-400",
  },
  cold: {
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    icon: Minus,
    dotClass: "bg-blue-400",
  },
}

const priorityConfig: Record<Priority, { color: string; bg: string; border: string }> = {
  HIGH: { color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20" },
  MEDIUM: { color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
  LOW: { color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
}

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el) } },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    )
    obs.observe(el)
    return () => obs.unobserve(el)
  }, [threshold])
  return { ref, visible }
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useReveal()
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  COMPONENTS                                                         */
/* ------------------------------------------------------------------ */

function StatCard({ label, value, icon: Icon, trend }: { label: string; value: string; icon: React.ElementType; trend?: "up" | "down" | "flat" }) {
  return (
    <div className="glass-card p-5 flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/20 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-[var(--color-gold)]" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider">{label}</p>
        <p className="text-2xl font-semibold gradient-text-gold mt-0.5" style={{ fontFamily: "var(--font-serif)" }}>{value}</p>
      </div>
      {trend && (
        <div className={`shrink-0 ${trend === "up" ? "text-emerald-400" : trend === "down" ? "text-red-400" : "text-[var(--color-text-muted)]"}`}>
          {trend === "up" ? <TrendingUp className="w-4 h-4" /> : trend === "down" ? <TrendingDown className="w-4 h-4" /> : <Minus className="w-4 h-4" />}
        </div>
      )}
    </div>
  )
}

function ClientRow({ client, index }: { client: Client; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const sc = statusConfig[client.status]
  const pc = priorityConfig[client.priority]
  const StatusIcon = sc.icon

  return (
    <Reveal delay={index * 80}>
      <div className={`glass-card overflow-hidden transition-all ${expanded ? "shadow-glow-gold" : ""}`}>
        {/* Main Row */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4 hover:bg-white/[0.02] transition-colors cursor-pointer"
        >
          {/* Status dot + Name */}
          <div className="flex items-center gap-3 md:w-[220px] shrink-0">
            <div className="relative">
              <div className={`w-2.5 h-2.5 rounded-full ${sc.dotClass}`} />
              {client.status === "critical" && (
                <div className={`absolute inset-0 w-2.5 h-2.5 rounded-full ${sc.dotClass} animate-ping`} />
              )}
            </div>
            <div>
              <p className="font-medium text-[var(--color-text-primary)] text-sm">{client.name}</p>
              <p className="text-xs text-[var(--color-text-muted)]">{client.project}</p>
            </div>
          </div>

          {/* Status Badge */}
          <div className="md:w-[260px] shrink-0">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${sc.bg} ${sc.color} ${sc.border} border`}>
              <StatusIcon className="w-3 h-3" />
              {client.statusLabel}
            </span>
          </div>

          {/* Progress */}
          <div className="md:w-[120px] shrink-0">
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[var(--color-gold-dark)] to-[var(--color-gold-light)] transition-all duration-1000"
                  style={{ width: `${client.progress}%` }}
                />
              </div>
              <span className="text-xs text-[var(--color-text-muted)] tabular-nums">{client.progress}%</span>
            </div>
          </div>

          {/* Last Contact */}
          <div className="md:flex-1 flex items-center gap-1.5 text-xs text-[var(--color-text-secondary)]">
            <Calendar className="w-3 h-3 text-[var(--color-text-muted)]" />
            <span>{client.lastContact}</span>
            <span className={`ml-1 ${client.daysSinceContact > 14 ? "text-red-400" : client.daysSinceContact > 7 ? "text-amber-400" : "text-[var(--color-text-muted)]"}`}>
              ({client.daysSinceContact}j)
            </span>
          </div>

          {/* Priority */}
          <div className="md:w-[80px] shrink-0 flex justify-end">
            <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${pc.bg} ${pc.color} ${pc.border} border`}>
              {client.priority}
            </span>
          </div>
        </button>

        {/* Expanded Details */}
        {expanded && (
          <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0 border-t border-[var(--color-glass-border)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-5">
              {/* Info */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">Informations</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-[var(--color-text-secondary)]">
                    <span className="text-[var(--color-text-muted)]">Stack:</span> {client.stack}
                  </p>
                  <p className="text-[var(--color-text-secondary)]">
                    <span className="text-[var(--color-text-muted)]">Revenus:</span>{" "}
                    <span className="gradient-text-gold font-medium">{client.revenue}</span>
                  </p>
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">Notes</h4>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{client.notes}</p>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">Actions rapides</h4>
                <div className="flex flex-wrap gap-2">
                  {client.phone && (
                    <a
                      href={`https://wa.me/${client.phone.replace(/[^0-9+]/g, "").replace("+", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition"
                    >
                      <Phone className="w-3 h-3" /> WhatsApp
                    </a>
                  )}
                  <a
                    href={`mailto:dreamnovaultimate@gmail.com?subject=${encodeURIComponent(`Suivi - ${client.name} - ${client.project}`)}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[var(--color-blue)]/10 text-[var(--color-blue-light)] border border-[var(--color-blue)]/20 hover:bg-[var(--color-blue)]/20 transition"
                  >
                    <Mail className="w-3 h-3" /> Email
                  </a>
                  <button
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[var(--color-purple)]/10 text-[var(--color-purple-light)] border border-[var(--color-purple)]/20 hover:bg-[var(--color-purple)]/20 transition"
                  >
                    <MessageSquare className="w-3 h-3" /> Note
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Reveal>
  )
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function ClientPortalPage() {
  const [filter, setFilter] = useState<ClientStatus | "all">("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])

  const filteredClients = clients.filter(c => {
    const matchFilter = filter === "all" || c.status === filter
    const matchSearch = searchQuery === "" || c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.project.toLowerCase().includes(searchQuery.toLowerCase())
    return matchFilter && matchSearch
  })

  const criticalCount = clients.filter(c => c.status === "critical").length
  const totalRevenue = "9 690 \u20ac"
  const avgProgress = Math.round(clients.reduce((sum, c) => sum + c.progress, 0) / clients.length)

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* NAV */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "glass-strong shadow-lg shadow-black/20 py-2" : "bg-transparent py-4"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="gradient-text-gold text-2xl md:text-3xl tracking-tight" style={{ fontFamily: "var(--font-serif)" }}>Dream Nova</Link>
          <div className="hidden lg:flex items-center gap-1">
            <Link href="/" className="px-4 py-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition rounded-lg hover:bg-white/5">Accueil</Link>
            <Link href="/#services" className="px-4 py-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition rounded-lg hover:bg-white/5">Services</Link>
            <Link href="/clients" className="px-4 py-2 text-sm text-[var(--color-gold)] transition rounded-lg bg-white/5">Portail Clients</Link>
          </div>
          <Link href="/" className="lg:hidden inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition">
            <ArrowLeft size={16} /> Accueil
          </Link>
        </div>
      </nav>

      {/* HEADER */}
      <section className="relative pt-28 pb-12 px-4 overflow-hidden">
        <div className="hero-grid-pattern" />
        <div className="absolute top-10 left-1/4 w-[400px] h-[400px] bg-[var(--color-gold)]/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[var(--color-blue)]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <Link href="/" className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition">
                <ArrowLeft size={16} /> Retour
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-2">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-[var(--color-gold)]/10 text-[var(--color-gold)] border border-[var(--color-gold)]/20 mb-4">
                  <Sparkles className="w-3.5 h-3.5" /> Portail Interne
                </span>
                <h1 className="text-3xl md:text-5xl" style={{ fontFamily: "var(--font-serif)", lineHeight: 1.1 }}>
                  Suivi <span className="gradient-text-gold">Clients</span>
                </h1>
              </div>
              <p className="text-sm text-[var(--color-text-muted)]">
                Mis \u00e0 jour : {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="px-4 pb-8">
        <div className="max-w-7xl mx-auto">
          <Reveal delay={200}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard label="Clients actifs" value={String(clients.length)} icon={Users} trend="up" />
              <StatCard label="Alertes critiques" value={String(criticalCount)} icon={AlertTriangle} trend="down" />
              <StatCard label="Revenus mensuels" value={totalRevenue} icon={Activity} trend="up" />
              <StatCard label="Progression moy." value={`${avgProgress}%`} icon={TrendingUp} trend="flat" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FILTERS */}
      <section className="px-4 pb-6">
        <div className="max-w-7xl mx-auto">
          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              {/* Search */}
              <div className="relative w-full sm:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-muted)]" />
                <input
                  type="text"
                  placeholder="Rechercher un client..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-10 pl-10 pr-4 rounded-lg text-sm bg-[var(--color-surface)] border border-[var(--color-glass-border)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-gold)]/40 transition"
                />
              </div>

              {/* Filter Buttons */}
              <div className="flex items-center gap-2 overflow-x-auto">
                <Filter className="w-4 h-4 text-[var(--color-text-muted)] shrink-0" />
                {(["all", "critical", "warning", "active", "cold"] as const).map((f) => {
                  const labels: Record<string, string> = { all: "Tous", critical: "Critiques", warning: "Attention", active: "Actifs", cold: "Froids" }
                  const isActive = filter === f
                  return (
                    <button
                      key={f}
                      onClick={() => setFilter(f)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition whitespace-nowrap ${
                        isActive
                          ? "bg-[var(--color-gold)]/10 text-[var(--color-gold)] border border-[var(--color-gold)]/30"
                          : "text-[var(--color-text-muted)] border border-transparent hover:text-[var(--color-text-secondary)] hover:bg-white/5"
                      }`}
                    >
                      {labels[f]}
                      {f === "critical" && criticalCount > 0 && (
                        <span className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full text-[9px] bg-red-500/20 text-red-400">{criticalCount}</span>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CLIENT LIST */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto space-y-3">
          {/* Column Headers (desktop) */}
          <div className="hidden md:flex items-center gap-4 px-6 py-2 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
            <div className="w-[220px]">Client</div>
            <div className="w-[260px]">Statut</div>
            <div className="w-[120px]">Progression</div>
            <div className="flex-1">Dernier contact</div>
            <div className="w-[80px] text-right">Priorit\u00e9</div>
          </div>

          {filteredClients.length === 0 ? (
            <Reveal>
              <div className="glass-card p-12 text-center">
                <Search className="w-8 h-8 text-[var(--color-text-muted)] mx-auto mb-3" />
                <p className="text-[var(--color-text-secondary)]">Aucun client trouv\u00e9</p>
                <p className="text-sm text-[var(--color-text-muted)] mt-1">Essayez un autre filtre ou terme de recherche.</p>
              </div>
            </Reveal>
          ) : (
            filteredClients.map((client, i) => (
              <ClientRow key={client.projectSlug} client={client} index={i} />
            ))
          )}
        </div>
      </section>

      {/* LEGEND */}
      <section className="px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="glass-card p-5 flex flex-wrap gap-6 text-xs text-[var(--color-text-muted)]">
              <span className="font-semibold uppercase tracking-wider">L\u00e9gende :</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400" /> Actif</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-400" /> Attention</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red-400" /> Critique</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-400" /> Froid</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-4 border-t border-[var(--color-glass-border)]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--color-text-muted)]">
          <p>&copy; {new Date().getFullYear()} Dream Nova Consult. Portail clients interne.</p>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <Link href="/" className="hover:text-[var(--color-text-secondary)] transition">Accueil</Link>
            <a href="https://dreamnova-formation-ia.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-text-secondary)] transition">Formation IA</a>
            <a href="mailto:dreamnovaultimate@gmail.com" className="hover:text-[var(--color-text-secondary)] transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
