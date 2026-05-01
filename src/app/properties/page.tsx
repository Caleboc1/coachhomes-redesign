import { getProperties } from "@/lib/data";
import { PropertyCard, SiteFooter } from "@/components/site";
import { SiteHeader } from "@/components/SiteHeader";

export default async function PropertiesPage() {
  const properties = await getProperties();

  return (
    <main>
      <SiteHeader />
      <section className="relative py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/herobg2.jpg')" }}>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-(--ink)/50"></div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.32em] text-(--accent-brand)" data-aos="fade-up">
            Properties
          </p>
          <h1 className="mt-4 max-w-4xl font-poppins text-6xl text-white" data-aos="fade-up" data-aos-delay="80">
            Discover listings with direct enquiry built into every card.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/80" data-aos="fade-up" data-aos-delay="120">
            Newly submitted properties appear here with publisher visibility, so the catalog stays active and transparent.
          </p>
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {properties.map((property: any, index: number) => (
              <PropertyCard key={property.slug} property={property} index={index} />
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}