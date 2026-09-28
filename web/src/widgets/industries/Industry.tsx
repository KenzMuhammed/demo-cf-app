import { useState } from "react";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

type Industry = {
  heading: string;
  description: string;
  image: string;
  features: string[];
};

const industries: Industry[] = [
  {
    heading: "Construction & Infrastructure",
    description:
      "Supporting structural fabrication, on-site welding, equipment maintenance, and project-based industrial needs for infrastructure development.",
    image: "/industry/industry-01.webp",
    features: [
      "Structural fabrication support",
      "On-site welding services",
      "Heavy equipment maintenance",
    ],
  },
  {
    heading: "Heavy Engineering & Fabrication",
    description:
      "Delivering expert welding solutions, fabrication assistance, and equipment maintenance for complex engineering and heavy-duty fabrication projects.",
    image: "/industry/industry-02.webp",
    features: [
      "Custom heavy fabrication",
      "Industrial welding solutions",
      "Machine repair & overhaul",
    ],
  },
  {
    heading: "Manufacturing & Industrial Plants",
    description:
      "Maintaining seamless operations with preventive maintenance, repair services, equipment rentals, and technical support for industrial machinery.",
    image: "/industry/industry-04.webp",
    features: ["Preventive maintenance", "Industrial repair services", "Equipment rental support"],
  },
  {
    heading: "Petrochemical & Chemical Industries",
    description:
      "Delivering safe, compliant welding, cutting, and maintenance services tailored for high-risk, process-driven industrial environments.",
    image: "/industry/industry-05.webp",
    features: [
      "Compliance-based welding",
      "Hazardous environment expertise",
      "Process equipment maintenance",
    ],
  },
  {
    heading: "Power & Energy",
    description:
      "Assisting power plants and energy projects with welding solutions, maintenance, equipment rentals, and on-site technical support.",
    image: "/industry/industry-06.webp",
    features: ["Power plant welding", "Turbine maintenance", "Energy project support"],
  },
  {
    heading: "Shipyards & Marine Fabrication",
    description:
      "Delivering reliable welding and fabrication services, plus equipment maintenance and rentals for shipbuilding and marine repair projects.",
    image: "/industry/industry-07.webp",
    features: ["Marine-grade welding", "Ship repair services", "Dockyard fabrication"],
  },
  {
    heading: "Steel Fabrication & Metal Workshops",
    description:
      "Supplying welding machines, cutting solutions, maintenance support, and refurbishment services for fabrication shops of all scales.",
    image: "/industry/industry-08.webp",
    features: ["Metal workshop solutions", "Welding machine supply", "Refurbishment services"],
  },
  {
    heading: "Maintenance & Shutdown Projects",
    description:
      "Delivering fast-response support, equipment rentals, AMC services, and on-site technical teams for planned shutdowns and critical maintenance operations.",
    image: "/industry/industry-03.webp",
    features: ["Shutdown project support", "AMC services", "Rapid response teams"],
  },
];

export default function IndustriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const activeIndustry = industries[activeIndex];

  return (
    <section
      className="bg-gray-100 py-14 lg:py-24"
      style={{ backgroundImage: "url('/industry/industry-banner-01.webp')" }}
    >
      <div className="container mx-auto px-6">
        <div className="hidden gap-16 lg:flex">
          <div className="w-1/3 space-y-3">
            {industries.map((industry, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`flex w-full items-center justify-between rounded-lg px-6 py-4 text-left font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-secondary-darker text-white"
                      : "hover:bg-secondary-darker bg-white text-gray-700 hover:text-gray-50"
                  }`}
                >
                  <span>{industry.heading}</span>

                  <FiArrowRight
                    className={`transition-transform duration-200 ${
                      isActive
                        ? "text-dark translate-x-1"
                        : "text-gray-400 group-hover:translate-x-1"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <div className="w-1/3">
            <div className="relative h-105 w-full overflow-hidden rounded-xl shadow-lg">
              <img
                src={activeIndustry.image}
                alt={activeIndustry.heading}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="w-1/3 space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">{activeIndustry.heading}</h2>

            <p className="leading-relaxed text-gray-600">{activeIndustry.description}</p>

            <div className="space-y-3">
              {activeIndustry.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FiCheckCircle className="text-orange-500" />
                  <span className="font-medium text-gray-800">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4 lg:hidden">
          {industries.map((industry, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="rounded-md bg-white shadow-sm">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`flex w-full items-center px-4 py-4 font-semibold ${
                    isOpen ? "bg-secondary-darker text-white" : "text-gray-800 hover:bg-blue-50"
                  }`}
                >
                  <span className="flex-1 text-left">{industry.heading}</span>

                  <FiArrowRight
                    className={`transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
                  />
                </button>

                {isOpen && (
                  <div className="space-y-4 p-4">
                    <div className="relative h-56 w-full overflow-hidden rounded-md">
                      <img
                        src={industry.image}
                        alt={industry.heading}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>

                    <p className="text-gray-600">{industry.description}</p>

                    <div className="space-y-3">
                      {industry.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <FiCheckCircle className="text-orange-500" />
                          <span className="text-sm font-medium text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
