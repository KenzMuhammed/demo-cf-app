import { IconType } from "react-icons";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { AiOutlineTool } from "react-icons/ai";
import { useEffect, useRef } from "react";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { BsHouse } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { CgRemote } from "react-icons/cg";

type CardItem = {
  title: string;
  description: string;
  icon: IconType;
};

const cards: CardItem[] = [
  {
    icon: BsHouse,
    title: "In-House Repairs",
    description:
      "Detailed inspection and repair work carried out at our service facility for better control and accuracy.",
  },
  {
    icon: CiLocationOn,
    title: "Onsite Support",
    description:
      "Repair services carried out at your location to reduce downtime and avoid equipment movement.",
  },
  {
    icon: CgRemote,
    title: "Remote Assistance",
    description:
      "Technical guidance and troubleshooting support to help identify and resolve issues quickly.",
  },
  {
    icon: AiOutlineTool,
    title: "Warranty Repairs",
    description:
      "Authorized warranty handling and repairs carried out in coordination with equipment manufacturers.",
  },
  {
    icon: MdOutlineSettingsSuggest,
    title: "Preventive Support",
    description: "Follow-up support and servicing to help avoid recurring issues after repair.",
  },
];

export default function Capabilities() {
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
              Our <span className="text-primary"> Repair </span> Capabilities
            </h2>
            <p className="text-slate-400">
              Keeping your machinery performing at its best, every time
            </p>
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
