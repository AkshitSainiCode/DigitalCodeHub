import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import CTA from "@/components/CTA";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Our services" text="From first idea to launch and support, we cover the full digital journey." />
      <Services />
      <CTA />
    </>
  );
}
