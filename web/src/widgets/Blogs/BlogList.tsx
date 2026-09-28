import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import Button from "@/components/ui/Button";
import { useState, useEffect } from "react";

const blogsContent = [
  {
    date: "8 Mar 2026",
    title: "Avoiding Common Welding Mistakes in Industrial Operations",
    description:
      "A detailed guide to recognizing frequent welding errors and applying tips to improve quality, safety, and efficiency on-site.",
    image: "/blogs/blog-1.webp",
  },
  {
    date: "2 Mar 2026",
    title: "Enhancing Welding Performance in Extreme Conditions",
    description:
      "Proven techniques to optimize welding output and reliability, even in the most challenging industrial environments.",
    image: "/blogs/blog-2.webp",
  },
  {
    date: "27 Feb 2026",
    title: "Comprehensive Safety Checklist for Industrial Machinery",
    description:
      "A complete maintenance and safety checklist to ensure your industrial equipment runs smoothly and meets safety standards.",
    image: "/blogs/blog-3.webp",
  },
  {
    date: "23 Feb 2026",
    title: "Industrial Equipment Maintenance Checklist for Safety",
    description:
      "A complete checklist for maintaining industrial machinery to ensure safety, reliability, and efficiency.",
    image: "/blogs/blog-7.webp",
  },
  {
    date: "12 Feb 2026",
    title: "Optimizing Welding Performance in Harsh Environments",
    description:
      "Techniques to enhance welding efficiency and reliability in challenging industrial conditions.",
    image: "/blogs/blog-5.webp",
  },
  {
    date: "12 Jan 2026",
    title: "Common Welding Mistakes and How to Avoid Them",
    description:
      "A guide to identifying typical errors in welding operations and tips to improve quality and safety.",
    image: "/blogs/blog-6.webp",
  },
];

export default function BlogList() {
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width >= 1024) setVisibleCount(3);
      else if (width >= 768) setVisibleCount(2);
      else setVisibleCount(1);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div>
      <div className="grid auto-rows-fr gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogsContent.slice(0, visibleCount).map((blog, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition duration-500 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]">
              <div className="group relative aspect-4/3 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-0 left-[-150%] h-full w-full -skew-x-12 transform bg-white/5 backdrop-blur-[1px] transition-all duration-1200 ease-out group-hover:left-[150%]" />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="mt-4 flex items-center gap-2 text-sm text-white/60">
                  <FaRegCalendarAlt />
                  <span>{blog.date}</span>
                </div>

                <h3 className="font-heading mt-2 text-lg leading-snug font-medium text-white transition group-hover:text-white/80 md:text-xl">
                  {blog.title}
                </h3>

                <p className="mt-3 line-clamp-2 text-sm text-white/60">{blog.description}</p>

                <div className="mt-auto pt-5">
                  <Button
                    size="sm"
                    variant="light"
                    className="flex items-center gap-2"
                    onClick={() => (window.location.href = "/blog-details")}
                  >
                    Read More
                    <BsArrowRight className="transition group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {visibleCount < blogsContent.length && (
        <div className="mt-8 flex justify-center lg:mt-24">
          <Button variant="primary" onClick={handleLoadMore}>
            Load More Blogs
          </Button>
        </div>
      )}
    </div>
  );
}
