import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number, listingType: string) {
  const amount = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(price);

  if (listingType === "RENT") return `${amount} / year`;
  if (listingType === "SHORTLET") return `${amount} / night`;
  return amount;
}

export function buildWhatsAppUrl(phone: string, title: string, location: string) {
  const normalized = phone.replace(/\D/g, "");
  const message = `Hello Coach Homes, I would like to make an enquiry about "${title}" in ${location}. Please share availability, inspection details and next steps.`;
  return `https://wa.me/${normalized}?text=${encodeURIComponent(message)}`;
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
