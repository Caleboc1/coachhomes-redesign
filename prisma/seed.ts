import { PrismaClient, PropertyType, ListingType, ListingStatus } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash("coachhomes-admin-2026", 12);

  const admin = await prisma.user.upsert({
    where: { email: "admin@coachhomesltd.com" },
    update: {},
    create: {
      email: "admin@coachhomesltd.com",
      password,
      name: "Coach Homes Admin",
      role: "ADMIN",
    },
  });

  const properties = [
    {
      title: "Signature Four-Bedroom Duplex in Lekki Phase 1",
      slug: "signature-four-bedroom-duplex-lekki-phase-1",
      excerpt: "A clean-lined family duplex with a cinema lounge, private terrace and concierge-ready gatehouse.",
      description: "Designed for buyers who want a refined city address, this duplex pairs wide glass openings with warm stone finishes, a generous living area, ensuite bedrooms and a fitted kitchen that opens into a service courtyard.",
      propertyType: PropertyType.DUPLEX,
      listingType: ListingType.SALE,
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
      listedById: admin.id,
      listedByName: "Coach Homes Team",
      listedByEmail: "listings@coachhomesltd.com",
      listedByPhone: "+2348030000000",
      whatsappNumber: "2348030000000",
      status: ListingStatus.PUBLISHED,
    },
    {
      title: "Waterfront Three-Bedroom Apartment with Marina Views",
      slug: "waterfront-three-bedroom-apartment-marina-views",
      excerpt: "High-floor apartment with sunrise views, premium finishes and a residents-only wellness suite.",
      description: "This apartment brings together serene water views, practical open-plan living and secure estate amenities for professionals or young families seeking a quieter high-end address.",
      propertyType: PropertyType.APARTMENT,
      listingType: ListingType.RENT,
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
      listedById: admin.id,
      listedByName: "Coach Homes Team",
      listedByEmail: "rentals@coachhomesltd.com",
      listedByPhone: "+2348030000000",
      whatsappNumber: "2348030000000",
      status: ListingStatus.PUBLISHED,
    },
    {
      title: "Prime Mixed-Use Development Plot",
      slug: "prime-mixed-use-development-plot",
      excerpt: "Dry, title-secure land parcel positioned for retail, office or residential development.",
      description: "An investment-grade land opportunity in a growth corridor with straightforward access, credible title documentation and a surrounding neighborhood seeing active commercial expansion.",
      propertyType: PropertyType.LAND,
      listingType: ListingType.SALE,
      price: 145000000,
      location: "Abijo GRA, Lagos",
      address: "Coral District, Abijo GRA, Lagos",
      bedrooms: 0,
      bathrooms: 0,
      areaSqm: 960,
      coverImage: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80"
      ],
      features: ["Gazette title", "Corner piece", "Motorable roads", "Flood-free zone"],
      featured: false,
      listedById: admin.id,
      listedByName: "Coach Homes Investment Desk",
      listedByEmail: "invest@coachhomesltd.com",
      listedByPhone: "+2348030000000",
      whatsappNumber: "2348030000000",
      status: ListingStatus.PUBLISHED,
    },
  ];

  for (const property of properties) {
    await prisma.property.upsert({
      where: { slug: property.slug },
      update: property,
      create: property,
    });
  }

  const posts = [
    {
      title: "How to Price a Lagos Home for a Faster Sale",
      slug: "how-to-price-a-lagos-home-for-a-faster-sale",
      excerpt: "Why overpricing stalls momentum and how to position a listing for qualified buyers.",
      body: "A strong listing launch depends on timing, documentation and a price that respects the current market. Buyers move fastest when the property narrative, visuals and asking price align.",
      coverImage: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
      category: "Selling",
      publishedAt: new Date(),
    },
    {
      title: "What Premium Renters Now Expect from Modern Apartments",
      slug: "what-premium-renters-now-expect-from-modern-apartments",
      excerpt: "Power, parking, acoustics and convenience now shape premium rental decisions.",
      body: "High-income renters evaluate daily comfort as much as aesthetics. Reliable utilities, strong management and privacy now matter as much as marble finishes.",
      coverImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      category: "Renting",
      publishedAt: new Date(),
    },
  ];

  for (const post of posts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: post,
      create: post,
    });
  }

  console.log("✅ Seed completed successfully");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });