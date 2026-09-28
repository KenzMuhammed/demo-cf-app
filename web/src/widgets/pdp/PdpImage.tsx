import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Badge from "@/components/ui/Badge";
import { FiCheckCircle, FiShield } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineBuild, MdOutlineUpdate, MdVerified } from "react-icons/md";

const images = [
  "/products/product-1.webp",
  "/products/product-2.webp",
  "/products/product-3.webp",
  "/products/product-4.webp",
  "/products/product-5.webp",
  "/products/product-6.webp",
];

export default function ProductGallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [mainRef, mainApi] = useEmblaCarousel({
    loop: true,
  });

  const [thumbRef, thumbApi] = useEmblaCarousel({
    axis: "y",
    align: "start",
    containScroll: "keepSnaps",
  });

  const [mobileThumbRef, mobileThumbApi] = useEmblaCarousel({
    axis: "x",
    align: "center",
    dragFree: true,
    containScroll: "trimSnaps",
  });

  const onSelect = useCallback(() => {
    if (!mainApi) return;

    const index = mainApi.selectedScrollSnap();

    setSelectedIndex(index);

    thumbApi?.scrollTo(index);
    mobileThumbApi?.scrollTo(index);
  }, [mainApi, thumbApi, mobileThumbApi]);

  useEffect(() => {
    if (!mainApi) return;

    mainApi.on("select", onSelect);

    return () => {
      mainApi.off("select", onSelect);
    };
  }, [mainApi, onSelect]);

  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']");

    return () => {
      Fancybox.destroy();
    };
  }, []);

  const scrollPrev = () => thumbApi?.scrollPrev();
  const scrollNext = () => thumbApi?.scrollNext();

  const [isWarrantyOpen, setIsWarrantyOpen] = useState(false);

  const openWarranty = () => setIsWarrantyOpen(true);
  const closeWarranty = () => setIsWarrantyOpen(false);

  return (
    <>
      <div className="mb-4 block xl:hidden">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <img
              src="/brands/esab-logo.webp"
              alt="ESAB Logo"
              width={90}
              height={10}
              className="max-h-6 w-auto object-contain"
            />
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">
              ESAB
            </span>
          </div>

          <h1 className="font-heading text-xl leading-tight font-semibold">
            ESAB Welding Power Source – Professional Welding Equipment
          </h1>

          <div className="mt-2 flex items-center gap-2 text-sm">
            <span className="text-gray-500">Part Number:</span>
            <Badge text="P1001" icon={null} color="dark" />
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-h-[75vh] min-h-100 flex-col gap-4 md:flex-row md:gap-2">
        <div className="relative hidden w-26 flex-col gap-y-1 md:flex">
          {images.length > 5 && (
            <button
              onClick={scrollPrev}
              className="flex items-center justify-center rounded-md bg-white p-1"
            >
              <RiArrowUpSLine size={20} />
            </button>
          )}

          <div className="h-full overflow-hidden" ref={thumbRef}>
            <div className="flex h-full flex-col">
              {images.map((src, index) => (
                <button
                  key={index}
                  onClick={() => mainApi?.scrollTo(index)}
                  className="flex-[0_0_20%] py-1"
                >
                  <div
                    className={`flex h-full w-full items-center justify-center overflow-hidden rounded-md border bg-white p-2 ${
                      selectedIndex === index
                        ? "border-neutral-500"
                        : "border-neutral-300 hover:border-neutral-400"
                    }`}
                  >
                    <img src={src} alt="" width={100} height={100} className="object-cover" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {images.length > 5 && (
            <button
              onClick={scrollNext}
              className="flex items-center justify-center rounded-md bg-white p-1"
            >
              <RiArrowDownSLine size={20} />
            </button>
          )}
        </div>

        <div
          className="flex-1 overflow-hidden rounded-xl border border-neutral-300 bg-white"
          ref={mainRef}
        >
          <div className="flex h-full">
            {images.map((src, index) => (
              <div
                key={index}
                className="relative flex aspect-square min-w-full items-center justify-center"
              >
                <a
                  href={src}
                  data-fancybox="gallery"
                  data-caption={`Product ${index + 1}`}
                  className="flex h-full w-full items-center"
                >
                  <img
                    src={src}
                    alt=""
                    width={800}
                    height={800}
                    className="cursor-zoom-in object-cover"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden">
          <div className="overflow-hidden max-md:-mx-4 max-md:px-4" ref={mobileThumbRef}>
            <div className="flex gap-2">
              {images.map((src, index) => (
                <button
                  key={index}
                  onClick={() => mainApi?.scrollTo(index)}
                  className="flex-[0_0_22%]"
                >
                  <div
                    className={`overflow-hidden rounded-md border bg-white p-1 ${
                      selectedIndex === index ? "border-neutral-500" : "border-neutral-300"
                    }`}
                  >
                    <img
                      src={src}
                      alt=""
                      width={100}
                      height={100}
                      className="aspect-square object-cover"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
