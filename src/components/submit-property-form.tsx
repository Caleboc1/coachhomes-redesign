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
    <form onSubmit={onSubmit} className="rounded-4xl border border-white/20 bg-[rgba(255,240,230,0.18)] p-8 shadow-2xl backdrop-blur-sm">
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
          <label key={key} className="flex flex-col gap-2 text-sm text-white/80">
            {label}
            <input
              value={(form as Record<string, string>)[key]}
              onChange={(event) => setForm((current) => ({ ...current, [key]: event.target.value }))}
              className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none focus:border-white/40 focus:bg-white/20 transition-all"
              required={["title", "location", "address", "price", "coverImage", "listedByName", "listedByEmail", "whatsappNumber"].includes(key)}
              placeholder={label}
            />
          </label>
        ))}
        <label className="flex flex-col gap-2 text-sm text-white/80">
          Property type
          <select 
            value={form.propertyType} 
            onChange={(event) => setForm((current) => ({ ...current, propertyType: event.target.value }))} 
            className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none focus:border-white/40 focus:bg-white/20 transition-all"
          >
            {propertyTypes.map((value) => <option key={value} value={value} className="bg-black">{value}</option>)}
          </select>
        </label>
        <label className="flex flex-col gap-2 text-sm text-white/80">
          Listing type
          <select 
            value={form.listingType} 
            onChange={(event) => setForm((current) => ({ ...current, listingType: event.target.value }))} 
            className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none focus:border-white/40 focus:bg-white/20 transition-all"
          >
            {listingTypes.map((value) => <option key={value} value={value} className="bg-black">{value}</option>)}
          </select>
        </label>
      </div>

      <label className="mt-5 flex flex-col gap-2 text-sm text-white/80">
        Short excerpt
        <textarea 
          value={form.excerpt} 
          onChange={(event) => setForm((current) => ({ ...current, excerpt: event.target.value }))} 
          rows={3} 
          className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none focus:border-white/40 focus:bg-white/20 transition-all" 
          required 
          placeholder="Brief summary of the property"
        />
      </label>
      <label className="mt-5 flex flex-col gap-2 text-sm text-white/80">
        Full description
        <textarea 
          value={form.description} 
          onChange={(event) => setForm((current) => ({ ...current, description: event.target.value }))} 
          rows={5} 
          className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none focus:border-white/40 focus:bg-white/20 transition-all" 
          required 
          placeholder="Detailed description of the property"
        />
      </label>
      <label className="mt-5 flex flex-col gap-2 text-sm text-white/80">
        Gallery URLs
        <textarea 
          value={form.gallery} 
          onChange={(event) => setForm((current) => ({ ...current, gallery: event.target.value }))} 
          rows={3} 
          placeholder="One URL per line" 
          className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none focus:border-white/40 focus:bg-white/20 transition-all" 
        />
      </label>
      <label className="mt-5 flex flex-col gap-2 text-sm text-white/80">
        Features
        <textarea 
          value={form.features} 
          onChange={(event) => setForm((current) => ({ ...current, features: event.target.value }))} 
          rows={3} 
          placeholder="One feature per line" 
          className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none focus:border-white/40 focus:bg-white/20 transition-all" 
        />
      </label>

      <button 
        type="submit" 
        disabled={loading} 
        className="mt-6 rounded-full bg-(--accent-brand) px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-(--accent-brand-strong) disabled:opacity-50"
      >
        {loading ? "Publishing..." : "Submit Property"}
      </button>

      {createdSlug ? (
        <p className="mt-4 text-sm text-white/80">
          Published successfully. View it at <a className="font-semibold text-(--accent-brand) hover:text-(--accent-brand-strong) transition-colors" href={`/properties/${createdSlug}`}>/properties/{createdSlug}</a>.
        </p>
      ) : null}
    </form>
  );
}