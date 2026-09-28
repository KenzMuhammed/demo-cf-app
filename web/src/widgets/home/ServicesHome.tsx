import React, { useState } from "react";
import type { IconType } from "react-icons";
import {
  FiActivity,
  FiCheckCircle,
  FiTool,
  FiRepeat,
  FiCpu,
  FiArrowRight,
  FiSettings,
  FiTruck,
} from "react-icons/fi";
import { FaBriefcase } from "react-icons/fa6";
import { Button } from "@/components/ui/Button";
import RequestServiceModal from "../preventiveServices/RequestServiceModal";
import Toast from "@/components/ui/Toast";

interface ServiceItem {
  title: string;
  desc: string;
  img: string;
  icon: IconType;
  linkText: string;
  linkHref: string;
  btnText: string;
  btnHref: string;
}

const services: ServiceItem[] = [
  {
    title: "Equipment Fleet Rental",
    desc: "Temporary and long-term access to 2,500+ industrial machines for major projects, turnaround shutdown activities, and offshore operations across Saudi Arabia.",
    img: "/innovation/home/in-service-01.webp",
    icon: FiTruck,
    linkText: "Learn More",
    linkHref: "/equipment-rental",
    btnText: "Rent Fleet",
    btnHref: "/equipment-rental",
  },
  {
    title: "Pre-Owned Machine Sales",
    desc: "Certified pre-owned welding machines, generators, and compressors. Fully overhauled with 100-point inspection, certified calibration report, and warranty protection.",
    img: "/innovation/home/in-service-02.webp",
    icon: FiRepeat,
    linkText: "View Stock",
    linkHref: "/category",
    btnText: "Buy Machine",
    btnHref: "/category",
  },
  {
    title: "Preventive Maintenance",
    desc: "Scheduled inspections and servicing carried out to identify issues early and keep equipment operating within defined safety and performance standards.",
    img: "/innovation/home/in-service-03.webp",
    icon: FiActivity,
    linkText: "Learn More",
    linkHref: "/preventive",
    btnText: "Contact",
    btnHref: "/contact",
  },
  {
    title: "Repair & Overhaul Services",
    desc: "Corrective repair services and workshop rebuilds restoring malfunctioning or damaged industrial fleet equipment back to optimal operational condition.",
    img: "/innovation/home/in-service-04.webp",
    icon: FiTool,
    linkText: "Learn More",
    linkHref: "/repair-services",
    btnText: "Contact",
    btnHref: "/contact",
  },
  {
    title: "Annual Maintenance Contracts",
    desc: "Structured maintenance agreements that define service frequency, dedicated parts stock, coverage, and guaranteed uptime over a fixed contract period.",
    img: "/innovation/home/in-service-05.webp",
    icon: FiRepeat,
    linkText: "Learn More",
    linkHref: "/services",
    btnText: "Contact",
    btnHref: "/contact",
  },
  {
    title: "Installation & Commissioning",
    desc: "Support during equipment setup to ensure correct power alignment, safety certification, and full operational readiness for project teams.",
    img: "/innovation/home/in-service-06.webp",
    icon: FiSettings,
    linkText: "Learn More",
    linkHref: "/services",
    btnText: "Contact",
    btnHref: "/contact",
  },
];

const backgroundImage = "/innovation/home/in-service-bg.webp";

export default function ServicesSection() {
  const [requestService, setRequestService] = useState(false);
  const [showToast, setShowToast] = useState(false);

  return (
    <>
      <section
        className="relative bg-cover bg-fixed bg-center bg-no-repeat py-14 lg:py-24 xl:py-32"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container">
          <div className="flex">
            <div className="mb-8 flex gap-4 text-white md:mb-12 md:items-center md:gap-6 lg:mb-16">
              <FaBriefcase className="text-secondary-lighter h-10 w-10 max-md:mt-0.5 md:h-12 md:w-12 lg:h-14 lg:w-14" />
              <div className="h-[60%] w-px bg-slate-300 max-md:hidden" />
              <div>
                <h2 className="font-heading text-3xl font-bold uppercase lg:text-4xl">
                  Our <span className="text-secondary">Services</span>
                </h2>
                <p className="text-slate-400 max-md:text-sm">
                  Complete rental fleet management, certified machinery sales, and engineering
                  support
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="group hover:border-primary/50 relative overflow-hidden rounded-xl border border-white/10 bg-black/70 transition-all duration-500 ease-out hover:shadow-lg lg:rounded-3xl"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                  </div>
                  <div className="bg-primary absolute top-47.5 left-6 z-20 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-6 max-sm:hidden">
                    <Icon className="text-2xl" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col p-6 sm:min-h-60 sm:pt-10">
                    <h3 className="font-heading text-lg font-semibold text-white">{s.title}</h3>
                    <p
                      className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-400"
                      aria-label={s.desc}
                    >
                      {s.desc}
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-4 md:pt-8">
                      <Button
                        variant="link"
                        className="text-secondary-dark"
                        onClick={() => (window.location.href = s.linkHref)}
                      >
                        {s.linkText}
                      </Button>
                      <Button
                        size="sm"
                        variant="light"
                        aria-label={`${s.btnText} for ${s.title}`}
                        onClick={() => {
                          if (s.btnHref === "/contact") {
                            setRequestService(true);
                          } else {
                            window.location.href = s.btnHref;
                          }
                        }}
                      >
                        {s.btnText} <FiArrowRight aria-hidden="true" />
                      </Button>
                    </div>
                  </div>
                  <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_50%_-20%,rgba(255,255,255,0.12),transparent_40%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              );
            })}
          </div>
          <div className="mt-16 text-center">
            <a href="/services">
              <Button size="lg" aria-label="View all services">
                View All Services & Rental Options
              </Button>
            </a>
          </div>
        </div>
      </section>
      <RequestServiceModal
        open={requestService}
        onClose={() => setRequestService(false)}
        onSubmit={(data) => console.log("Quote Data:", data)}
        onShowToast={() => setShowToast(true)}
      />
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        title="Request Submitted"
        description="We have received your service request and will contact you shortly."
        variant="success"
        icon={FiCheckCircle}
      />
    </>
  );
}
