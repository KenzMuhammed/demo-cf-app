import { useEffect, useRef, useState } from "react";
import { MdOutlineVerified } from "react-icons/md";

export default function Clients() {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleIndexes((prev) => (prev.includes(index) ? prev : [...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const clients = [
    {
      name: "SAIPEM",
      logo: "/clients/saipem-logo.svg",
      description:
        "Saipem Taga Al-Rushaid Fabricators Company Ltd has operated in the Middle East since 2008, contributing to major fabrication and offshore component projects across the Arabian Gulf region.",
    },
    {
      name: "Zamil Group",
      logo: "/clients/zamil-logo.svg",
      description:
        "Zamil Group is a diversified Saudi business group operating across industrial, financial, and commercial sectors, contributing to economic growth and long-term development in the Kingdom.",
    },
    {
      name: "Rezayat Group",
      logo: "/clients/rezayat-logo.webp",
      description:
        "Rezayat Group is a diversified international enterprise based in Saudi Arabia, serving engineering, construction, industrial services, logistics, and manufacturing sectors for over seven decades.",
    },
    {
      name: "Descon Olayan",
      logo: "/clients/olayan-logo.webp",
      description:
        "Olayan Descon is a joint venture engineering and industrial services company in Saudi Arabia, delivering integrated solutions across construction, fabrication, and industrial maintenance sectors.",
    },
    {
      name: "M. Al-Barghash Co",
      logo: "/clients/malbarghashco.webp",
      description:
        "M. Al-Barghash Trading & Contracting Company is a Saudi-owned industrial contractor established in 1976, supporting projects across the Eastern Province with long-standing operational experience.",
    },
    {
      name: "D'Hondt Thermal Solutions",
      logo: "/clients/dh-logo.webp",
      description:
        "D'Hondt Thermal Solutions specializes in industrial heat exchange and cooling systems, serving power generation, HVAC, refrigeration, and energy-related sectors worldwide.",
    },
    {
      name: "C.A.T. Group",
      logo: "/clients/cat-logo.webp",
      description:
        "C.A.T. Group is an international engineering and construction company active in Saudi Arabia, delivering pipeline, power, and large-scale industrial infrastructure projects.",
    },
    {
      name: "Tamimi Industrial Services",
      logo: "/clients/tamimi-logo.webp",
      description:
        "Tamimi Industrial Services is a Saudi engineering and construction company providing fabrication, maintenance, and repair services to oil, gas, petrochemical, and power sectors.",
    },
    {
      name: "Nesma & Partners",
      logo: "/clients/nesma-logo.webp",
      description:
        "Nesma & Partners is a leading Saudi construction and engineering firm executing major infrastructure, industrial, and energy projects across the Kingdom.",
    },
    {
      name: "Geyad For Industry & Contracting",
      logo: "/clients/geyad-logo.webp",
      description:
        "Geyad for Industry and Contracting is a Saudi steel fabrication and industrial contracting company serving oil and gas, petrochemical, and construction sectors.",
    },
    {
      name: "Sinopec",
      logo: "/clients/sinopec-logo.webp",
      description:
        "Sinopec operates extensively in Saudi Arabia through large infrastructure projects, joint ventures, and energy sector collaborations within the Kingdom.",
    },
    {
      name: "L&T Energy Hydrocarbon",
      logo: "/clients/lt-logo.webp",
      description:
        "L&T Hydrocarbon Saudi Company delivers engineering, procurement, and construction solutions for energy and hydrocarbon infrastructure projects across Saudi Arabia.",
    },
  ];

  return (
    <section className="to-secondary-darker relative overflow-hidden bg-linear-to-l from-gray-900 via-gray-900/95 py-20 lg:py-28">
      <img
        src="/clients/geometry-clients.svg"
        alt="Clients Background Pattern"
        width={1200}
        height={800}
        className="pointer-events-none absolute inset-y-0 -right-1/2 h-full w-full object-cover object-right opacity-10"
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="mb-16 flex items-start gap-6 lg:items-center">
          <div className="bg-primary/10 flex items-center justify-center rounded-xl p-4">
            <MdOutlineVerified className="text-primary h-10 w-10" />
          </div>
          <div>
            <h2 className="font-heading text-4xl font-bold tracking-wide text-white uppercase">
              Trusted <span className="text-primary">Clients</span>
            </h2>
            <p className="mt-3 max-w-xl text-slate-400">
              We focus on being a trusted partner, working closely with our clients to support their
              requirements..
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client, index) => {
            const isVisible = visibleIndexes.includes(index);
            return (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                data-index={index}
                className={`group border-primary-darker relative rounded-3xl border bg-white p-8 transition-all duration-700 ease-out ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 80}ms`,
                }}
              >
                <div className="from-primary/5 absolute inset-0 -z-10 rounded-3xl bg-linear-to-br to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="mb-8 flex h-24 items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    width={220}
                    height={100}
                    className="max-h-30 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="relative mb-6 h-px w-full overflow-hidden bg-gray-200">
                  <div className="bg-primary absolute top-0 left-0 h-full w-0 transition-all duration-500 group-hover:w-full" />
                </div>
                <h3 className="font-heading group-hover:text-primary mb-3 text-lg font-semibold text-gray-900 transition-colors duration-500">
                  {client.name}
                </h3>
                <p className="font-heading leading-relaxed text-gray-600">{client.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
