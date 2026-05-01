import Link from "next/link";
import Image from "next/image";
import { Bath, BedDouble, MapPin, MessageCircleMore, MoveRight, Ruler, ShieldCheck } from "lucide-react";
import { getBlogPosts, getProperties, services, companyStats } from "@/lib/data";
import { buildWhatsAppUrl, formatPrice } from "@/lib/utils";
import { CountUp } from "./CountUp";
import { Typewriter } from "./TypeWriter";
const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/properties", label: "Properties" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/submit-property", label: "Submit Property" },
];

// export function SiteHeader() {
//   return (
//     <header className="sticky top-0 z-50 border-b border-black/10 bg-[rgba(255,250,246,0.82)] backdrop-blur-xl">
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-[var(--ink)]">
//         <Link href="/" className="flex items-center gap-3">
//           <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--panel)] text-lg font-semibold">
//             CH
//           </div>
//           <div>
//             <p className="font-poppins text-lg tracking-wide">Coach Homes</p>
//             <p className="text-xs uppercase tracking-[0.32em] text-[var(--muted)]">Luxury Property Advisory</p>
//           </div>
//         </Link>
//         <nav className="hidden items-center gap-6 text-sm lg:flex">
//           {navItems.map((item) => (
//             <Link key={item.href} href={item.href} className="text-[var(--muted)] transition hover:text-[var(--ink)]">
//               {item.label}
//             </Link>
//           ))}
//         </nav>
//         <Link href="/properties" className="hidden rounded-full border border-[var(--line)] bg-[var(--ink)] px-4 py-2 text-sm text-white transition hover:bg-[var(--accent-brand-strong)] hover:text-[var(--ink)] md:inline-flex">
//           Browse Listings
//         </Link>
//       </div>
//     </header>
//   );
// }

export function SiteFooter() {
  return (
    <footer className="border-t border-(--line) bg-(--panel)">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-poppins text-2xl text-(--ink)">Coach Homes</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-(--muted)">
            Real estate presentation, listing strategy and advisory built to make premium properties feel premium online.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-(--muted)">Pages</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-(--ink)">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-(--muted)">Contact</p>
          <div className="mt-4 space-y-3 text-sm text-(--ink)">
            <p>coachhomesltd@gmail.com</p>
            <p>+2349035288969</p>
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

  // Process companyStats to extract numeric values and suffixes
  const statsWithValues = companyStats.map((stat) => ({
    ...stat,
    numericValue: parseInt(stat.value.replace(/[^0-9]/g, '')), // Extract numbers from strings like "120+" -> 120
    suffix: stat.value.replace(/[0-9]/g, '') // Extract suffix like "+" from "120+"
  }));

  const typewriterTexts = [
    "Specializing in Real Estate Properties, including Short-let Apartments, Property & Facility Management.",
    "A sharper digital home for premium listings, lettings and investor-grade property discovery."
  ];

  return (
    <>
      <section className="relative overflow-hidden border-b border-black/10 bg-black text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/Premium-Homes-in-Banana-Island.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.62)_42%,rgba(0,0,0,0.5)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(230,184,156,0.38),transparent_24%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 pt-35 md:pt-40 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative z-10">
            <p className="mb-5 text-xs uppercase tracking-[0.36em] text-[var(--sand)]" data-aos="fade-up">Refined Real Estate, Better Presented</p>
            <h1 className="max-w-3xl font-poppins text-5xl leading-none md:text-7xl min-h-[200px] md:min-h-[240px]" data-aos="fade-up" data-aos-delay="80">
              <Typewriter
                texts={typewriterTexts}
                typingSpeed={40}
                deletingSpeed={25}
                pauseTime={1500}
                delay={300}
              />
            </h1>
            <div className="mt-8 flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="200">
              <Link href="/properties" className="rounded-full bg-[var(--accent-brand)] px-5 py-3 text-sm font-medium text-[var(--ink)] transition hover:bg-[var(--accent-brand-strong)]">View Properties</Link>
              <Link href="/submit-property" className="rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white hover:bg-white/10">List a Property</Link>
            </div>
            {/* Stats with CountUp animation */}
            <div className="mt-12 grid gap-5 md:grid-cols-3" data-aos="fade-up" data-aos-delay="260">
              {statsWithValues.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/10 bg-black/30 p-5 backdrop-blur-sm">
                  <p className="font-poppins text-3xl">
                    <CountUp
                      end={stat.numericValue}
                      suffix={stat.suffix}
                      duration={2000}
                    />
                  </p>
                  <p className="mt-2 text-sm text-white/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-5 lg:pt-12">
            {featured.slice(0, 2).map((property: any, index: number) => (
              <div key={property.slug} className={index === 0 ? "overflow-hidden rounded-4xl border border-white/10 bg-[rgba(255,240,230,0.18)] p-4 shadow-2xl backdrop-blur-sm" : "overflow-hidden rounded-4xl border border-white/10 bg-[rgba(255,255,255,0.08)] p-4 shadow-2xl backdrop-blur-sm"} data-aos="zoom-in" data-aos-delay={index * 90}>
                <div className="relative h-64 overflow-hidden rounded-3xl">
                  <Image src={property.coverImage} alt={property.title} fill className="object-cover" />
                </div>
                <p className="mt-4 text-xs uppercase tracking-[0.28em] text-(--sand)">{property.listingType}</p>
                <p className="mt-2 font-poppins text-2xl">{property.title}</p>
                <p className="mt-2 text-sm text-white/80">{property.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={service.title} className="rounded-[1.75rem] border border-[var(--line)] bg-white p-7" data-aos="fade-up" data-aos-delay={index * 80}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--sand-soft)] text-[var(--ink)]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h2 className="font-poppins text-2xl text-[var(--ink)]">{service.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{service.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/herobg2.jpg')" }}>
        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-(--ink)/50"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-(--sand)">Featured Listings</p>
              <h2 className="mt-3 font-poppins text-4xl text-white">Properties with stronger presence and faster enquiry flow</h2>
            </div>
            <Link href="/properties" className="hidden items-center gap-2 text-sm font-medium text-(--ink) md:inline-flex">
              See all properties <MoveRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {featured.map((property: any, index: number) => (
              <PropertyCard key={property.slug} property={property} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div data-aos="fade-right">
          <p className="text-xs uppercase tracking-[0.32em] text-(--accent-brand)">Why This Direction</p>
          <h2 className="mt-3 font-poppins text-4xl text-(--ink)">A bolder identity without losing the trust signals a property brand needs.</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2" data-aos="fade-left">
          {[
            "Every property card shows the listing author and a direct WhatsApp enquiry CTA.",
            "The property submission page creates live listings so the public catalog stays current.",
            "The hidden admin area reveals listing volume, publishers and top-performing locations.",
            "AOS animations are used on entrances, cards and section reveals without overloading the experience.",
          ].map((item) => (
            <div key={item} className="rounded-3xl border border-(--line) bg-white p-6 text-sm leading-7 text-(--muted)">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-20 text-white bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/homebg.jpg')" }}>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-(--ink)/50"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-(--sand)">Insights</p>
              <h2 className="mt-3 font-poppins text-4xl">Market context and practical guidance</h2>
            </div>
            <Link href="/blog" className="text-sm text-(--accent-brand)">Visit the blog</Link>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {posts.map((post: any, index: number) => (
              <article key={post.slug} className="rounded-4xl border border-white/10 bg-[rgba(255,240,230,0.18)] shadow-2xl p-5 backdrop-blur-sm" data-aos="fade-up" data-aos-delay={index * 90}>
                <div className="relative h-60 overflow-hidden rounded-3xl">
                  <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
                </div>
                <p className="mt-5 text-xs uppercase tracking-[0.26em] text-(--sand)">{post.category}</p>
                <h3 className="mt-3 font-poppins text-3xl">{post.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/80">{post.excerpt}</p>
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
    <article
      className="overflow-hidden rounded-4xl border border-white/10 bg-[rgba(255,240,230,0.18)] shadow-2xl backdrop-blur-sm"
      data-aos="fade-up"
      data-aos-delay={index * 90}
    >
      <Link href={`/properties/${property.slug}`} className="relative block h-72">
        <Image src={property.coverImage} alt={property.title} fill className="object-cover" />
      </Link>
      <div className="p-6">
        <div className="flex items-center justify-between gap-4">
          <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-white backdrop-blur-sm">
            {property.listingType}
          </span>
          <p className="text-lg font-semibold text-white">{formatPrice(property.price, property.listingType)}</p>
        </div>
        <h3 className="mt-4 font-poppins text-3xl text-white">{property.title}</h3>
        <div className="mt-3 flex items-center gap-2 text-sm text-white/80">
          <MapPin className="h-4 w-4" />
          <span>{property.location}</span>
        </div>
        <p className="mt-4 text-sm leading-7 text-white/70">{property.excerpt}</p>
        <div className="mt-5 grid grid-cols-3 gap-3 text-sm text-white">
          <div className="flex items-center gap-2"><BedDouble className="h-4 w-4" />{property.bedrooms || "-"} Beds</div>
          <div className="flex items-center gap-2"><Bath className="h-4 w-4" />{property.bathrooms || "-"} Baths</div>
          <div className="flex items-center gap-2"><Ruler className="h-4 w-4" />{property.areaSqm} sqm</div>
        </div>
        {/* <div className="mt-5 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
          <p className="text-xs uppercase tracking-[0.22em] text-white/70">Listed by</p>
          <p className="mt-2 text-sm font-semibold text-white">{property.listedByName}</p>
          <p className="text-sm text-white/70">{property.listedByEmail}</p>
        </div> */}
        <div className="mt-5 flex gap-3">
          <Link
            href={`/properties/${property.slug}`}
            className="rounded-full border border-white/30 px-2 py-3 text-xs font-medium text-white backdrop-blur-sm transition hover:bg-white/10"
          >
            View details
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-2 py-3 text-xs font-medium text-[var(--ink)] transition hover:bg-white/90"
          >
            <MessageCircleMore className="h-4 w-4" />
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
