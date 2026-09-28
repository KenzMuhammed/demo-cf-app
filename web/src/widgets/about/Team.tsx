import { useRef } from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

const team = [
  {
    name: "Mathew Yohannan",
    role: "CEO",
    image: "/about/team-1.webp",
  },
  {
    name: "Mohammed Al Bariqi",
    role: "Managing Partner",
    image: "/about/team-2.webp",
  },
  {
    name: "Hatim Mohammed Hamza",
    role: "General Manager",
    image: "/about/member-avatar.webp",
  },
  {
    name: "Jaison Jose",
    role: "Business Development Manager",
    image: "/about/team-4-1.webp",
  },
  {
    name: "Shaikh Mujahid Ali",
    role: "Sales and Marketing Manager",
    image: "/about/team-5.webp",
  },
];

export default function TeamSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const move = (dir: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const STEP = 320;

    container.scrollBy({
      left: dir === "right" ? STEP : -STEP,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden bg-slate-100/20 py-16 lg:py-28">
      <div className="absolute inset-0 -z-10">
        <img
          src="/about/team-bg3.svg"
          alt="Decorative background"
          className="absolute inset-0 h-full w-full object-cover opacity-5"
        />
      </div>
      <div className="container mx-auto px-6 xl:max-w-[1920px] xl:px-10 2xl:px-16">
        <div className="mb-4 flex max-md:flex-col max-md:gap-8 sm:justify-start md:mb-12 md:justify-between lg:mb-14">
          <div className="text-secondary-dark flex gap-4 md:items-center md:gap-6">
            <AiOutlineTeam className="h-10 w-10 max-md:mt-0.5 md:h-12 md:w-12" />
            <div className="h-[60%] w-px bg-slate-300 max-md:hidden" />
            <div>
              <h2 className="font-heading text-3xl font-bold uppercase lg:text-4xl">
                Our<span className="text-primary-darker"> Team</span>
              </h2>
              <p className="text-slate-600 max-md:text-sm">Meet the people behind the vision.</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <button
            onClick={() => move("left")}
            className={`absolute top-1/2 -left-4 z-20 -translate-y-1/2 rounded-xl bg-black/20 p-3 text-white backdrop-blur transition hover:bg-black/40 ${team.length <= 5 ? "xl:hidden" : ""} ${team.length <= 4 ? "lg:hidden" : ""} ${team.length <= 3 ? "md:hidden" : ""} ${team.length <= 2 ? "sm:hidden" : ""} ${team.length <= 1 ? "hidden" : ""} `}
          >
            <RiArrowLeftLine size={22} />
          </button>
          <button
            onClick={() => move("right")}
            className={`absolute top-1/2 -right-4 z-20 -translate-y-1/2 rounded-xl bg-black/20 p-3 text-white backdrop-blur transition hover:bg-black/40 ${team.length <= 5 ? "xl:hidden" : ""} ${team.length <= 4 ? "lg:hidden" : ""} ${team.length <= 3 ? "md:hidden" : ""} ${team.length <= 2 ? "sm:hidden" : ""} ${team.length <= 1 ? "hidden" : ""} `}
          >
            <RiArrowRightLine size={22} />
          </button>
          <div
            ref={scrollRef}
            className="scrollbar-hide relative flex snap-x snap-mandatory gap-6 overflow-x-auto overflow-y-hidden scroll-smooth py-6"
            style={{
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE/Edge
            }}
          >
            {team.map((member, i) => (
              <div
                key={i}
                className={`group relative shrink-0 basis-[calc((100%_-_1.5rem)/1.3)] snap-start overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 transition sm:basis-[calc((100%_-_3rem)/2.2)] md:basis-[calc((100%_-_4.5rem)/3.2)] lg:basis-[calc((100%_-_6rem)/4.2)] ${team.length > 5 ? "xl:basis-[calc((100%_-_7.5rem)/5.2)]" : "xl:basis-[calc((100%_-_6rem)/5)]"}`}
              >
                <div className="relative flex flex-col bg-[url('/about/flash.svg')] bg-contain bg-center bg-no-repeat">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-50">
                    <img
                      width={400}
                      height={500}
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover object-top transition-all duration-700 ease-out group-hover:scale-[1.1]"
                    />
                  </div>
                  <div className="rounded-b-2xl px-5 py-3">
                    <h3 className="font-heading text-lg font-bold text-slate-900">{member.name}</h3>
                    <p className="text-primary-darker font-heading font-medium">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
