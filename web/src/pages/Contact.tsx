import Banner from "@/components/common/Banner";
import ASCOInsight from "@/widgets/services/ASCOInsight";
import Contact from "@/widgets/contact/Contact";
import ContactForm from "@/widgets/contact/ContactForm";

export default function Services() {
  return (
    <>
      <Banner
        title="Contact Us"
        description="Have a question or an idea in mind We would love to hear from you Reach out to us and our team will get back to you shortly"
        bgImage="/contact/contact-banner.webp"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />
      <Contact />
      <ContactForm />
      <ASCOInsight />
    </>
  );
}
