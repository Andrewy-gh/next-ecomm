import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-08-16',
});

export async function GET(req: NextRequest, { params }) {
  const { sessionId } = params;
  if (!sessionId.startsWith('cs_')) {
    throw Error('Incorrect Checkout Session ID.');
  }
  const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['payment_intent', 'line_items.data.price.product'],
  });
  return NextResponse.json({ checkoutSession }, { status: 500 });
}
