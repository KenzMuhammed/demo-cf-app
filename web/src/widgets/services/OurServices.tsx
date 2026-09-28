import { IconType } from "react-icons";
import Button from "@/components/ui/Button";
import { Link } from "react-router-dom";
import {
  FiTool,
  FiSettings,
  FiShield,
  FiTruck,
  FiCheckCircle,
  FiUsers,
  FiHeadphones,
  FiPackage,
} from "react-icons/fi";

type ServiceSection = {
  heading: string;
  description: string;
  link: string;
  icon: IconType;
  image: string;
};

const services: ServiceSection[] = [
  {
    heading: "Repair Services",
    description:
      "Fast, on-site and workshop repair services for welding and cutting equipment, delivered by skilled technicians restoring equipment performance across Saudi Arabia.",
    link: "/repair-services",
    icon: FiTool,
    image: "/services/service-12.webp",
  },
  {
    heading: "Preventive Maintenance Services",
    description:
      "Because the best fix is avoiding the problem in the first place. We focus on proactive maintenance spotting small issues early so your equipment stays reliable and your work stays on track.",
    link: "/preventive",
    icon: FiShield,
    image: "/services/service-13.webp",
  },
  {
    heading: "Annual Maintenance Contracts (AMC)",
    description:
      "With an ASCO AMC, we take care of maintenance for you providing reliable support, fast repairs and predictable costs while keeping your equipment running at its best.",
    link: "/amc",
    icon: FiSettings,
    image: "/services/service-14.webp",
  },
  {
    heading: "Authorized Service Center",
    description:
      "Manufacturer-approved service, warranty handling and certified repairs from an authorised centre trusted support for branded welding and cutting equipment.",
    link: "/authorized-service",
    icon: FiCheckCircle,
    image: "/services/service-15b.webp",
  },
  {
    heading: "Equipment Rental",
    description:
      "Rental solutions for welding machines, generators, tower lights and industrial equipment based on project-specific requirements.",
    link: "/equipment-rental",
    icon: FiTruck,
    image: "/services/service-16.webp",
  },
  {
    heading: "Installation & Commissioning Support",
    description:
      "On-site installation and commissioning to make sure your equipment is set up right and works perfectly from day one.",
    link: "/installation-support",
    icon: FiUsers,
    image: "/services/service-19.webp",
  },
  {
    heading: "Technical Support & On-Site Service",
    description:
      "Hands-on troubleshooting, diagnostics and operational support delivered by field engineers to resolve machine issues and optimise uptime.",
    link: "/services",
    icon: FiHeadphones,
    image: "/services/service-18.webp",
  },
  {
    heading: "After Sales Services",
    description:
      "Coordinated after-sales support covering spare parts, follow-ups and service coordination to keep equipment productive throughout its lifecycle.",
    link: "/services",
    icon: FiPackage,
    image: "/services/service-17.webp",
  },
];

export default function OurServices() {
  return (
    <section className="relative py-14 md:py-24 md:pb-52">
      <div className="fixed inset-0 -z-10">
        <img
          src="/services/services-banner04.webp"
          alt="Services Background"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-white/90"></div>
      <div className="relative z-10 container space-y-12 px-4 sm:px-6 lg:space-y-16 lg:px-8">
        {services.map((service, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <div key={index} className="group flex flex-col items-center md:flex-row">
              <div className={`relative w-full md:w-[55%] ${isReverse ? "md:order-2" : ""}`}>
                <Link to={service.link} className="flex overflow-hidden rounded-3xl shadow-lg">
                  <img
                    src={service.image}
                    alt={service.heading}
                    width={900}
                    height={600}
                    className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110 md:h-115"
                  />
                </Link>
              </div>

              <div
                className={`relative z-5 w-full md:w-[50%] ${
                  isReverse ? "md:order-1 md:-mr-20" : "md:-ml-20"
                } -mt-12 md:mt-0`}
              >
                <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-xl md:p-14">
                  <h2 className="font-heading mb-4 text-xl font-semibold text-gray-900 md:text-3xl">
                    {service.heading}
                  </h2>

                  <p className="text-sm leading-relaxed text-gray-600 md:text-lg">
                    {service.description}
                  </p>

                  <Button className="mt-6" onClick={() => (window.location.href = service.link)}>
                    View Details
                  </Button>

                  <div className="absolute bottom-0 left-0 h-1.5 w-full bg-orange-500"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
