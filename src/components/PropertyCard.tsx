import Link from "next/link";
import Image from "next/image";
import { Bath, BedDouble, MapPin, MessageCircleMore, Ruler } from "lucide-react";
import { buildWhatsAppUrl, formatPrice } from "@/lib/utils";

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