import { useEffect, useRef } from "react";
import { MdOutbond } from "react-icons/md";

const PHASES = [
  {
    step: "01",
    title: "Equipment Assessment",
    description:
      "Our service engineers review the equipment condition and maintenance requirements before scheduling preventive servicing.",
  },
  {
    step: "02",
    title: "Maintenance Planning",
    description:
      "A maintenance schedule is prepared based on equipment usage, operating conditions, and manufacturer recommendations.",
  },
  {
    step: "03",
    title: "On-Site Inspection and Servicing",
    description:
      "Service engineers carry out inspections, performance checks, and component servicing to maintain equipment reliability.",
  },
  {
    step: "04",
    title: "Reporting and Recommendations",
    description:
      "After servicing, a maintenance report is provided with observations and recommendations for future maintenance planning.",
  },
];

export default function PreventiveProcess() {
  const scrollZoneRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const zone = scrollZoneRef.current;
    const track = trackRef.current;
    if (!zone || !track) return;

    const update = () => {
      const { top, height } = zone.getBoundingClientRect();
      const viewportH = window.innerHeight;

      const scrollable = height - viewportH;
      const progress = scrollable <= 0 ? 0 : Math.min(1, Math.max(0, -top / scrollable));

      const container = zone.querySelector(".container") as HTMLElement;
      const styles = window.getComputedStyle(container);

      const paddingLeft = parseFloat(styles.paddingLeft);
      const paddingRight = parseFloat(styles.paddingRight);

      const maxWidth = container.clientWidth;

      const leftOffset = (window.innerWidth - maxWidth) / 2 + paddingLeft;
      const rightOffset = (window.innerWidth - maxWidth) / 2 + paddingRight;

      const totalWidth = track.scrollWidth - window.innerWidth + leftOffset + rightOffset;

      const x = totalWidth * progress;

      track.style.transform = `translateX(${leftOffset - x}px)`;
    };

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
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
                    Our preventive maintenance service follows a structured process designed to
                    ensure equipment reliability and safe industrial operations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-screen overflow-hidden">
            <div ref={trackRef} className="flex gap-8">
              {PHASES.map((phase) => (
                <div key={phase.step} className="w-[90vw] max-w-3xl shrink-0">
                  <div className="border-secondary-light/30 from-secondary-dark flex h-full overflow-hidden rounded-2xl border bg-linear-to-br to-[#042122] text-white shadow-2xl backdrop-blur-md">
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
