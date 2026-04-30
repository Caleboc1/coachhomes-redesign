import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/utils";

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.title || !body.description || !body.location || !body.listedByName || !body.listedByEmail || !body.whatsappNumber) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const slug = `${slugify(body.title)}-${Math.random().toString(36).slice(2, 7)}`;

  try {
    const property = await prisma.property.create({
      data: {
        title: body.title,
        slug,
        excerpt: body.excerpt,
        description: body.description,
        propertyType: body.propertyType,
        listingType: body.listingType,
        price: Number(body.price),
        location: body.location,
        address: body.address,
        bedrooms: Number(body.bedrooms || 0),
        bathrooms: Number(body.bathrooms || 0),
        areaSqm: Number(body.areaSqm || 0),
        coverImage: body.coverImage,
        gallery: String(body.gallery || "")
          .split("\n")
          .map((value) => value.trim())
          .filter(Boolean),
        features: String(body.features || "")
          .split("\n")
          .map((value) => value.trim())
          .filter(Boolean),
        listedByName: body.listedByName,
        listedByEmail: body.listedByEmail,
        listedByPhone: body.listedByPhone,
        whatsappNumber: body.whatsappNumber,
      },
    });

    return NextResponse.json({ slug: property.slug });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unable to create property",
      },
      { status: 500 },
    );
  }
}
