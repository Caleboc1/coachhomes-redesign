import Image from "next/image";
import { getBlogPosts } from "@/lib/data";
import { SiteFooter } from "@/components/site";
import { SiteHeader } from "@/components/SiteHeader";

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.32em] text-[var(--accent-brand)]">Blog</p>
        <h1 className="mt-4 max-w-4xl font-display text-6xl text-[var(--ink)]">Property insight shaped for sellers, landlords and serious buyers.</h1>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {posts.map((post:any, index:number) => (
            <article key={post.slug} className="overflow-hidden rounded-[2rem] border border-[var(--line)] bg-white" data-aos="fade-up" data-aos-delay={index * 80}>
              <div className="relative h-72">
                <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.26em] text-[var(--accent-brand)]">{post.category}</p>
                <h2 className="mt-3 font-display text-3xl text-[var(--ink)]">{post.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
