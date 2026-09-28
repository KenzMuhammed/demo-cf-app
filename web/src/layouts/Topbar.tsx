import {
  RiMailLine,
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiTwitterXFill,
} from "react-icons/ri";
import { MdOutlineFileDownload } from "react-icons/md";

const socialLinks = [
  {
    icon: RiFacebookFill,
    href: "https://www.facebook.com/people/Absolute-Solutions-Company-for-Iron/100063714355912/?mibextid=wwXIfr&rdid=r3a3XnvsaxVpYn49&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BpDsZEdKq%2F%3Fmibextid%3DwwXIfr",
    label: "Facebook",
  },
  {
    icon: RiInstagramLine,
    href: "https://www.instagram.com/ascosaudi?igsh=MWYzd2ZuMWJydnJiOA==",
    label: "Instagram",
  },
  {
    icon: RiLinkedinFill,
    href: "https://www.linkedin.com/company/absolutesolutionscompany/",
    label: "LinkedIn",
  },
  { icon: RiTwitterXFill, href: "#", label: "Twitter" },
];

export default function Topbar() {
  const openModal = () => {
    window.dispatchEvent(new Event("open-event-modal"));
  };

  return (
    <div className="topbar-height bg-primary-darker text-white backdrop-blur-lg lg:block">
      <div className="relative z-10 container flex h-11 items-center justify-between text-sm">
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium tracking-wider uppercase max-md:hidden">
            Follow us:
          </span>
          <div className="flex items-center gap-1">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-md transition hover:bg-gray-200 hover:text-black"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="divide-primary flex h-full items-stretch divide-x">
          <a
            href="#"
            className="hover:bg-primary flex items-center gap-2 px-4 text-slate-300 transition hover:text-white"
            aria-label="Download Brochure"
          >
            <MdOutlineFileDownload size={18} />
            <span className="hidden font-medium xl:block">Brochure</span>
          </a>
          <a
            href="mailto:info@innosaudi.com"
            className="hover:bg-primary flex items-center gap-2 px-4 text-slate-300 transition hover:text-white"
            aria-label="Get in touch via email"
          >
            <RiMailLine size={16} />
            <span className="hidden font-medium xl:block">info@innosaudi.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
