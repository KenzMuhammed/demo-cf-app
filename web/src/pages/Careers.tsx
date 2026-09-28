import Banner from "@/components/common/Banner";
import LifeAtAsco from "@/widgets/about/LifeAtAsco3";
import OpenRoles from "@/widgets/career/OpenRoles";
import Contact from "@/widgets/contact/Contact";

export default function Services() {
  return (
    <>
      <Banner
        title="Be Part of the ASCO Team"
        description="We're always happy to welcome people who want to learn, grow, and build something meaningful together."
        bgImage="/career/career-b01.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Careers", href: "/careers" },
        ]}
      />
      <OpenRoles />
      <LifeAtAsco
        heading="Be Part of Something Meaningful"
        buttonText="Life At Asco"
        paragraph="We believe great work happens when people feel valued. Join a team where ideas are welcomed, teamwork matters, and growth is encouraged."
      />
      <Contact />
    </>
  );
}
