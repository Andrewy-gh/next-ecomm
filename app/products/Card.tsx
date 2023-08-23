"use client";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/contexts/CartContext";

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

export default function Card({ price }: { price: Price }) {
  const { product, unit_amount } = price;
  const { addItem } = useCart();

  const addItemToCart = (price) => {
    console.log("price: ", price);
    addItem(price);
  };

  return (
    <div className="drop-shadow-md">
      <div className="sm:my-4 md:my-8 group relative w-full h-[20vh] lg:h-[30vh] xl:h-[40vh] overflow-hidden  bg-gray-100">
        <Link href={`/products/${price.id}`}>
          <Image
            src={product.images[0]}
            alt={product.description}
            className="h-full w-full object-contain object-center group-hover:opacity-75"
            fill={true}
          />
        </Link>
        <div className="absolute bottom-4 left-1/4 flex items-end justify-center pb-8 opacity-0 transition-opacity duration-300 md:group-hover:opacity-100"></div>
      </div>
      <h3 className="mt-3 font-body text-step-0 text-light-text dark:text-dark-text font-medium">
        {product.name}
      </h3>
      <p className="mt-2 font-body text-step--1  text-light-text dark:text-dark-text font-medium">
        {(unit_amount / 100).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>
      <button onClick={() => addItemToCart(price)}>Add to cart</button>
    </div>
  );
}
