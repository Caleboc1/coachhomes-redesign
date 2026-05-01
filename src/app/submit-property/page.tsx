import { SubmitPropertyForm } from "@/components/submit-property-form";
import { SiteFooter } from "@/components/site";
import { SiteHeader } from "@/components/SiteHeader";

export default function SubmitPropertyPage() {
  return (
    <main>
      <SiteHeader />
      <section className="relative py-20 pt-35 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/HomeBanner.jpg')" }}>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-(--ink)/50"></div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.32em] text-(--accent-brand)">Submit Property</p>
            <h1 className="mt-4 font-display text-6xl text-white">Owners and agents can publish directly into the listings catalog.</h1>
            <p className="mt-5 text-base leading-8 text-white/80">
              Once submitted, the property is created in the database and appears on the public properties page with the lister details visible.
            </p>
          </div>
          <SubmitPropertyForm />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}