import { FiArrowRight } from "react-icons/fi";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";

type Brand = {
  name: string;
  description: string;
  logo: string;
  link: string;
};

const brands: Brand[] = [
  {
    name: "Absolute Weld Accessories",
    description:
      "Welding accessories and support products designed for safe efficient and consistent industrial welding operations.",
    logo: "/brands/absolute-weld-logo.webp",
    link: "/brands/absolute-weld",
  },
  {
    name: "Hyundai Welding Solutions",
    description:
      "Provides reliable welding equipment and consumables trusted for industrial fabrication and heavy duty applications across Saudi Arabia.",
    logo: "/brands/hyundai-welding-logo.webp",
    link: "/brands/hyundai",
  },
  {
    name: "Esab Welding and Cutting Solutions",
    description:
      "ESAB offers advanced welding and cutting equipment and consumables used widely in industrial fabrication and energy projects across Saudi Arabia.",
    logo: "/brands/ESAB.webp",
    link: "/brands/esab",
  },
  {
    name: "Hi-Lo",
    description:
      "Delivers dependable material handling and workshop equipment supporting industrial lifting positioning and fabrication operations.",
    logo: "/brands/hi-lo.webp",
    link: "/brands/hi-lo",
  },

  {
    name: "Senfeng Laser Technology",
    description:
      "Provides advanced laser cutting and metal processing machines for precision driven industrial applications.",
    logo: "/brands/senfeng.webp",
    link: "/brands/senfeng",
  },
  {
    name: "VIMEX Steel Fabrication and Workshop Machinery",
    description: "Supporting industrial metalworking and heavy fabrication projects.",
    logo: "/brands/vimex.webp",
    link: "/brands/vimex",
  },
  {
    name: "Euroboor",
    description:
      "Manufactures industrial drilling and metalworking equipment used in fabrication construction and engineering sectors worldwide.",
    logo: "/brands/Euroboor.webp",
    link: "/brands/euroboor",
  },
  {
    name: "Grindex",
    description:
      "Produces industrial abrasive solutions for metal cutting grinding and surface preparation in fabrication environments.",
    logo: "/brands/grindex.webp",
    link: "/brands/grindex",
  },
  {
    name: "PM SchweiBtechnik",
    description:
      "Develops specialized welding technology and automation systems for industrial manufacturing environments.",
    logo: "/brands/PM.webp",
    link: "/brands/pm-schweibtechnik",
  },
  {
    name: "SENCI Welding",
    description:
      "Supplies welding and power equipment solutions for industrial construction and project based operations.",
    logo: "/brands/SENCI.webp",
    link: "/brands/senci",
  },
  {
    name: "DWT Pipe Tools",
    description:
      "Provides professional pipe preparation and cutting solutions for industrial and pipeline applications.",
    logo: "/brands/dwt-pipe.webp",
    link: "/brands/dwt",
  },
  {
    name: "Sawyer",
    description:
      "Offers high-quality pipeline, beveling, cutting, and welding equipment trusted in global construction and industrial applications.",
    logo: "/brands/sawyer.webp",
    link: "/brands/sawyer",
  },
  {
    name: "Topsinn",
    description:
      "Offers reliable dust collection and welding fume extraction equipment used across metal fabrication and industrial manufacturing sectors.",
    logo: "/brands/topsinn.webp",
    link: "/brands/topsinn",
  },
  {
    name: "Haoyu Automation System Co., Ltd",
    description:
      "Haoyu Automation System Co., Ltd. is manufacturer of automated welding and industrial automation equipment, including robotic welding stations, CNC welding machines, and pipe cutting and cladding systems.",
    logo: "/brands/haoyu.webp",
    link: "/brands/haoyu",
  },
];

export default function CleanPaperBrandSection() {
  return (
    <section className="bg-secondary-light relative overflow-hidden py-14 lg:py-24">
      <img
        src="/brands/brand-banner-10.webp"
        alt="Brand Banner Top"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div className="container">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {brands.map((brand, index) => (
            <Link
              to="/brand-list"
              key={index}
              className="group hover:border-secondary-darker relative flex flex-col items-center gap-4 overflow-hidden rounded-4xl border border-white bg-white/75 px-4 py-5 text-center backdrop-blur-sm transition-all duration-500 hover:bg-white/90 max-lg:bg-white/80 xl:px-6"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-1400 ease-out group-hover:translate-x-full" />
              <div className="mb-2 flex h-16 w-full items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  width={180}
                  height={80}
                  className="h-full w-full max-w-[70%] object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h2 className="font-heading text-center text-lg font-semibold transition-colors lg:text-2xl">
                <span className="text-primary-darker">{brand.name.split(" ")[0]} </span>
                <span className="text-secondary-darker">
                  {brand.name.split(" ").slice(1).join(" ")}
                </span>
              </h2>
              <p className="mb-3 grow text-center text-sm leading-relaxed text-gray-700">
                {brand.description}
              </p>
              <Button
                variant="dark"
                className="mt-auto gap-2"
                onClick={() => (window.location.href = "/brand-list")}
              >
                View Products
                <FiArrowRight />
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
