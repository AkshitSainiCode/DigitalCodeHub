import { faqs } from "@/lib/data";

export default function FAQ() {
  return (
    <section className="section alt">
      <div className="container narrow">
        <h2>Questions clients ask us</h2>
        <div className="faq">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
