import { NextRequest, NextResponse } from 'next/server';
import { useSearchParams } from 'next/navigation';
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-08-16',
});

export async function GET(req: NextRequest, { params }) {
  console.log('====================================');
  console.log('dynamic sessionId: ', params.sessionId);
  console.log('====================================');
  // const searchParams = useSearchParams();
  const { sessionId } = params;
  // const sessionId = searchParams.get('sessionId');
  // console.log('====================================');
  // console.log('session Id retreiving in sessionId.ts: ', sessionId);
  // console.log('====================================');
  // const { sessionId } = req.query;
  if (!sessionId.startsWith('cs_')) {
    throw Error('Incorrect Checkout Session ID.');
  }
  const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['payment_intent', 'line_items.data.price.product'],
  });
  console.log('====================================');
  console.log('dynamic checkout session: ', checkoutSession);
  console.log('====================================');
  return NextResponse.json({ checkoutSession }, { status: 500 });
}
// export async function GET(req: NextRequest) {
//   const searchParams = useSearchParams();

//   const sessionId = searchParams.get('sessionId');
//   console.log('====================================');
//   console.log('session Id retreiving in sessionId.ts: ', sessionId);
//   console.log('====================================');
//   // const { sessionId } = req.query;
//   if (!sessionId.startsWith('cs_')) {
//     throw Error('Incorrect Checkout Session ID.');
//   }
//   const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId, {
//     expand: ['payment_intent', 'line_items.data.price.product'],
//   });
//   return NextResponse.json({ checkoutSession }, { status: 500 });
// }

// const handler = async (req: any, res: any) => {
//   if (req.method === 'GET') {
//     try {
//       const { sessionId } = req.query;
//       if (!sessionId.startsWith('cs_')) {
//         throw Error('Incorrect Checkout Session ID.');
//       }
//       const checkoutSession = await stripe.checkout.sessions.retrieve(
//         sessionId,
//         {
//           expand: ['payment_intent', 'line_items.data.price.product'],
//         }
//       );
//       return res.status(200).json(checkoutSession);
//     } catch (err) {
//       const errorMessage =
//         err instanceof Error ? err.message : 'Internal server error';
//       return res.status(500).json({ statusCode: 500, message: errorMessage });
//     }
//   }

//   res.setHeader('Allow', 'POST');
//   res.status(405).end('Method Not Allowed');
//   return;
// };

// export default handler;
