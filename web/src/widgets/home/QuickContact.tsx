import React, { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function EquipmentSupportSection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(false);

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
    <section
      className="relative bg-black bg-cover bg-center bg-no-repeat py-24 xl:py-0"
      style={{ backgroundImage: `url('/innovation/home/in-cta-bg.webp')` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container mx-auto flex flex-col items-center px-6 md:px-10 xl:flex-row xl:gap-12 xl:px-20">
        <div className="flex flex-1 flex-col gap-6 text-center text-white lg:text-left">
          <h1 className="font-heading text-4xl font-bold lg:text-5xl">
            Looking for Equipment Rental or Machine Purchase?
          </h1>
          <p className="text-lg text-gray-100">
            Get in touch with our engineering team for rental enquiries, shutdown fleet
            mobilizations, or certified pre-owned machine inventory lists.
          </p>
          <div className="mt-4 flex flex-col justify-center gap-4 sm:flex-row sm:items-center sm:gap-6 lg:justify-start">
            <div>
              <Button
                size="lg"
                onClick={() => {
                  window.location.href = "/contact";
                }}
              >
                Contact Us
              </Button>
            </div>
            <a
              href="tel:+966540292633"
              className="hover:text-secondary flex items-center gap-2 text-gray-100 transition-colors"
            >
              <FaPhoneAlt className="h-5 w-5" />
              <span>+966 54 029 2633</span>
            </a>

            <a
              href="mailto:info@innosaudi.com"
              className="hover:text-secondary flex items-center gap-2 text-gray-100 transition-colors"
            >
              <FaEnvelope className="h-5 w-5" />
              <span>info@innosaudi.com</span>
            </a>
          </div>
        </div>
        <div
          ref={imageRef}
          className={`relative flex-1 transition-transform duration-1000 ease-out ${
            visible ? "translate-x-0 opacity-100" : "-translate-x-24 opacity-0"
          }`}
        >
          <img
            src="/innovation/home/in-welder.webp"
            alt="Equipment Support"
            className="relative z-10 mx-auto -mt-32 hidden h-auto w-auto max-w-[400px] xl:block"
          />
        </div>
      </div>
    </section>
  );
}
