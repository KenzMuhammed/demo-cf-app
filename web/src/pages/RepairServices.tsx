import Banner from "@/components/common/Banner";
import RelatedServices from "@/widgets/preventiveServices/RelatedServices";
import AboutRepair from "@/widgets/repairServices/AboutRepair";
import Capabilities from "@/widgets/repairServices/Capabilities";
import EquipmentRepair from "@/widgets/repairServices/EquipmentRepair";
import FaqRepair from "@/widgets/repairServices/FaqRepair";
import IndustriesRepair from "@/widgets/repairServices/IndustriesRepair";
import QuickContactRepair from "@/widgets/repairServices/QuickContactRepair";
import RepairProcess from "@/widgets/repairServices/RepairProcess";
import WhyChooseRepair from "@/widgets/repairServices/WhyChooseRepair";

export default function Services() {
  return (
    <>
      <Banner
        title="Welding & Industrial Equipment Repair Services in Saudi Arabia"
        description="We offer dependable equipment repair services to reduce downtime and keep your machines working as they should."
        bgImage="/industry/industry-banner-05.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />
      <AboutRepair />
      <Capabilities />
      <EquipmentRepair />
      <RepairProcess />
      <WhyChooseRepair />
      <IndustriesRepair />
      <QuickContactRepair />
      <FaqRepair />
      <RelatedServices />
    </>
  );
}
