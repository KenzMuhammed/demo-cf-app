import Banner from "@/components/common/Banner";
import Brand from "@/widgets/brands/Brands";

export default function Services() {
  return (
    <>
      <Banner
        title="Our Brands"
        bgImage="/brands/brand-banner.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Brands", href: "/brands" },
        ]}
      />
      <Brand />
    </>
  );
}
