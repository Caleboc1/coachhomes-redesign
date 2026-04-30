import { getProperties } from "@/lib/data";
import { PropertyCard, SiteFooter, SiteHeader } from "@/components/site";

export default async function PropertiesPage() {
  const properties = await getProperties();

  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.32em] text-[var(--accent-brand)]">Properties</p>
        <h1 className="mt-4 max-w-4xl font-display text-6xl text-[var(--ink)]">Discover listings with direct enquiry built into every card.</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
          Newly submitted properties appear here with publisher visibility, so the catalog stays active and transparent.
        </p>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {properties.map((property, index) => (
            <PropertyCard key={property.slug} property={property} index={index} />
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
