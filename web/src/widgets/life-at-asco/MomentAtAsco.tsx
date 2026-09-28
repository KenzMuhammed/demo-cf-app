import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaBriefcase } from "react-icons/fa6";

export default function GallerySection() {
  const gallery = [
    { src: "/about/highlights/hl1.webp", label: "Team Collaboration" },
    { src: "/about/highlights/hl2.webp", label: "Work Discussion" },
    { src: "/about/highlights/hl3.webp", label: "Office Moments" },
    { src: "/about/highlights/hl10.webp", label: "Team Bonding" },
    { src: "/about/highlights/hl4.webp", label: "Team Meeting" },
    { src: "/about/highlights/hl6.webp", label: "Celebration" },
    { src: "/about/highlights/hl8.webp", label: "Planning Session" },
    { src: "/about/highlights/hl9.webp", label: "Team Bonding" },
  ];

  const [visibleCount, setVisibleCount] = useState(6);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const visibleImages = gallery.slice(0, visibleCount);

  return (
    <section className="relative w-full py-14 lg:py-24">
      <div className="absolute inset-0 -z-10">
        <img
          src="/blogs/blog-2.webp"
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="bg-secondary-darker/95 absolute inset-0" />
      </div>

      <div className="relative container">
        <div className="flex">
          <div className="mb-8 flex gap-4 text-white md:mb-12 md:items-center md:gap-6 lg:mb-16">
            <FaBriefcase className="text-secondary-lighter h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14" />
            <div className="hidden h-[60%] w-px bg-slate-300 md:block" />
            <div>
              <h2 className="font-heading text-3xl font-bold uppercase lg:text-4xl">
                Moments at <span className="text-primary">ASCO</span>
              </h2>
              <p className="text-slate-400 max-md:text-sm">
                A glimpse into our culture, teamwork, and shared experiences that define our
                workplace.
              </p>
            </div>
          </div>
        </div>

        <div className="columns-1 gap-6 space-y-6 sm:columns-2 md:columns-3">
          {visibleImages.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 180, damping: 15 }}
              className="group relative mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-xl"
            >
              <div className="relative w-full">
                <img
                  src={item.src}
                  alt={item.label}
                  width={800}
                  height={600}
                  className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        {visibleCount < gallery.length && (
          <div className="mt-14 flex justify-center">
            <Button size="lg" onClick={loadMore}>
              Load More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
