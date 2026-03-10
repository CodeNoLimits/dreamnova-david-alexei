import { NextRequest, NextResponse } from "next/server"

export const runtime = "nodejs"

export async function POST(req: NextRequest) {
  try {
    const { email, revenue, hours, roi } = await req.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 })
    }

    const brevoKey = process.env.BREVO_API_KEY
    const notifEmail = "dreamnovaultimate@gmail.com"

    if (!brevoKey) {
      // No key configured — log and return success anyway (don't block UX)
      console.warn("[lead] BREVO_API_KEY not set — lead not saved:", email)
      return NextResponse.json({ ok: true })
    }

    // 1. Add contact to Brevo list (list 2 = TerraMind Leads)
    await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": brevoKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        listIds: [2],
        updateEnabled: true,
        attributes: {
          TERRAMIND_REVENUE: revenue,
          TERRAMIND_HOURS: hours,
          TERRAMIND_ROI: roi,
          SOURCE: "terramind-roi-calculator",
        },
      }),
    })

    // 2. Send notification to David
    await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": brevoKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: "TerraMind Bot", email: "noreply@dreamnova-consult.vercel.app" },
        to: [{ email: notifEmail, name: "David DreamNova" }],
        subject: `🎯 Nouveau lead TerraMind — ROI ${(roi || 0).toLocaleString("fr")}€`,
        htmlContent: `
          <div style="font-family:monospace;background:#06060C;color:#D4AF37;padding:24px;border-radius:8px;">
            <h2 style="color:#D4AF37;margin:0 0 16px">🎯 NOUVEAU LEAD TERRAMIND</h2>
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="color:#888;padding:6px 0">Email</td><td style="color:#fff">${email}</td></tr>
              <tr><td style="color:#888;padding:6px 0">Revenus actuels</td><td style="color:#fff">${(revenue || 0).toLocaleString("fr")}€</td></tr>
              <tr><td style="color:#888;padding:6px 0">Heures ops/semaine</td><td style="color:#fff">${hours}h</td></tr>
              <tr><td style="color:#888;padding:6px 0">ROI projeté 12 mois</td><td style="color:#D4AF37;font-weight:bold">${(roi || 0).toLocaleString("fr")}€</td></tr>
            </table>
            <p style="margin-top:20px;color:#888;">Action: répondre sous 24h → WhatsApp +972584921492</p>
          </div>
        `,
      }),
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[lead] Error:", err)
    // Don't expose internals — return 200 to not block UX
    return NextResponse.json({ ok: true })
  }
}
