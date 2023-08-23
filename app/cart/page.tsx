"use client";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../../contexts/CartContext";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { checkout } from "../../lib/checkout";

export default function Cart() {
  const { items, addItem, removeOneItem, removeItem } = useCart();
  console.log("items: ", items);
  const subTotal = items.reduce(
    (acc, curr) => (acc += curr.price.unit_amount * curr.quantity),
    0
  );

  const handleRemove = (id, quantity) =>
    quantity > 1 ? removeOneItem(id) : removeItem(id);

  const handleCheckout = (event) => {
    event.preventDefault();
    console.log("items in cart page: ", items);
    checkout(items);
  };
  return (
    <div>
      <div>This is the cart page</div>
      <Link href="/products">Products</Link>
      <Link href="/">Home</Link>
      <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
        <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
          <div className="flex items-start justify-between">
            <div className="text-lg font-medium text-gray-900">
              {/* <Dialog.Title className="text-lg font-medium text-gray-900"> */}
              Shopping cart{" "}
            </div>
            {/* </Dialog.Title> */}
            <div className="ml-3 flex h-7 items-center">
              <button
                type="button"
                className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                onClick={() => setCartSliderIsOpen(false)}
              >
                <span className="sr-only">Close panel</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="mt-8">
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {!items.length ? (
                  <div className="text-gray-900">Cart is empty</div>
                ) : (
                  items.map((item) => {
                    const { price, quantity } = item;
                    return (
                      <li key={price.id} className="flex py-6">
                        <div
                          className="relative h-24 w-24 shrink overflow-hidden rounded-md border
                                border-gray-200"
                        >
                          <Image
                            src={price.product.images[0]}
                            alt={price.product.description}
                            fill={true}
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                <a href={price.product.href}>
                                  {" "}
                                  {price.product.name}{" "}
                                </a>
                              </h3>
                              <p className="ml-4">
                                {(price.unit_amount / 100).toLocaleString(
                                  "en-US",
                                  {
                                    style: "currency",
                                    currency: "USD",
                                  }
                                )}
                              </p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">
                              {price.product.description}
                            </p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <p className="text-gray-500">Qty {quantity}</p>
                            <p
                              className="text-medium text-blue-400 hover:text-blue-500 cursor-pointer"
                              onClick={() => addItem(price)}
                            >
                              +
                            </p>
                            <p
                              className="text-medium text-red-400 hover:text-red-500 cursor-pointer"
                              onClick={() => handleRemove(price.id)}
                            >
                              -
                            </p>

                            <div className="flex">
                              <button
                                type="button"
                                onClick={() => removeItem(price.id)}
                                className="font-medium text-rose-400 hover:text-rose-300 cursor-pointer"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>
              {(subTotal / 100).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <a
              href="#"
              onClick={handleCheckout}
              className="flex items-center justify-center rounded-md border border-transparent bg-emerald-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-emerald-700"
            >
              Checkout
            </a>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or{" "}
              <button
                type="button"
                className="font-medium text-emerald-600 hover:text-emerald-500"
                // onClick={() => setCartSliderIsOpen(false)}
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
