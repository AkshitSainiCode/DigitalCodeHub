import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { WhyUs, Process } from "@/components/WhyUs";
import Projects from "@/components/Projects";
import Packages from "@/components/Packages";
import Technologies from "@/components/Technologies";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Services limit={6} />
      <WhyUs />
      <Projects limit={3} />
      <Process />
      {/* <Packages /> */}
      <Technologies />
      <Testimonials />
      <FAQ />
      <CTA />
      <section className="section">
        <div className="container narrow">
          <h2>Send us your requirement</h2>
          <p className="section-sub">Fill in the form and we will call you back within one working day.</p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
