import React, { useCallback, useRef, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FaStar, FaStarHalfAlt, FaRegStar, FaQuoteRight } from "react-icons/fa";
import { LuHandshake } from "react-icons/lu";

interface TestimonialItem {
  company: string;
  rating: number;
  title: string;
  message: string | string[];
  name: string;
  designation: string;
  date: string;
  initials?: string;
  avatar?: string;
}

const testimonials: TestimonialItem[] = [
  {
    company: "AL-FALWA CONTRACTING CO. (JUBAIL)",
    rating: 5,
    title: "Exceptional Response During Refinery Shutdown",
    message:
      "Exceptional response during our recent Jubail refinery shutdown. Mobilized 120+ multi-process Lincoln & Miller inverters with Aramco-certified calibration within 18 hours. Zero downtime throughout the turnaround.",
    name: "Eng. Tariq Al-Ghamdi",
    designation: "Turnaround Operations Director",
    date: "Oct 14, 2025",
    initials: "TG",
    avatar: "/avatar.webp",
  },
  {
    company: "NASSER S. AL-HAJRI CORP (NSH)",
    rating: 5,
    title: "Reliable Power Skids for Wasit Gas Project",
    message:
      "Innovation Rental provided 500kVA soundproof power skids and pipe beveling equipment for our Wasit gas project. Top-tier maintenance reliability, 24/7 on-site technicians, and comprehensive SASO documentation.",
    name: "Mr. Abdulaziz Al-Mutawa",
    designation: "Senior Fleet & Procurement Manager",
    date: "Dec 02, 2025",
    initials: "AA",
    avatar: "/avatar.webp",
  },
  {
    company: "AL-ZAMIL HEAVY INDUSTRIES (DAMMAM)",
    rating: 5,
    title: "45% CAPEX Savings on Certified Overhauled Fleet",
    message:
      "Purchased 15 certified pre-owned Miller submerged arc and GTAW machines. Equipment arrived factory-refurbished with full calibration dossiers, saving over 45% CAPEX while adhering strictly to Aramco inspection criteria.",
    name: "Eng. Faisal Al-Harbi",
    designation: "Plant Maintenance Head",
    date: "Feb 18, 2026",
    initials: "FA",
    avatar: "/avatar.webp",
  },
];

export default function TestimonialSlider() {
  const prefersReducedMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const autoplay = useRef(
    Autoplay({
      delay: 3500,
      stopOnInteraction: false,
      playOnInit: !prefersReducedMotion,
    })
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
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

  useEffect(() => {
    if (!emblaApi) return;

    const update = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
      setIsScrollable(emblaApi.scrollSnapList().length > 1);
    };

    emblaApi.on("select", update);
    emblaApi.on("reInit", update);
    update();

    return () => {
      emblaApi.off("select", update);
      emblaApi.off("reInit", update);
    };
  }, [emblaApi]);

  const renderStars = (rating: number) => {
    const stars = [];
    const full = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;

    for (let i = 0; i < full; i++) stars.push(<FaStar key={`f-${i}`} />);
    if (hasHalf) stars.push(<FaStarHalfAlt key="h" />);
    for (let i = stars.length; i < 5; i++) stars.push(<FaRegStar key={`e-${i}`} />);

    return stars;
  };

  return (
    <section
      className="bg-cover bg-center py-14 lg:py-24"
      aria-label="Customer testimonials"
      style={{ backgroundImage: "url('/industry/faq2.webp')" }}
    >
      <div className="container mx-auto px-6">
        <div className="flex">
          <div className="text-secondary-dark mb-8 flex gap-4 md:mb-12 md:items-center md:gap-6 lg:mb-16">
            <LuHandshake className="text-secondary h-10 w-10 max-md:mt-0.5 md:h-12 md:w-12" />
            <div className="h-[60%] w-px bg-slate-300 max-md:hidden" />
            <div>
              <h2 className="font-heading text-3xl font-bold uppercase lg:text-4xl">
                What Our <span className="text-primary-darker">Clients Say</span>
              </h2>
              <p className="text-slate-400 max-md:text-sm">
                Feedback from contractors who rely on our rental fleet and certified machines.
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="flex items-center gap-8">
            {isScrollable && (
              <>
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
              </>
            )}
            <div className="overflow-hidden max-md:-mx-6 max-md:px-6" ref={emblaRef}>
              <div className="-ml-6 flex lg:-ml-8">
                {testimonials.map((item, index) => (
                  <article
                    key={index}
                    className="flex-[0_0_90%] pl-6 md:flex-[0_0_100%] lg:flex-[0_0_33.333%] lg:pl-8"
                  >
                    <div className="flex h-full flex-col justify-between rounded-xl bg-white p-8 shadow-sm xl:rounded-3xl">
                      <div className="flex items-center justify-between pb-2">
                        <div className="flex items-center gap-1 text-lg text-orange-500">
                          {renderStars(item.rating)}
                        </div>
                        <p className="text-xs text-gray-500">{item.date}</p>
                      </div>
                      <div>
                        <div className="mb-4 flex items-center justify-between">
                          <h3 className="text-sm font-semibold tracking-wide text-gray-700 uppercase">
                            {item.company}
                          </h3>
                          <FaQuoteRight className="text-5xl text-gray-200" />
                        </div>
                        <h4 className="mb-3 text-lg font-semibold text-gray-900">{item.title}</h4>
                        {Array.isArray(item.message) ? (
                          <ul className="mb-6 space-y-1 text-gray-600">
                            {item.message.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="mb-6 leading-relaxed text-gray-600">{item.message}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-3 border-t border-gray-200 pt-4">
                        {item.initials ? (
                          <div className="bg-secondary-darker flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white">
                            {item.initials}
                          </div>
                        ) : (
                          <div className="relative h-10 w-10 overflow-hidden rounded-full">
                            <img
                              src={item.avatar}
                              alt={item.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        )}
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                          <p className="text-xs text-gray-500">{item.designation}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            {isScrollable && (
              <>
                <button
                  onClick={scrollNext}
                  disabled={!canScrollNext}
                  aria-label="Next testimonial"
                  className={`z-5 hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl border bg-white/30 shadow-lg backdrop-blur-lg transition-all duration-300 md:flex ${
                    canScrollNext
                      ? "hover:border-primary hover:text-primary border-gray-300 hover:scale-110 hover:shadow-2xl"
                      : "cursor-not-allowed border-gray-200 opacity-40"
                  }`}
                >
                  <FiArrowRight />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
