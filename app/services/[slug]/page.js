import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { services } from "@/lib/data";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const s = services.find((x) => x.slug === params.slug);
  return { title: s ? s.title : "Service" };
}

export default function ServiceDetail({ params }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <>
      <PageHeader title={service.title} text={service.short} />
      <section className="section">
        <div className="container two-col">
          <div>
            <h2>What we deliver</h2>
            <p>{service.long}</p>
            <Link href="/quote" className="btn btn-primary">Get a quote</Link>
          </div>
          <div className="panel">
            <h3>Included</h3>
            <ul className="check-list">{service.points.map((p) => <li key={p}>{p}</li>)}</ul>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
