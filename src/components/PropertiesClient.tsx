"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { PropertyCard } from "./PropertyCard";

const propertyTypes = ["APARTMENT", "DUPLEX", "TERRACE", "LAND", "OFFICE", "VILLA"];
const listingTypes = ["SALE", "RENT", "SHORTLET"];

export function PropertiesClient({ properties }: { properties: any[] }) {
  const [search, setSearch] = useState("");
  const [activeType, setActiveType] = useState<string | null>(null);
  const [activeListing, setActiveListing] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      const matchesSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.location.toLowerCase().includes(search.toLowerCase());
      const matchesType = !activeType || p.propertyType === activeType;
      const matchesListing = !activeListing || p.listingType === activeListing;
      return matchesSearch && matchesType && matchesListing;
    });
  }, [properties, search, activeType, activeListing]);

  const clearAll = () => {
    setSearch("");
    setActiveType(null);
    setActiveListing(null);
  };

  const hasActiveFilters = search || activeType || activeListing;

  return (
    <>
      {/* Search + Filter Bar */}
      <div className="mt-10" data-aos="fade-up" data-aos-delay="160">
        {/* Search input */}
        <div className="relative max-w-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or location…"
            className="w-full rounded-full border border-white/20 bg-white/10 py-3 pl-11 pr-4 text-sm text-white placeholder:text-white/40 backdrop-blur-sm outline-none focus:border-white/40 focus:bg-white/15 transition-all"
          />
          {search && (
            <button onClick={() => setSearch("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors">
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Filter toggle + chips row */}
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            onClick={() => setShowFilters((v) => !v)}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition-all ${
              showFilters
                ? "border-white/40 bg-white/20 text-white"
                : "border-white/20 bg-white/10 text-white/70 hover:bg-white/15"
            }`}
          >
            <SlidersHorizontal className="h-3.5 w-3.5" />
            Filters
          </button>

          {/* Active filter pills */}
          {activeType && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent-brand)] px-3 py-1.5 text-xs font-medium text-[var(--ink)]">
              {activeType}
              <button onClick={() => setActiveType(null)}><X className="h-3 w-3" /></button>
            </span>
          )}
          {activeListing && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent-brand)] px-3 py-1.5 text-xs font-medium text-[var(--ink)]">
              {activeListing}
              <button onClick={() => setActiveListing(null)}><X className="h-3 w-3" /></button>
            </span>
          )}
          {hasActiveFilters && (
            <button onClick={clearAll} className="text-xs text-white/50 hover:text-white underline underline-offset-2 transition-colors">
              Clear all
            </button>
          )}
        </div>

        {/* Expanded filter panel */}
        {showFilters && (
          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 space-y-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-2">Property Type</p>
              <div className="flex flex-wrap gap-2">
                {propertyTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setActiveType(activeType === type ? null : type)}
                    className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                      activeType === type
                        ? "bg-[var(--accent-brand)] text-[var(--ink)]"
                        : "border border-white/20 text-white/70 hover:bg-white/10"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-2">Listing Type</p>
              <div className="flex flex-wrap gap-2">
                {listingTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setActiveListing(activeListing === type ? null : type)}
                    className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                      activeListing === type
                        ? "bg-[var(--accent-brand)] text-[var(--ink)]"
                        : "border border-white/20 text-white/70 hover:bg-white/10"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Results count */}
      <p className="mt-6 text-xs text-white/50 tracking-wide">
        {filtered.length} {filtered.length === 1 ? "property" : "properties"} found
      </p>

      {/* Grid */}
      <div className="mt-6 grid gap-8 lg:grid-cols-3">
        {filtered.length > 0 ? (
          filtered.map((property: any, index: number) => (
            <PropertyCard key={property.slug} property={property} index={index} />
          ))
        ) : (
          <div className="col-span-3 py-20 text-center text-white/50">
            <p className="text-lg">No properties match your search.</p>
            <button onClick={clearAll} className="mt-4 text-sm text-[var(--accent-brand)] hover:underline">
              Clear filters
            </button>
          </div>
        )}
      </div>
    </>
  );
}