import { ShieldCheck } from "lucide-react";
import { services } from "@/lib/data";

export function ServicesSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      {/* Grid lines overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ 
          backgroundImage: "linear-gradient(rgba(0,0,0,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.04) 1px,transparent 1px)", 
          backgroundSize: "48px 48px" 
        }} 
      />
      
      {/* White background */}
      <div className="absolute inset-0 bg-white -z-10" />
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative z-10">
        {services.map((service, index) => (
          <div 
            key={service.title} 
            className="rounded-[1.75rem] border border-[var(--line)] bg-white p-7" 
            data-aos="fade-up" 
            data-aos-delay={index * 80}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--sand-soft)] text-[var(--ink)]">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h2 className="font-poppins text-2xl text-[var(--ink)]">{service.title}</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{service.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}