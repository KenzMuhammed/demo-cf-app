import { useCallback, useMemo, useRef, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { RiShieldCheckLine } from "react-icons/ri";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

type Slide = {
  img: string;
  imgMobile: string;
  title: React.ReactNode;
  alt: string;
  subtitle: string;
  brands?: boolean;
};

export default function HeroBanner() {
  const slides: Slide[] = useMemo(
    () => [
      {
        img: "/innovation/home/in_01.webp",
        imgMobile: "/innovation/home/in_01.webp",
        title: (
          <>
            Industrial Excellence with
            <br />
            Rental Solutions
          </>
        ),
        alt: "Industrial Excellence with Rental Solutions",
        subtitle:
          "Reliable rental solutions with high-performance industrial equipment, supporting demanding projects with flexibility, efficiency, and dependable on-site performance.",
      },
      {
        img: "/innovation/home/in_02.webp",
        imgMobile: "/innovation/home/in_03.webp",
        title: (
          <>
            Turnaround Deployment &
            <br />
            Machine Resale
          </>
        ),
        alt: "Turnaround Deployment & Machine Resale",
        subtitle:
          "Fast, dependable equipment deployment and quality machine resale solutions, helping industrial projects stay efficient, flexible, and ready for every operational demand.",
      },
      {
        img: "/innovation/home/in_03.webp",
        imgMobile: "/innovation/home/in_02.webp",
        title: (
          <>
            Rapid Deployment for
            <br />
            Refinery & Mega Projects
          </>
        ),
        alt: "Rapid Deployment for Refinery & Mega Projects",
        subtitle:
          "Get reliable, high-performance equipment and solutions for refinery and mega projects, designed for rapid deployment, demanding environments, and uninterrupted project operations.",
      },
    ],
    []
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const autoplay = useRef(
    Autoplay({
      delay: 6000,
      stopOnInteraction: false,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 }, [
    Fade(),
    autoplay.current,
  ]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
    autoplay.current.reset();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
    autoplay.current.reset();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const update = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    update();
    emblaApi.on("select", update);
  }, [emblaApi]);

  const anim = (delay = 0) => ({
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: {
      duration: 0.6,
      delay,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  });

  return (
    <section className="relative h-[58vh] min-h-105 overflow-hidden bg-black lg:h-[68vh] lg:min-h-135">
      <motion.div
        key={selectedIndex}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 6, ease: "linear" }}
        className="absolute top-0 left-0 z-20 h-0.5 w-full origin-left bg-white/20"
      />
      <div ref={emblaRef} className="h-full overflow-hidden">
        <div className="flex h-full">
          {slides.map((slide, i) => {
            const active = i === selectedIndex;

            return (
              <div key={i} className="relative h-full min-w-full overflow-hidden">
                <motion.div
                  initial={{ scale: 1.08 }}
                  animate={{ scale: active ? 1 : 1.08 }}
                  transition={{
                    duration: 6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0 will-change-transform"
                >
                  <img
                    src={slide.img}
                    alt={slide.alt}
                    className="hidden h-full w-full object-cover md:block"
                  />

                  <img
                    src={slide.imgMobile}
                    alt={slide.alt}
                    className="h-full w-full object-cover md:hidden"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/20 to-black/30 max-md:via-black/60 max-md:to-black/10" />

                <div className="absolute inset-0 flex flex-col">
                  <div className="container h-full flex-1">
                    {active && (
                      <div
                        key={selectedIndex}
                        className="flex h-full max-w-2xl items-center max-xl:mx-auto max-xl:text-center"
                      >
                        <div>
                          <motion.div {...anim(0)}>
                            <div className="mb-5 inline-flex items-center gap-2 rounded-md bg-black/30 px-4 py-2 backdrop-blur-sm max-md:hidden">
                              <RiShieldCheckLine className="text-white" />
                              <div className="font-heading text-white/80">
                                Saudi Aramco & SABIC Certified Rental Fleet • Aramco Vendor
                                #10065421
                              </div>
                            </div>
                          </motion.div>

                          <motion.div
                            {...anim(0.08)}
                            className="bg-primary-light/70 mb-5 h-1 w-14 max-md:hidden"
                          />

                          <motion.h1
                            {...anim(0.16)}
                            className="font-heading text-4xl font-bold text-white xl:text-6xl"
                          >
                            {slide.title}
                          </motion.h1>

                          <motion.h2
                            {...anim(0.24)}
                            className="mt-4 text-white sm:text-lg xl:max-w-xl"
                          >
                            {slide.subtitle}
                          </motion.h2>

                          <motion.div
                            {...anim(0.32)}
                            className="mt-6 flex gap-4 max-xl:justify-center"
                          >
                            <Button size="lg">Rentals</Button>

                            <Button variant="light" size="lg">
                              Used Equipments
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    )}
                  </div>

                  {slide.brands && (
                    <div className="container">
                      <motion.div {...anim(0.4)} className="flex pb-6 md:pb-18">
                        <div className="flex rounded-xl bg-white/80 max-md:grid max-md:grid-cols-4 max-md:divide-x max-md:divide-y max-md:divide-black/10">
                          <div className="flex items-center justify-center px-4 py-2 lg:py-3">
                            <img
                              src="/brands/hyundai-welding-logo.webp"
                              alt=""
                              className="h-6 w-full max-w-35 object-contain"
                            />
                          </div>
                          <div className="flex items-center justify-center px-4 py-2 lg:py-3">
                            <img
                              src="/brands/ESAB.webp"
                              alt=""
                              className="h-6 w-full max-w-35 object-contain"
                            />
                          </div>
                          <div className="flex items-center justify-center px-4 py-2 lg:py-3">
                            <img
                              src="/brands/absolute-weld-logo.webp"
                              alt=""
                              className="h-6 w-full max-w-35 object-contain"
                            />
                          </div>
                          <div className="flex items-center justify-center px-4 py-2 lg:py-3">
                            <img
                              src="/brands/sawyer.webp"
                              alt=""
                              className="h-6 w-full max-w-35 object-contain"
                            />
                          </div>
                          <div className="flex items-center justify-center px-4 py-2 lg:py-3">
                            <img
                              src="/brands/grindex.webp"
                              alt=""
                              className="h-6 w-full max-w-35 object-contain"
                            />
                          </div>
                          <div className="flex items-center justify-center px-4 py-2 lg:py-3">
                            <img
                              src="/brands/Euroboor.webp"
                              alt=""
                              className="h-6 w-full max-w-35 object-contain"
                            />
                          </div>
                          <div className="flex items-center justify-center px-4 py-2 lg:py-3">
                            <img
                              src="/brands/vimex.webp"
                              alt=""
                              className="h-6 w-full max-w-35 object-contain"
                            />
                          </div>
                          <div className="flex items-center justify-center px-4 py-2 lg:py-3">
                            <img
                              src="/brands/topsinn.webp"
                              alt=""
                              className="h-6 w-full max-w-35 object-contain"
                            />
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        aria-label="Previous Slide"
        className="absolute top-1/2 left-0 z-30 flex h-20 w-12 -translate-y-1/2 items-center justify-center rounded-tr-2xl rounded-br-2xl border border-l-0 border-white/10 bg-white/5 text-white/60 backdrop-blur-sm transition-all hover:w-13 hover:bg-white/10 hover:text-white max-lg:hidden"
      >
        <IoChevronBackOutline size={22} />
      </button>

      <button
        onClick={scrollNext}
        aria-label="Next Slide"
        className="absolute top-1/2 right-0 z-30 flex h-20 w-12 -translate-y-1/2 items-center justify-center rounded-tl-2xl rounded-bl-2xl border border-r-0 border-white/10 bg-white/5 text-white/60 backdrop-blur-sm transition-all hover:w-13 hover:bg-white/10 hover:text-white max-lg:hidden"
      >
        <IoChevronForwardOutline size={22} />
      </button>
    </section>
  );
}
