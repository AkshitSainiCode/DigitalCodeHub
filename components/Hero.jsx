"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { stats } from "@/lib/data";

const CODE = `const project = {
  client: "Your Business",
  goal: "More customers",
  stack: ["Next.js", "Node.js"],
};

await design(project);
await develop(project);
await launch(project);

// ✓ Live in 2–4 weeks`;

export default function Hero() {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(CODE.length);
      return;
    }
    const t = setInterval(() => setN((v) => (v >= CODE.length ? v : v + 2)), 35);
    return () => clearInterval(t);
  }, []);

  const done = n >= CODE.length;

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <p className="pill"><i className="dot" /> Taking new projects this month</p>
          <h1>Websites and software that bring you customers.</h1>
          <p className="lead">Digital CodeHub designs, builds and supports websites, mobile apps and custom software for growing businesses. Tell us your idea and get a fixed quote within 24 hours.</p>
          <div className="btn-row">
            <Link href="/quote" className="btn btn-accent">Get a free quote</Link>
            <a href="https://wa.me/919876543210" className="btn btn-outline" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
          </div>
          <ul className="hero-points">
            <li>Fixed price, no surprise bills</li>
            <li>Live in 2–4 weeks</li>
            <li>Free support after launch</li>
          </ul>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="code-window">
            <div className="code-bar"><i /><i /><i /><span>launch.js</span></div>
            <pre>{CODE.slice(0, n)}<b className={`cursor ${done ? "idle" : ""}`} /></pre>
          </div>
          <div className="float-card fc-1"><strong>₹12,450</strong><span>New order received</span></div>
          <div className="float-card fc-2"><strong>✓ Website live</strong><span>Page speed 96/100</span></div>
        </div>
      </div>

      <div className="container stats-bar">
        {stats.map((s) => (
          <div key={s.l}><strong>{s.n}</strong><span>{s.l}</span></div>
        ))}
      </div>
    </section>
  );
}
