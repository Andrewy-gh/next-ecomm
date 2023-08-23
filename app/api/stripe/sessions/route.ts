import { headers } from "next/headers";

import Stripe from "stripe";

import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-08-16",
});

export async function POST(req: NextRequest) {
  console.log("post request");
  const headersList = headers();
  console.log("HEADERS: ", headersList);
  // console.log("origin", headerList.origin.value);
  const headersInstance = headers();
  const value = headersInstance.get("origin");
  console.log("ORIGIN", value);
  const { lineItems } = await req.json();

  // [
  //   { price: 'price_randomidstring', quantity: 1 },
  //   { price: 'price_price_randomidstring', quantity: 1 },
  // ];

  if (!lineItems.length) {
    return NextResponse.json({ error: "Bad Request!" });
    // return res.status(400).json({ error: "Bad Request!" });
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
  console.log("adjustableQuantityLineItems", adjustableQuantityLineItems);
  const session = await stripe.checkout.sessions.create({
    line_items: adjustableQuantityLineItems,
    mode: "payment",
    success_url: `${value}/checkout/success?sessionId={CHECKOUT_SESSION_ID}`,
    cancel_url: value,
  });
  console.log("session sucessfully created: ", session);
  return NextResponse.json({ session });
  // return res.status(201).json({ session });
}

// url: URL {
//   href: 'https://127.0.0.1:3000/api/stripe/sessions',
//   origin: 'https://127.0.0.1:3000',
//   protocol: 'https:',
//   username: '',
//   password: '',
//   host: '127.0.0.1:3000',
//   hostname: '127.0.0.1',
//   port: '3000',
//   pathname: '/api/stripe/sessions',
//   search: '',
//   searchParams: URLSearchParams {},
//   hash: ''
// }

// const handler = async (req: any, res: any) => {
//   if (req.method === "POST") {
//     try {
//       const { lineItems } = req.body;
//       console.log("lineItems: ", lineItems);
//       // [
//       //   { price: 'price_randomidstring', quantity: 1 },
//       //   { price: 'price_price_randomidstring', quantity: 1 },
//       // ];

//       if (!lineItems.length) {
//         return res.status(400).json({ error: "Bad Request!" });
//       }
//       const adjustableQuantityLineItems = lineItems.map(
//         (lineItem: { price: string; quantity: number }) => ({
//           ...lineItem,
//           adjustable_quantity: {
//             enabled: true,
//             minimum: 1,
//             maximum: 100,
//           },
//         })
//       );

//       const session = await stripe.checkout.sessions.create({
//         line_items: adjustableQuantityLineItems,
//         mode: "payment",
//         success_url: `${req.headers.origin}/checkout/success?sessionId={CHECKOUT_SESSION_ID}`,
//         cancel_url: req.headers.origin,
//       });

//       return res.status(201).json({ session });

//       // If using HTML forms you can redirect here
//       // return res.redirect(303, session.url)
//     } catch (e) {
//       return res.status(e.statusCode || 500).json({ message: e.message });
//     }
//   }

//   res.setHeader("Allow", "POST");
//   res.status(405).end("Method Not Allowed");
// };

// export default handler;
