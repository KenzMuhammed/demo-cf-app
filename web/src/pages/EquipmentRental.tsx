import EquipmentRentalFeatures from "@/widgets/equipment-rental/EquipmentRentalFeatures";
import ServicesIncluded from "@/widgets/equipment-rental/ServicesIncluded";
import EquipmentFleet from "@/widgets/equipment-rental/EquipmentFleet";
import Banner from "@/components/common/Banner";
import OurProcess from "@/widgets/equipment-rental/OurProcess";
import WhyChoose from "@/widgets/equipment-rental/WhyChoose";
import WeSupport from "@/widgets/equipment-rental/WeSupport";
import EquipmentInquiry from "@/widgets/equipment-rental/EquipmentInquiry";
import FaqEquipment from "@/widgets/equipment-rental/FaqEquipmentRental";
import EquipmentRentalRelatedServices from "@/widgets/equipment-rental/EquipmentRentalRelatedServices";
import QuickContactEquipmentRental from "@/widgets/equipment-rental/QuickContactEquipmentRental";

export default function EquipmentRentalPage() {
  return (
    <>
      <Banner
        title="Industrial Equipment Rental Services in Saudi Arabia"
        description="We provide flexible equipment rental solutions to keep your operations running, with reliable machines, quick support, and minimal downtime."
        bgImage="/widgets/equipment-rental/hero-bg.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
        buttonText="Request Rental Equipment"
        buttonLink="/equipment-rental#enquiry"
      />
      <EquipmentRentalFeatures />
      <ServicesIncluded />
      <EquipmentFleet />
      <OurProcess />
      <WhyChoose />
      <WeSupport />
      <EquipmentInquiry />
      <FaqEquipment />
      <EquipmentRentalRelatedServices />
    </>
  );
}
