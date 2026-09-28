import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
  linkClassName?: string;
};

export default function Breadcrumb({
  items,
  className = "",
  linkClassName = "text-gray-600",
}: BreadcrumbProps) {
  return (
    <nav className={className} aria-label="Breadcrumb">
      <ol className="font-heading flex items-center overflow-hidden">
        <li className="flex shrink-0 items-center">
          <Link
            to="/"
            className={`flex items-center gap-2 font-medium transition-colors hover:text-black ${linkClassName}`}
          >
            <AiOutlineHome />
            <span className="hidden sm:inline">Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex min-w-0 items-center">
              <BiChevronRight className="mx-1 h-4 w-4 shrink-0 text-gray-400" />

              {isLast ? (
                <span className={`max-w-45 truncate font-semibold sm:max-w-none ${linkClassName}`}>
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href || "#"}
                  className={`max-w-30 truncate font-medium transition-colors sm:max-w-none ${linkClassName}`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
