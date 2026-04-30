import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { fallbackProperties } from "@/lib/data";

async function getAdminData() {
  try {
    const properties = await prisma.property.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        title: true,
        listingType: true,
        status: true,
        location: true,
        listedByName: true,
        listedByEmail: true,
        createdAt: true,
      },
    });

    const locations = Object.entries(
      properties.reduce<Record<string, number>>((accumulator, property) => {
        accumulator[property.location] = (accumulator[property.location] ?? 0) + 1;
        return accumulator;
      }, {}),
    )
      .sort((a, b) => b[1] - a[1])
      .slice(0, 4);

    const summary = {
      total: properties.length,
      forSale: properties.filter((property) => property.listingType === "SALE").length,
      forRent: properties.filter((property) => property.listingType === "RENT").length,
      publishers: new Set(properties.map((property) => property.listedByEmail)).size,
    };

    return { properties, summary, locations };
  } catch {
    const properties = fallbackProperties.map((property) => ({
      id: property.id,
      title: property.title,
      listingType: property.listingType,
      status: property.status,
      location: property.location,
      listedByName: property.listedByName,
      listedByEmail: property.listedByEmail,
      createdAt: new Date(property.publishedAt),
    }));

    const locations = Object.entries(
      properties.reduce<Record<string, number>>((accumulator, property) => {
        accumulator[property.location] = (accumulator[property.location] ?? 0) + 1;
        return accumulator;
      }, {}),
    )
      .sort((a, b) => b[1] - a[1])
      .slice(0, 4);

    return {
      properties,
      summary: {
        total: properties.length,
        forSale: properties.filter((property) => property.listingType === "SALE").length,
        forRent: properties.filter((property) => property.listingType === "RENT").length,
        publishers: new Set(properties.map((property) => property.listedByEmail)).size,
      },
      locations,
    };
  }
}

export default async function AdminDashboardPage() {
  const session = await getServerSession(authOptions);

  if (session?.user?.role !== "ADMIN") {
    redirect("/admin");
  }

  const { properties, summary, locations } = await getAdminData();

  return (
    <main className="min-h-screen bg-[#eef1f5] px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--accent-brand)]">Admin Analytics</p>
            <h1 className="mt-3 font-display text-5xl text-[var(--ink)]">Listings, publishers and operating visibility.</h1>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {[
            ["Total listings", summary.total],
            ["For sale", summary.forSale],
            ["For rent", summary.forRent],
            ["Unique publishers", summary.publishers],
          ].map(([label, value]) => (
            <div key={String(label)} className="rounded-[1.75rem] bg-white p-6 shadow-sm">
              <p className="text-sm text-[var(--muted)]">{label}</p>
              <p className="mt-3 font-display text-4xl text-[var(--ink)]">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.75rem] bg-white p-6 shadow-sm">
            <p className="text-sm text-[var(--muted)]">Top listing locations</p>
            <div className="mt-5 space-y-4">
              {locations.map(([location, count]) => (
                <div key={location} className="flex items-center justify-between border-b border-[var(--line)] pb-4 last:border-b-0 last:pb-0">
                  <span className="text-[var(--ink)]">{location}</span>
                  <span className="text-sm text-[var(--muted)]">{count} listing(s)</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.75rem] bg-white p-6 shadow-sm">
            <p className="text-sm text-[var(--muted)]">Admin note</p>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--muted)]">
              The owner can create admin credentials directly in the database. Public users never see a signup flow, while submitted listings still surface immediately on the public properties page with publisher identity attached.
            </p>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] bg-white shadow-sm">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-[var(--panel)] text-[var(--muted)]">
              <tr>
                <th className="px-6 py-4 font-medium">Listing</th>
                <th className="px-6 py-4 font-medium">Type</th>
                <th className="px-6 py-4 font-medium">Location</th>
                <th className="px-6 py-4 font-medium">Published by</th>
                <th className="px-6 py-4 font-medium">Email</th>
              </tr>
            </thead>
            <tbody>
              {properties.map((property) => (
                <tr key={property.id} className="border-t border-[var(--line)]">
                  <td className="px-6 py-4 text-[var(--ink)]">{property.title}</td>
                  <td className="px-6 py-4 text-[var(--muted)]">{property.listingType}</td>
                  <td className="px-6 py-4 text-[var(--muted)]">{property.location}</td>
                  <td className="px-6 py-4 text-[var(--ink)]">{property.listedByName}</td>
                  <td className="px-6 py-4 text-[var(--muted)]">{property.listedByEmail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
