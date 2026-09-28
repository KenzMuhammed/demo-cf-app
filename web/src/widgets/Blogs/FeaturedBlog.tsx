import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";
import BlogList from "./BlogList";
import Button from "@/components/ui/Button";

const blogs = [
  {
    date: "14 Mar 2026",
    title: "Why Preventive Maintenance Is Critical for Heavy Industrial Equipment?",
    desc: "A practical look at how preventive maintenance reduces downtime, extends equipment life and protects project timelines in demanding industrial environments.",
    image: "/about/accomplishments/national-maritime.webp",
  },
  {
    date: "12 Mar 2026",
    title: "Choosing the Right Welding Equipment for High Risk Industrial Operations",
    desc: "An easy guide to selecting welding machines and cutting solutions that meet safety, compliance, performance and reliability needs.",
    image: "/blogs/blog-4.webp",
  },
  {
    date: "10 Mar 2026",
    title: "Why Preventive Maintenance Matters for Welding Equipment",
    desc: "Learn how regular preventive maintenance helps improve welding equipment reliability and reduce unexpected downtime in industrial operations.",
    image: "/about/accomplishments/national-maritime-02.webp",
  },
];

export default function FeaturedBlog() {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0c] py-16 text-white">
      <div className="absolute inset-0">
        <div className="bg-secondary-light/80 absolute -top-32 left-1/2 z-0 h-100 w-100 -translate-x-1/2 rounded-full blur-[120px]" />
        <div className="bg-secondary/60 absolute right-0 bottom-0 z-0 h-75 w-75 rounded-full blur-[120px]" />
      </div>

      <div className="relative container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch">
          <div className="h-full lg:sticky lg:top-28">
            <Link to="/blog-details" className="block h-full">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="group h-full"
              >
                <div className="relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl">
                  <div className="relative h-full min-h-130 overflow-hidden rounded-[28px]">
                    <img
                      src="/about/accomplishments/national-maritime-02.webp"
                      alt="Featured"
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 z-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                  </div>

                  <div className="absolute bottom-0 z-10 w-full p-8">
                    <div className="rounded-2xl border border-white/10 bg-white/10 p-7 backdrop-blur-xl transition select-text group-hover:bg-white/15">
                      <div className="mb-3 flex items-center gap-2 text-white/60">
                        <AiOutlineStar />
                        <span className="text-sm">Featured</span>
                      </div>

                      <h3 className="font-heading line-clamp-3 text-2xl leading-tight font-semibold select-text md:text-3xl">
                        Choosing the Right Welding Equipment for High Risk Industrial Operations
                      </h3>

                      <p className="mt-3 line-clamp-2 text-sm text-white/70 select-text">
                        An easy guide to selecting welding machines and cutting solutions that meet
                        safety, compliance, performance, and reliability needs.
                      </p>

                      <div className="mt-4 flex flex-col gap-2 text-sm text-white/60 md:flex-row md:items-center md:justify-between md:gap-0">
                        <div className="flex items-center gap-2 select-text">
                          <FaRegCalendarAlt />
                          <span>14 May 2025</span>
                        </div>
                        <div>
                          <Button
                            size="sm"
                            variant="light"
                            className="flex items-center gap-2"
                            onClick={() => (window.location.href = "/blog-details")}
                          >
                            Read More <FiArrowRight />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>

          <div className="flex h-full flex-col justify-between gap-8">
            {blogs.map((blog, i) => (
              <Link key={i} to={`/blog-details`} className="block h-full">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group h-full"
                >
                  <div className="flex h-full flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:bg-white/10 md:flex-row">
                    <div className="relative h-40 w-full overflow-hidden rounded-xl md:w-64">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="z-10 flex flex-1 flex-col justify-between">
                      <div>
                        <h4 className="font-heading line-clamp-2 text-xl leading-snug font-medium select-text group-hover:text-white/80">
                          {blog.title}
                        </h4>

                        <p className="mt-3 line-clamp-3 text-sm text-white/60 select-text">
                          {blog.desc}
                        </p>
                      </div>

                      <div className="mt-2 flex flex-col gap-3 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center gap-2 select-text">
                          <FaRegCalendarAlt />
                          <span className="whitespace-nowrap">{blog.date}</span>
                        </div>

                        <div className="flex md:justify-end">
                          <Button
                            size="sm"
                            variant="light"
                            onClick={() => (window.location.href = "/blog-details")}
                          >
                            Read More <FiArrowRight />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <BlogList />
        </div>
      </div>
    </section>
  );
}
