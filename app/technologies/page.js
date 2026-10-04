import PageHeader from "@/components/PageHeader";
import Technologies from "@/components/Technologies";
import CTA from "@/components/CTA";

export const metadata = { title: "Technologies" };

export default function TechnologiesPage() {
  return (
    <>
      <PageHeader title="Technologies" text="The tools and platforms our engineers use every day." />
      <Technologies />
      <CTA />
    </>
  );
}
