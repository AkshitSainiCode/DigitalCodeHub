import Link from "next/link";
import { services } from "@/lib/data";

export default function Services({ limit }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <section className="section alt">
      <div className="container">
        <h2>Our services</h2>
        <p className="section-sub">Everything you need to build, launch and grow online.</p>
        <div className="grid grid-3">
          {list.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="card service-card">
              <span className="icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.short}</p>
              <span className="more">Learn more</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
