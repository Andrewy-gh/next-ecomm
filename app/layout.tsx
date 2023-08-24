import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Archivo_Black, Archivo } from "next/font/google";

import CartProvider from "../contexts/CartContext";
import Header from "./components/header/index";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-archivo-black",
});

export const metadata: Metadata = {
  title: "Next.js E-Commerce Website",
  description: "E-Commerce page with Stripe payments",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${archivoBlack.variable}`}>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="grow">{children}</div>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
