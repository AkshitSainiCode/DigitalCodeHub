import Link from "next/link";

export default function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <h2>Ready to start your project?</h2>
        <p>Tell us what you need. You will get a clear plan and a fixed quote within 24 hours — free, with no obligation.</p>
        <div className="btn-row center">
          <Link href="/quote" className="btn btn-accent">Get a free quote</Link>
          <a href="tel:+919876543210" className="btn btn-outline">Call +91 98765 43210</a>
        </div>
      </div>
    </section>
  );
}
