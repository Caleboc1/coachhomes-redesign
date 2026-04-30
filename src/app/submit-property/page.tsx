import { SubmitPropertyForm } from "@/components/submit-property-form";
import { SiteFooter } from "@/components/site";
import { SiteHeader } from "@/components/SiteHeader";

export default function SubmitPropertyPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.32em] text-(--accent-brand)">Submit Property</p>
          <h1 className="mt-4 font-display text-6xl text-(--ink)">Owners and agents can publish directly into the listings catalog.</h1>
          <p className="mt-5 text-base leading-8 text-(--muted)">
            Once submitted, the property is created in the database and appears on the public properties page with the lister details visible.
          </p>
        </div>
        <SubmitPropertyForm />
      </section>
      <SiteFooter />
    </main>
  );
}
