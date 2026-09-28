import HeroBanner from "@/widgets/home/HeroBanner";
import ProductCategoriesList from "@/widgets/home/ProductCategoriesList";
import Highlights from "@/widgets/home/Highlights";
// import BrandsHome from "@/widgets/home/BrandsHome";
import ServicesHome from "@/widgets/home/ServicesHome";
import Testimonials from "@/widgets/home/Testimonials";
import ClientsHome from "@/widgets/home/ClientsHome";
import QuickContact from "@/widgets/home/QuickContact";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <div className="relative bg-cover bg-center bg-no-repeat">
        <img
          src="/innovation/home/in-cat-bg.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute top-0 left-0 h-full w-full bg-white/90" />
        <Highlights />
        <ProductCategoriesList />
      </div>
      {/* <BrandsHome /> */}
      <ServicesHome />
      <Testimonials />
      <ClientsHome />
      <QuickContact />
    </>
  );
}
