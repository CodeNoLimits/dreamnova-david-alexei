import { NextRequest, NextResponse } from "next/server";
import { getStripe, PRICING_PLANS } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const { plan, locale } = await req.json();

    if (!plan || !(plan in PRICING_PLANS)) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    }

    const planData = PRICING_PLANS[plan as keyof typeof PRICING_PLANS];
    const origin = req.headers.get("origin") || "http://localhost:3000";

    const session = await getStripe().checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: planData.currency,
            product_data: { name: `DreamNova Consult — ${planData.name}` },
            unit_amount: planData.price,
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/${locale}?success=true`,
      cancel_url: `${origin}/${locale}?canceled=true`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
