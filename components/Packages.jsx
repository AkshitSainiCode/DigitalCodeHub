import Link from "next/link";
import { packages } from "@/lib/data";

export default function Packages() {
  return (
    <section className="section">
      <div className="container">
        <h2>Simple packages, clear pricing</h2>
        <p className="section-sub">Starting prices. Final quote depends on your requirements.</p>
        <div className="grid grid-3 pricing">
          {packages.map((p) => (
            <div key={p.name} className={`card price-card ${p.popular ? "popular" : ""}`}>
              {p.popular && <span className="badge">Most popular</span>}
              <h3>{p.name}</h3>
              <p className="muted">{p.note}</p>
              <div className="price">{p.price}</div>
              <ul className="check-list">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
              <Link href="/quote" className={`btn ${p.popular ? "btn-accent" : "btn-ghost"} btn-block`}>Get this package</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
