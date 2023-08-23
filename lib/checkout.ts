import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export const checkout = async (items) => {
  try {
    // TODO: map price: p.price.id
    // TODO: map quantity: p.quantity: p.quantity
    console.log("checking out items: ", items);
    const lineItems = items.map((item) => ({
      price: item.price.id,
      quantity: item.quantity,
    }));
    const { session } = await fetch("/api/stripe/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lineItems }),
    }).then((res) => res.json());
    // console.log("session: ", session);
    const stripe = await stripePromise;
    const { error } = await stripe?.redirectToCheckout({
      sessionId: session.id,
    });
    if (error) {
      if (error instanceof Error) throw new Error(error.message);
    } else {
      throw error;
    }
  } catch (error) {
    console.log(error);
  }
};
