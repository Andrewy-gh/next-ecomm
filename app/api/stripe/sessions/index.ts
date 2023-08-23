import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-08-16',
});

const handler = async (req: any, res: any) => {
  if (req.method === 'POST') {
    try {
      const { lineItems } = req.body;
      console.log(lineItems);
      // [
      //   { price: 'price_1NFpHnAXoPjmpSgtE7laBCTE', quantity: 1 },
      //   { price: 'price_1NFpDGAXoPjmpSgt6YOdLxAu', quantity: 1 },
      // ];

      if (!lineItems.length) {
        return res.status(400).json({ error: 'Bad Request!' });
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
        success_url: `${req.headers.origin}/checkout/success?sessionId={CHECKOUT_SESSION_ID}`,
        cancel_url: req.headers.origin,
      });

      return res.status(201).json({ session });

      // If using HTML forms you can redirect here
      // return res.redirect(303, session.url)
    } catch (e) {
      return res.status(e.statusCode || 500).json({ message: e.message });
    }
  }

  res.setHeader('Allow', 'POST');
  res.status(405).end('Method Not Allowed');
};

export default handler;
