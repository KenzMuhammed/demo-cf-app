import { useEffect, useRef } from "react";
import { MdOutlineVerified } from "react-icons/md";

type Equipment = {
  title: string;
  description: string;
  image: string;
};

const equipmentData: Equipment[] = [
  {
    title: "CNC & Conventional Machine Tools",
    description:
      "CNC lathe machines, CNC milling machines (VMC), CNC drilling machines, CNC boring machines, Vertical boring machines, Horizontal boring machines, Surface grinding machines",
    image: "/services/cnc-drill.webp",
  },
  {
    title: "Welding & Cutting Equipment",
    description:
      "MMA, MIG, TIG, SAW, Laser welding machines, CNC laser cutting machines, Plasma cutting machines, Oxy-fuel cutting machines",
    image: "/services/welding-automation.webp",
  },
  {
    title: "Industrial & Fabrication Equipment",
    description:
      "Cladding machines, Bandsaw machines, Radial drilling machines, Pipe cutting and beveling machines",
    image: "/services/fabrication-equipments.webp",
  },
  {
    title: "Additional Industrial Equipment",
    description:
      "Power tools and industrial tools, Diesel welding machines, Material handling equipment such as forklifts",
    image: "/services/service-02.webp",
  },
];

export default function EquipmentRepair() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const el = entry.target as HTMLElement;
          const index = Number(el.dataset.index);

          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0) scale(1)";
          }, index * 140);

          observer.unobserve(el);
        });
      },
      { threshold: 0.15 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="absolute inset-0 bg-linear-to-br from-gray-950 via-teal-950 to-gray-900" />
      <div className="absolute top-0 right-0 h-full w-full">
        <img
          src="/services/vector.svg"
          alt="Equipment Background"
          width={1200}
          height={1200}
          className="h-full w-full opacity-10"
        />
      </div>
      <div className="relative z-10 container px-4 sm:px-6 lg:px-8">
        <div className="flex">
          <div className="mb-8 flex gap-4 md:mb-12 md:items-center md:gap-6 lg:mb-14">
            <MdOutlineVerified className="text-secondary h-10 w-10 max-md:mt-0.5 md:h-12 md:w-12 lg:h-14 lg:w-14" />
            <div className="h-[60%] w-px bg-slate-300 max-md:hidden" />
            <div>
              <h2 className="text-primary font-heading text-3xl font-bold uppercase lg:text-4xl">
                <span className="text-white">Equipment We </span>Repair
              </h2>
              <p className="text-slate-600 max-md:text-sm">
                Our equipment repair services cover a wide range of machines used across industrial
                and fabrication environments.
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {equipmentData.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              data-index={index}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg"
              style={{
                opacity: 0,
                transform: "translateY(50px) scale(0.96)",
                transition: "opacity 0.7s ease, transform 0.7s cubic-bezier(0.22,1,0.36,1)",
                willChange: "opacity, transform",
              }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
              </div>
              <div className="relative flex flex-1 flex-col p-6">
                <div className="bg-primary absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full" />
                <h3 className="text-base font-bold tracking-wide text-slate-800 uppercase">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
