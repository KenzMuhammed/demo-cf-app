import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { FaTools } from "react-icons/fa";
import { RiArrowRightLine } from "react-icons/ri";
import Button from "../ui/Button";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BannerProps = {
  title: string;
  subTitle?: string;
  description?: string;
  bgImage: string;
  breadcrumbs: BreadcrumbItem[];
  buttonText?: string;
  buttonLink?: string;
};

export default function WeldingBanner({
  title,
  subTitle,
  description,
  bgImage,
  breadcrumbs,
  buttonText,
  buttonLink,
}: BannerProps) {
  return (
    <section className="relative z-10 w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={bgImage} alt={title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-b from-slate-800/60 via-black/50 to-black/70" />
      </div>

      <div className="relative container mx-auto flex min-h-80 flex-col justify-end px-6 py-16 md:min-h-90 lg:min-h-110">
        <h1 className="font-heading flex items-center gap-3 text-3xl leading-tight font-extrabold text-white uppercase md:text-4xl lg:text-5xl">
          <img src="/a-icon.webp" alt="ASCO" width={600} height={405} className="h-11 w-auto" />
          {title}
        </h1>

        {subTitle && (
          <h2 className="mt-3 flex items-center gap-2 text-sm font-semibold tracking-widest text-white/90 uppercase md:text-lg">
            <FaTools className="text-[#ffc504]" />
            {subTitle}
          </h2>
        )}

        {description && (
          <p className="font-heading mt-3 max-w-2xl text-sm leading-relaxed text-white/85 md:text-base xl:text-lg">
            {description}
          </p>
        )}

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <nav
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-black/10 px-5 py-2 text-xs text-white backdrop-blur-md md:text-sm"
            aria-label="Breadcrumb"
          >
            {breadcrumbs.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                {item.href ? (
                  <Link
                    to={item.href}
                    className="flex items-center gap-1 transition duration-300 hover:text-yellow-400"
                  >
                    {index === 0 && <AiOutlineHome className="text-base" />}
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-semibold text-white">{item.label}</span>
                )}
                {index < breadcrumbs.length - 1 && <BiChevronRight className="text-white/60" />}
              </div>
            ))}
          </nav>

          {buttonText && buttonLink && (
            <Button
              onClick={() => {
                window.location.href = buttonLink;
              }}
              variant="primary"
              className="flex items-center gap-2"
            >
              {buttonText}
              <RiArrowRightLine />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
