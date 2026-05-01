import { SiteFooter } from "@/components/site";
import { SiteHeader } from "@/components/SiteHeader";

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <section className="relative py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/contactbg.jpg')" }}>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-(--ink)/50"></div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-8 lg:grid-cols-2">
            <div data-aos="fade-right">
              <p className="text-xs uppercase tracking-[0.32em] text-(--accent-brand)">Contact</p>
              <h1 className="mt-4 font-poppins text-6xl text-white">Talk to Coach Homes about sales, letting or property acquisition.</h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/80">
                The redesigned contact page keeps things direct: fast response expectations, clear communication points and a better lead path into inspections or consultation.
              </p>
            </div>
            <div className="rounded-4xl border border-white/20 bg-[rgba(255,240,230,0.18)] p-8 backdrop-blur-sm" data-aos="fade-left">
              <div className="space-y-6 text-sm text-white/80">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-(--accent-brand)">Email</p>
                  <p className="mt-2 text-lg text-white">coachhomesltd@gmail.com</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-(--accent-brand)">Phone</p>
                  <p className="mt-2 text-lg text-white">+234 803 000 0000</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-(--accent-brand)">Office</p>
                  <p className="mt-2 text-lg text-white">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}