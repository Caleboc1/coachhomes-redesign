"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/properties", label: "Properties" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/submit-property", label: "Submit Property" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Consistent styling for all pages - transparent with glass effect
  const textColorClass = "text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)]";
  const hoverColorClass = "hover:text-[var(--accent-brand)]";
  const mobileMenuBgClass = "bg-black/95 backdrop-blur-xl";
  const mobileTextColorClass = "text-white hover:text-[var(--accent-brand)]";

  return (
    <header className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white text-lg font-semibold transition-all">
            CH
          </div>
          <div>
            <p className="font-display text-lg tracking-wide text-white">
              Coach Homes
            </p>
            <p className="text-xs uppercase tracking-[0.32em] text-white/80">
              Luxury Property Advisory
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-sm lg:flex text-white">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className={`${textColorClass} ${hoverColorClass} transition-colors ${
                pathname === item.href ? "text-white font-semibold" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <Link 
          href="/properties" 
          className="hidden rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm px-4 py-2 text-sm transition-all hover:bg-white/20 md:inline-flex"
        >
          Browse Listings
        </Link>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg transition-colors hover:bg-white/10 text-white"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className={`px-6 pt-2 pb-6 space-y-2 ${mobileMenuBgClass} border-t border-white/10`}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${mobileTextColorClass} ${
                  pathname === item.href ? "bg-white/10 text-[var(--accent-brand)]" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="/properties"
                className="block w-full text-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm px-4 py-3 text-sm font-medium transition-all hover:bg-white/20"
                onClick={() => setIsMenuOpen(false)}
              >
                Browse Listings
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}