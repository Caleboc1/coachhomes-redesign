import { notFound } from "next/navigation";
import Image from "next/image";
import { Bath, BedDouble, MapPin, MessageCircleMore, Ruler } from "lucide-react";
import { getPropertyBySlug } from "@/lib/data";
import { buildWhatsAppUrl, formatPrice } from "@/lib/utils";
import { SiteFooter } from "@/components/site";
import { SiteHeader } from "@/components/SiteHeader";

export default async function PropertyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);

  if (!property) notFound();

  const whatsappUrl = buildWhatsAppUrl(property.whatsappNumber, property.title, property.location);
  const gallery = Array.isArray(property.gallery) ? property.gallery : [];
  const features = Array.isArray(property.features) ? property.features : [];

  return (
    <main>
      <SiteHeader />
      <section className="relative py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/herobg2.jpg')" }}>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-(--ink)/50"></div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="relative h-[26rem] overflow-hidden rounded-4xl border border-white/20 shadow-2xl">
                <Image src={property.coverImage} alt={property.title} fill className="object-cover" />
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {gallery.map((image: string) => (
                  <div key={image} className="relative h-56 overflow-hidden rounded-3xl border border-white/20 shadow-lg">
                    <Image src={image} alt={property.title} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-(--accent-brand)">{property.listingType} listing</p>
              <h1 className="mt-4 font-poppins text-5xl text-white">{property.title}</h1>
              <div className="mt-4 flex items-center gap-2 text-sm text-white/80">
                <MapPin className="h-4 w-4" />
                <span>{property.address}</span>
              </div>
              <p className="mt-5 text-3xl font-semibold text-white">{formatPrice(property.price, property.listingType)}</p>
              <div className="mt-8 grid grid-cols-3 gap-4 rounded-4xl border border-white/20 bg-[rgba(255,240,230,0.18)] p-6 text-sm text-white backdrop-blur-sm">
                <div className="flex items-center gap-2"><BedDouble className="h-4 w-4" />{property.bedrooms || "-"} Beds</div>
                <div className="flex items-center gap-2"><Bath className="h-4 w-4" />{property.bathrooms || "-"} Baths</div>
                <div className="flex items-center gap-2"><Ruler className="h-4 w-4" />{property.areaSqm} sqm</div>
              </div>
              <p className="mt-8 text-base leading-8 text-white/80">{property.description}</p>
              {/* <div className="mt-8 rounded-4xl bg-[rgba(255,240,230,0.18)] p-6 backdrop-blur-sm border border-white/20">
                <p className="text-xs uppercase tracking-[0.26em] text-white/70">Listed by</p>
                <p className="mt-3 text-lg font-semibold text-white">{property.listedByName}</p>
                <p className="text-sm text-white/70">{property.listedByEmail}</p>
                {property.listedByPhone ? <p className="text-sm text-white/70">{property.listedByPhone}</p> : null}
              </div> */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-(--accent-brand) px-5 py-3 text-sm font-medium text-white hover:bg-(--accent-brand-strong) transition-all">
                  <MessageCircleMore className="h-4 w-4" />
                  Enquire on WhatsApp
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {features.map((feature: string) => (
                  <span key={feature} className="rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-2 text-sm text-white">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}