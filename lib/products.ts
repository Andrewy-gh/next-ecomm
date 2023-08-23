import Stripe from 'stripe';

export async function getAllPrices() {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2023-08-16',
    });
    const prices = await stripe.prices.list({
      active: true,
      // limit: 10,
      expand: ['data.product'],
    });
    return prices;
  } catch (error) {
    console.error('Error fetching prices: ', error);
    return null;
  }
}

export async function getPriceById(id: string) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2023-08-16',
    });
    const price = await stripe.prices.retrieve(id, {
      expand: ['product'],
    });
    return price;
  } catch (error) {
    console.error('Error fetching price: ', error);
  }
}
