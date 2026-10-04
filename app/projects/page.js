import PageHeader from "@/components/PageHeader";
import Projects from "@/components/Projects";
import CTA from "@/components/CTA";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <PageHeader title="Our projects" text="Live websites and apps we have built. Open any project and try it yourself." />
      <Projects />
      <CTA />
    </>
  );
}
