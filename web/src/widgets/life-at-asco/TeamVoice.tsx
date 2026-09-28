import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useRef, useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";

const testimonials = [
  {
    message: "You end up learning a lot just by working with everyone around you.",
    name: "Mujahid",
    designation: "Sales Executive",
    avatar: "/avatar.webp",
  },
  {
    message: "No one works alone here. Everyone steps in when needed.",
    name: "Albin",
    designation: "Rental Coordinator",
    avatar: "/avatar.webp",
  },
  {
    message: "It’s a good environment to grow without feeling too much pressure.",
    name: "Kiran",
    designation: "Sales Executive",
    avatar: "/avatar.webp",
  },
];

export default function EmployeeTestimonialSlider() {
  const prefersReducedMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const autoplay = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      playOnInit: !prefersReducedMotion,
    })
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "center",
      loop: false,
    },
    [autoplay.current]
  );

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    autoplay.current.reset();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    autoplay.current.reset();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const update = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", update);
    emblaApi.on("reInit", update);
    update();

    return () => {
      emblaApi.off("select", update);
      emblaApi.off("reInit", update);
    };
  }, [emblaApi]);

  return (
    <section className="relative w-full py-14 lg:py-24">
      <div className="absolute inset-0 -z-10">
        <img
          src="/blogs/blog-6.webp"
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-white/90" />
      </div>
      <div className="container">
        <div className="flex">
          <div className="text-secondary-dark mb-8 flex gap-4 md:mb-12 md:items-center md:gap-6 lg:mb-16">
            <LuUsers className="text-secondary h-10 w-10 max-md:mt-0.5 md:h-12 md:w-12" />
            <div className="h-[60%] w-px bg-slate-300 max-md:hidden" />
            <div>
              <h2 className="font-heading text-3xl font-bold uppercase lg:text-4xl">
                From the <span className="text-primary-darker">Team</span>
              </h2>
              <p className="text-slate-400 max-md:text-sm">
                Voices from our people — real experiences from inside our workplace.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            aria-label="Previous testimonial"
            className={`hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl border bg-white/30 shadow-lg backdrop-blur-lg transition-all duration-300 md:flex ${
              canScrollPrev
                ? "hover:border-primary hover:text-primary border-gray-300 hover:scale-110 hover:shadow-2xl"
                : "cursor-not-allowed border-gray-200 opacity-40"
            }`}
          >
            <FiArrowLeft />
          </button>

          <div className="flex-1 overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] px-4 text-center">
                  <FaQuoteRight className="mx-auto mb-6 text-4xl text-gray-300" />

                  <p className="mx-auto mb-8 max-w-3xl text-2xl leading-relaxed font-medium text-gray-800">
                    “{item.message}”
                  </p>

                  <div className="flex flex-col items-center gap-3">
                    <div className="relative h-14 w-14 overflow-hidden rounded-full">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                    <p className="text-lg font-semibold text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.designation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            aria-label="Next testimonial"
            className={`hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl border bg-white/30 shadow-lg backdrop-blur-lg transition-all duration-300 md:flex ${
              canScrollNext
                ? "hover:border-primary hover:text-primary border-gray-300 hover:scale-110 hover:shadow-2xl"
                : "cursor-not-allowed border-gray-200 opacity-40"
            }`}
          >
            <FiArrowRight />
          </button>
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2.5 rounded-full transition-all ${
                selectedIndex === index ? "bg-primary w-6" : "w-2.5 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
