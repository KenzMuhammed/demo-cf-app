import { useEffect, useRef, useState } from "react";
import { BiBuilding, BiRocket, BiMap, BiGroup, BiStoreAlt } from "react-icons/bi";

const timeline = [
  {
    year: "2020",
    title: "The Foundation",
    icon: BiBuilding,
    description:
      "Absolute Solutions Company for Iron (ASCO) was established in Saudi Arabia with a focus on industrial welding, cutting, and fabrication solutions.",
  },
  {
    year: "2021",
    title: "Commercial Operations Begin",
    icon: BiRocket,
    description:
      "ASCO commenced commercial operations with its head office based in Dammam - Al Khobar.",
  },
  {
    title: "Laying The Foundation",
    icon: BiStoreAlt,
    description:
      "Focused on supplying industrial equipment and building partnerships with globally recognized brands.",
  },
  {
    title: "Expanding Across Saudi Arabia",
    icon: BiMap,
    description: "Operational presence strengthened across Dammam, Jubail, Riyadh, and Jeddah.",
  },
  {
    title: "Building a Strong Team",
    icon: BiGroup,
    description: "Grew into a structured organization with 50+ professionals.",
  },
  {
    year: "Today",
    title: "ASCO Today",
    icon: BiBuilding,
    description:
      "Supporting industrial operations across Saudi Arabia while expanding capabilities.",
  },
];

export default function Journey() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const middle = window.innerHeight / 2;

      refs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= middle && rect.bottom >= middle) {
          setActive(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative bg-black bg-cover bg-right bg-no-repeat py-14 text-white lg:py-24 xl:py-32">
      <img
        src="/about/section-bg-shape.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-right opacity-80"
      />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-neutral-950 via-[#0a1a0f] to-[#102417] opacity-40" />
      <div className="relative container mx-auto px-6">
        <div className="flex w-full flex-col gap-14 lg:flex-row lg:gap-30">
          <div className="h-fit lg:sticky lg:top-36 lg:w-5/12">
            <h2 className="font-heading text-4xl font-bold lg:text-5xl">
              Our <span className="text-lime-400">Journey</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              We are always with you to find solution for all your industrial & mechanical needs.
            </p>
            <div className="mt-10 max-lg:hidden lg:mt-12">
              <img
                src="/about/journey/journey-main1.webp"
                width={490}
                height={735}
                alt=""
                className="max-w-90"
              />
            </div>
          </div>
          <div className="relative flex lg:w-7/12">
            <div className="absolute top-2 left-0 h-full w-px bg-slate-700">
              <div
                className="bg-lime-400 transition-all duration-500"
                style={{
                  height: `${((active + 1) / timeline.length) * 100}%`,
                }}
              />
            </div>
            <div className="flex w-full flex-col gap-24">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const isActive = index === active;

                return (
                  <div
                    key={index}
                    ref={(el) => {
                      refs.current[index] = el;
                    }}
                    className="relative"
                  >
                    <div
                      className={`absolute top-2 -left-1.75 h-4 w-4 rounded-full transition-all duration-300 ${
                        isActive ? "scale-125 bg-lime-400" : "bg-slate-600"
                      }`}
                    />
                    <div
                      className={`ms-10 transition-all duration-700 ${
                        isActive ? "translate-y-0 opacity-100" : "translate-y-6 opacity-40"
                      }`}
                    >
                      <div className="mb-4 flex items-center gap-4">
                        <div className="text-lime-400">
                          <Icon size={28} />
                        </div>
                        {item.year && (
                          <span className="text-xl font-bold text-lime-400 lg:text-3xl">
                            {item.year}
                          </span>
                        )}
                      </div>
                      <h3 className="font-heading mb-4 text-3xl font-semibold xl:text-4xl">
                        {item.title}
                      </h3>
                      <p className="max-w-xl text-lg leading-relaxed text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
