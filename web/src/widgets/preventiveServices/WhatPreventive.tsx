import { IconType } from "react-icons";
import { FiBarChart2, FiCheckCircle, FiSearch } from "react-icons/fi";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { AiOutlineTool } from "react-icons/ai";
import { useEffect, useRef } from "react";
import { FaPersonCircleCheck } from "react-icons/fa6";

type CardItem = {
  title: string;
  description: string;
  icon: IconType;
};

const cards: CardItem[] = [
  {
    icon: FiSearch,
    title: "Equipment inspection and condition assessment",
    description:
      "Checking critical components to ensure equipment is operating within recommended performance standards.",
  },
  {
    icon: FiBarChart2,
    title: "Performance and calibration checks",
    description:
      "Verifying equipment settings and operational accuracy to maintain consistent welding and fabrication output.",
  },
  {
    icon: FiCheckCircle,
    title: "Safety and operational checks",
    description:
      "Reviewing safety features and operational controls to ensure safe use across industrial environments.",
  },
  {
    icon: AiOutlineTool,
    title: "Replacement of wear components",
    description: "Identifying and replacing parts that experience regular wear during operation.",
  },
  {
    icon: MdOutlineSettingsSuggest,
    title: "Diagnostics and servicing",
    description:
      "Running diagnostic checks and carrying out servicing tasks to prevent potential operational issues.",
  },
];

export default function WhatPreventive() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".parallax-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;

            setTimeout(() => {
              el.classList.add("visible");
            }, i * 120);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-black"></div>
      <div className="bg-primary/20 animate-aurora absolute -top-40 -left-40 h-125 w-125 rounded-full blur-[160px]"></div>
      <div className="animate-aurora absolute -right-50 -bottom-50 h-125 w-125 rounded-full bg-purple-500/20 blur-[160px] delay-2000"></div>
      <div className="animate-aurora absolute top-[40%] left-[30%] h-100 w-100 rounded-full bg-cyan-500/10 blur-[150px] delay-4000"></div>
      <div className="relative z-10 container px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex gap-5 text-white md:items-center lg:mb-16">
          <FaPersonCircleCheck className="text-primary h-12 w-12 lg:h-14 lg:w-14" />
          <div className="hidden h-[60%] w-px bg-white/20 md:block" />
          <div>
            <h2 className="font-heading text-3xl font-bold uppercase lg:text-4xl">
              What Our <span className="text-primary">Preventive Maintenance</span> Includes
            </h2>
            <p className="text-slate-400">Preventive checks to ensure reliable operation.</p>
          </div>
        </div>
        <div className="grid gap-4 text-white md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                className="parallax-card group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-white/10 text-gray-200">
                  <Icon size={30} />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-white">{card.title}</h3>
                <p className="text-sm leading-relaxed text-gray-300">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        .parallax-card {
          opacity: 0;
          transform: translateY(80px) scale(0.96);
          transition: transform 0.8s cubic-bezier(.22,1,.36,1),
          opacity 0.8s ease;
        }

        .parallax-card.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        @keyframes auroraMove {
          0% { transform: translate(0,0) scale(1); }
          50% { transform: translate(40px,-40px) scale(1.1); }
          100% { transform: translate(0,0) scale(1); }
        }

        .animate-aurora {
          animation: auroraMove 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
