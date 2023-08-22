import { NextResponse } from "next/server";
import { stripe } from "../../../lib/stripe";

export async function POST() {
  const priceId = "price_1NbujNKdkp8kDckKaWsSdZBi";
  const successUrl = `${process.env.NEXT_URL}/success`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  const checkoutSession = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: "payment",
  });

  return NextResponse.json(
    {
      checkoutSession: checkoutSession.url,
    },
    {
      status: 201,
    }
  );
}
