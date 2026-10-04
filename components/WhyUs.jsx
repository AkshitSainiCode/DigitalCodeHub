import { reasons, process } from "@/lib/data";

export function WhyUs() {
  return (
    <section className="section">
      <div className="container">
        <h2>Why choose us</h2>
        <div className="grid grid-4">
          {reasons.map((r) => (
            <div key={r.title} className="card"><h3>{r.title}</h3><p>{r.text}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="section alt">
      <div className="container">
        <h2>How we work</h2>
        <div className="grid grid-4">
          {process.map((p, i) => (
            <div key={p.title} className="card step"><span className="step-no">{i + 1}</span><h3>{p.title}</h3><p>{p.text}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}
