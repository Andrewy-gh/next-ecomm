import Link from "next/link";
import Image from "next/image";
import { getAllPrices } from "../../lib/products";
import Card from "./Card";
import { Price } from "../../types/types";

async function getPrices() {
  const prices = await getAllPrices();
  return prices;
}

export default async function Products() {
  const prices = await getPrices();
  const { data } = prices;
  return (
    <main>
      <Link href="/cart">Cart</Link>
      {data.map((price: Price) => (
        <Card key={price.id} price={price} />
      ))}
    </main>
  );
}
