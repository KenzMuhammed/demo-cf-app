import { useEffect, useRef, useState } from "react";

type Industry = {
  heading: string;
  description: string;
  image: string;
};

const industries: Industry[] = [
  {
    heading: "Construction & Infrastructure",
    description:
      "Supporting structural fabrication, on-site welding, equipment maintenance, and project-based industrial needs for infrastructure development.",
    image: "/industry/industry-01.webp",
  },
  {
    heading: "Heavy Engineering & Fabrication",
    description:
      "Delivering expert welding solutions, fabrication assistance, and equipment maintenance for complex engineering and heavy-duty fabrication projects.",
    image: "/industry/industry-02.webp",
  },
  {
    heading: "Manufacturing & Industrial Plants",
    description:
      "Maintaining seamless operations with preventive maintenance, repair services, equipment rentals, and technical support for industrial machinery.",
    image: "/industry/industry-04.webp",
  },
  {
    heading: "Petrochemical & Chemical Industries",
    description:
      "Delivering safe, compliant welding, cutting, and maintenance services tailored for high-risk, process-driven industrial environments.",
    image: "/industry/industry-05.webp",
  },
  {
    heading: "Power & Energy",
    description:
      "Assisting power plants and energy projects with welding solutions, maintenance, equipment rentals, and on-site technical support.",
    image: "/industry/industry-06.webp",
  },
  {
    heading: "Shipyards & Marine Fabrication",
    description:
      "Delivering reliable welding and fabrication services, plus equipment maintenance and rentals for shipbuilding and marine repair projects.",
    image: "/industry/industry-07.webp",
  },
  {
    heading: "Steel Fabrication & Metal Workshops",
    description:
      "Supplying welding machines, cutting solutions, maintenance support, and refurbishment services for fabrication shops of all scales.",
    image: "/industry/industry-08.webp",
  },
  {
    heading: "Maintenance & Shutdown Projects",
    description:
      "Delivering fast-response support, equipment rentals, AMC services, and on-site technical teams for planned shutdowns and critical maintenance operations.",
    image: "/industry/industry-03.webp",
  },
];

export default function PremiumIndustriesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const progress = -rect.top / window.innerHeight;
      const index = Math.round(progress);

      setActiveIndex(Math.min(Math.max(index, 0), industries.length - 1));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative hidden w-full bg-cover bg-fixed bg-center xl:block"
        style={{
          height: `${(industries.length + 1) * 100}vh`,
          backgroundImage: "url('/home/support-banner.webp')",
        }}
      >
        <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />

        <div className="sticky top-0 z-5 h-screen overflow-hidden">
          <div className="container mx-auto h-full px-6">
            <div className="grid h-full grid-cols-12 items-center gap-12">
              <div className="col-span-1 flex flex-col items-center gap-5">
                {industries.map((_, i) => (
                  <div
                    key={i}
                    className={`h-3 w-3 rounded-full transition-all duration-500 ${
                      i === activeIndex ? "scale-125 bg-orange-500" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <div className="relative col-span-5 h-72 overflow-hidden">
                {industries.map((industry, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 transition-all duration-700 ease-out"
                    style={{
                      transform: `translateY(${
                        i < activeIndex ? "-100%" : i === activeIndex ? "0%" : "100%"
                      })`,
                      opacity: i === activeIndex ? 1 : 0,
                      zIndex: industries.length - i,
                    }}
                  >
                    <h2 className="font-heading mb-6 text-6xl font-bold text-gray-900">
                      {industry.heading}
                    </h2>
                    <p className="text-2xl leading-relaxed text-gray-700">{industry.description}</p>
                  </div>
                ))}
              </div>

              <div className="relative col-span-6 h-120 w-full overflow-hidden rounded-2xl shadow-xl">
                {industries.map((industry, i) => (
                  <img
                    key={i}
                    src={industry.image}
                    alt={industry.heading}
                    className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out"
                    style={{
                      transform: `translateY(${
                        i < activeIndex ? "-100%" : i === activeIndex ? "0%" : "100%"
                      })`,
                      zIndex: industries.length - i,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="block bg-white py-16 xl:hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {industries.map((industry, i) => (
              <div key={i} className="space-y-5">
                <div className="relative h-60 w-full overflow-hidden rounded-xl shadow-md">
                  <img
                    src={industry.image}
                    alt={industry.heading}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>

                <h2 className="font-heading text-2xl font-bold text-gray-900">
                  {industry.heading}
                </h2>

                <p className="text-sm leading-relaxed text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
