import Link from "next/link";
import Image from "next/image";
import { Bath, BedDouble, MapPin, MessageCircleMore, MoveRight, Ruler, ShieldCheck } from "lucide-react";
import { getBlogPosts, getProperties, services, companyStats } from "@/lib/data";
import { buildWhatsAppUrl, formatPrice } from "@/lib/utils";
const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/properties", label: "Properties" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/submit-property", label: "Submit Property" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(10,15,26,0.72)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-lg font-semibold">
            CH
          </div>
          <div>
            <p className="font-display text-lg tracking-wide">Coach Homes</p>
            <p className="text-xs uppercase tracking-[0.32em] text-white/60">Luxury Property Advisory</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-white/75 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/properties" className="hidden rounded-full border border-white/20 px-4 py-2 text-sm text-white transition hover:bg-white/10 md:inline-flex">
          Browse Listings
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--panel)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl text-[var(--ink)]">Coach Homes</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--muted)]">
            Real estate presentation, listing strategy and advisory built to make premium properties feel premium online.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">Pages</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--ink)]">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">Contact</p>
          <div className="mt-4 space-y-3 text-sm text-[var(--ink)]">
            <p>coachhomesltd@gmail.com</p>
            <p>+234 803 000 0000</p>
            <p>Lagos, Nigeria</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export async function HomeSections() {
  const [properties, posts] = await Promise.all([getProperties(), getBlogPosts()]);
  const featured = properties.slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(205,128,62,0.32),_transparent_28%),linear-gradient(135deg,#08111d_10%,#0f2236_45%,#122b41_100%)] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.03)_30%,transparent_60%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
          <div className="relative z-10">
            <p className="mb-5 text-xs uppercase tracking-[0.36em] text-[var(--sand)]" data-aos="fade-up">Refined Real Estate, Better Presented</p>
            <h1 className="max-w-3xl font-display text-5xl leading-none md:text-7xl" data-aos="fade-up" data-aos-delay="80">
              A sharper digital home for premium listings, lettings and investor-grade property discovery.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70" data-aos="fade-up" data-aos-delay="140">
              This redesign reframes Coach Homes as a polished advisory brand with stronger typography, cleaner property storytelling and a direct WhatsApp enquiry flow on every listing.
            </p>
            <div className="mt-8 flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="200">
              <Link href="/properties" className="rounded-full bg-[var(--accent-brand)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--accent-brand-strong)]">View Properties</Link>
              <Link href="/submit-property" className="rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white hover:bg-white/10">List a Property</Link>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3" data-aos="fade-up" data-aos-delay="260">
              {companyStats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="font-display text-3xl">{stat.value}</p>
                  <p className="mt-2 text-sm text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-5 lg:pt-12">
            {featured.slice(0, 2).map((property, index) => (
              <div key={property.slug} className={index === 0 ? "overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl" : "overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl"} data-aos="zoom-in" data-aos-delay={index * 90}>
                <div className="relative h-64 overflow-hidden rounded-[1.5rem]">
                  <Image src={property.coverImage} alt={property.title} fill className="object-cover" />
                </div>
                <p className="mt-4 text-xs uppercase tracking-[0.28em] text-[var(--sand)]">{property.listingType}</p>
                <p className="mt-2 font-display text-2xl">{property.title}</p>
                <p className="mt-2 text-sm text-white/70">{property.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={service.title} className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--panel)] p-7" data-aos="fade-up" data-aos-delay={index * 80}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--sand-soft)] text-[var(--accent-brand)]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h2 className="font-display text-2xl text-[var(--ink)]">{service.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{service.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--panel)] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--accent-brand)]">Featured Listings</p>
              <h2 className="mt-3 font-display text-4xl text-[var(--ink)]">Properties with stronger presence and faster enquiry flow</h2>
            </div>
            <Link href="/properties" className="hidden items-center gap-2 text-sm font-medium text-[var(--ink)] md:inline-flex">
              See all properties <MoveRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {featured.map((property, index) => (
              <PropertyCard key={property.slug} property={property} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div data-aos="fade-right">
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--accent-brand)]">Why This Direction</p>
          <h2 className="mt-3 font-display text-4xl text-[var(--ink)]">A bolder identity without losing the trust signals a property brand needs.</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2" data-aos="fade-left">
          {[
            "Every property card shows the listing author and a direct WhatsApp enquiry CTA.",
            "The property submission page creates live listings so the public catalog stays current.",
            "The hidden admin area reveals listing volume, publishers and top-performing locations.",
            "AOS animations are used on entrances, cards and section reveals without overloading the experience.",
          ].map((item) => (
            <div key={item} className="rounded-[1.5rem] border border-[var(--line)] p-6 text-sm leading-7 text-[var(--muted)]">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--ink)] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--sand)]">Insights</p>
              <h2 className="mt-3 font-display text-4xl">Market context and practical guidance</h2>
            </div>
            <Link href="/blog" className="text-sm text-white/70">Visit the blog</Link>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {posts.map((post, index) => (
              <article key={post.slug} className="rounded-[2rem] border border-white/10 bg-white/5 p-5" data-aos="fade-up" data-aos-delay={index * 90}>
                <div className="relative h-60 overflow-hidden rounded-[1.5rem]">
                  <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
                </div>
                <p className="mt-5 text-xs uppercase tracking-[0.26em] text-[var(--sand)]">{post.category}</p>
                <h3 className="mt-3 font-display text-3xl">{post.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function PropertyCard({ property, index = 0 }: { property: any; index?: number }) {
  const whatsappUrl = buildWhatsAppUrl(property.whatsappNumber, property.title, property.location);

  return (
    <article className="overflow-hidden rounded-[2rem] border border-[var(--line)] bg-white shadow-[0_12px_60px_rgba(9,15,25,0.06)]" data-aos="fade-up" data-aos-delay={index * 90}>
      <Link href={`/properties/${property.slug}`} className="relative block h-72">
        <Image src={property.coverImage} alt={property.title} fill className="object-cover" />
      </Link>
      <div className="p-6">
        <div className="flex items-center justify-between gap-4">
          <span className="rounded-full bg-[var(--sand-soft)] px-3 py-1 text-xs font-semibold tracking-[0.2em] text-[var(--accent-brand)]">
            {property.listingType}
          </span>
          <p className="text-lg font-semibold text-[var(--ink)]">{formatPrice(property.price, property.listingType)}</p>
        </div>
        <h3 className="mt-4 font-display text-3xl text-[var(--ink)]">{property.title}</h3>
        <div className="mt-3 flex items-center gap-2 text-sm text-[var(--muted)]">
          <MapPin className="h-4 w-4" />
          <span>{property.location}</span>
        </div>
        <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{property.excerpt}</p>
        <div className="mt-5 grid grid-cols-3 gap-3 text-sm text-[var(--ink)]">
          <div className="flex items-center gap-2"><BedDouble className="h-4 w-4" />{property.bedrooms || "-"} Beds</div>
          <div className="flex items-center gap-2"><Bath className="h-4 w-4" />{property.bathrooms || "-"} Baths</div>
          <div className="flex items-center gap-2"><Ruler className="h-4 w-4" />{property.areaSqm} sqm</div>
        </div>
        <div className="mt-5 rounded-2xl bg-[var(--panel)] p-4">
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Listed by</p>
          <p className="mt-2 text-sm font-semibold text-[var(--ink)]">{property.listedByName}</p>
          <p className="text-sm text-[var(--muted)]">{property.listedByEmail}</p>
        </div>
        <div className="mt-5 flex gap-3">
          <Link href={`/properties/${property.slug}`} className="rounded-full border border-[var(--line)] px-4 py-3 text-sm font-medium text-[var(--ink)]">
            View details
          </Link>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-brand)] px-4 py-3 text-sm font-medium text-white">
            <MessageCircleMore className="h-4 w-4" />
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
