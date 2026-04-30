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
              This redesign positions Coach Homes as a premium, trust-first property company with cleaner hierarchy, better typography and stronger listing credibility. The goal is not decoration. The goal is clearer decision-making for buyers, renters and owners.
            </p>
            <p 
              className="rounded-4xl border border-white/20 bg-[rgba(255,240,230,0.18)] p-8 text-base leading-8 text-white/90 backdrop-blur-sm" 
              data-aos="fade-left"
            >
              The site now emphasizes live inventory, publisher visibility, direct enquiries and a private reporting layer for the owner. Every page has a stronger sense of editorial intent while still remaining practical for lead capture.
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}