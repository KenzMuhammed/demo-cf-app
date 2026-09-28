import Banner from "@/components/common/Banner";
import OurMilestones from "@/widgets/awards-and-recognition/OurMilestones";

export default function Home() {
  return (
    <>
      <Banner
        title="Awards & Recognition"
        description="Recognized by leading manufacturers for authorized distribution and service across Saudi Arabia."
        bgImage="/awards/award-banner.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Awards & Recognition", href: "/awards-and-recognition" },
        ]}
      />

      <OurMilestones />
    </>
  );
}
