import {
  FaHardHat,
  FaTools,
  FaIndustry,
  FaCogs,
  FaWrench,
  FaFlask,
  FaBolt,
  FaShip,
} from "react-icons/fa";
import { useEffect, useRef } from "react";

export default function IndustriesData() {
  const wrappers = useRef<(HTMLDivElement | null)[]>([]);
  const inners = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const vh = window.innerHeight;

      wrappers.current.forEach((wrapper, i) => {
        if (!wrapper || !inners.current[i]) return;

        const rect = wrapper.getBoundingClientRect();
        const total = rect.height - vh;
        const raw = -rect.top / total;
        const clamped = Math.min(Math.max(raw, 0), 1);

        const start = 0.25;
        const end = 0.85;

        let progress = (clamped - start) / (end - start);
        progress = Math.min(Math.max(progress, 0), 1);

        const scale = 1 - progress * 0.35;
        const opacity = 1 - progress;

        inners.current[i]!.style.transform = `scale(${scale})`;
        inners.current[i]!.style.opacity = `${opacity}`;
      });

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sections = [
    {
      image: "/industry/item-1.webp",
      overlay: "bg-slate-300/70",
      title: "Construction & Infrastructure",
      desc: "Supporting structural fabrication, on-site welding, equipment maintenance, and project-based industrial needs for infrastructure development.",
      items: [
        {
          icon: <FaHardHat className="mt-1 h-4 w-full text-amber-500 lg:h-6" />,
          title: "Structural Fabrication",
          text: "Precision fabrication for steel frameworks, bridges, buildings, and load-bearing structures.",
        },
        {
          icon: <FaTools className="mt-1 h-4 w-full text-amber-500 lg:h-6" />,
          title: "On-Site Equipment Support",
          text: "Maintenance and repair services ensuring uninterrupted construction progress.",
        },
      ],
    },
    {
      image: "/industry/item-2.webp",
      overlay: "bg-neutral-800/70",
      title: "Heavy Engineering & Fabrication",
      desc: "Delivering expert welding solutions, fabrication assistance, and equipment maintenance for complex engineering and heavy-duty fabrication projects.",
      items: [
        {
          icon: <FaIndustry className="mt-1 h-4 w-full text-amber-500 lg:h-6" />,
          title: "Heavy Component Fabrication",
          text: "Manufacturing and welding of heavy engineering assemblies and components.",
        },
        {
          icon: <FaTools className="mt-1 h-4 w-full text-amber-500 lg:h-6" />,
          title: "Machine Restoration",
          text: "Refurbishment and structural repair extending machinery lifespan.",
        },
      ],
    },
    {
      image: "/industry/item-3.webp",
      overlay: "bg-slate-800/80",
      title: "Manufacturing & Industrial Plants",
      desc: "Maintaining seamless operations with preventive maintenance, repair services, equipment rentals, and technical support for industrial machinery.",
      items: [
        {
          icon: <FaCogs className="mt-1 h-4 w-full text-amber-500 lg:h-6" />,
          title: "Preventive Maintenance",
          text: "Regular servicing to reduce downtime and improve efficiency.",
        },
        {
          icon: <FaWrench className="mt-1 h-4 w-full text-amber-500 lg:h-6" />,
          title: "Industrial Equipment Repair",
          text: "Reliable repair support ensuring uninterrupted production.",
        },
      ],
    },
    {
      image: "/industry/item-4.webp",
      overlay: "bg-neutral-600/70",
      title: "Petrochemical & Chemical Industries",
      desc: "Delivering safe, compliant welding, cutting, and maintenance services tailored for high-risk, process-driven industrial environments.",
      items: [
        {
          icon: <FaFlask className="mt-1 h-4 w-full text-amber-500 lg:h-6" />,
          title: "Pipeline & Tank Welding",
          text: "Specialized welding ensuring safety and durability.",
        },
        {
          icon: <FaTools className="mt-1 h-4 w-full text-amber-500 lg:h-6" />,
          title: "Plant Maintenance",
          text: "Maintenance minimizing operational risks.",
        },
      ],
    },
    {
      image: "/industry/item-5.webp",
      overlay: "bg-neutral-800/80",
      title: "Power & Energy",
      desc: "Assisting power plants and energy projects with welding solutions, maintenance, equipment rentals, and on-site technical support.",
      items: [
        {
          icon: <FaBolt className="mt-1 h-4 w-full text-amber-500 lg:h-6" />,
          title: "Power Equipment Welding",
          text: "Welding services for turbines, boilers, and structures.",
        },
        {
          icon: <FaTools className="mt-1 h-4 w-full text-amber-500 lg:h-6" />,
          title: "Maintenance Support",
          text: "Reliable servicing for uninterrupted energy production.",
        },
      ],
    },
    {
      image: "/industry/item-6.webp",
      overlay: "bg-slate-800/60",
      title: "Shipyards & Marine Fabrication",
      desc: "Delivering reliable welding and fabrication services, plus equipment maintenance and rentals for shipbuilding and marine repair projects",
      items: [
        {
          icon: <FaShip className="mt-1 h-4 w-full text-amber-500 lg:h-6" />,
          title: "Ship Structure Welding",
          text: "Marine-grade welding ensuring durability and safety.",
        },
        {
          icon: <FaTools className="mt-1 h-4 w-full text-amber-500 lg:h-6" />,
          title: "Marine Equipment Repair",
          text: "Maintenance for marine operational efficiency.",
        },
      ],
    },
    {
      image: "/industry/item-7.webp",
      overlay: "bg-primary/40",
      title: "Steel Fabrication & Metal Workshops",
      desc: "Supplying welding machines, cutting solutions, maintenance support, and refurbishment services for fabrication shops of all scales.",
      items: [
        {
          icon: <FaIndustry className="mt-1 h-4 w-full text-amber-500 lg:h-6" />,
          title: "Custom Fabrication",
          text: "Fabrication tailored to industrial workshop needs.",
        },
        {
          icon: <FaTools className="mt-1 h-4 w-full text-amber-500 lg:h-6" />,
          title: "Machine Maintenance",
          text: "Ensuring workshop productivity.",
        },
      ],
    },
    {
      image: "/industry/item-8.webp",
      overlay: "bg-white/70",
      title: "Maintenance & Shutdown Projects",
      desc: "Delivering fast-response support, equipment rentals, AMC services, and on-site technical teams for planned shutdowns and critical maintenance operations.",
      items: [
        {
          icon: <FaTools className="mt-1 h-4 w-full text-amber-500 lg:h-6" />,
          title: "Shutdown Maintenance",
          text: "Fast and reliable shutdown execution.",
        },
        {
          icon: <FaWrench className="mt-1 h-4 w-full text-amber-500 lg:h-6" />,
          title: "Emergency Repairs",
          text: "Immediate support reducing downtime.",
        },
      ],
    },
  ];

  return (
    <section className="bg-secondary-darker">
      {sections.map((section, i) => (
        <div
          key={i}
          ref={(el) => {
            wrappers.current[i] = el;
          }}
          className="-mb-[100vh] h-[200vh]"
        >
          <div className="sticky top-0 h-dvh overflow-hidden">
            <div
              ref={(el) => {
                inners.current[i] = el;
              }}
              className="relative h-full w-full will-change-transform"
            >
              <img
                src={section.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className={`absolute inset-0 z-10 ${section.overlay}`} />

              <div className="absolute inset-0 z-20 flex items-center">
                <div className="container">
                  <div className="grid min-h-[60vh] overflow-hidden rounded-2xl lg:grid-cols-2 lg:rounded-3xl">
                    <div className="relative hidden lg:block">
                      <img
                        src={section.image}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>

                    <div className="bg-neutral-900 text-white">
                      <div className="flex h-full flex-col justify-center p-10 lg:p-20">
                        <p className="mb-4 text-sm tracking-widest text-amber-500">
                          INDUSTRIES WE SERVE
                        </p>
                        <h2 className="font-heading mb-6 text-3xl font-bold lg:text-4xl">
                          {section.title}
                        </h2>

                        <p className="mb-6 text-neutral-300 lg:mb-10">{section.desc}</p>

                        {section.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex gap-5 border-t border-white/10 py-4 lg:gap-6"
                          >
                            <div className="shrink-0">{item.icon}</div>
                            <div>
                              <h3>{item.title}</h3>
                              <p className="text-neutral-400">{item.text}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
