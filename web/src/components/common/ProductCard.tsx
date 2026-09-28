import { useState } from "react";
import { FiCheck, FiCheckCircle } from "react-icons/fi";
import { MdVerified } from "react-icons/md";
import Badge from "../ui/Badge";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import RequestQuoteModal from "./RequestQuoteModal";
import { createPortal } from "react-dom";
import Toast from "../ui/Toast";

export interface ProductCardProps {
  partNumber: string;
  name: string;
  image: string;
  listPrice: string;
  salePrice: string;
  priceCurrency: string;
  Inventory: "InStock" | "OutOfStock";
  isRental: "true" | "false";
  rentalCharge?: string;
  rentalUOM?: string;
  lineClamp?: 2 | 3;
}

export default function ProductCard({
  partNumber,
  name,
  image,
  Inventory,
  isRental,
  lineClamp = 3,
}: ProductCardProps) {
  const isOutOfStock = Inventory === "OutOfStock";
  const pdpLink = `/pdp`;
  const [quoteOpen, setQuoteOpen] = useState(false);
  const productData = {
    id: partNumber,
    name: name,
    image: image,
    inStock: Inventory === "InStock",
  };
  const [showToast, setShowToast] = useState(false);
  const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3500);
  };
  return (
    <>
      <div className="group border-secondary-lighter/50 relative flex h-full flex-col rounded-2xl border bg-linear-to-br from-yellow-50 via-orange-100 to-gray-50 transition-all hover:shadow-sm">
        <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-t-2xl bg-white p-2 md:h-52 lg:h-56">
          <Link to={pdpLink} className="relative block h-full w-full">
            <div
              className={`relative h-full w-full overflow-hidden rounded-lg transition-transform duration-500 group-hover:scale-105 ${
                isOutOfStock ? "opacity-60" : ""
              }`}
            >
              <img
                src={image}
                alt={name}
                className="absolute inset-0 h-full w-full rounded-lg object-contain"
                sizes="(max-width: 768px) 100vw, 100vw"
              />
            </div>
          </Link>

          <Badge
            text={Inventory === "InStock" ? "In Stock" : "Out of Stock"}
            icon={Inventory === "InStock" ? <FiCheck className="h-3 w-3" /> : null}
            color={Inventory === "InStock" ? "success" : "danger"}
            className="absolute top-3 left-3"
          />

          {isRental === "true" && (
            <Badge
              text="Available for Rental"
              icon={<MdVerified className="h-3 w-3" />}
              color="secondary"
              className="absolute bottom-3 left-3"
            />
          )}
        </div>

        <div className="flex flex-1 flex-col gap-2 p-4">
          <h4 className="text-xs font-medium text-gray-500">Part #: {partNumber}</h4>
          <h3
            className={`font-heading hover:text-secondary-light mb-1 line-clamp-${lineClamp || 3} font-semibold transition-colors duration-300 hover:underline`}
          >
            <Link to={pdpLink} title={`View details for ${name}`}>
              {name}
            </Link>
          </h3>
        </div>

        <div className="flex w-full justify-between gap-2 p-4 pt-0">
          <Button variant="dark" onClick={() => setQuoteOpen(true)} size="sm">
            Request for Quote
          </Button>
          <Link
            to="/pdp"
            className="font-heading flex items-center text-sm font-semibold text-neutral-600 hover:text-black"
          >
            Details
          </Link>
          {quoteOpen &&
            createPortal(
              <RequestQuoteModal
                open={quoteOpen}
                onClose={() => setQuoteOpen(false)}
                product={productData}
                onSubmit={(data) => console.log("Quote Data:", data)}
                onShowToast={handleShowToast}
              />,
              document.body
            )}
        </div>
      </div>
      {showToast &&
        createPortal(
          <div className="fixed right-5 bottom-5 z-50">
            <Toast
              show={true}
              onClose={() => setShowToast(false)}
              icon={FiCheckCircle}
              title="Quote Request Sent"
              variant="success"
              description="Your request has been submitted successfully. Our team will contact you soon."
            />
          </div>,
          document.body
        )}
    </>
  );
}
