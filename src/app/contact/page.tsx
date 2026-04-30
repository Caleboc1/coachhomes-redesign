import { SiteFooter } from "@/components/site";
import { SiteHeader } from "@/components/SiteHeader";

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div data-aos="fade-right">
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--accent-brand)]">Contact</p>
            <h1 className="mt-4 font-display text-6xl text-[var(--ink)]">Talk to Coach Homes about sales, letting or property acquisition.</h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted)]">
              The redesigned contact page keeps things direct: fast response expectations, clear communication points and a better lead path into inspections or consultation.
            </p>
          </div>
          <div className="rounded-[2rem] border border-[var(--line)] bg-white p-8" data-aos="fade-left">
            <div className="space-y-6 text-sm text-[var(--muted)]">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--accent-brand)]">Email</p>
                <p className="mt-2 text-lg text-[var(--ink)]">coachhomesltd@gmail.com</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--accent-brand)]">Phone</p>
                <p className="mt-2 text-lg text-[var(--ink)]">+234 803 000 0000</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--accent-brand)]">Office</p>
                <p className="mt-2 text-lg text-[var(--ink)]">Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
