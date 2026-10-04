import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { jobs } from "@/lib/data";

export const metadata = { title: "Careers" };

export default function CareersPage() {
  return (
    <>
      <PageHeader title="Careers" text="Join a friendly team that ships real products." />
      <section className="section">
        <div className="container narrow">
          <h2>Open positions</h2>
          <div className="job-list">
            {jobs.map((j) => (
              <div key={j.title} className="job">
                <div>
                  <h3>{j.title}</h3>
                  <p>{j.type} · {j.place} · {j.exp}</p>
                </div>
                <Link href="/contact" className="btn btn-ghost">Apply</Link>
              </div>
            ))}
          </div>
          <p className="muted">Send your resume and portfolio to careers@digitalcodehub.com</p>
        </div>
      </section>
    </>
  );
}
