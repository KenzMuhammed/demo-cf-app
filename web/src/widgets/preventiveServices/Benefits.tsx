import { FiActivity, FiShield } from "react-icons/fi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { IconType } from "react-icons";
import { useEffect, useRef } from "react";

type Benefit = {
  title: string;
  icon: IconType;
};

const benefits: Benefit[] = [
  {
    title: "Reduced Equipment Downtime",
    icon: FiActivity,
  },
  {
    title: "Extended Equipment Lifespan",
    icon: VscWorkspaceTrusted,
  },
  {
    title: "Improved Equipment Reliability",
    icon: FiShield,
  },
];

export default function Benefits() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;

      const rect = contentRef.current.getBoundingClientRect();

      // Parallax speed
      const speed = 0.15;

      const offset = rect.top * speed;

      // bottom -> top movement
      contentRef.current.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,#000_0px,#000_2px,transparent_2px,transparent_12px)] opacity-[0.05]"></div>
      <div className="bg-primary/5 absolute inset-y-0 left-1/2 w-100 -translate-x-1/2 blur-3xl"></div>
      <div className="relative z-10 container px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative max-lg:order-2">
            <img
              src="/services/benefit-1.webp"
              alt="Preventive Maintenance"
              width={700}
              height={500}
            />
          </div>
          <div
            ref={contentRef}
            className="transition-transform duration-300 ease-out max-lg:order-1"
          >
            <h2 className="font-heading text-primary-dark text-3xl font-bold uppercase lg:text-5xl">
              Benefits of Preventive Maintenance
            </h2>
            <p className="mt-4 max-w-xl text-lg text-slate-500">
              Regular preventive maintenance ensures industrial equipment operates safely,
              efficiently, and reliably throughout its lifecycle while minimizing unexpected
              downtime.
            </p>
            <div className="mt-10 grid gap-4">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-md">
                      <Icon size={24} />
                    </div>
                    <p className="font-semibold text-slate-700">{benefit.title}</p>
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
