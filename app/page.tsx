import Link from "next/link";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { getServerSession } from "next-auth/next";
import { options } from "./options";
export default async function Home() {
  const session = await getServerSession(options);
  //   session:  {
  //   user: {
  //     name,
  //     email,
  //     image,
  //   }
  // }
  const loginButtons = (
    <>
      <div className="mb-1">
        <LoginButton provider={"github"} />
      </div>
      <div>
        <LoginButton provider={"google"} />
      </div>
    </>
  );

  const sessionInterface = (
    <>
      <div>{session?.user?.name}</div>
      <LogoutButton />
    </>
  );
  return (
    <main>
      <div>This is the home page.</div>
      <Link href="/products">Products</Link>
      <Link href="/cart">Cart</Link>
      {session ? sessionInterface : loginButtons}
    </main>
  );
}
