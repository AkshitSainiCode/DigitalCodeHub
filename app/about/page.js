import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import { WhyUs, Process } from "@/components/WhyUs";
import CTA from "@/components/CTA";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About us" text="A team of developers, designers and strategists building technology that works for business." />
      <About />
      <WhyUs />
      <Process />
      <CTA />
    </>
  );
}
