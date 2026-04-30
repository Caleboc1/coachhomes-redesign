import Link from "next/link";
import { MoveRight } from "lucide-react";
import { PropertyCard } from "./site";

export function FeaturedPropertiesSection({ featuredProperties }: { featuredProperties: any[] }) {
  return (
    <section className="bg-[var(--panel)] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--ink)]">Featured Listings</p>
            <h2 className="mt-3 font-display text-4xl text-[var(--ink)]">
              Properties with stronger presence and faster enquiry flow
            </h2>
          </div>
          <Link href="/properties" className="hidden items-center gap-2 text-sm font-medium text-[var(--ink)] md:inline-flex">
            See all properties <MoveRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {featuredProperties.map((property, index) => (
            <PropertyCard key={property.slug} property={property} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}