import Button from "@/components/ui/Button";
import {
  RiSettings4Line,
  RiFlashlightFill,
  RiScissorsFill,
  RiTruckFill,
  RiToolsFill,
  RiPlugFill,
} from "react-icons/ri";

const equipmentGroups = [
  {
    category: "Welding Equipment",
    icon: <RiFlashlightFill />,
    tag: "WLD-SYS",
    items: [
      "Diesel engine-driven welding machines",
      "Portable welding machines (electrical)",
      "Heavy-duty SAW welding machines",
    ],
    featured: true,
  },
  {
    category: "Cutting & Gouging",
    icon: <RiScissorsFill />,
    tag: "CUT-TECH",
    items: ["Portable cutting machines", "Diesel and portable gouging machines"],
    featured: false,
  },
  {
    category: "Power & Support",
    icon: <RiPlugFill />,
    tag: "PWR-GRID",
    items: ["Power generators", "Tower lights"],
    featured: false,
  },
  {
    category: "Material Handling",
    icon: <RiTruckFill />,
    tag: "LOG-UNIT",
    items: ["Forklifts"],
    featured: false,
  },
  {
    category: "Workshop & Utility",
    icon: <RiToolsFill />,
    tag: "FAB-TOOL",
    items: ["Electrode ovens", "Other industrial and fabrication equipment"],
    featured: false,
  },
];

export default function EquipmentFleetGlassy() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="pointer-events-none absolute right-0 bottom-20 w-full overflow-hidden whitespace-nowrap opacity-[0.02] select-none">
        <span className="text-[25vw] leading-none font-black tracking-tighter text-slate-900 uppercase">
          Asco
        </span>
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.08]"
        style={{
          backgroundImage: `linear-gradient(#e8a3b6 1px, transparent 1px), linear-gradient(90deg, #e8a3b6 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="border-primary mb-16 flex flex-col items-start gap-6 border-l-4 pl-6 md:flex-row md:items-center md:justify-between md:pl-8">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl leading-none font-bold uppercase lg:text-4xl">
              Equipment Available for <span className="text-primary">Rental</span>
            </h2>
            <p className="mt-4 text-lg font-medium text-slate-600">
              We offer a range of industrial equipment for rental to support different operational
              and project requirements.
            </p>
          </div>
          <RiSettings4Line className="hidden h-20 w-20 animate-[spin_12s_linear_infinite] text-slate-200 md:block" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {equipmentGroups.map((group, idx) => (
            <div
              key={idx}
              className={`group bg-secondary-light/2 slope-lg hover:bg-secondary-light/5 relative flex flex-col justify-between overflow-hidden rounded-tr-[3rem] p-8 backdrop-blur-md transition-all duration-500 ${idx === 0 ? "border-primary/20 shadow-primary/5 shadow-xl lg:row-span-2 lg:h-full" : ""}`}
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-500 ${idx === 0 ? "bg-primary text-white" : "group-hover:bg-primary bg-slate-100 text-slate-900 group-hover:text-white"}`}
                  >
                    {group.icon}
                  </div>
                </div>

                <h3
                  className={`font-heading group-hover:text-primary mt-8 font-bold text-slate-900 transition-colors ${idx === 0 ? "text-3xl" : "text-2xl"}`}
                >
                  {group.category}
                </h3>

                <div className={`mt-6 space-y-4 ${idx === 0 ? "mb-10" : ""}`}>
                  {group.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="group-hover:bg-primary mt-1.5 h-1 w-4 shrink-0 rounded-full bg-slate-200 transition-colors" />
                      <p
                        className={`font-semibold transition-colors group-hover:text-slate-700 ${idx === 0 ? "text-base text-slate-700" : "text-sm text-slate-600"}`}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {idx === 0 && (
                <div className="relative z-10 mt-auto border-t border-slate-100 pt-8">
                  <p className="mb-4 text-xs font-bold tracking-tight text-slate-600 uppercase">
                    Ready to rent the right equipment?
                  </p>
                  <Button
                    variant="primary"
                    onClick={() => {
                      window.location.href = "/equipment-rental#enquiry";
                    }}
                  >
                    Enquiry Now
                  </Button>
                </div>
              )}

              <div className="from-primary/5 absolute top-0 right-0 h-24 w-24 bg-gradient-to-bl to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
