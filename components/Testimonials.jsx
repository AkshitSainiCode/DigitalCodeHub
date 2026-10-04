import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <h2>What clients say</h2>
        <div className="grid grid-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="card quote-card">
              <blockquote>{t.text}</blockquote>
              <figcaption><strong>{t.name}</strong><span>{t.role}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
