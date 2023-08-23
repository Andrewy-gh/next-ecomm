import Link from "next/link";
export default function Home() {
  return (
    <main>
      <div>This is the home page.</div>
      <Link href="/products">Products</Link>
      <Link href="/cart">Cart</Link>
    </main>
  );
}
