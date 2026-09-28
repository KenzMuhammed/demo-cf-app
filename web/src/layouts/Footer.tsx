import { Link } from "react-router-dom";
import { useState } from "react";
import {
  RiMapPinLine,
  RiArrowDownSLine,
  RiLinkedinFill,
  RiInstagramLine,
  RiFacebookFill,
  RiTwitterXFill,
} from "react-icons/ri";

export default function Footer() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (key: string) => setOpen(open === key ? null : key);

  const sections = [
    {
      key: "company",
      title: "Company",
      links: [
        ["About Innovation Rental", "/"],
        ["Rental Fleet Solutions", "/"],
        ["Machines for Sale", "/"],
        ["Safety & Compliance", "/"],
      ],
    },
    {
      key: "services",
      title: "Services",
      links: [
        ["Short & Long Term Rental", "/"],
        ["Pre-Owned Equipment Sales", "/"],
        ["Preventive Maintenance", "/"],
        ["Fleet Repair & Overhaul", "/"],
        ["Authorized Calibration Center", "/"],
        ["Annual Maintenance (AMC)", "/"],
        ["On-site Technical Support", "/"],
      ],
    },
    {
      key: "equipment-fleet",
      title: "Equipment Fleet",
      links: [
        ["Multi-Process Inverters", "/"],
        ["Diesel Welding Skids", "/"],
        ["CNC Track & Plasma Cutters", "/"],
        ["Industrial Air Compressors", "/"],
        ["Diesel Generators 50–500kVA", "/"],
        ["Pipe Beveling & Clamps", "/"],
        ["Certified Used Machines", "/"],
      ],
    },
    {
      key: "resources",
      title: "Resources",
      links: [
        ["FAQ", "/"],
        ["Blogs", "/"],
        ["Contact Us", "/"],
      ],
    },
  ];

  const renderLinks = (section: any) =>
    section.links.map(([label, href]: [string, string]) => (
      <li key={label}>
        {section.key === "company" || section.key === "resources" ? (
          <Link to={href} className="hover:text-primary-light transition">
            {label}
          </Link>
        ) : (
          <span className="hover:text-primary-light cursor-pointer transition">{label}</span>
        )}
      </li>
    ));

  return (
    <footer className="bg-primary-darker text-white">
      <div className="container pt-14 lg:pt-20">
        <div className="space-y-8 lg:hidden">
          <div>
            <h2 className="font-heading mb-4 text-lg font-semibold">Registered Office</h2>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 text-gray-300">
                <RiMapPinLine size={24} className="text-primary-light mt-1 shrink-0" />
                <p>
                  Kingdom Headquarters & Hubs
                  <br />
                  Al-Khobar HQ:
                  <br />
                  Building 2435, King Saud Road,
                  <br />
                  Al-Taawun District, Al-Khobar, 34632, KSA
                </p>
              </div>
              <div className="flex gap-3 text-gray-400">
                <div className="w-6" />
                <p>
                  CR: 2051058492
                  <br />
                  VAT: 310248592300003
                </p>
              </div>
            </div>
          </div>
          {sections.map((section) => (
            <div key={section.key} className="mb-0 border-b border-white/10">
              <button
                onClick={() => toggle(section.key)}
                className="font-heading flex w-full items-center justify-between py-4 text-lg font-semibold"
              >
                {section.title}
                <RiArrowDownSLine
                  className={`h-5 w-5 transition-transform ${
                    open === section.key ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  open === section.key ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <ul className="space-y-2 pb-6 text-sm text-gray-300">{renderLinks(section)}</ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden grid-cols-2 gap-10 md:grid-cols-3 lg:grid xl:grid-cols-5">
          <div>
            <h2 className="font-heading mb-5 text-xl font-semibold">Registered Office</h2>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 text-gray-300">
                <RiMapPinLine size={24} className="text-primary-light mt-1 shrink-0" />
                <p>
                  Kingdom Headquarters & Hubs
                  <br />
                  Al-Khobar HQ:
                  <br />
                  Building 2435, King Saud Road,
                  <br />
                  Al-Taawun District, Al-Khobar, 34632, KSA
                </p>
              </div>
              <div className="flex gap-3 text-gray-400">
                <div className="w-6" />
                <p>
                  CR: 2051058492
                  <br />
                  VAT: 310248592300003
                </p>
              </div>
            </div>
          </div>
          {sections.map((section) => (
            <div key={section.key}>
              <h3 className="font-heading mb-5 text-xl font-semibold">{section.title}</h3>
              <ul className="space-y-2 text-sm text-gray-300">{renderLinks(section)}</ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-14 border-t border-white/10">
        <div className="container pb-8">
          <div className="flex flex-col items-center justify-between gap-4 pt-6 text-sm text-white/50 md:flex-row">
            <p className="max-md:order-2">
              © {new Date().getFullYear()} Innovation Rental / ASCO Weld Saudi Arabia. All rights
              reserved.
            </p>
            <div className="flex items-center gap-5 text-white/60 max-md:order-1">
              <Link
                to={
                  "https://www.facebook.com/people/Absolute-Solutions-Company-for-Iron/100063714355912/?mibextid=wwXIfr&rdid=r3a3XnvsaxVpYn49&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BpDsZEdKq%2F%3Fmibextid%3DwwXIfr"
                }
                target="_blank"
                aria-label="Facebook"
              >
                <RiFacebookFill
                  className="hover:text-primary-light cursor-pointer transition"
                  size={16}
                />
              </Link>
              <Link
                to={"https://www.instagram.com/ascosaudi?igsh=MWYzd2ZuMWJydnJiOA=="}
                target="_blank"
                aria-label="Instagram"
              >
                <RiInstagramLine
                  className="hover:text-primary-light cursor-pointer transition"
                  size={16}
                />
              </Link>
              <Link
                to={"https://www.linkedin.com/company/absolutesolutionscompany/"}
                target="_blank"
                aria-label="LinkedIn"
              >
                <RiLinkedinFill
                  className="hover:text-primary-light cursor-pointer transition"
                  size={16}
                />
              </Link>
              <RiTwitterXFill
                className="hover:text-primary-light cursor-pointer transition"
                size={16}
              />
            </div>
            <div className="space-x-2 max-md:order-3">
              <Link to="/privacy" className="hover:text-primary-light cursor-pointer transition">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link to="/terms" className="hover:text-primary-light cursor-pointer transition">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
