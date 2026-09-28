import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ProductCard from "@/components/common/ProductCard";

const productData = {
  exportedDate: "2026-03-11",
  ProductList: [
    {
      id: "1235",
      partNumber: "P12345",
      name: "Absolute Weld Acetylene Gas Nozzle 10-20 mm for flame cutting G02-3",
      relatedProducts: [
        {
          id: "1001",
          partNumber: "P1001",
          name: "Absolute Weld Acetylene Gas Nozzle 170-220 mm for flame cutting G02-9",
          image: "/products/product-1.webp",
          listPrice: "120.00",
          salePrice: "95.00",
          priceCurrency: "SAR",
          Inventory: "InStock",
          isRental: "true",
          rentalCharge: "100",
          rentalUOM: "piece",
        },
        {
          id: "1002",
          partNumber: "P1002",
          name: "Absolute Weld Acetylene Gas Nozzle 20-40 mm for flame cutting G02-4",
          image: "/products/product-2.webp",
          listPrice: "85.00",
          salePrice: "70.00",
          priceCurrency: "SAR",
          Inventory: "OutOfStock",
          isRental: "false",
          rentalCharge: "",
          rentalUOM: "",
        },
        {
          id: "1003",
          partNumber: "P1003",
          name: "Absolute Weld Acetylene Gas Nozzle 10-20 mm for flame cutting G02-3",
          image: "/products/product-3.webp",
          listPrice: "75.00",
          salePrice: "60.00",
          priceCurrency: "SAR",
          Inventory: "InStock",
          isRental: "false",
          rentalCharge: "",
          rentalUOM: "",
        },
        {
          id: "1004",
          partNumber: "P1004",
          name: "Industrial Plasma Cutting Torch for CNC Systems",
          image: "/products/product-4.webp",
          listPrice: "540.00",
          salePrice: "495.00",
          priceCurrency: "SAR",
          Inventory: "InStock",
          isRental: "true",
          rentalCharge: "200",
          rentalUOM: "piece",
        },
        {
          id: "1005",
          partNumber: "P1005",
          name: "ER70S-6 MIG Welding Wire 0.8 mm – 15 kg Spool",
          image: "/products/product-5.webp",
          listPrice: "220.00",
          salePrice: "199.00",
          priceCurrency: "SAR",
          Inventory: "InStock",
          isRental: "false",
          rentalCharge: "",
          rentalUOM: "",
        },
        {
          id: "1006",
          partNumber: "P1006",
          name: "308L Stainless Steel TIG Welding Rods 2.4 mm",
          image: "/products/product-6.webp",
          listPrice: "310.00",
          salePrice: "275.00",
          priceCurrency: "SAR",
          Inventory: "OutOfStock",
          isRental: "false",
          rentalCharge: "",
          rentalUOM: "",
        },
      ],
    },
  ],
};

export default function RelatedProductsCarousel() {
  const products = productData.ProductList[0].relatedProducts;

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
    <div className="from-secondary-dark to-secondary relative overflow-hidden border-t border-neutral-200 bg-linear-to-b">
      <img
        src="/clients/geometry-clients.svg"
        alt="Clients Background Pattern"
        width={1200}
        height={800}
        className="pointer-events-none absolute inset-y-0 -right-1/2 h-full w-full object-cover object-right opacity-10"
      />
      <div className="relative z-10 container py-10 md:py-20">
        <div className="mb-8 text-center">
          <h2 className="font-secondary font-heading text-2xl font-extrabold text-white md:text-4xl">
            Related <span className="text-amber-300">Products</span>
          </h2>
          <div className="mt-3 inline-flex items-center gap-2 max-md:hidden">
            <span className="font-semibold text-gray-200">
              Explore more welding and cutting equipment for industrial applications.
            </span>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-[0_0_100%] px-2 sm:flex-[0_0_50%] lg:flex-[0_0_25%] xl:flex-[0_0_20%]"
              >
                <ProductCard
                  {...product}
                  Inventory={product.Inventory as "InStock" | "OutOfStock"}
                  isRental={product.isRental as "true" | "false"}
                  lineClamp={2}
                />
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
