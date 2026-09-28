import Button from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";

type RelatedBlog = {
  id: number;
  title: string;
  date: string;
  image: string;
  href: string;
};

const relatedBlogs: RelatedBlog[] = [
  {
    id: 1,
    title: "Advanced Welding Techniques for Industrial Projects",
    date: "14 Mar 2026",
    image: "/blogs/blog-6.webp",
    href: "/blog-details",
  },
  {
    id: 2,
    title: "Ensuring Safety Compliance in Welding Operations",
    date: "10 Mar 2026",
    image: "/blogs/blog-7.webp",
    href: "/blog-details",
  },
  {
    id: 3,
    title: "Maintaining Welding Equipment for Maximum Efficiency",
    date: "5 Mar 2026",
    image: "/blogs/blog-8.webp",
    href: "/blog-details",
  },
];

export default function RelatedBlogsWidget() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-heading text-lg font-semibold text-gray-300">Related Blogs</h2>
      {relatedBlogs.map((blog) => (
        <Link key={blog.id} to={blog.href} className="group">
          <div className="flex items-center gap-3 overflow-hidden rounded-xl border border-white/20 bg-white/10 p-3 shadow-md backdrop-blur-md">
            <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg">
              <img
                src={blog.image}
                alt={blog.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col gap-1 text-gray-200">
              <h3 className="font-heading line-clamp-2 text-sm font-medium">{blog.title}</h3>

              <span className="flex items-center gap-1 text-xs text-gray-400">
                <FaRegCalendarAlt className="h-3 w-3" />
                {blog.date}
              </span>
            </div>
          </div>
        </Link>
      ))}
      <div className="flex justify-end">
        <Button
          size="sm"
          variant="light"
          className="flex items-center gap-2"
          onClick={() => (window.location.href = "/blog")}
        >
          View All Blogs
          <BsArrowRight className="transition group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
}
