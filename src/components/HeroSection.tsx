import Link from "next/link";
import Image from "next/image";
import { companyStats } from "@/lib/data";

export function HeroSection({ featuredProperties }: { featuredProperties: any[] }) {
  return (
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
      
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div className="relative z-10">
          <p className="mb-5 text-xs uppercase tracking-[0.36em] text-[var(--sand)]" data-aos="fade-up">
            Refined Real Estate, Better Presented
          </p>
          <h1 className="max-w-3xl font-poppins text-5xl leading-none md:text-7xl" data-aos="fade-up" data-aos-delay="80">
            A sharper digital home for premium listings, lettings and investor-grade property discovery.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/80" data-aos="fade-up" data-aos-delay="140">
            This redesign reframes Coach Homes as a polished advisory brand with stronger typography, cleaner property storytelling and a direct WhatsApp enquiry flow on every listing.
          </p>
          <div className="mt-8 flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="200">
            <Link href="/properties" className="rounded-full bg-[var(--accent-brand)] px-5 py-3 text-sm font-medium text-[var(--ink)] transition hover:bg-[var(--accent-brand-strong)]">
              View Properties
            </Link>
            <Link href="/submit-property" className="rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white hover:bg-white/10">
              List a Property
            </Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3" data-aos="fade-up" data-aos-delay="260">
            {companyStats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/10 bg-black/30 p-5 backdrop-blur-sm">
                <p className="font-poppins text-3xl">{stat.value}</p>
                <p className="mt-2 text-sm text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid gap-5 lg:pt-12">
          {featuredProperties.slice(0, 2).map((property, index) => (
            <div 
              key={property.slug} 
              className={index === 0 
                ? "overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(255,240,230,0.18)] p-4 shadow-2xl backdrop-blur-sm" 
                : "overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.08)] p-4 shadow-2xl backdrop-blur-sm"
              } 
              data-aos="zoom-in" 
              data-aos-delay={index * 90}
            >
              <div className="relative h-64 overflow-hidden rounded-[1.5rem]">
                <Image src={property.coverImage} alt={property.title} fill className="object-cover" />
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.28em] text-[var(--sand)]">{property.listingType}</p>
              <p className="mt-2 font-poppins text-2xl">{property.title}</p>
              <p className="mt-2 text-sm text-white/80">{property.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}