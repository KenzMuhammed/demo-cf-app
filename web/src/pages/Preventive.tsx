import Banner from "@/components/common/Banner";
import AboutPreventive from "@/widgets/preventiveServices/AboutPreventive";
import Benefits from "@/widgets/preventiveServices/Benefits";
import EquipmentCovered from "@/widgets/preventiveServices/EquipmentCovered";
import FaqPreventive from "@/widgets/preventiveServices/FaqPreventive";
import IndustriesPreventive from "@/widgets/preventiveServices/IndustriesPreventive";
import PreventiveProcess from "@/widgets/preventiveServices/PreventiveProcess";
import QuickContactPreventive from "@/widgets/preventiveServices/QuickContactPreventive";
import RelatedServices from "@/widgets/preventiveServices/RelatedServices";
import WhatPreventive from "@/widgets/preventiveServices/WhatPreventive";

export default function Services() {
  return (
    <>
      <Banner
        title="Preventive Maintainance Service"
        description="Keeping industrial welding equipment operating safely and efficiently across projects in KSA."
        bgImage="/industry/industry-banner-05.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />
      <AboutPreventive />
      <WhatPreventive />
      <Benefits />
      <EquipmentCovered />
      <PreventiveProcess />
      <IndustriesPreventive />
      <QuickContactPreventive />
      <FaqPreventive />
      <RelatedServices />
    </>
  );
}
