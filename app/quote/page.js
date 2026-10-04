import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Get a Quote" };

export default function QuotePage() {
  return (
    <>
      <PageHeader title="Get a free quote" text="Share your requirements and we will send a detailed estimate within one working day." />
      <section className="section">
        <div className="container narrow"><ContactForm quote /></div>
      </section>
    </>
  );
}
