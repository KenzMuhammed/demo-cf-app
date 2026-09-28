import Banner from "@/components/common/Banner";
import Clients from "@/widgets/Clients/Clients";

export default function Home() {
  return (
    <>
      <Banner
        title="Our Clients"
        description="We focus on being a trusted partner, working closely with our clients to support their requirements."
        bgImage="/industry/industry-banner-05.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Clients", href: "/clients" },
        ]}
      />
      <Clients />
    </>
  );
}
