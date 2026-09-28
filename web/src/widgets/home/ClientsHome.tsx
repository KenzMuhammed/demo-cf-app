import React, { useEffect, useRef } from "react";
import Button from "@/components/ui/Button";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import { TbShieldStar } from "react-icons/tb";

interface ClientBrand {
  name: string;
  logo: string;
}

const brands: ClientBrand[] = [
  { name: "Rezayat", logo: "/clients/rezayat-logo.webp" },
  { name: "Cat", logo: "/clients/cat-logo.webp" },
  { name: "dh", logo: "/clients/dh-logo.webp" },
  { name: "Zamil", logo: "/clients/zamil-logo.svg" },
  { name: "lnt", logo: "/clients/lt-logo.webp" },
  { name: "Tamimi", logo: "/clients/tamimi-logo.webp" },
  { name: "Saipem", logo: "/clients/saipem-logo.svg" },
  { name: "Olayan", logo: "/clients/olayan-logo.webp" },
  { name: "Nesma", logo: "/clients/nesma-logo.webp" },
  { name: "mab", logo: "/clients/mab-logo.webp" },
  { name: "Sinopec", logo: "/clients/sinopec-logo.webp" },
  { name: "Geyad", logo: "/clients/geyad-logo.webp" },
];

export default function ClientsHome() {
  // 👇 TRIPLE the content
  const loopedBrands = [...brands, ...brands, ...brands];

  const trackRef = useRef<HTMLDivElement>(null);

  const currentX = useRef(0);
  const targetX = useRef(0);

  const speed = 0.4;
  const ease = 0.08;

  useEffect(() => {
    let raf: number;

    const init = () => {
      const track = trackRef.current;
      if (!track) return;

      const singleWidth = track.scrollWidth / 3;

      // Start on the middle copy
      currentX.current = -singleWidth;
      targetX.current = -singleWidth;

      const animate = () => {
        targetX.current -= speed;

        currentX.current += (targetX.current - currentX.current) * ease;

        // Keep position always within the middle copy
        if (currentX.current <= -singleWidth * 2) {
          currentX.current += singleWidth;
          targetX.current += singleWidth;
        }

        if (currentX.current >= 0) {
          currentX.current -= singleWidth;
          targetX.current -= singleWidth;
        }

        track.style.transform = `translateX(${currentX.current}px)`;

        raf = requestAnimationFrame(animate);
      };

      raf = requestAnimationFrame(animate);
    };

    init();
    return () => cancelAnimationFrame(raf);
  }, []);

  const moveLeft = () => {
    targetX.current += 240;
  };

  const moveRight = () => {
    targetX.current -= 240;
  };

  return (
    <section className="w-full overflow-hidden py-14 lg:py-24">
      <div className="container">
        <div className="flex sm:justify-center">
          <div className="text-secondary-dark mb-10 flex gap-4 md:mb-12 md:items-center md:gap-6 lg:mb-14">
            <TbShieldStar className="text-secondary h-10 w-10 max-md:mt-0.5 md:h-12 md:w-12" />
            <div className="h-[60%] w-px bg-slate-300 max-md:hidden" />
            <div>
              <h2 className="font-heading text-3xl font-bold uppercase lg:text-4xl">
                <span className="text-primary-darker">Trusted </span> By
              </h2>
              <p className="text-slate-600 max-md:text-sm">
                Leading industrial and EPC giants across Saudi Arabia.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="group relative w-full overflow-hidden">
          <div className="pointer-events-none absolute top-0 left-0 z-5 h-full w-24 bg-linear-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 z-5 h-full w-24 bg-linear-to-l from-white to-transparent" />
          <button
            onClick={moveLeft}
            aria-label="Previous testimonial"
            className="hover:bg-primary absolute top-1/2 left-6 z-5 flex h-10 w-12 -translate-y-1/2 items-center justify-center rounded-xl bg-black/20 text-white backdrop-blur-sm transition-all hover:scale-105 lg:h-12 lg:w-14 xl:left-4 xl:opacity-0 xl:group-hover:left-6 xl:group-hover:opacity-100"
          >
            <RiArrowLeftLine size={22} />
          </button>
          <button
            onClick={moveRight}
            aria-label="Next testimonial"
            className="hover:bg-primary absolute top-1/2 right-6 z-5 flex h-10 w-12 -translate-y-1/2 items-center justify-center rounded-xl bg-black/20 text-white backdrop-blur-sm transition-all hover:scale-105 lg:h-12 lg:w-14 xl:right-4 xl:opacity-0 xl:group-hover:right-6 xl:group-hover:opacity-100"
          >
            <RiArrowRightLine size={22} />
          </button>
          <div ref={trackRef} className="flex w-max gap-4 will-change-transform">
            {loopedBrands.map((brand, index) => (
              <div
                key={index}
                className="relative flex h-28 w-60 items-center justify-center rounded-lg bg-gray-50 p-4"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-auto max-h-16 w-full max-w-40 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mt-10 flex justify-center md:mt-12 lg:mt-14">
        <a href="/clients">
          <Button variant="dark" size="lg" aria-label="View All Clients">
            View All Clients
          </Button>
        </a>
      </div>
    </section>
  );
}
