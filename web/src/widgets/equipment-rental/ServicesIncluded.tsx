import { motion } from "framer-motion";
import { RiSettings4Line } from "react-icons/ri";

const services = [
  {
    title: "Ready-to-Use Equipment",
    desc: "Well-maintained equipment supplied in ready-to-use condition for immediate deployment on your project site.",
    img: "/widgets/equipment-rental/services/ready-to-use.webp",
  },
  {
    title: "Scheduled Maintenance Support",
    desc: "Preventive maintenance carried out during the rental period to ensure consistent performance and safety.",
    img: "/widgets/equipment-rental/services/maintenance.webp",
  },
  {
    title: "24/7 Technical Support",
    desc: "Round-the-clock assistance from our technical experts to handle breakdowns and operational issues.",
    img: "/services/service-18.webp",
  },
  {
    title: "Onsite Service & Troubleshooting",
    desc: "Dedicated service support at your location to quickly resolve equipment-related issues and minimize downtime.",
    img: "/services/service-01.webp",
  },
  {
    title: "Replacement Equipment",
    desc: "Backup equipment provided in case of major breakdowns to avoid any interruptions to your operations.",
    img: "/services/service-05.webp",
  },
  {
    title: "Dedicated Service Team",
    desc: "Continuous support from a specialized technical team to manage all performance and service needs.",
    img: "/services/service-07.webp",
  },
  {
    title: "Contracts & Documentation",
    desc: "Clear rental agreements and proper documentation, ensuring a smooth and professional experience from start to finish.",
    img: "/services/service-15.webp",
  },
];

export default function ServicesIncluded() {
  const containerAnim = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 lg:py-32">
      <div className="absolute inset-0 z-0">
        <img
          src="/services/sbg1.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-slate-950/80 to-slate-950" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="mb-12 flex gap-4 text-white md:mb-16 md:items-center md:gap-6 lg:mb-20">
          <RiSettings4Line className="text-primary h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14" />
          <div className="h-10 w-px bg-slate-700 max-md:hidden" />
          <div>
            <h2 className="font-heading text-3xl font-bold uppercase lg:text-4xl">
              Services Included in <span className="text-primary">Rental Equipment</span>
            </h2>
            <p className="text-slate-400 max-md:text-sm">
              Comprehensive support solutions to ensure your rental experience is seamless and
              productive.
            </p>
          </div>
        </div>

        <motion.div
          variants={containerAnim}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((s, index) => (
            <motion.div
              key={index}
              variants={itemAnim}
              className={`group hover:border-primary/50 hover:shadow-primary/10 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:shadow-2xl ${
                index >= 4 ? "lg:col-span-1" : ""
              } ${index === 4 ? "lg:col-start-1" : ""}`}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent" />
              </div>

              <div className="relative p-8">
                <h3 className="font-heading group-hover:text-primary mb-3 text-xl font-bold text-white transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400 transition-colors group-hover:text-slate-300">
                  {s.desc}
                </p>
              </div>

              <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_50%_-20%,rgba(255,255,255,0.08),transparent_40%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
