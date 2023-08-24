"use client";
import Link from "next/link";
import { useState } from "react";
// import Search from './Search';
import { useCart } from "@/contexts/CartContext";
import {
  ShoppingBagIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

import { Disclosure, Menu, Transition } from "@headlessui/react";

const navigation = [
  { id: 1, name: "SHOP", href: "/products", current: false },
  { id: 2, name: "OUR STORY", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header({ setCartSliderIsOpen }) {
  const [open, setOpen] = useState(false);
  const { items } = useCart();

  return (
    <>
      <Disclosure as="nav">
        {({ open }) => (
          /* Use the `open` state to conditionally change the direction of an icon. */
          // Container
          <div
            className={classNames(
              open && "fixed top-0 z-10",
              "mx-auto w-screen border border-light-primary-button dark:border-dark-primary-button bg-light-background dark:bg-dark-background"
            )}
          >
            {/* Navbar container */}
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button container responsive */}
              {/* <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"> */}
              <div className="flex items-center sm:block md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="px-2">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-6 w-6 fill-light-text dark:fill-dark-text"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-6 w-6 fill-light-text dark:fill-dark-text"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>

              {/* conditional home */}
              <div className="sm:block md:hidden font-head text-step-2 text-light-text dark:text-dark-text">
                <Link href="/">Home</Link>
              </div>

              {/* Desktop links */}
              <div className="hidden md:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : " font-head text-light-text dark:text-dark-text   hover:text-light-primary-button dark:hover:text-dark-text dark:hover:underline dark:hover:underline-offset-8",
                        "rounded-md px-3 py-2 text-step-0 font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                {/* Search Icon */}
                {/* <MagnifyingGlassIcon
                  onClick={() => setOpen((open) => !open)}
                  className="mt-1 h-6 w-6 cursor-pointer text-light-text dark:text-dark-text group-hover:text-sky-800"
                /> */}
                {/* Cart Icon */}
                <div className="flow-root">
                  <div
                    className="group p-2 flex items-center cursor-pointer"
                    // onClick={() => setCartSliderIsOpen((open) => !open)}
                  >
                    <ShoppingBagIcon
                      className="flex-shrink-0 h-6 w-6 
                      text-black
                     fill-light-primary-button 
                      group-hover:fill-white group-hover:text-light-primary-button
                      dark:text-white
                      dark:fill-dark-primary-button
                      dark:group-hover:fill-dark-accent
                      dark:group-hover:text-white"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-light-text dark:text-dark-text group-hover:text-sky-800">
                      ( {items.reduce((acc, curr) => (acc += curr.quantity), 0)}
                      )
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile menu */}
            <Transition
              className="overflow-hidden"
              enter="transition-all linear duration-[900ms]"
              enterFrom="transform max-h-0"
              enterTo="absolute z-10 transform w-screen max-h-screen bg-slate-600"
              leave="transition-all linear duration-[900ms]"
              leaveFrom="absolute z-10 transform  w-screen max-h-screen bg-slate-600"
              leaveTo="absolute z-10 transform w-screen max-h-0 bg-slate-600"
            >
              <Disclosure.Panel>
                <div className="space-y-1 h-screen px-2 pb-3 pt-2 bg-light-background dark:bg-dark-background">
                  {navigation.map((link) => (
                    <div
                      key={link.id}
                      className="text-3xl p-4 border-b border-light-primary-button  dark:border-dark-primary-button hover:bg-light-primary-button dark:hover:bg-dark-primary-button hover:text-dark-text"
                      // TODO: fix onClose
                      onClick={() => setOpen(false)}
                    >
                      <Link href={link.href}>{link.name}</Link>
                    </div>
                  ))}
                </div>
              </Disclosure.Panel>
            </Transition>
          </div>
        )}
      </Disclosure>
      {/* <Search open={open} setOpen={setOpen} /> */}
    </>
  );
}
