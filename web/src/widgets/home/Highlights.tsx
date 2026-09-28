import { RiToolsLine, RiShieldFlashLine, RiExchangeLine, RiShieldCheckLine } from "react-icons/ri";

const items = [
  {
    icon: RiToolsLine,
    title: "Flexible Machine Rentals",
    desc: "Tailored short- and long-term rental terms designed to match your project schedule",
  },
  {
    icon: RiShieldFlashLine,
    title: "Wide Equipment Range",
    desc: "Comprehensive fleet of certified welding, power generation, and industrial equipment",
  },
  {
    icon: RiExchangeLine,
    title: "Cost-Effective Solutions",
    desc: "Competitive rental rates and quality pre-owned machines that maximize project ROI",
  },
  {
    icon: RiShieldCheckLine,
    title: "Ready-to-Deploy Machines",
    desc: "Fully calibrated, site-inspected equipment prepared for immediate mobilization across KSA",
  },
];

export default function Highlights() {
  return (
    <section className="relative w-full max-lg:hidden">
      <div className="container">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-4xl border border-white bg-white/20 px-4 py-12 text-center shadow-sm backdrop-blur-sm lg:-mt-10"
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-[120%] bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-1400 ease-out group-hover:translate-x-[120%]" />
                <Icon className="group-hover:text-secondary text-primary-light text-5xl transition-colors duration-300" />
                <h3 className="font-heading group-hover:text-primary text-xl font-bold tracking-widest text-neutral-900 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="max-w-xs text-sm text-neutral-500">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
