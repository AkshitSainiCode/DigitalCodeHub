import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact us" text="Questions, ideas or a project to discuss? Write to us." />
      <section className="section">
        <div className="container two-col">
          {/* <div className="panel">
            <h3>Email</h3><p>hello@digitalcodehub.com</p>
            <h3>Phone</h3><p>+91 98765 43210</p>
            <h3>Office</h3><p>Delhi, India</p>
            <h3>Hours</h3><p>Mon–Sat, 10:00 am – 7:00 pm</p>
          </div> */}
          <ContactForm />
        </div>
      </section>
    </>
  );
}
