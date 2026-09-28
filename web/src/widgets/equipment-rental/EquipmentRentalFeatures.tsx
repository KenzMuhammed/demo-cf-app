import { motion } from "framer-motion";
import {
  RiHammerFill,
  RiCustomerService2Fill,
  RiFileList3Fill,
  RiCheckboxCircleLine,
} from "react-icons/ri";
import { FiTruck } from "react-icons/fi";

const features = [
  {
    icon: <RiHammerFill className="text-3xl" />,
    title: "Wide Range of Industrial Equipment",
    description:
      "We provide a wide range of industrial equipment for rental, supported by a dedicated service team to ensure reliable performance on-site.",
    points: ["Modern Fleet", "Certified Machines", "Technician Support"],
  },
  {
    icon: <RiCustomerService2Fill className="text-3xl" />,
    title: "24/7 Support & Maintenance",
    description:
      "Our rental solutions include scheduled maintenance, 24/7 support, and replacement options to keep your operations running without interruptions.",
    points: ["Quick Response", "On-site Service", "Equipment Standby"],
  },
  {
    icon: <RiFileList3Fill className="text-3xl" />,
    title: "Managed Documentation",
    description:
      "All rentals are managed through proper contracts and documentation, ensuring a smooth and professional experience from start to finish.",
    points: ["Simple Contracts", "Clear Pricing", "Legally Compliant"],
  },
];

export default function EquipmentRentalFeatures() {
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
    <section className="relative overflow-hidden bg-slate-50 py-14 md:py-24">
      <div className="pointer-events-none absolute inset-0 z-0 select-none">
        <div className="bg-primary/5 absolute top-0 right-0 h-[600px] w-[600px] translate-x-1/4 -translate-y-1/2 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] -translate-x-1/4 translate-y-1/2 rounded-full bg-blue-500/5 blur-[100px]" />

        <div className="absolute inset-0 opacity-6 contrast-125 grayscale">
          <img
            src="/widgets/equipment-rental/features-bg-light.webp"
            alt="Technical Pattern"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="mb-12 flex items-center gap-6 text-slate-900 lg:mb-16">
          <FiTruck className="text-primary h-12 w-12 lg:h-14 lg:w-14" />
          <div className="hidden h-10 w-px bg-slate-300 md:block" />
          <div>
            <h2 className="font-heading text-3xl font-bold uppercase lg:text-4xl">
              Reliable Equipments, <span className="text-primary">Ready When You Are</span>
            </h2>
            <p className="text-sm text-slate-500">
              Dependable industrial solutions for your operations
            </p>
          </div>
        </div>

        <motion.div
          variants={containerAnim}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={itemAnim}
              className="group hover:border-primary/30 relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/40 p-10 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:bg-white/80 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)]"
            >
              <div className="absolute -inset-2 opacity-0 transition-opacity duration-1000 group-hover:opacity-100">
                <div className="bg-primary/5 absolute top-0 right-0 h-40 w-40 rounded-full blur-3xl" />
              </div>

              <div className="relative z-10">
                <div className="text-primary group-hover:bg-primary group-hover:shadow-primary/25 mb-10 flex h-20 w-20 items-center justify-center rounded-[1.5rem] border border-slate-100 bg-white shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:text-white group-hover:shadow-lg">
                  {feature.icon}
                </div>

                <h3 className="font-heading group-hover:text-primary mb-5 text-2xl font-bold text-slate-900 transition-colors">
                  {feature.title}
                </h3>

                <p className="mb-8 text-base leading-relaxed text-slate-600 transition-colors group-hover:text-slate-700">
                  {feature.description}
                </p>

                <div className="space-y-4 border-t border-slate-100/50 pt-6">
                  {feature.points.map((point, pIndex) => (
                    <div
                      key={pIndex}
                      className="flex items-center gap-3 text-sm font-semibold text-slate-500 transition-colors group-hover:text-slate-600"
                    >
                      <div className="flex-shrink-0">
                        <RiCheckboxCircleLine className="text-primary text-xl" />
                      </div>
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
