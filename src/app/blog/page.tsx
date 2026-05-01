import Image from "next/image";
import { getBlogPosts } from "@/lib/data";
import { SiteFooter } from "@/components/site";
import { SiteHeader } from "@/components/SiteHeader";

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main>
      <SiteHeader />
      <section className="relative py-18 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/homebg.jpg')" }}>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-(--ink)/50"></div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.32em] text-(--accent-brand)" data-aos="fade-up">
            Blog
          </p>
          <h1 className="mt-4 max-w-4xl font-poppins text-6xl text-white" data-aos="fade-up" data-aos-delay="80">
            Property insight shaped for sellers, landlords and serious buyers.
          </h1>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {posts.map((post: any, index: number) => (
              <article 
                key={post.slug} 
                className="overflow-hidden rounded-4xl border border-white/20 bg-[rgba(255,240,230,0.18)] backdrop-blur-sm shadow-2xl" 
                data-aos="fade-up" 
                data-aos-delay={index * 80}
              >
                <div className="relative h-72 overflow-hidden">
                  <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.26em] text-(--accent-brand)">{post.category}</p>
                  <h2 className="mt-3 font-poppins text-3xl text-white">{post.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-white/80">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}