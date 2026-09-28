import { FiArrowRight, FiMapPin, FiBriefcase, FiChevronDown } from "react-icons/fi";
import { Button } from "@/components/ui/Button";
import { BiBriefcase } from "react-icons/bi";
import { useState } from "react";

type Role = {
  title: string;
  experience: string;
  location: string;
  type: string;
  description: string;
};

const roles: Role[] = [
  // Uncomment the roles below to populate the list
  {
    title: "Service Technician",
    experience: "2 — 4 Years",
    location: "Reyadh",
    type: "Full-time",
    description:
      "Join our expert team to maintain and repair advanced welding and industrial equipment. You will perform scheduled inspections, troubleshoot issues, and ensure consistent operational performance.",
  },
  {
    title: "Sales Executive",
    experience: "3+ Years",
    location: "Damam",
    type: "Full-time",
    description:
      "Drive growth by connecting industrial clients with our premium preventive maintenance services. Build lasting relationships and help businesses optimize their operational efficiency.",
  },
  {
    title: "Welding Engineer",
    experience: "5+ Years",
    location: "Jubail",
    type: "Contract",
    description:
      "Oversee operations, ensure strict quality standards, and innovate fabrication processes. Collaborate with cross-functional teams to deliver superior engineering solutions.",
  },
];

export default function OpenRoles() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="open-roles" className="relative overflow-hidden bg-slate-950 py-16 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[140px]" />
        <div className="pointer-events-none absolute right-0 bottom-0 opacity-40">
          <img
            src="/about/pattern-2.webp"
            alt="Decorative pattern"
            width={600}
            height={400}
            className="rotate-180 object-contain"
          />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0">
        <img
          src="/career/vector3.svg"
          alt="Decorative background"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-25"
        />
      </div>
      <div className="relative z-10 container">
        <div className="flex">
          <div className="mb-8 flex gap-4 md:mb-12 md:items-center md:gap-6 lg:mb-14">
            <BiBriefcase className="text-primary h-10 w-10 max-md:mt-0.5 md:h-12 md:w-12 lg:h-14 lg:w-14" />
            <div className="h-[60%] w-px bg-slate-300 max-md:hidden" />
            <div>
              <h2 className="font-heading text-3xl font-bold text-white uppercase lg:text-4xl">
                Current Openings
              </h2>
              <p className="mt-2 max-w-2xl text-slate-400 max-md:text-sm">
                Join our team of experts. We support a wide range of welding and fabrication
                operations across industrial sectors to maintain consistent performance.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-4xl space-y-4">
          {roles.length > 0 ? (
            roles.map((role, i) => {
              const isActive = activeIndex === i;
              return (
                <div
                  key={i}
                  onClick={() => setActiveIndex(isActive ? null : i)}
                  className={`group relative cursor-pointer overflow-hidden rounded-2xl border backdrop-blur-md transition-all duration-500 ${
                    isActive
                      ? "border-indigo-500/50 bg-indigo-500/10 shadow-[0_0_30px_rgba(99,102,241,0.15)]"
                      : "border-white/10 bg-white/5 hover:border-indigo-400/40 hover:bg-white/10"
                  }`}
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-linear-to-r from-indigo-500/10 via-transparent to-cyan-500/10" />
                  </div>
                  <div className="relative z-10 p-6 md:p-8">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div>
                        <div className="flex items-center gap-3">
                          <h3
                            className={`text-xl font-semibold transition-colors duration-300 ${isActive ? "text-indigo-300" : "text-white"}`}
                          >
                            {role.title}
                          </h3>
                          <span className="rounded-full border border-white/5 bg-white/10 px-3 py-1 text-xs font-medium text-slate-300">
                            {role.type}
                          </span>
                        </div>

                        <div className="mt-3 flex flex-wrap items-center gap-5 text-sm text-slate-400">
                          <span className="flex items-center gap-2">
                            <FiBriefcase className="text-indigo-400/70" />
                            {role.experience}
                          </span>
                          <span className="flex items-center gap-2">
                            <FiMapPin className="text-cyan-400/70" />
                            {role.location}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div
                          className={`hidden transition-all duration-300 md:block ${isActive ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-4 opacity-0"}`}
                        >
                          <Button
                            variant="primary"
                            className="group/btn flex items-center gap-2"
                            onClick={() => {
                              window.location.href = "/career-apply";
                            }}
                          >
                            View Details
                            <FiArrowRight className="transition-transform group-hover/btn:translate-x-1" />
                          </Button>
                        </div>
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-transform duration-500 ${isActive ? "rotate-180 border-indigo-500/30 bg-indigo-500/20 text-indigo-300" : "text-slate-400 group-hover:text-white"}`}
                        >
                          <FiChevronDown className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                    <div
                      className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isActive ? "mt-6 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"}`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-white/10 pt-6">
                          <p className="max-w-3xl leading-relaxed text-slate-300">
                            {role.description}
                          </p>
                          <div className="mt-6 md:hidden">
                            <Button
                              variant="primary"
                              className="group/btn flex w-full items-center justify-center gap-2"
                              onClick={(e) => {
                                e.stopPropagation();
                                alert(
                                  "Application process starting... \n\nThis is a placeholder for actual workflow."
                                );
                              }}
                            >
                              Apply Now
                              <FiArrowRight className="transition-transform group-hover/btn:translate-x-1" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-6 py-16 text-center backdrop-blur-md transition-all duration-500 hover:border-indigo-500/30 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] md:py-24">
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-linear-to-b from-indigo-500/10 via-transparent to-transparent" />
              </div>
              <div className="relative z-10 flex max-w-lg flex-col items-center">
                <div className="relative mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 shadow-[0_0_40px_rgba(99,102,241,0.2)]">
                  <div className="absolute inset-0 animate-ping rounded-full bg-indigo-500/20 opacity-20 duration-1000" />
                  <FiBriefcase className="relative z-10 h-10 w-10" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                  No Open Roles Currently
                </h3>
                <p className="mb-8 text-base leading-relaxed text-slate-400">
                  We are not actively hiring for any positions right now, but we are always eager to
                  connect with exceptional talent. Check back later for new opportunities.
                </p>
                <Button
                  variant="primary"
                  className="group/btn flex items-center gap-2"
                  onClick={() => {
                    window.location.href = "/contact";
                  }}
                >
                  Contact Us
                  <FiArrowRight className="transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
