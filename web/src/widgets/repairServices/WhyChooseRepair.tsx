import { FiClock, FiSliders, FiTrendingDown, FiFileText, FiTool } from "react-icons/fi";
import { HiOutlineCube } from "react-icons/hi";
import { PiTreeStructure } from "react-icons/pi";
import { TbHours24 } from "react-icons/tb";

const FEATURES = [
  {
    title: "Quick Response & Support",
    description:
      "A responsive service team focused on fast turnaround and reliable support when you need it.",
    icon: FiClock,
  },
  {
    title: "Flexible Service Approach",
    description: "Service solutions adapted to your requirements, timelines, and budget.",
    icon: FiSliders,
  },
  {
    title: "24/7 Assistance",
    description: "Support available whenever required, including after-service assistance.",
    icon: TbHours24,
  },
  {
    title: "Reduced Downtime",
    description:
      "Access to rental equipment to keep your operations running during repairs or maintenance.",
    icon: FiTrendingDown,
  },
  {
    title: "Structured Service Execution",
    description:
      "A well-organized technical team ensuring consistent and efficient service delivery.",
    icon: PiTreeStructure,
  },
  {
    title: "Transparent Process",
    description:
      "ERP-based service tracking, detailed inspection reports, and a clear quotation process.",
    icon: HiOutlineCube,
  },
  {
    title: "Proper Documentation",
    description: "Complete service records and history maintained for future reference.",
    icon: FiFileText,
  },
];

export default function WhyChooseRepair() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
        <div className="bg-primary/20 absolute top-0 right-1/4 h-96 w-96 -translate-y-1/2 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 left-1/4 h-96 w-96 translate-y-1/2 rounded-full bg-cyan-500/10 blur-[130px]" />
        <img
          src="/services/vector.svg"
          alt="Pattern background"
          className="absolute inset-0 h-full w-full object-cover opacity-10"
        />
      </div>
      <div className="relative z-10 container px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex gap-5 text-white md:items-center lg:mb-16">
          <FiTool className="text-primary h-12 w-12 lg:h-14 lg:w-14" />
          <div className="h-[60%] w-px bg-white max-md:hidden" />
          <div>
            <h2 className="font-heading text-3xl font-bold uppercase lg:text-4xl">
              Why <span className="text-primary">Choose </span> This Service
            </h2>
            <p className="text-slate-400">
              Keeping your machinery performing at its best, every time
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            const remainder = FEATURES.length % 3;
            const isLastRow = i >= FEATURES.length - remainder;
            let alignmentClasses = "";
            if (isLastRow) {
              if (remainder === 1) {
                alignmentClasses = "lg:col-start-2";
              } else if (remainder === 2) {
                if (i === FEATURES.length - 2) {
                  alignmentClasses = "lg:col-start-1 lg:translate-x-1/2";
                } else if (i === FEATURES.length - 1) {
                  alignmentClasses = "lg:col-start-2 lg:translate-x-1/2";
                }
              }
            }
            const gridClass = `group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:border-primary/50 hover:bg-white/10 hover:shadow-[0_15px_40px_-15px_rgba(224,30,55,0.4)] ${alignmentClasses}`;
            return (
              <div key={i} className={gridClass}>
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="from-primary/10 absolute inset-0 bg-linear-to-b via-transparent to-transparent" />
                </div>
                <div className="bg-primary/10 border-primary/20 text-primary group-hover:border-primary/40 group-hover:bg-primary/20 relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-xl border transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(224,30,55,0.3)]">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="relative z-10 mb-4 text-xl font-bold text-white transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="relative z-10 text-base leading-relaxed text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                  {feature.description}
                </p>
                <div className="bg-primary/5 group-hover:bg-primary/20 absolute -right-4 -bottom-4 h-32 w-32 rounded-full blur-[30px] transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
