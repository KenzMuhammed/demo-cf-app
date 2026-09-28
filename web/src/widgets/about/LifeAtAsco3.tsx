import { useState, useRef, useEffect } from "react";
import Button from "@/components/ui/Button";
import { FiLifeBuoy } from "react-icons/fi";

const images = [
  "/about/highlights/hl2.webp",
  "/services/service-02.webp",
  "/services/service-04.webp",
];

const INITIAL_COUNT = 6;
const LOAD_COUNT = 4;

type LifeAtAscoProps = {
  heading: string;
  paragraph: string;
  buttonText: string;
};

export default function LifeAtAsco({ heading, paragraph, buttonText }: LifeAtAscoProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleIndexes((prev) => (prev.includes(index) ? prev : [...prev, index]));
          }
        });
      },
      { threshold: 0.9 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-ocean relative w-full py-14 md:py-24 xl:py-32">
      <div className="pointer-events-none absolute top-0 left-0">
        <img
          src="/about/pattern-2.webp"
          alt="Decorative pattern"
          width={400}
          height={200}
          className="object-contain"
        />
      </div>
      <div className="pointer-events-none absolute right-0 bottom-0">
        <img
          src="/about/pattern-2.webp"
          alt="Decorative pattern"
          width={400}
          height={200}
          className="rotate-180 object-contain"
        />
      </div>
      <div className="absolute inset-0 bg-black/30" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="relative md:sticky md:top-32 md:h-fit md:self-start">
            <div className="pointer-events-none absolute inset-0 -bottom-40 z-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.18),transparent_90%)] blur-3xl" />
            <div className="absolute"></div>
            <div className="relative z-10">
              <div className="flex">
                <div className="mb-8 flex gap-4 text-white md:mb-12 md:items-center md:gap-6 lg:mb-16">
                  <FiLifeBuoy className="h-10 w-10 text-white max-md:mt-0.5 md:h-12 md:w-12 lg:h-14 lg:w-14" />
                  <div className="h-[60%] w-px bg-slate-300 max-md:hidden" />
                  <div>
                    <h2 className="font-heading text-primary-dark text-3xl font-bold uppercase lg:text-4xl">
                      {heading}
                    </h2>
                  </div>
                </div>
              </div>
              <p className="font-heading max-w-lg text-3xl text-slate-400 md:text-5xl">
                {paragraph}
              </p>
              <div className="mt-10">
                <Button
                  variant="primary"
                  size="lg"
                  aria-label={buttonText}
                  onClick={() => {
                    window.location.href = "/life-at-asco";
                  }}
                >
                  {buttonText}
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-6 xl:gap-8">
              {images.slice(0, visibleCount).map((img, index) => {
                const isVisible = visibleIndexes.includes(index);
                return (
                  <div
                    key={index}
                    ref={(el) => {
                      cardRefs.current[index] = el;
                    }}
                    data-index={index}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    className={`min-h-45 transform overflow-hidden rounded-2xl border border-slate-400 text-white transition-all duration-700 ease-out xl:rounded-4xl ${
                      isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                    }`}
                  >
                    <img
                      className="aspect-video h-auto w-full object-cover"
                      src={img}
                      alt={`Gallery ${index}`}
                      width={800}
                      height={300}
                    />
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
