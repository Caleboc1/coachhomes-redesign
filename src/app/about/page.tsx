import { SiteFooter } from "@/components/site";
import { SiteHeader } from "@/components/SiteHeader";

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <section className="relative py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/herobg2.jpg')" }}>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-(--ink)/50"></div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.32em] text-(--accent-brand)" data-aos="fade-up">
            About Coach Homes
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-6xl text-white" data-aos="fade-up" data-aos-delay="80">
            A real estate brand should feel as considered as the properties it represents.
          </h1>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <p 
              className="rounded-4xl border border-white/20 bg-[rgba(255,240,230,0.18)] p-8 text-base leading-8 text-white/90 backdrop-blur-sm" 
              data-aos="fade-right"
            >
              Coach Homes is a dynamic and diversified real estate firm specializing in comprehensive property solutions. Our core services encompass the full spectrum of the real estate lifecycle, including the operation of premium Short-Let Apartments for modern accommodation needs, expert Property & Facility Management to maximize asset value and operational efficiency, and strategic Space Leasing for commercial and residential clients.
            </p>
            <p 
              className="rounded-4xl border border-white/20 bg-[rgba(255,240,230,0.18)] p-8 text-base leading-8 text-white/90 backdrop-blur-sm" 
              data-aos="fade-left"
            >
Furthermore, we leverage our industry expertise through high-quality execution of General Contracts, offering reliable project delivery across various sectors. Dedicated to professionalism and client satisfaction, Coach Homes is your trusted partner for sophisticated real estate investment, management, and development.            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}