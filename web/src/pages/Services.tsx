import Banner from "@/components/common/Banner";
import ASCOInsight from "@/widgets/services/ASCOInsight";
import OurServices from "@/widgets/services/OurServices";

export default function Services() {
  return (
    <>
      <Banner
        title="Our Services"
        description="We know downtime hurts your business. That is why we focus on keeping your operations running smoothly."
        bgImage="/services/services-banner05.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />
      <OurServices />
      <ASCOInsight />
    </>
  );
}
