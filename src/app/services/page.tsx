import { services } from "@/lib/data";
import { SiteFooter, SiteHeader } from "@/components/site";

export default function ServicesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.32em] text-[var(--accent-brand)]">Services</p>
        <h1 className="mt-4 max-w-4xl font-display text-6xl text-[var(--ink)]">Property services built around clarity, presentation and conversion.</h1>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <article key={service.title} className="rounded-[2rem] border border-[var(--line)] bg-white p-8" data-aos="fade-up" data-aos-delay={index * 90}>
              <h2 className="font-display text-3xl text-[var(--ink)]">{service.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{service.body}</p>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
