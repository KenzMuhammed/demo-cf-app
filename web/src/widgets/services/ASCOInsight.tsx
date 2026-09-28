import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";

export default function EquipmentSupportSection() {
  const imageRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section className="relative bg-black bg-cover bg-center py-24 xl:py-0">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url('/home/support-banner.webp')` }}
      ></div>

      <div className="relative container mx-auto flex flex-col items-center px-6 md:px-10 xl:flex-row xl:gap-12 xl:px-20">
        <div className="flex flex-1 flex-col gap-6 text-center text-white lg:text-left">
          <h2 className="font-heading text-4xl font-bold lg:text-5xl">What Sets Asco Apart?</h2>
          <p className="text-lg text-gray-100">
            Years in the industry have shown us that reliability builds trust. At ASCO you work
            directly with experienced professionals who know what your project demands.
          </p>

          <div className="mt-4 flex flex-col justify-center gap-4 sm:flex-row sm:items-center sm:gap-6 lg:justify-start">
            <Button size="lg">Book Now </Button>
          </div>
        </div>
        <div
          ref={imageRef}
          className={`relative flex-1 transition-transform duration-1000 ease-out ${
            visible ? "translate-x-0 opacity-100" : "-translate-x-24 opacity-0"
          }`}
        >
          <img
            src="/home/welder.webp"
            alt="Equipment Support"
            width={427}
            height={585}
            className="relative z-10 mx-auto -mt-32 hidden xl:block"
          />
        </div>
      </div>
    </section>
  );
}
