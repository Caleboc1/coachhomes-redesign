import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono, Cormorant_Garamond } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "@/app/globals.css";
import { Providers } from "@/components/Providers";
import AOSProvider from "@/components/AOSProvider";


const displayCormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const body = Space_Mono({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "700"],
});



export const metadata: Metadata = {
  title: {
    default: "Coach Homes",
    template: "%s | Coach Homes",
  },
  description: "Premium real estate redesign for Coach Homes with property enquiry, submission and a hidden admin analytics workflow.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} text-[var(--ink)] antialiased`}>
        <Providers>
          <AOSProvider />
          {children}
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
