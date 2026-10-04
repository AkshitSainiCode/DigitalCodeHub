import Link from "next/link";
import { projects } from "@/lib/data";

// Preview image: put your own screenshot in /public/projects/<name>.png and add
// `image: "/projects/<name>.png"` to the project in lib/data.js. Otherwise a
// live screenshot of the project URL is shown automatically.
const preview = (p) =>
  p.image || `https://s0.wp.com/mshots/v1/${encodeURIComponent(p.url)}?w=900&h=600`;

export default function Projects({ limit }) {
  const list = limit ? projects.slice(0, limit) : projects;
  return (
    <section className="section alt">
      <div className="container">
        <h2>Our live projects</h2>
        <p className="section-sub">Click any project to open the live website and try it yourself.</p>
        <div className="grid grid-3">
          {list.map((p) => (
            <article key={p.title} className="card project">
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="thumb" style={{ background: `linear-gradient(135deg, ${p.c1}, ${p.c2})` }} aria-label={`Open ${p.title} live project`}>
                <span className="thumb-title">{p.title}</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={preview(p)} alt="" loading="lazy" />
                <em>{p.result}</em>
              </a>
              <span className="tag">{p.type}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="chips">{p.stack.map((s) => <span key={s} className="chip small">{s}</span>)}</div>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">View live project ↗</a>
            </article>
          ))}
        </div>
        {limit && (
          <div className="btn-row center">
            <Link href="/projects" className="btn btn-primary">See all projects</Link>
          </div>
        )}
      </div>
    </section>
  );
}
