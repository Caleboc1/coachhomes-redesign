"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function AdminLoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const result = await signIn("credentials", { email, password, redirect: false });
    setLoading(false);

    if (result?.error) {
      toast.error("Invalid admin credentials");
      return;
    }

    router.push("/admin/dashboard");
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
      <div className="space-y-5">
        <label className="flex flex-col gap-2 text-sm text-white/70">
          Admin email
          <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none" required />
        </label>
        <label className="flex flex-col gap-2 text-sm text-white/70">
          Password
          <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none" required />
        </label>
      </div>
      <button type="submit" disabled={loading} className="mt-6 rounded-full bg-[var(--accent-brand)] px-6 py-3 text-sm font-semibold text-white disabled:opacity-50">
        {loading ? "Signing in..." : "Sign in to Admin"}
      </button>
    </form>
  );
}
