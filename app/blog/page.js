import PageHeader from "@/components/PageHeader";
import { posts } from "@/lib/data";

export const metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <>
      <PageHeader title="Blog" text="Practical articles on web, software and AI for business owners." />
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {posts.map((p) => (
              <article key={p.slug} className="card">
                <p className="muted">{p.date} · {p.read} read</p>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
