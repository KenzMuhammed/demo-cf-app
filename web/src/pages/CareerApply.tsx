import Banner from "@/components/common/Banner";
import LifeAtAsco from "@/widgets/about/LifeAtAsco3";
import JobDescripton from "@/widgets/careerApply/JobDescripton";
import Contact from "@/widgets/contact/Contact";

export default function Services() {
  return (
    <>
      <Banner
        title="Careers"
        bgImage="/career/career-b01.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Careers", href: "/careers" },
        ]}
      />
      <JobDescripton />
      <LifeAtAsco
        heading="Be Part of Something Meaningful"
        buttonText="Life At Asco"
        paragraph="We believe great work happens when people feel valued. Join a team where ideas are welcomed, teamwork matters, and growth is encouraged."
      />
      <Contact />
    </>
  );
}
