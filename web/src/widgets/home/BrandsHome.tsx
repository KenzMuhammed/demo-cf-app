import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import { MdOutlineVerified } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";

export default function BrandsHome() {
  const brands = [
    {
      name: "Hyundai Welding",
      logo: "/brands/hyundai-welding-logo.webp",
      width: 400,
      height: 90,
    },
    {
      name: "ESAB",
      logo: "/brands/ESAB.webp",
      width: 400,
      height: 223,
    },
    {
      name: "Absolute Weld",
      logo: "/brands/absolute-weld.webp",
      width: 400,
      height: 223,
    },
    {
      name: "Sawyer MFG Company",
      logo: "/brands/sawyer.webp",
      width: 400,
      height: 153,
    },
    {
      name: "Grindex Quick Cut",
      logo: "/brands/grindex.webp",
      width: 400,
      height: 98,
    },
    {
      name: "Euroboor",
      logo: "/brands/Euroboor.webp",
      width: 400,
      height: 73,
    },
    {
      name: "Vimex",
      logo: "/brands/vimex.webp",
      width: 400,
      height: 182,
    },
    {
      name: "Topsinn",
      logo: "/brands/topsinn.webp",
      width: 200,
      height: 34,
    },
  ];

  return (
    <section className="bg-gray-100 py-14 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="flex">
          <div className="text-secondary-dark mb-8 flex gap-4 md:mb-12 md:items-center md:gap-6 lg:mb-14">
            <MdOutlineVerified className="text-secondary h-10 w-10 max-md:mt-0.5 md:h-12 md:w-12 lg:h-14 lg:w-14" />
            <div className="h-[60%] w-px bg-slate-300 max-md:hidden" />
            <div>
              <h2 className="font-heading text-3xl font-bold uppercase lg:text-4xl">Brands</h2>
              <p className="text-slate-600 max-md:text-sm">
                Authorized dealers for globally recognized industrial brands.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 xl:grid-cols-4">
          {brands.map((brand, index) => (
            <Link
              key={index}
              to="/brand-list"
              aria-label={brand.name}
              className="group hover:border-primary slope-lg relative overflow-hidden rounded-2xl bg-white text-center transition-all duration-600"
            >
              <div className="flex h-full flex-col">
                <div className="py-4">
                  <div className="flex h-24 w-full items-center justify-center sm:h-28 xl:h-34">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      width={brand.width}
                      height={brand.height}
                      className="max-h-26 w-full max-w-[80%] object-contain transition-transform duration-600 group-hover:scale-110 lg:max-h-24 lg:max-w-[60%]"
                    />
                  </div>
                </div>

                <div className="font-heading group-hover:text-primary flex items-center justify-center gap-1 px-4 py-4 font-semibold text-gray-500 transition-colors duration-600 max-md:pt-0 max-md:text-sm xl:pb-8">
                  View Products <FiArrowRight />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center xl:mt-14">
          <Button
            variant="primary"
            size="lg"
            aria-label="View All Brands"
            onClick={() => (window.location.href = "/brands")}
          >
            View All Brands
          </Button>
        </div>
      </div>
    </section>
  );
}
