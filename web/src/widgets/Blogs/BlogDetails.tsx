import { Link } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import RelatedBlogs from "./RelatedBlogs";

type BlogContentItem =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "image"; src: string; alt?: string };

const blog = {
  title: "Choosing the Right Welding Equipment for High Risk Industrial Operations",
  date: "14 March 2026",
  author: "Chethan Raja Rajan Nair",
  readingTime: "6 min read",
  description:
    "An easy guide to selecting welding machines and cutting solutions that meet safety, compliance, performance, and reliability needs.",
  content: [
    { type: "heading", text: "Introduction" },
    {
      type: "paragraph",
      text: "Welding equipment plays a critical role in fabrication workshops, construction projects, and industrial manufacturing environments. When machines operate continuously under demanding conditions, regular servicing becomes essential to maintain reliability and performance.",
    },
    {
      type: "paragraph",
      text: "Preventive maintenance helps identify potential issues early, reduce equipment downtime, and ensure consistent welding quality across projects. By implementing scheduled inspections and servicing routines, companies can extend equipment lifespan and maintain safer working conditions.",
    },

    { type: "heading", text: "Why Preventive Maintenance Matters" },
    {
      type: "paragraph",
      text: "In industrial environments, equipment failure can disrupt operations, delay projects, and increase maintenance costs. Preventive maintenance focuses on addressing small issues before they develop into major problems.",
    },
    {
      type: "paragraph",
      text: "Routine servicing ensures that welding machines continue operating within recommended performance parameters. It also helps maintain stable arc performance, proper electrical connections, and overall machine efficiency.",
    },
    {
      type: "paragraph",
      text: "Regular maintenance practices also support workplace safety by identifying worn components or electrical issues that could otherwise lead to equipment malfunction.",
    },

    { type: "heading", text: "Common Issues in Welding Equipment" },
    {
      type: "paragraph",
      text: "Over time, welding equipment may experience performance issues caused by wear, environmental conditions, or heavy usage. Some of the most common problems include overheating, inconsistent arc performance, and worn cables or connectors.",
    },
    {
      type: "paragraph",
      text: "Dust, metal particles, and debris in fabrication environments can also accumulate inside equipment components, affecting cooling systems and electrical performance.",
    },
    {
      type: "paragraph",
      text: "Regular inspections help detect these conditions early and allow service teams to perform necessary cleaning, adjustments, or part replacements before the equipment fails during operation.",
    },

    { type: "heading", text: "Key Preventive Maintenance Practices" },
    {
      type: "paragraph",
      text: "Implementing a structured maintenance routine can significantly improve equipment reliability. Basic maintenance practices include inspecting cables and connectors, checking cooling systems, and ensuring proper calibration of equipment settings.",
    },
    {
      type: "paragraph",
      text: "Operators should also monitor ventilation systems and clean equipment surfaces regularly to prevent dust buildup that may affect internal components.",
    },
    {
      type: "paragraph",
      text: "Periodic inspections by qualified service engineers are recommended to evaluate machine performance and ensure that the equipment continues to operate according to manufacturer guidelines.",
    },

    { type: "heading", text: "Benefits of Regular Equipment Servicing" },
    {
      type: "paragraph",
      text: "Preventive maintenance provides several long-term benefits for industrial operations. Equipment that undergoes routine servicing tends to operate more reliably and maintain consistent welding quality.",
    },
    {
      type: "paragraph",
      text: "Regular inspections also help reduce unexpected breakdowns, allowing production schedules to continue without disruption. In addition, maintaining equipment properly can extend the operational lifespan of machines, reducing long-term replacement costs.",
    },
    {
      type: "paragraph",
      text: "For fabrication workshops and industrial facilities, these benefits contribute to smoother operations and improved productivity.",
    },

    { type: "heading", text: "Supporting Equipment from Trusted Brands" },
    {
      type: "paragraph",
      text: "Industrial welding environments often use equipment from established manufacturers such as ESAB and Hyundai Welding. These machines are designed for durability and performance, but they still require regular servicing to maintain optimal operation.",
    },
    {
      type: "paragraph",
      text: "Preventive maintenance ensures that equipment from these manufacturers continues to perform efficiently while meeting recommended service guidelines.",
    },

    { type: "heading", text: "Conclusion" },
    {
      type: "paragraph",
      text: "Preventive maintenance plays an essential role in maintaining the reliability, safety, and performance of welding equipment used in industrial operations. By conducting regular inspections and servicing routines, companies can minimize equipment downtime and maintain consistent welding quality across projects.",
    },
    {
      type: "paragraph",
      text: "Organizations that prioritize preventive maintenance often benefit from improved equipment lifespan, safer working environments, and more efficient production processes.",
    },

    { type: "image", src: "/blogs/blog-3.webp", alt: "Industrial welding setup" },
  ],
  tags: ["Welding", "Industrial Safety", "Equipment", "Maintenance", "Compliance"],
};

export default function BlogDetails() {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0c] py-16 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-secondary-light/20 absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full blur-[120px]" />
        <div className="bg-secondary/30 absolute right-0 bottom-0 h-80 w-80 rounded-full blur-[120px]" />
      </div>

      <div className="relative container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="flex max-w-3xl flex-col gap-6 text-base leading-8 text-gray-300 lg:col-span-2">
            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <AiOutlineUser /> {blog.author}
              </span>
              <span className="flex items-center gap-1">
                <FaRegCalendarAlt /> {blog.date}
              </span>
              <span>{blog.readingTime}</span>
            </div>

            {blog.content.map((item, idx) => {
              if (item.type === "heading") {
                return (
                  <h2 key={idx} className="mt-6 text-lg font-semibold text-white">
                    {item.text}
                  </h2>
                );
              }

              if (item.type === "paragraph") {
                return <p key={idx}>{item.text}</p>;
              }

              if (item.type === "image" && item.src) {
                return (
                  <div
                    key={idx}
                    className="relative mt-6 h-64 w-full overflow-hidden rounded-xl md:h-100"
                  >
                    <img
                      src={item.src}
                      alt={item.alt || ""}
                      className="absolute inset-0 h-full w-full rounded-xl object-cover"
                    />
                  </div>
                );
              }
            })}
            <div className="mt-8 mb-10 flex flex-wrap gap-2">
              {blog.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="cursor-pointer rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-gray-300 transition hover:bg-yellow-500 hover:text-black"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <aside className="flex h-fit flex-col gap-6 lg:sticky">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur-xl">
              <RelatedBlogs />
            </div>

            {/* <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur-xl">
              <BlogCategory />
            </div> */}
          </aside>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/blogs"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-yellow-400"
          >
            <BsArrowLeft /> Back to Blogs
          </Link>
        </div>
      </div>
    </section>
  );
}
