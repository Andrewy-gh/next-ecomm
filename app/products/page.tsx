import Link from 'next/link';
import Image from 'next/image';
import { getAllPrices } from '../../lib/products';
import Card from './Card';
async function getPrices() {
  const prices = await getAllPrices();
  return prices;
}
interface Product {
  images: string[];
  description: string;
  name: string;
  [key: string]: any;
}

interface Price {
  id: string;
  product: Product;
  unit_amount: number;
  [key: string]: any;
}

export default async function Products() {
  const prices = await getPrices();
  const { data } = prices;
  return (
    <main>
      {data.map((price: Price) => (
        <Card key={price.id} price={price} />
      ))}
    </main>
  );
}
