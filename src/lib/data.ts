import { prisma } from "@/lib/prisma";

export const companyStats = [
  { label: "Properties marketed", value: "180+" },
  { label: "Qualified buyers & renters", value: "1.2k+" },
  { label: "Inspection requests monthly", value: "85+" },
];

export const services = [
  {
    title: "Property Sales",
    body: "Residential and investment property marketing with sharper presentation, inspection handling and buyer qualification.",
  },
  {
    title: "Property Letting",
    body: "Rental positioning, tenant sourcing and polished listing campaigns that shorten vacancy cycles.",
  },
  {
    title: "Property Management",
    body: "Ongoing oversight for landlords who want structured reporting, maintenance coordination and occupancy visibility.",
  },
  {
    title: "Advisory & Acquisition",
    body: "Location research, market guidance and acquisition support for clients buying with intent rather than guesswork.",
  },
];

export const fallbackProperties = [
  {
    id: "fallback-1",
    title: "Signature Four-Bedroom Duplex in Lekki Phase 1",
    slug: "signature-four-bedroom-duplex-lekki-phase-1",
    excerpt: "A clean-lined family duplex with a cinema lounge, private terrace and concierge-ready gatehouse.",
    description: "Designed for buyers who want a refined city address, this duplex pairs wide glass openings with warm stone finishes, a generous living area, ensuite bedrooms and a fitted kitchen that opens into a service courtyard.",
    propertyType: "DUPLEX",
    listingType: "SALE",
    status: "PUBLISHED",
    price: 385000000,
    location: "Lekki Phase 1, Lagos",
    address: "Fola Osibo Close, Lekki Phase 1, Lagos",
    bedrooms: 4,
    bathrooms: 5,
    areaSqm: 420,
    coverImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
    ],
    features: ["Cinema lounge", "BQ", "Fitted kitchen", "Smart lighting", "Two balconies"],
    featured: true,
    listedByName: "Coach Homes Team",
    listedByEmail: "listings@coachhomesltd.com",
    listedByPhone: "+2348030000000",
    whatsappNumber: "2348030000000",
    publishedAt: new Date().toISOString(),
  },
  {
    id: "fallback-2",
    title: "Waterfront Three-Bedroom Apartment with Marina Views",
    slug: "waterfront-three-bedroom-apartment-marina-views",
    excerpt: "High-floor apartment with sunrise views, premium finishes and a residents-only wellness suite.",
    description: "This apartment brings together serene water views, practical open-plan living and secure estate amenities for professionals or young families seeking a quieter high-end address.",
    propertyType: "APARTMENT",
    listingType: "RENT",
    status: "PUBLISHED",
    price: 28000000,
    location: "Banana Island, Lagos",
    address: "Ocean Crest Residences, Banana Island, Lagos",
    bedrooms: 3,
    bathrooms: 3,
    areaSqm: 245,
    coverImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    ],
    features: ["Waterfront view", "Gym", "Pool", "24/7 power", "Elevator access"],
    featured: true,
    listedByName: "Coach Homes Team",
    listedByEmail: "rentals@coachhomesltd.com",
    listedByPhone: "+2348030000000",
    whatsappNumber: "2348030000000",
    publishedAt: new Date().toISOString(),
  },
  {
    id: "fallback-3",
    title: "Prime Mixed-Use Development Plot",
    slug: "prime-mixed-use-development-plot",
    excerpt: "Dry, title-secure land parcel positioned for retail, office or residential development.",
    description: "An investment-grade land opportunity in a growth corridor with straightforward access, credible title documentation and a surrounding neighborhood seeing active commercial expansion.",
    propertyType: "LAND",
    listingType: "SALE",
    status: "PUBLISHED",
    price: 145000000,
    location: "Abijo GRA, Lagos",
    address: "Coral District, Abijo GRA, Lagos",
    bedrooms: 0,
    bathrooms: 0,
    areaSqm: 960,
    coverImage: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80"
    ],
    features: ["Gazette title", "Corner piece", "Motorable roads", "Flood-free zone"],
    featured: false,
    listedByName: "Coach Homes Investment Desk",
    listedByEmail: "invest@coachhomesltd.com",
    listedByPhone: "+2348030000000",
    whatsappNumber: "2348030000000",
    publishedAt: new Date().toISOString(),
  },
];

export const fallbackPosts = [
  {
    id: "post-1",
    title: "How to Price a Lagos Home for a Faster Sale",
    slug: "how-to-price-a-lagos-home-for-a-faster-sale",
    excerpt: "Why overpricing stalls momentum and how to position a listing for qualified buyers.",
    body: "A strong listing launch depends on timing, documentation and a price that respects the current market.",
    category: "Selling",
    coverImage: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
    publishedAt: new Date().toISOString(),
  },
  {
    id: "post-2",
    title: "What Premium Renters Now Expect from Modern Apartments",
    slug: "what-premium-renters-now-expect-from-modern-apartments",
    excerpt: "Power, parking, acoustics and convenience now shape premium rental decisions.",
    body: "High-income renters evaluate daily comfort as much as aesthetics.",
    category: "Renting",
    coverImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    publishedAt: new Date().toISOString(),
  },
];

export async function getProperties() {
  try {
    return await prisma.property.findMany({
      orderBy: [{ featured: "desc" }, { createdAt: "desc" }],
    });
  } catch {
    return fallbackProperties;
  }
}

export async function getPropertyBySlug(slug: string) {
  try {
    return await prisma.property.findUnique({ where: { slug } });
  } catch {
    return fallbackProperties.find((property) => property.slug === slug) ?? null;
  }
}

export async function getBlogPosts() {
  try {
    return await prisma.blogPost.findMany({ orderBy: { publishedAt: "desc" } });
  } catch {
    return fallbackPosts;
  }
}
