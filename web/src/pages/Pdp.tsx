// import Banner from "@/components/common/Banner";
import PdpImage from "@/widgets/pdp/PdpImage";
import PdpTabs from "@/widgets/pdp/PdpTabs";
import PdpDetails from "@/widgets/pdp/PdpDetails";
import PdpRelatedProducts from "@/widgets/pdp/PdpRelatedProducts";
import Breadcrumb from "@/components/ui/Breadcrumb";

export default function Services() {
  return (
    <>
      {/* <Banner
        title="Industries We Serve"
        description="ASCO delivers reliable industrial solutions across sectors, offering expertise in welding, cutting, fabrication, maintenance, and repair for projects and operations."
        bgImage="/industry/industry-banner-05.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
        ]}
      /> */}
      <section className="pt-6">
        <div className="container">
          <div className="bg-secondary-light/5 border-secondary-light/10 mb-6 rounded-2xl border p-4">
            <Breadcrumb
              items={[
                { label: "ESAB Welding ", href: "/category" },
                { label: "ESAB Welding Power Source – Professional Welding Equipment" },
              ]}
            />
          </div>
          <div className="flex gap-10 max-xl:flex-col xl:gap-14 2xl:gap-22!">
            <div className="xl:w-7/12">
              <div className="top-[calc(var(--header-height)+1.5rem)] xl:sticky">
                <PdpImage />
              </div>
            </div>
            <div className="shrink-0 xl:w-5/12">
              <PdpDetails />
            </div>
          </div>
          <div className="lg:mt-20">
            <PdpTabs />
          </div>
        </div>
        <div className="mt-4 md:mt-6 lg:mt-20">
          <PdpRelatedProducts />
        </div>
      </section>
    </>
  );
}
