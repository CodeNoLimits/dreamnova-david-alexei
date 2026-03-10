import Stripe from "stripe";

export function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2026-02-25.clover",
  });
}

export const PRICING_PLANS = {
  starter: {
    name: "Starter",
    price: 200000, // ₪2,000 in agorot
    currency: "ils",
  },
  business: {
    name: "Business",
    price: 500000, // ₪5,000 in agorot
    currency: "ils",
  },
  premium: {
    name: "Premium",
    price: 1000000, // ₪10,000 in agorot
    currency: "ils",
  },
} as const;
