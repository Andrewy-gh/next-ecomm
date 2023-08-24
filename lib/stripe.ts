import Stripe from "stripe";

let stripeInstance: Stripe | undefined;

const stripe = (): Stripe => {
  if (!stripeInstance) {
    stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2023-08-16",
      typescript: true,
    });
  }
  return stripeInstance;
};

export default stripe;
