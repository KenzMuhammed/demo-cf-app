import { useEffect, useRef, useState } from "react";
import { FaCogs } from "react-icons/fa";
import { FaShip } from "react-icons/fa6";
import { GiOilPump, GiCrane, GiGearHammer, GiPowerLightning, GiMineTruck } from "react-icons/gi";
import { LiaIndustrySolid } from "react-icons/lia";
import { MdEngineering } from "react-icons/md";

const INDUSTRIES = [
  {
    id: "oil-gas",
    label: "Oil & Gas",
    icon: GiOilPump,
    image: "/hero-banner/b9.webp",
    headline: "Oil & Gas Operations",
    description:
      "Supporting repair needs for equipment used in upstream, midstream, and downstream operations.",
  },
  {
    id: "fabrication",
    label: "Fabrication",
    icon: GiGearHammer,
    image: "/services/service-02.webp",
    headline: "Pipeline & Transmission Industries",
    description:
      "Repair services for equipment used in pipeline construction, maintenance, and transmission systems.",
  },
  {
    id: "Manufacturing",
    label: "Manufacturing",
    icon: FaCogs,
    image: "/services/welding-automation.webp",
    headline: "Manufacturing Facilities",
    description:
      "Ensuring machinery reliability across production lines and industrial manufacturing environments.",
  },
  {
    id: "Fabrication & Engineering Workshops",
    label: "Fabrication & Engineering Workshops",
    icon: MdEngineering,
    image: "/services/fabrication-equipments.webp",
    headline: "Fabrication & Engineering Workshops",
    description:
      "Repair support for welding, cutting, and fabrication equipment used in workshop operations.",
  },
  {
    id: "Construction",
    label: "Construction & Infrastructure",
    icon: GiCrane,
    image: "/services/construction.webp",
    headline: "Construction & Infrastructure",
    description:
      "Maintaining equipment used in construction projects and large-scale infrastructure development.",
  },
  {
    id: "Power & Utility Plants",
    label: "Power & Utility Plants",
    icon: GiPowerLightning,
    image: "/services/service-5.webp",
    headline: "Power & Utility Plants",
    description:
      "Supporting equipment performance in power generation and utility-based operations.",
  },
  {
    id: "Marine & Offshore",
    label: "Marine & Offshore",
    icon: FaShip,
    image: "/services/service-20.webp",
    headline: "Marine & Offshore",
    description:
      "Repair services for equipment used in offshore operations and marine environments.",
  },
  {
    id: "Mining & Heavy Industries",
    label: "Mining & Heavy Industries",
    icon: GiMineTruck,
    image: "/services/service-21.webp",
    headline: "Mining & Heavy Industries",
    description:
      "Handling repair requirements for equipment used in heavy-duty and high-load industrial conditions.",
  },
];

export default function IndustriesRepair() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const listContainerRef = useRef<HTMLDivElement>(null);

  const [sectionHeight, setSectionHeight] = useState(0);

  useEffect(() => {
    const SCROLL_PER_ITEM = Math.min(500, Math.max(1200, window.innerHeight * 0.8));

    setSectionHeight(INDUSTRIES.length * SCROLL_PER_ITEM + window.innerHeight);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height - window.innerHeight;

      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        const progress = Math.abs(rect.top) / sectionHeight;
        const index = Math.min(INDUSTRIES.length - 1, Math.floor(progress * INDUSTRIES.length));
        setActive(index);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Center active item in sidebar when it changes
  useEffect(() => {
    if (listContainerRef.current) {
      const children = listContainerRef.current.children;
      const activeItem = children[active] as HTMLElement;
      if (activeItem) {
        const container = listContainerRef.current;
        const scrollTarget =
          activeItem.offsetTop - container.offsetHeight / 2 + activeItem.offsetHeight / 2;

        container.scrollTo({
          top: scrollTarget,
          behavior: "smooth",
        });
      }
    }
  }, [active]);

  const industry = INDUSTRIES[active];
  const Icon = industry.icon;

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{ height: sectionHeight || "400vh" }}
    >
      <div className="sticky top-15 h-screen overflow-hidden">
        {INDUSTRIES.map((ind, i) => (
          <div
            key={ind.id}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: active === i ? 1 : 0 }}
          >
            <img
              src={ind.image}
              alt={ind.headline}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-slate-900/65" />
        <div className="relative container mx-auto flex h-full flex-col justify-center px-4 lg:px-8">
          <div className="flex">
            <div className="mb-6 flex gap-4 md:mb-8 md:items-center md:gap-6 lg:mb-10">
              <LiaIndustrySolid className="text-primary h-10 w-10 max-md:mt-0.5 md:h-12 md:w-12 lg:h-14 lg:w-14" />
              <div className="h-[60%] w-px bg-slate-300 max-md:hidden" />
              <div>
                <h2 className="text-primary font-heading text-3xl font-bold uppercase lg:text-4xl">
                  Industries
                  <span className="text-white"> We Support</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            <div className="relative col-span-1 hidden lg:block">
              <div
                ref={listContainerRef}
                className="no-scrollbar relative flex max-h-[60vh] flex-col space-y-4 overflow-y-auto px-6 pt-10 pb-20"
              >
                {INDUSTRIES.map((ind, i) => {
                  const TabIcon = ind.icon;
                  const isActive = active === i;
                  return (
                    <div
                      key={ind.id}
                      className={`flex cursor-pointer items-start gap-4 transition-all duration-500 ease-out ${isActive ? "scale-105" : "hover:translate-x-1"}`}
                    >
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-500 ${
                          isActive
                            ? "bg-primary text-white shadow-[0_0_20px_rgba(224,30,55,0.4)]"
                            : "border border-white/20 bg-white/10 text-white/50"
                        }`}
                      >
                        <TabIcon className="h-5 w-5" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <p
                          className={`font-semibold transition-colors duration-300 ${isActive ? "text-white" : "text-white/50"}`}
                        >
                          {ind.label}
                        </p>
                        <p
                          className={`text-xs transition-opacity duration-500 ${isActive ? "text-white/50 opacity-100" : "text-white/30 opacity-0 lg:opacity-100 dark:lg:opacity-40"}`}
                        >
                          Repair Services
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex items-center lg:col-span-2">
              <div className="w-full overflow-hidden">
                <div className="p-8 md:p-10">
                  <div className="mb-4 flex items-center gap-3">
                    <h3 className="font-heading text-2xl font-bold text-white lg:text-6xl">
                      {industry.headline}
                    </h3>
                  </div>
                  <p className="font-heading text-base leading-relaxed text-white/70 lg:text-2xl">
                    {industry.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
