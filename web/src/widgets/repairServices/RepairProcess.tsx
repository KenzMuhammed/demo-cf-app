import { useEffect, useRef } from "react";
import { MdOutbond } from "react-icons/md";

const PHASES = [
  {
    step: "01",
    title: "Service Request & Assessment",
    description:
      "The process begins with your service request, followed by an initial assessment to understand the issue and decide whether onsite or in-house service is required.",
  },
  {
    step: "02",
    title: "Inspection & Quotation",
    description:
      "A detailed inspection and fault analysis is carried out, and a clear quotation is shared for your approval.",
  },
  {
    step: "03",
    title: "Approval & Service Execution",
    description:
      "Once approved, the repair or maintenance work is carried out. For warranty cases, manufacturer approval is obtained before proceeding.",
  },
  {
    step: "04",
    title: "Completion & Documentation",
    description:
      "After servicing, the equipment is tested, and a service report is shared. All records are maintained for future reference.",
  },
];

export default function RepairProcess() {
  const scrollZoneRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const zone = scrollZoneRef.current;
    if (!zone) return;

    const update = () => {
      const { top, height } = zone.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const scrollable = height - viewportH;
      const progress = scrollable <= 0 ? 0 : Math.min(1, Math.max(0, -top / scrollable));

      const total = PHASES.length;

      cardRefs.current.forEach((card, index) => {
        if (!card || index === 0) return;

        // Each card gets an equal share of the scroll range
        const segmentSize = 1 / (total - 1);
        const start = (index - 1) * segmentSize;
        const end = index * segmentSize;

        const t = Math.min(1, Math.max(0, (progress - start) / (end - start)));

        // Ease-out cubic: starts fast, decelerates to rest
        const eased = 1 - Math.pow(1 - t, 3);

        // 100% (off right) → 0% (fully covering previous)
        const x = (1 - eased) * 130;
        card.style.transform = `translateX(${x}%)`;
      });
    };

    const onScroll = () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update(); // set initial positions

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className="relative bg-[radial-gradient(40%_80%_at_5%_60%,#370713_0%,#0a0a0a_55%,#021314_100%)] py-20 md:py-28">
      <div className="absolute inset-0">
        <img
          src="/services/vector.svg"
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
      </div>
      <div ref={scrollZoneRef} className="relative min-h-[300vh]">
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="flex">
              <div className="text-secondary-dark mb-4 flex gap-4 md:mb-12 md:items-center md:gap-6 lg:mb-14">
                <MdOutbond className="text-primary h-10 w-10 max-md:mt-0.5 md:h-12 md:w-12 lg:h-14 lg:w-14" />
                <div className="bg-primary/40 h-[60%] w-px max-md:hidden" />
                <div>
                  <h2 className="font-heading text-3xl font-bold text-white uppercase lg:text-4xl">
                    Our Process
                  </h2>
                  <p className="text-slate-400 max-md:text-sm">
                    Our repair process is structured to keep things clear, efficient, and easy to
                    follow from start to finish.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              {PHASES.map((phase, index) => (
                <div
                  key={phase.step}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  style={{
                    position: index === 0 ? "relative" : "absolute",
                    inset: index === 0 ? undefined : 0,
                    zIndex: index + 1,
                    willChange: "transform",
                    transform: index === 0 ? undefined : "translateX(100%)",
                  }}
                >
                  <div className="border-secondary-light/30 from-secondary-dark flex max-w-3xl overflow-hidden rounded-2xl border bg-linear-to-br to-[#042122] text-white shadow-2xl backdrop-blur-md">
                    <div className="border-secondary-light/30 flex flex-col items-center gap-4 border-r px-6 py-8">
                      <span className="bg-primary-darker flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white">
                        {phase.step}
                      </span>
                      <div className="bg-secondary-light/30 w-px flex-1" />
                    </div>
                    <div className="flex flex-col justify-center gap-5 px-8 py-10">
                      <p className="text-primary text-xs font-semibold tracking-widest uppercase">
                        Phase {phase.step}
                      </p>
                      <h3 className="text-2xl leading-tight font-bold break-all uppercase md:text-3xl">
                        {phase.title}
                      </h3>
                      <p className="max-w-[44ch] text-sm leading-relaxed text-slate-300/80 md:text-base">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
