import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Button from "@/components/ui/Button";
import { BsArrowRight } from "react-icons/bs";

const services = [
  {
    id: "s1",
    title: "Repair Services",
    description:
      "Professional repair support for welding and industrial equipment to restore performance and operational reliability.",
    image: "/services/service-1.webp",
  },
  {
    id: "s2",
    title: "Authorized Service Centre",
    description:
      "Certified service support for equipment maintenance, warranty handling, and approved servicing from trusted manufacturers.",
    image: "/services/service-3.webp",
  },
  {
    id: "s3",
    title: "Annual Maintenance Contracts",
    description:
      "Structured maintenance agreements designed to ensure regular equipment servicing and long-term operational reliability.",
    image: "/services/service-18.webp",
  },
  {
    id: "s4",
    title: "Installation & Commissioning Support",
    description:
      "Expert assistance for installing and commissioning industrial equipment to ensure proper setup and performance.",
    image: "/services/service-6.webp",
  },
  {
    id: "s5",
    title: "Technical Support & On-Site Service",
    description:
      "On-site technical assistance to troubleshoot equipment issues and support operational continuity.",
    image: "/services/service-5.webp",
  },
  {
    id: "s6",
    title: "After-Sales Services",
    description:
      "Ongoing support and servicing solutions to help maintain equipment performance after purchase.",
    image: "/services/service-09.webp",
  },
];

export default function EquipmentRentalRelatedServices() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;

    const updateButtons = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    updateButtons();
    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateButtons);

    return () => {
      emblaApi.off("select", updateButtons);
      emblaApi.off("reInit", updateButtons);
    };
  }, [emblaApi]);

  return (
    <div className="from-secondary-dark to-secondary relative overflow-hidden bg-linear-to-b">
      <img
        src="/clients/geometry-clients.svg"
        alt="Background Pattern"
        width={1200}
        height={800}
        className="pointer-events-none absolute inset-y-0 -right-1/2 h-full w-full object-cover object-right opacity-10"
      />
      <div className="relative z-10 container py-10 md:py-20">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-4xl font-bold text-white lg:text-5xl">
            Explore Other <span className="text-amber-300">Services</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-200">
            Explore our complete range of professional support services for welding and industrial
            equipment.
          </p>
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex-[0_0_100%] px-2 sm:flex-[0_0_50%] lg:flex-[0_0_25%]"
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={`rounded-xl border border-gray-300 bg-white p-3 text-gray-700 shadow-sm transition ${
              !canScrollPrev
                ? "cursor-not-allowed opacity-30"
                : "hover:bg-primary hover:border-black/10 hover:text-white"
            }`}
          >
            <FiChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={`rounded-xl border border-gray-300 bg-white p-3 text-gray-700 shadow-sm transition ${
              !canScrollNext
                ? "cursor-not-allowed opacity-30"
                : "hover:bg-primary hover:border-black/10 hover:text-white"
            }`}
          >
            <FiChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
function ServiceCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="group h-full overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-2xl">
      <div className="relative h-44 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex h-1/2 flex-col p-5">
        <h3 className="font-heading mb-2 text-lg font-bold text-gray-900">{title}</h3>
        <p className="line-clamp-3 text-sm text-gray-600">{description}</p>
        <div className="mt-auto pt-4">
          <Button
            variant="link"
            onClick={() => {
              window.location.href = "/services";
            }}
          >
            Read More
            <BsArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
