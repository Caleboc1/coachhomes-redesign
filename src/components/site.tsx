import Link from "next/link";
import Image from "next/image";
import { MoveRight, ShieldCheck } from "lucide-react";
import { getBlogPosts, getProperties, services, companyStats } from "@/lib/data";
import { CountUp } from "./CountUp";
import { Typewriter } from "./TypeWriter";
import { PropertyCard } from "./PropertyCard";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/properties", label: "Properties" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/submit-property", label: "Submit Property" },
];

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
  const showcaseVideos = [
    {
      title: "Exquisite Homes for Short-Let",
      description: "Premium Experience in Lekki Phase 1. Visit Properties for More.",
      src: "https://coachhomesltd.com/wp-content/uploads/2025/10/3-bedroom-lekki-phase1-shortlet-2.mp4",
    },
    {
      title: "Aurora Homes, A Blend of Elegance",
      description: "Carefully curated selection of residences to suit every lifestyle",
      src: "https://coachhomesltd.com/wp-content/uploads/2025/10/Premium-Properties-in-Lagos-Nigeria.mp4",
    },
    {
      title: "Short-Let Apartment",
      description: "Experience royalty in Lekki Phase 1. Visit Properties for More.",
      src: "https://coachhomesltd.com/wp-content/uploads/2025/10/Shortlet.mp4",
    },
    {
      title: "Luxury Redefined",
      description: "Magnificent short-let apartments for those with special sense of style",
      src: "https://coachhomesltd.com/wp-content/uploads/2025/10/VID-20250902-WA0020.mp4",
    },
  ];

  const statsWithValues = companyStats.map((stat) => ({
    ...stat,
    numericValue: parseInt(stat.value.replace(/[^0-9]/g, "")),
    suffix: stat.value.replace(/[0-9]/g, ""),
  }));

  const typewriterTexts = [
    "Specializing in Real Estate Properties, including Short-let Apartments, Property & Facility Management.",
    "A sharper digital home for premium listings, lettings and investor-grade property discovery.",
  ];

  return (
    <>
      <section className="relative overflow-hidden border-b border-black/10 bg-black text-white">
        <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline>
          <source src="/Premium-Homes-in-Banana-Island.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.62)_42%,rgba(0,0,0,0.5)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(230,184,156,0.38),transparent_24%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 pt-35 md:pt-40 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative z-10">
            <p className="mb-5 text-xs uppercase tracking-[0.36em] text-[var(--sand)]" data-aos="fade-up">
              Refined Real Estate, Better Presented
            </p>
            <h1 className="max-w-3xl font-poppins text-5xl leading-none md:text-7xl min-h-[200px] md:min-h-[240px]" data-aos="fade-up" data-aos-delay="80">
              <Typewriter texts={typewriterTexts} typingSpeed={40} deletingSpeed={25} pauseTime={1500} delay={300} />
            </h1>
            <div className="mt-8 flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="200">
              <Link href="/properties" className="rounded-full bg-[var(--accent-brand)] px-5 py-3 text-sm font-medium text-[var(--ink)] transition hover:bg-[var(--accent-brand-strong)]">
                View Properties
              </Link>
              <Link href="/submit-property" className="rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white hover:bg-white/10">
                List a Property
              </Link>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3" data-aos="fade-up" data-aos-delay="260">
              {statsWithValues.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/10 bg-black/30 p-5 backdrop-blur-sm">
                  <p className="font-poppins text-3xl">
                    <CountUp end={stat.numericValue} suffix={stat.suffix} duration={2000} />
                  </p>
                  <p className="mt-2 text-sm text-white/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-5 lg:pt-12">
            {featured.slice(0, 2).map((property: any, index: number) => (
              <div
                key={property.slug}
                className={index === 0 ? "overflow-hidden rounded-4xl border border-white/10 bg-[rgba(255,240,230,0.18)] p-4 shadow-2xl backdrop-blur-sm" : "overflow-hidden rounded-4xl border border-white/10 bg-[rgba(255,255,255,0.08)] p-4 shadow-2xl backdrop-blur-sm"}
                data-aos="zoom-in"
                data-aos-delay={index * 90}
              >
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

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex flex-col gap-4 md:max-w-3xl">
          <p className="text-xs uppercase tracking-[0.32em] text-(--accent-brand)">Property Showcase</p>
          <h2 className="font-poppins text-4xl text-(--ink)">Walk through every space before you ever book a viewing.</h2>
          <p className="text-sm leading-7 text-(--muted)">
            Each video gives you an unfiltered look at the layout, finishes and feel of the property. so when you do reach out, you already know it's the right fit.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {showcaseVideos.map((video, index) => (
            <article
              key={video.src}
              className="overflow-hidden rounded-[2rem] border border-(--line) bg-white shadow-[0_24px_60px_rgba(5,5,5,0.08)]"
              data-aos="fade-up"
              data-aos-delay={index * 90}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <video className="h-full w-full object-cover" controls preload="metadata" playsInline>
                  <source src={video.src} type="video/mp4" />
                </video>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-poppins text-2xl text-(--ink)">{video.title}</h3>
                <p className="mt-3 text-sm leading-7 text-(--muted)">{video.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>


      <section className="relative py-20 text-white bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/homebg.jpg')" }}>
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
