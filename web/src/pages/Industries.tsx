import Banner from "@/components/common/Banner";
import Faq from "@/widgets/industries/Faq";
import IndustriesData from "@/widgets/industries/IndustriesData";
import OurPromise from "@/widgets/industries/OurPromise";

export default function Services() {
  return (
    <>
      <Banner
        title="Industries We Serve"
        description="ASCO delivers reliable industrial solutions across sectors, offering expertise in welding, cutting, fabrication, maintenance, and repair for projects and operations."
        bgImage="/industry/industry-banner-05.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
        ]}
      />
      <IndustriesData />
      <OurPromise />
      <Faq />
    </>
  );
}
