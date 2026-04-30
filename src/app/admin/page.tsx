import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { AdminLoginForm } from "@/components/admin-login-form";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (session?.user?.role === "ADMIN") {
    redirect("/admin/dashboard");
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,#08111d_10%,#0f2236_45%,#122b41_100%)] text-white">
      <div className="mx-auto grid min-h-screen max-w-6xl items-center gap-8 px-6 py-16 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--sand)]">Private Admin</p>
          <h1 className="mt-4 font-display text-6xl">Hidden reporting for Coach Homes ownership.</h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
            This route is intentionally not part of the public navigation. Credentials are created directly in the database through Prisma seed or manual inserts.
          </p>
        </div>
        <AdminLoginForm />
      </div>
    </main>
  );
}
