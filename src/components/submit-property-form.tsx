"use client";

import { useState } from "react";
import toast from "react-hot-toast";

const propertyTypes = ["APARTMENT", "DUPLEX", "TERRACE", "LAND", "OFFICE", "VILLA"];
const listingTypes = ["SALE", "RENT", "SHORTLET"];

const initialForm = {
  title: "",
  excerpt: "",
  description: "",
  propertyType: "APARTMENT",
  listingType: "SALE",
  price: "",
  location: "",
  address: "",
  bedrooms: "3",
  bathrooms: "3",
  areaSqm: "180",
  coverImage: "",
  gallery: "",
  features: "",
  listedByName: "",
  listedByEmail: "",
  listedByPhone: "",
  whatsappNumber: "",
};

export function SubmitPropertyForm() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [createdSlug, setCreatedSlug] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setCreatedSlug("");

    const response = await fetch("/api/property-submissions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await response.json();
    setLoading(false);

    if (!response.ok) {
      toast.error(data.error ?? "Unable to submit property");
      return;
    }

    toast.success("Property submitted and published");
    setCreatedSlug(data.slug);
    setForm(initialForm);
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[2rem] border border-[var(--line)] bg-white p-8 shadow-sm">
      <div className="grid gap-5 md:grid-cols-2">
        {[
          ["title", "Property title"],
          ["location", "Location"],
          ["address", "Address"],
          ["price", "Price (NGN)"],
          ["bedrooms", "Bedrooms"],
          ["bathrooms", "Bathrooms"],
          ["areaSqm", "Area in sqm"],
          ["coverImage", "Cover image URL"],
          ["listedByName", "Lister name"],
          ["listedByEmail", "Lister email"],
          ["listedByPhone", "Lister phone"],
          ["whatsappNumber", "WhatsApp number"],
        ].map(([key, label]) => (
          <label key={key} className="flex flex-col gap-2 text-sm text-[var(--muted)]">
            {label}
            <input
              value={(form as Record<string, string>)[key]}
              onChange={(event) => setForm((current) => ({ ...current, [key]: event.target.value }))}
              className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-[var(--ink)] outline-none"
              required={["title", "location", "address", "price", "coverImage", "listedByName", "listedByEmail", "whatsappNumber"].includes(key)}
            />
          </label>
        ))}
        <label className="flex flex-col gap-2 text-sm text-[var(--muted)]">
          Property type
          <select value={form.propertyType} onChange={(event) => setForm((current) => ({ ...current, propertyType: event.target.value }))} className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-[var(--ink)] outline-none">
            {propertyTypes.map((value) => <option key={value}>{value}</option>)}
          </select>
        </label>
        <label className="flex flex-col gap-2 text-sm text-[var(--muted)]">
          Listing type
          <select value={form.listingType} onChange={(event) => setForm((current) => ({ ...current, listingType: event.target.value }))} className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-[var(--ink)] outline-none">
            {listingTypes.map((value) => <option key={value}>{value}</option>)}
          </select>
        </label>
      </div>

      <label className="mt-5 flex flex-col gap-2 text-sm text-[var(--muted)]">
        Short excerpt
        <textarea value={form.excerpt} onChange={(event) => setForm((current) => ({ ...current, excerpt: event.target.value }))} rows={3} className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-[var(--ink)] outline-none" required />
      </label>
      <label className="mt-5 flex flex-col gap-2 text-sm text-[var(--muted)]">
        Full description
        <textarea value={form.description} onChange={(event) => setForm((current) => ({ ...current, description: event.target.value }))} rows={5} className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-[var(--ink)] outline-none" required />
      </label>
      <label className="mt-5 flex flex-col gap-2 text-sm text-[var(--muted)]">
        Gallery URLs
        <textarea value={form.gallery} onChange={(event) => setForm((current) => ({ ...current, gallery: event.target.value }))} rows={3} placeholder="One URL per line" className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-[var(--ink)] outline-none" />
      </label>
      <label className="mt-5 flex flex-col gap-2 text-sm text-[var(--muted)]">
        Features
        <textarea value={form.features} onChange={(event) => setForm((current) => ({ ...current, features: event.target.value }))} rows={3} placeholder="One feature per line" className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-[var(--ink)] outline-none" />
      </label>

      <button type="submit" disabled={loading} className="mt-6 rounded-full bg-[var(--accent-brand)] px-6 py-3 text-sm font-semibold text-white disabled:opacity-50">
        {loading ? "Publishing..." : "Submit Property"}
      </button>

      {createdSlug ? (
        <p className="mt-4 text-sm text-[var(--ink)]">
          Published successfully. View it at <a className="font-semibold text-[var(--accent-brand)]" href={`/properties/${createdSlug}`}>/properties/{createdSlug}</a>.
        </p>
      ) : null}
    </form>
  );
}
