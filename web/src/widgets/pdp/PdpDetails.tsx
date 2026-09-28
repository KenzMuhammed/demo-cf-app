import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import {
  FiCheckCircle,
  FiShoppingCart,
  FiPackage,
  FiTool,
  FiShield,
  FiDownload,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { FaHeadset, FaClipboardList, FaCogs } from "react-icons/fa";
import Toast from "@/components/ui/Toast";
import QuantityInput from "@/components/ui/QuantityInput";
import { MdInfoOutline, MdVerified } from "react-icons/md";
import { FiInfo } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Badge from "@/components/ui/Badge";
import RequestQuoteModal from "@/components/common/RequestQuoteModal";
import { createPortal } from "react-dom";

export default function PdpDetails() {
  const features = [
    "High performance inverter technology",
    "Compact and lightweight design",
    "Stable arc for precision welding",
    "Energy efficient operation",
    "Durable industrial construction",
    "Suitable for workshop and field work",
  ];

  const specs = [
    { label: "Wire / Spool Size", value: "0.6 – 1.6 mm (.023 – 1/16 in.) / 200 mm (8 in.)" },
    { label: "Weight", value: "16.7 kg (36.8 lb)" },
    { label: "Duty Cycle", value: "35% @ 630 A" },
  ];

  const services = [
    { icon: FaClipboardList, label: "Quick Quote Support" },
    { icon: FaHeadset, label: "Technical Assistance" },
    { icon: FaCogs, label: "Project Based Supply" },
  ];

  const [showToast, setShowToast] = useState(false);

  const handleAddToQuote = () => {
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3500);
  };

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange1 = (val: number) => {
    setQuantity(val);
  };

  const [isWarrantyOpen, setIsWarrantyOpen] = useState(false);

  const openWarranty = () => setIsWarrantyOpen(true);
  const closeWarranty = () => setIsWarrantyOpen(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <div className="space-y-5">
        <div className="hidden xl:block">
          <div className="mb-3 flex items-center gap-2">
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

          <h1 className="font-heading mt-1 text-2xl leading-tight font-semibold lg:text-3xl xl:text-4xl">
            ESAB Welding Power Source – Professional Welding Equipment
          </h1>
          <div className="mt-2 flex items-center gap-2 text-sm">
            <span className="text-gray-500">Part Number:</span>
            <Badge text="P1001" icon={null} color="dark" />
          </div>
        </div>

        <div className="hidden h-px bg-linear-to-r from-neutral-200 to-transparent xl:block" />

        <p className="leading-relaxed text-neutral-600">
          Industrial-grade ESAB welding machine with advanced inverter technology for stable arc
          performance, high efficiency, and reliable operation. Ideal for fabrication, maintenance,
          and heavy-duty workshop welding.
        </p>

        <div className="flex flex-wrap gap-2">
          <Badge color="info" text="Industrial Grade" />
          <Badge color="info" text="Compact Design" />
          <Badge color="info" text="Energy Efficient" />
        </div>

        <div className="flex items-center gap-2">
          <span className="font-semibold text-neutral-500">Availability:</span>

          <span className="flex items-center gap-1 font-medium text-green-600">
            <FiPackage /> In Stock
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="flex items-center gap-2 rounded-full border border-amber-200 bg-gradient-to-r from-amber-50 to-amber-100 px-3 py-1.5 text-xs font-semibold text-amber-800 transition-all duration-200 hover:from-amber-100 hover:to-amber-200">
            <FiShield className="h-4 w-4 text-amber-600" />3 Year ESAB Warranty
          </span>

          <button
            onClick={openWarranty}
            className="text-xs font-medium text-sky-600 underline hover:text-sky-700"
          >
            Warranty Terms
          </button>
        </div>

        {isWarrantyOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-2xl">
              <button
                onClick={closeWarranty}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              >
                <AiOutlineClose size={22} />
              </button>

              <h2 className="text-primary mb-4 text-center text-lg font-semibold">
                Warranty Details
              </h2>

              <div className="flex flex-col items-center gap-4">
                <div className="flex items-start gap-3">
                  <FiInfo className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-800">Warranty Information</p>
                    <p className="text-sm text-gray-600">
                      This ESAB welding machine is backed by a manufacturer warranty against
                      manufacturing defects under normal operating conditions.
                    </p>
                  </div>
                </div>

                <a
                  href="/warranty/esab-warranty.pdf"
                  download
                  className="bg-primary hover:bg-primary/90 flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white transition"
                >
                  <FiDownload className="h-4 w-4" />
                  Download Warranty PDF
                </a>
              </div>
            </div>
          </div>
        )}

        <div className="h-px bg-linear-to-r from-neutral-200 to-transparent" />
        <div className="flex items-center gap-3">
          <Badge
            text="Available for Rental"
            icon={<MdVerified className="h-4 w-4" />}
            color="info"
          />
        </div>
        <div className="h-px bg-linear-to-r from-neutral-200 to-transparent" />
        <h3 className="font-heading mb-3 font-semibold">Rental Price</h3>
        <div className="rounded-md bg-neutral-50 p-4">
          <Button className="shrink-0" onClick={() => (window.location.href = "/equipment-rental")}>
            Send Enquiry
          </Button>
          <p className="mt-3 text-xs font-medium text-neutral-500">
            You can send a rental enquiry by submittng the form, and our team will get back to you
            with more details.
          </p>
        </div>
        <h3 className="font-heading mb-3 font-semibold">Product Price</h3>
        <div className="rounded-md bg-neutral-50 p-4">
          <Button className="shrink-0" onClick={() => setQuoteOpen(true)}>
            Request for Quote
          </Button>
          <p className="mt-3 text-xs font-medium text-neutral-500">
            You can directly request a quote with this product by submitting the form, and our team
            will get back to you with more details.
          </p>
        </div>
        {/* <div className="flex items-center gap-3">
          <span className="font-heading text-primary-darker text-3xl font-semibold">SAR 950</span>
          <span className="text-neutral-400 line-through">SAR 1200</span>
          <span className="rounded-md bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-600">
            -21%
          </span>
        </div> */}

        <div className="h-px bg-linear-to-r from-neutral-200 to-transparent" />

        <div>
          <h3 className="font-heading mb-3 font-semibold">Technical Specifications</h3>
          <div className="space-y-2 text-sm text-neutral-700">
            {specs.map((spec, i) => (
              <div key={i} className="flex items-start gap-2">
                <FiTool className="text-primary mt-0.5" />
                <span>
                  <span className="font-semibold">{spec.label}:</span> {spec.value}
                </span>
              </div>
            ))}
          </div>
          <Button
            variant="link"
            className="mt-3"
            onClick={() => {
              document.getElementById("product-tabs")?.scrollIntoView({ behavior: "smooth" });

              window.dispatchEvent(new Event("openSpecifications"));
            }}
          >
            View More
          </Button>
        </div>

        <div className="h-px bg-linear-to-r from-neutral-200 to-transparent" />

        <div>
          <h3 className="font-heading mb-3 font-semibold">Key Features</h3>

          <ul className="grid grid-cols-1 gap-2 text-sm md:grid-cols-2">
            {features.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-neutral-600">
                <FiCheckCircle className="text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="h-px bg-linear-to-r from-neutral-200 to-transparent" />

        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <QuantityInput initial={quantity} min={1} onChange={handleQuantityChange1} />

            <Button variant="dark" className="shrink-0" onClick={handleAddToQuote}>
              <FiShoppingCart />
              Add to Quote
            </Button>
          </div>
          <div className="flex items-center gap-3 rounded-md bg-neutral-100 p-3 text-xs text-neutral-500">
            <div className="shrink-0">
              <MdInfoOutline size={22} />
            </div>
            <div>
              Add products to the Quote List page so you can submit a Request for Quote for multiple
              items at once.{" "}
              <span className="font-medium text-red-600">
                The list will be cleared when you close the browser.
              </span>
            </div>
          </div>
        </div>

        <div className="h-px bg-linear-to-r from-neutral-200 to-transparent" />

        <div>
          <h2 className="font-heading mb-3 font-semibold">Associated Products</h2>

          <div className="flex space-x-4 overflow-x-auto pb-2">
            {[
              {
                id: "P1002",
                name: "ESAB Welding Torch",
                image: "/products/product-8.webp",
                inventory: "InStock",
              },
              {
                id: "P1003",
                name: "ESAB Welding Cable",
                image: "/products/product-14.webp",
                inventory: "InStock",
              },
              {
                id: "P1004",
                name: "ESAB Welding Helmet",
                image: "/products/product-9.webp",
                inventory: "InStock",
              },
            ]
              .filter((product) => product.inventory === "InStock")
              .map((product) => (
                <Link
                  key={product.id}
                  to={`/pdp/${product.id}`}
                  className="group relative w-28 shrink-0 rounded-md border border-gray-200"
                >
                  <div className="relative h-28 w-full overflow-hidden rounded-md p-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute inset-0 h-full w-full rounded-lg object-contain"
                    />
                  </div>

                  <div className="p-2">
                    <span className="line-clamp-2 text-xs font-medium text-gray-700">
                      {product.name}
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        <div className="h-px bg-linear-to-r from-neutral-200 to-transparent" />

        <div className="flex items-center gap-3 text-sm">
          <FaWhatsapp className="text-green-500" size={24} />
          <span className="font-medium text-neutral-600">
            Need a help? Contact our team via{" "}
            <Link
              to="https://wa.me/966540292633"
              target="_blank"
              className="font-semibold text-green-600 underline"
            >
              WhatsApp
            </Link>
          </span>
        </div>

        <div className="mt-10 flex gap-3 divide-x divide-neutral-100">
          {services.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-1 flex-col items-center gap-3 bg-white px-2 md:px-5"
            >
              <Icon className="text-primary text-lg" size={32} />
              <span className="text-center text-xs text-neutral-500">{label}</span>
            </div>
          ))}
        </div>
      </div>
      <RequestQuoteModal
        open={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        product={{
          id: "P1001",
          name: "ESAB Welding Power Source",
          image: "/products/product-1.webp",
          inStock: true,
        }}
        onSubmit={(data) => console.log("Quote Data:", data)}
        onShowToast={() => setShowToast(true)}
      />

      {showToast &&
        createPortal(
          <div className="fixed right-5 bottom-5 z-9999">
            <Toast
              show={showToast}
              onClose={() => setShowToast(false)}
              icon={FiCheckCircle}
              title="Added to Quote List"
              description="Product added to your Quote List. Submit a Request for Quote anytime."
              variant="success"
            />
          </div>,
          document.body
        )}
    </>
  );
}
