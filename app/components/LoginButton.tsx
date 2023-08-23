"use client";
import { signIn } from "next-auth/react";

export default function LoginButton({ provider }: { provider: string }) {
  return (
    <button
      onClick={() => signIn(provider)}
      className="px-6 py-3 bg-slate-700 text-white rounded-lg"
    >
      Sign into {provider[0].toUpperCase() + provider.slice(1)}
    </button>
  );
}
