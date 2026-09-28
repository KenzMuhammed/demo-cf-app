import { FaTools } from "react-icons/fa";
import {
  RiShieldFlashLine,
  RiCoinLine,
  RiSettings2Line,
  RiPassValidLine,
  RiCustomerService2Line,
  RiTeamLine,
  RiPulseLine,
  RiCalendarEventLine,
} from "react-icons/ri";

const features = [
  {
    title: "Reduced Downtime",
    desc: "Quick support and replacement options help keep your operations running without interruptions.",
    icon: <RiShieldFlashLine />,
    tag: "Uptime 99.9%",
  },
  {
    title: "Cost-Effective Solution",
    desc: "Access the equipment you need without upfront investment, making it easier to manage project costs.",
    icon: <RiCoinLine />,
    tag: "ROI Focused",
  },
  {
    title: "Reliable, Well-Maintained Equipment",
    desc: "Modern equipment maintained regularly to ensure consistent performance and reliability.",
    icon: <RiSettings2Line />,
    tag: "Certified",
  },
  {
    title: "Quality & Compliance",
    desc: "All equipment meets required standards, including SASO compliance where applicable.",
    icon: <RiPassValidLine />,
    tag: "SASO Std.",
  },
  {
    title: "24/7 Technical Support",
    desc: "Round-the-clock assistance with onsite support and mobile service units when needed.",
    icon: <RiCustomerService2Line />,
    tag: "Live 24/7",
  },
  {
    title: "Certified Technical Team",
    desc: "Experienced technicians ensuring proper handling, servicing, and support throughout the rental period.",
    icon: <RiTeamLine />,
    tag: "Expert Led",
  },
  {
    title: "Preventive Maintenance Support",
    desc: "Regular checks and servicing to maintain performance during the rental duration.",
    icon: <RiPulseLine />,
    tag: "Proactive",
  },
  {
    title: "Flexible Rental Plans",
    desc: "Customized rental agreements based on project duration and operational requirements.",
    icon: <RiCalendarEventLine />,
    tag: "Customized",
  },
];

export default function WhyChooseUsNew() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="mb-20 flex items-center justify-center gap-6 text-gray-900">
          <FaTools className="text-primary h-12 w-12 lg:h-14 lg:w-14" />
          <div className="hidden h-10 w-px bg-gray-300 md:block" />
          <div>
            <h2 className="font-heading text-3xl font-bold uppercase lg:text-4xl">
              Why Choose <span className="text-primary">Our Equipment For Rent</span>
            </h2>
            <p className="text-sm font-medium text-gray-700">
              The Standard in Industrial Reliability
            </p>
          </div>
        </div>

        <div className="relative grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
          <div className="from-primary/50 absolute top-0 left-1/2 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b via-slate-200 to-transparent md:block" />

          {features.map((item, idx) => (
            <div
              key={idx}
              className={`group relative flex gap-6 transition-all duration-500 ${idx % 2 === 0 ? "md:flex-row-reverse md:text-right" : "md:flex-row"}`}
            >
              <div className="relative z-20 flex h-16 w-16 shrink-0 items-center justify-center">
                <div className="bg-primary/10 group-hover:bg-primary/20 absolute inset-0 animate-pulse rounded-full" />
                <div className="text-primary group-hover:bg-primary z-10 flex h-12 w-12 items-center justify-center rounded-full border border-slate-100 bg-white text-xl shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:text-white">
                  {item.icon}
                </div>
              </div>

              <div className="flex flex-col">
                <div
                  className={`mb-2 flex items-center gap-3 ${idx % 2 === 0 ? "md:justify-end" : "justify-start"}`}
                >
                  <span className="text-[10px] font-black tracking-widest text-orange-700 uppercase">
                    [ 0{idx + 1} ]
                  </span>
                  <span className="rounded bg-slate-200 px-2 py-0.5 text-[9px] font-bold text-slate-800 uppercase">
                    {item.tag}
                  </span>
                </div>

                <h3 className="group-hover:text-primary text-xl font-bold text-slate-900 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 group-hover:text-slate-900">
                  {item.desc}
                </p>
              </div>

              <div className="absolute top-16 left-8 h-full w-px bg-slate-200 md:hidden" />
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center opacity-20">
          <div className="via-primary h-px w-full max-w-4xl bg-gradient-to-r from-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
