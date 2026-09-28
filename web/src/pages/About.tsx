import Banner from "@/components/common/Banner";
import Mission from "@/widgets/about/Mission";
import Team from "@/widgets/about/Team";
import ClientsHome from "@/widgets/home/ClientsHome";
import FoundersReview from "@/widgets/about/FoundersReview";
import Careers from "@/widgets/about/Careers";
import Journey from "@/widgets/about/Journey4";
import LifeAtAsco from "@/widgets/about/LifeAtAsco3";

export default function Home() {
  return (
    <>
      <Banner
        title="About Us"
        description="We are always with you to find solution for all your industrial & mechanical needs"
        bgImage="/about/about-banner01.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
        ]}
      />
      <Journey />
      <Mission />
      <Team />
      <ClientsHome />
      <FoundersReview />
      <LifeAtAsco
        heading="Life At ASCO"
        buttonText="View More"
        paragraph="At ASCO, we believe that our people are our greatest asset."
      />
      <Careers />
    </>
  );
}
