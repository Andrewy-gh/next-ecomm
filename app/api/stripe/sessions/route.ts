import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';

import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-08-16',
  typescript: true,
});

export async function POST(req: NextRequest) {
  const headersInstance = headers();
  const origin = headersInstance.get('origin');
  const { lineItems } = await req.json();

  // [
  //   { price: 'price_randomidstring', quantity: 1 },
  //   { price: 'price_price_randomidstring', quantity: 1 },
  // ];

  if (!lineItems.length) {
    return NextResponse.json({ error: 'Bad Request!' }, { status: 400 });
  }
  const adjustableQuantityLineItems = lineItems.map(
    (lineItem: { price: string; quantity: number }) => ({
      ...lineItem,
      adjustable_quantity: {
        enabled: true,
        minimum: 1,
        maximum: 100,
      },
    })
  );

  const session = await stripe.checkout.sessions.create({
    line_items: adjustableQuantityLineItems,
    mode: 'payment',
    success_url: `${origin}/checkout/success?sessionId={CHECKOUT_SESSION_ID}`,
    cancel_url: origin,
  });

  return NextResponse.json({ session }, { status: 201 });
}
