import { technologies } from "@/lib/data";

export default function Technologies() {
  return (
    <section className="section">
      <div className="container">
        <h2>Technologies we use</h2>
        <p className="section-sub">Modern, proven tools chosen for the job.</p>
        <div className="tech-groups">
          {technologies.map((g) => (
            <div key={g.group} className="tech-group">
              <h3>{g.group}</h3>
              <div className="chips">{g.items.map((t) => <span key={t} className="chip">{t}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
