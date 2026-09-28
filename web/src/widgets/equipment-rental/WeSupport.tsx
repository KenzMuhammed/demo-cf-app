import { useState } from "react";
import {
  GiOilPump,
  GiFactory,
  GiCrane,
  GiGearHammer,
  GiPipes,
  GiChemicalTank,
} from "react-icons/gi";
import { LiaIndustrySolid } from "react-icons/lia";

const INDUSTRIES = [
  {
    id: "oil-gas",
    label: "Oil & Gas",
    icon: GiOilPump,
    image: "/hero-banner/b9.webp",
    headline: "Oil & Gas Operations",
    description:
      "Supporting short-term and ongoing operational needs with reliable equipment availability.",
  },
  {
    id: "petrochemical",
    label: "Petrochemical",
    icon: GiChemicalTank,
    image: "/services/petrochemical.webp",
    headline: "Petrochemical Industries",
    description:
      "Providing rental solutions for maintenance shutdowns and project-based requirements.",
  },
  {
    id: "pipeline",
    label: "Pipeline",
    icon: GiPipes,
    image: "/services/pipeline.webp",
    headline: "Pipeline & Transmission Projects",
    description: "Equipment support for pipeline construction, maintenance, and field operations.",
  },
  {
    id: "construction",
    label: "Construction",
    icon: GiCrane,
    image: "/services/construction.webp",
    headline: "Construction & Infrastructure",
    description:
      "Flexible equipment rental for construction sites and infrastructure development projects.",
  },
  {
    id: "fabrication",
    label: "Fabrication",
    icon: GiGearHammer,
    image: "/services/service-02.webp",
    headline: "Fabrication Workshops",
    description:
      "Supporting workshop operations with temporary equipment requirements and workload peaks.",
  },
  {
    id: "manufacturing",
    label: "Manufacturing",
    icon: GiFactory,
    image: "/services/service-04.webp",
    headline: "Manufacturing Facilities",
    description:
      "Providing equipment during maintenance, breakdowns, or increased production demand.",
  },
];
export default function IndustriesPreventive() {
  const [active, setActive] = useState(0);

  const industry = INDUSTRIES[active];

  return (
    <section className="relative min-h-screen w-full overflow-hidden max-lg:py-16">
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

      <div className="absolute inset-0 bg-slate-900/70" />

      <div className="relative container mx-auto flex min-h-screen flex-col justify-center px-4 lg:px-8">
        <div className="flex h-full flex-col justify-center">
          <div className="mb-8 flex gap-4 md:mb-12 md:items-center md:gap-6 lg:mb-14">
            <LiaIndustrySolid className="text-primary h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14" />
            <div className="h-[60%] w-px bg-slate-300 max-md:hidden" />
            <div>
              <h2 className="text-primary font-heading text-3xl font-bold uppercase lg:text-4xl">
                <span className="text-white">Industries We Support with</span> Preventive
                Maintenance
              </h2>
            </div>
          </div>

          <div className="hidden grid-cols-3 items-center gap-10 lg:grid">
            <div className="col-span-1 flex flex-col justify-center space-y-4">
              {INDUSTRIES.map((ind, i) => {
                const TabIcon = ind.icon;
                const isActive = active === i;

                return (
                  <button
                    key={ind.id}
                    onClick={() => setActive(i)}
                    className="group relative flex w-full"
                  >
                    <div
                      className={`relative flex w-full items-center gap-4 rounded-tl-xl rounded-bl-xl px-5 py-4 text-left transition-all duration-300 ${
                        isActive
                          ? "bg-primary-darker text-white shadow-xl"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                      style={{
                        clipPath: "polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%)",
                      }}
                    >
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                          isActive ? "bg-black/40" : "bg-white/10"
                        }`}
                      >
                        <TabIcon className="h-5 w-5" />
                      </div>

                      <div className="text-left">
                        <p className="font-semibold">{ind.label}</p>
                        <p className="text-xs font-medium tracking-wide text-white/80">
                          Preventive maintenance
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="col-span-2 flex items-center">
              <div className="w-full">
                <div className="p-8 md:p-10">
                  <h3 className="font-heading mb-4 text-3xl font-bold text-white lg:text-6xl">
                    {industry.headline}
                  </h3>
                  <p className="font-heading text-base leading-relaxed text-white lg:text-2xl">
                    {industry.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5 lg:hidden">
            {INDUSTRIES.map((ind) => {
              const Icon = ind.icon;

              return (
                <div
                  key={ind.id}
                  className="relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary/80 flex h-10 w-10 items-center justify-center rounded-lg text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{ind.headline}</h3>
                  </div>

                  <p className="text-sm leading-relaxed text-white/90">{ind.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
