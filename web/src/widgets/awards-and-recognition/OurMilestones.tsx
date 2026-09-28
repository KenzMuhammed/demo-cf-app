import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AiOutlineTrophy } from "react-icons/ai";

const milestones = [
  {
    year: "2026",
    title: "EUROBOOR For Professionals By Professionals",
    desc: "ASCO was awarded the authorised distributor of Euroboor products in Saudi Arabia",
    image: "/about/highlights/hl14.webp",
  },
  {
    year: "2025",
    title: "Hyundai Welding Authorized Distributor - KSA",
    desc: "ASCO was appointed as an authorized distributor for the full range of Hyundai Welding products in Saudi Arabia.",
    image: "/about/highlights/hl13.webp",
  },
  {
    year: "2025",
    title: "Authorized Agent of SENFENG Laser Technology",
    desc: "ASCO was awarded as the authorised agent of SENFENG Laser Technology Co., Ltd. in the Kingdom of Saudi Arabia",
    image: "/about/highlights/hl3.webp",
  },

  //   {
  //     year: "2026",
  //     title: "Senfeng Partnership - KSA",
  //     desc: "ASCO partnered with Senfeng to provide advanced industrial solutions and services in Saudi Arabia, strengthening our commitment to delivering reliable and high-quality client support.",
  //     image: "/about/highlights/hl3.webp",
  //   },

  {
    year: "2024",
    title: "ESAB Strategic Partner",
    desc: "ASCO was recognized as a strategic partner of ESAB, reflecting continued collaboration and long-term partnership development.",
    image: "/about/highlights/hl4.webp",
  },
  {
    year: "2022",
    title: "ESAB Authorized Distributor - KSA",
    desc: "ASCO was officially appointed as an authorized distributor for the full range of ESAB welding and cutting products in Saudi Arabia.",
    image: "/about/highlights/hl4.webp",
  },
  {
    year: "2021",
    title: "ESAB Authorized Service Agent - KSA",
    desc: "ASCO was appointed as an authorized service agent for ESAB in Saudi Arabia, strengthening our service capabilities.",
    image: "/about/highlights/hl4.webp",
  },
];

function StatItem({
  count,
  label,
  duration = 2,
}: {
  count: number;
  label: string;
  duration?: number;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = count;
    const increment = end / (duration * 60);
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCurrent(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(interval);
  }, [count, duration]);

  return (
    <motion.div
      className="bg-secondary-light/10 flex w-full flex-col items-center rounded-2xl border border-white p-6 backdrop-blur-sm transition-all duration-500 hover:bg-white/20 hover:shadow-sm"
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
    >
      <span className="text-secondary-lighter font-heading text-3xl font-bold drop-shadow-lg lg:text-5xl">
        {current.toLocaleString()}
      </span>
      <span className="font-heading mt-2 text-sm tracking-wider text-gray-700 uppercase lg:text-xl">
        {label}
      </span>
    </motion.div>
  );
}

function TimelineCard({ item }: { item: (typeof milestones)[0] }) {
  return (
    <div className="relative flex flex-col gap-6 md:flex-row md:gap-12">
      <div className="flex flex-col items-center md:w-24">
        <div className="bg-secondary font-semi-bold font-heading z-10 flex h-20 w-20 items-center justify-center rounded-full border-2 border-white text-sm text-white shadow-lg lg:h-28 lg:w-28 lg:text-lg">
          {item.year}
        </div>
      </div>

      <motion.div
        className="group w-full rounded-2xl border border-white bg-white/40 p-6 backdrop-blur-sm transition-all duration-500 hover:bg-white/25 hover:shadow-sm"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
      >
        {item.image && (
          <div className="relative mb-4 overflow-hidden rounded-2xl bg-black">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="h-64 w-full md:h-80"
            >
              <img
                src={item.image}
                alt={item.title}
                width={400}
                height={400}
                className="h-full w-full object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        )}
        <h3 className="font-heading text-xl font-semibold text-gray-900 lg:text-3xl">
          {item.title}
        </h3>
        <p className="mt-3 leading-relaxed text-gray-600">{item.desc}</p>
        <div className="bg-secondary mt-4 h-1 w-12 rounded-full" />
      </motion.div>
    </div>
  );
}

export default function Milestones() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const activeLineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative w-full py-16 md:py-24 lg:py-32">
      <div className="fixed inset-0 -z-10">
        <img
          src="/awards/our-milestones-banner.webp"
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-white/95" />
      </div>

      {/* <div className="pointer-events-none absolute inset-0">
        <div className="bg-secondary/20 absolute top-0 right-0 h-150 w-150 rounded-full blur-3xl" />
        <div className="bg-secondary/20 absolute bottom-0 left-0 h-125 w-125 rounded-full blur-2xl" />
      </div> */}

      <div className="relative container flex flex-col gap-16 md:flex-row md:justify-between">
        <div className="h-fit md:sticky md:top-32 md:w-1/3">
          <div className="mb-4 flex max-md:flex-col max-md:gap-8 sm:justify-start md:mb-12 md:justify-between lg:mb-14">
            <div className="text-secondary-dark flex gap-4 md:items-center md:gap-6">
              <AiOutlineTrophy className="h-10 w-10 max-md:mt-0.5 md:h-12 md:w-12" />
              <div className="h-[60%] w-px bg-slate-300 max-md:hidden" />
              <div>
                <h2 className="font-heading text-3xl font-bold uppercase lg:text-4xl">
                  Our<span className="text-primary-darker"> Milestones</span>
                </h2>
                <p className="text-slate-600 max-md:text-sm">
                  Key moments that shaped <span className="text-secondary font-semibold">ASCO</span>{" "}
                  into a regional leader in welding solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-6">
            <StatItem count={500} label="Clients Served" />
            <StatItem count={5} label="Years in Business" />
            <StatItem count={100} label="Projects Completed" />
          </div>
        </div>

        <div className="relative flex flex-col gap-20 md:w-7/12">
          <div className="absolute top-0 bottom-0 left-6 w-px bg-gray-300/50 md:left-12" />
          <motion.div
            style={{ height: activeLineHeight }}
            className="bg-secondary absolute top-0 left-6 w-px origin-top md:left-12"
          />
          {milestones.map((item, index) => (
            <TimelineCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
