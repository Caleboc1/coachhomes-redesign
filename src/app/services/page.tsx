import { services } from "@/lib/data";
import { SiteFooter } from "@/components/site";
import { SiteHeader } from "@/components/SiteHeader";

export default function ServicesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="relative py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/herobg1.jpg')" }}>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-(--ink)/50"></div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.32em] text-(--accent-brand)" data-aos="fade-up">
            Services
          </p>
          <h1 className="mt-4 max-w-4xl font-poppins text-6xl text-white" data-aos="fade-up" data-aos-delay="80">
            Property services built around clarity, presentation and conversion.
          </h1>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <article 
                key={service.title} 
                className="rounded-4xl border border-white/20 bg-[rgba(255,240,230,0.18)] p-8 backdrop-blur-sm" 
                data-aos="fade-up" 
                data-aos-delay={index * 90}
              >
                <h2 className="font-poppins text-3xl text-white">{service.title}</h2>
                <p className="mt-4 text-sm leading-7 text-white/80">{service.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}