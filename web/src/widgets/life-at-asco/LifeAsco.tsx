import { motion } from "framer-motion";
import { HiOutlineSparkles } from "react-icons/hi";
import {
  FaUsers,
  FaHandshake,
  FaRocket,
  FaLeaf,
  FaUserFriends,
  FaChartLine,
  FaHandHoldingHeart,
} from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const float = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function WhatItsLikeSection() {
  return (
    <section className="relative overflow-hidden py-14 lg:py-24">
      <div className="absolute inset-0 -z-10">
        <img
          src="/industry/faq2.webp"
          alt="Category Background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-white/10"></div>
      </div>

      <div className="relative container pb-14 lg:pb-20">
        <div className="mb-8 flex sm:justify-center md:mb-12 lg:mb-16">
          <div className="text-secondary-dark mb-4 flex gap-4 md:mb-12 md:items-center md:gap-6 lg:mb-14">
            <HiOutlineSparkles className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14" />
            <div className="h-[60%] w-px bg-slate-300 max-md:hidden" />
            <div>
              <h2 className="font-heading text-3xl font-bold uppercase lg:text-4xl">
                <span className="text-primary-darker">What It’s</span> Like Here
              </h2>
              <p className="text-slate-600 max-md:text-sm">Culture & Environment</p>
            </div>
          </div>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="space-y-16 lg:space-y-40"
        >
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-20">
            <motion.div variants={item} className="relative flex justify-center overflow-visible">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 left-0 w-3/4 opacity-70 max-md:hidden"
              >
                <div className="overflow-hidden rounded-3xl shadow-2xl">
                  <img src="/blogs/blog-4.webp" alt="background" width={800} height={600} />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-full max-w-md"
              >
                <div className="overflow-hidden rounded-3xl bg-white/40 p-[2px] shadow-2xl backdrop-blur-2xl">
                  <img
                    src="/blogs/blog-4.webp"
                    alt="Team collaboration"
                    width={900}
                    height={700}
                    className="w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </motion.div>

              <div className="absolute -top-5 right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/80 shadow-lg backdrop-blur-xl">
                <FaChartLine className="text-primary" />
              </div>

              <div className="bg-primary absolute bottom-6 left-6 z-10 flex h-12 w-12 items-center justify-center rounded-full text-white shadow-xl">
                <FaHandshake />
              </div>
            </motion.div>

            <motion.div variants={item} className="space-y-6">
              <h3 className="font-heading text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
                Collaboration in Nature
              </h3>

              <p className="leading-relaxed text-gray-600">
                We believe work feels better when people support each other and move forward
                together.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  { label: "Teamwork", icon: <FaUsers /> },
                  { label: "Support", icon: <FaHandshake /> },
                  { label: "Growth", icon: <FaRocket /> },
                ].map((tag) => (
                  <span
                    key={tag.label}
                    className="flex items-center gap-2 rounded-full border border-gray-200/60 bg-white/70 px-5 py-1.5 text-sm text-gray-700 shadow-sm backdrop-blur-md"
                  >
                    <span className="text-primary">{tag.icon}</span>
                    {tag.label}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-20">
            <motion.div variants={item} className="space-y-6 md:order-1">
              <h3 className="font-heading text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
                A Culture of Helping
              </h3>

              <p className="leading-relaxed text-gray-600">
                At ASCO, it’s all about helping each other and getting through the work.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  { label: "Ownership", icon: <FaUsers /> },
                  { label: "Consistency", icon: <FaLeaf /> },
                  { label: "Trust", icon: <FaHandshake /> },
                ].map((tag) => (
                  <span
                    key={tag.label}
                    className="flex items-center gap-2 rounded-full border border-gray-200/60 bg-white/70 px-5 py-1.5 text-sm text-gray-700 shadow-sm backdrop-blur-md"
                  >
                    <span className="text-primary">{tag.icon}</span>
                    {tag.label}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={item} className="relative flex justify-center overflow-visible">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 right-0 w-3/4 opacity-70 max-md:hidden"
              >
                <div className="overflow-hidden rounded-3xl shadow-2xl">
                  <img src="/blogs/blog-3.webp" alt="background" width={800} height={600} />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-full max-w-md"
              >
                <div className="overflow-hidden rounded-3xl bg-white/40 p-[2px] shadow-2xl backdrop-blur-2xl">
                  <img
                    src="/blogs/blog-3.webp"
                    alt="Work culture"
                    width={900}
                    height={700}
                    className="w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </motion.div>

              <div className="absolute -bottom-6 left-6 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/80 shadow-lg backdrop-blur-xl">
                <FaHandHoldingHeart className="text-primary" />
              </div>

              <div className="bg-primary absolute top-4 right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full shadow-md">
                <FaUserFriends className="text-sm text-white" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
