// RFQ Widget for Request For Quote functionality

import { useState, useCallback } from "react";
import { FiTrash2, FiChevronLeft } from "react-icons/fi";
import QuantityInput from "@/components/ui/QuantityInput";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/TextArea";
import Button from "@/components/ui/Button";
import { RiMailSendLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Modal, ModalTitle, ModalBody, ModalFooter } from "@/components/ui/Modal";
import Toast from "@/components/ui/Toast";

const initialProducts = [
  {
    id: "1012",
    partNumber: "P1012",
    name: "Gas Regulator for Welding Cylinder",
    description:
      "High-precision gas regulator designed for stable pressure control in various welding applications, ensuring safety and efficiency.",
    image: "/products/product-15.webp",
    quantity: 1,
  },
  {
    id: "1009",
    partNumber: "P1009",
    name: "Welding Helmet Auto Darkening Lens",
    description:
      "Professional-grade welding helmet featuring advanced auto-darkening technology to protect eyes while maintaining clear visibility of the weld pool.",
    image: "/products/product-9.webp",
    quantity: 1,
  },
  {
    id: "1003",
    partNumber: "P1003",
    name: "Absolute Weld Acetylene Gas Nozzle 10-20 mm for flame cutting G02-3",
    description:
      "Durable acetylene gas nozzle precision-engineered for clean and accurate flame cutting in industrial metal fabrication projects.",
    image: "/products/product-3.webp",
    quantity: 2,
  },
  {
    id: "1004",
    partNumber: "P1004",
    name: "Industrial Plasma Cutting Torch for CNC Systems",
    description:
      "Heavy-duty plasma cutting torch optimized for high-speed precision cutting in automated CNC environments and large-scale manufacturing.",
    image: "/products/product-8.webp",
    quantity: 1,
  },
  {
    id: "1010",
    partNumber: "P1010",
    name: "Welding Gloves Heavy Duty Leather",
    description:
      "Premium leather welding gloves providing superior heat resistance and dexterity for long-duration industrial welding and grinding tasks.",
    image: "/products/product-10.webp",
    quantity: 3,
  },
  {
    id: "1005",
    partNumber: "P1005",
    name: "ER70S-6 MIG Welding Wire 0.8 mm – 15 kg Spool",
    description:
      "High-quality MIG welding wire with excellent feedability and low spatter, perfect for structural steel and general fabrication work.",
    image: "/products/product-5.webp",
    quantity: 1,
  },
  {
    id: "1001",
    partNumber: "P1001",
    name: "Absolute Weld Acetylene Gas Nozzle 170-220 mm for flame cutting G02-9",
    description:
      "Heavy-duty acetylene nozzle for large-scale flame cutting operations, delivering consistent performance on thick metal sections.",
    image: "/products/product-1.webp",
    quantity: 1,
  },
  {
    id: "1002",
    partNumber: "P1002",
    name: "Absolute Weld Acetylene Gas Nozzle 20-40 mm for flame cutting G02-4",
    description:
      "Precision-engineered acetylene nozzle for medium-range flame cutting, ensuring clean cuts with minimal distortion.",
    image: "/products/product-2.webp",
    quantity: 1,
  },
  {
    id: "1006",
    partNumber: "P1006",
    name: "308L Stainless Steel TIG Welding Rods 2.4 mm",
    description:
      "High-purity 308L stainless steel TIG rods offering superior corrosion resistance and smooth arc stability for precision welding.",
    image: "/products/product-6.webp",
    quantity: 2,
  },
  {
    id: "1007",
    partNumber: "P1007",
    name: "Carbon Steel MIG Welding Wire 0.8 mm – 15 kg Spool",
    description:
      "Versatile carbon steel MIG wire with consistent wire diameter for smooth feeding and low spatter in structural welding.",
    image: "/products/product-13.webp",
    quantity: 1,
  },
  {
    id: "1008",
    partNumber: "P1008",
    name: "Industrial TIG Torch Handle for 308L Rods",
    description:
      "Ergonomic TIG torch handle with heat-resistant grip, compatible with 308L welding rods for professional-grade TIG applications.",
    image: "/products/product-14.webp",
    quantity: 1,
  },
  {
    id: "1011",
    partNumber: "P1011",
    name: "Welding Electrode E6013 2.5 mm – 5 kg Pack",
    description:
      "General-purpose E6013 stick welding electrodes delivering smooth arc initiation and clean slag removal for mild steel fabrication.",
    image: "/products/product-9.webp",
    quantity: 4,
  },
];

const emptyForm = { name: "", email: "", phone: "", notes: "", vat: "", company: "" };

export default function Rfq() {
  const [products, setProducts] = useState(initialProducts);
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);
  const [toastOpen, setToastOpen] = useState(false);
  const handleCloseToast = useCallback(() => setToastOpen(false), []);

  const handleQuantityChange = (id: string, newQuantity: number) => {
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, quantity: newQuantity } : p)));
  };

  const handleRemoveProduct = (id: string) => {
    setItemToDelete(id);
    setDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (itemToDelete) {
      setProducts((prev) => prev.filter((p) => p.id !== itemToDelete));
      setDeleteModalOpen(false);
      setItemToDelete(null);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev: any) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Required: Name
    if (!formData.name.trim()) newErrors.name = "Full name is required";

    // Required: Email
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address";
    }

    // Required: Phone — digits only, 7-15 chars
    const phoneDigits = formData.phone.replace(/[\s\-().+]/g, "");
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{7,15}$/.test(phoneDigits)) {
      newErrors.phone = "Enter a valid phone number (7–15 digits)";
    }

    // Required: Company Name
    if (!formData.company.trim()) newErrors.company = "Company name is required";

    // Required: VAT
    if (!formData.vat.trim()) {
      newErrors.vat = "VAT number is required";
    } else if (!/^[A-Z0-9\-]{5,20}$/i.test(formData.vat.trim())) {
      newErrors.vat = "Enter a valid VAT number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Simulate submission
    console.log("Submitting RFQ:", { products, formData });

    setFormData(emptyForm);
    setProducts([]);
    setToastOpen(true);
  };

  return (
    <section className="min-h-screen bg-slate-50">
      <div className="via-primary/10 relative w-full overflow-hidden bg-gradient-to-br from-slate-100 to-white py-6 lg:py-8">
        <div className="relative container mx-auto px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center lg:gap-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-xl shadow-slate-200/50 lg:h-16 lg:w-16">
              <RiMailSendLine className="text-primary h-6 w-6 lg:h-8 lg:w-8" />
            </div>
            <div className="hidden h-14 w-px bg-slate-200 md:block" />
            <div className="flex flex-1 flex-col justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h1 className="font-heading text-3xl font-extrabold tracking-tight text-slate-900 uppercase lg:text-4xl">
                  Request for <span className="text-primary">Quote</span>
                </h1>
                <p className="mt-2 leading-relaxed font-medium text-slate-600">
                  Review your items and provide your details. Our specialist will respond with a
                  custom quote within 24 hours.
                </p>
              </div>
              <Link to="/" className="shrink-0">
                <Button variant="dark" className="group">
                  Continue Browsing
                  <FiChevronLeft className="h-4 w-4 rotate-180 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 lg:py-14">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Cart Listing (Left Side) */}
          <div className="flex flex-col gap-6 lg:col-span-7">
            <div className="flex items-center justify-between border-b border-slate-200 pb-5">
              <h2 className="font-heading text-2xl font-bold text-slate-900">Selected Products</h2>
              <span className="rounded-full bg-slate-200 px-3 py-1 text-sm font-semibold text-slate-700">
                {products.length} Items
              </span>
            </div>

            {products.length === 0 ? (
              <div className="flex flex-col items-center gap-6 rounded-3xl border-2 border-dashed border-slate-200 bg-white px-8 py-16 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-50 text-slate-300">
                  <RiMailSendLine size={40} />
                </div>
                <div>
                  <h3 className="font-heading mb-2 text-xl font-bold text-slate-900">
                    Your quote list is empty
                  </h3>
                  <p className="mx-auto max-w-sm text-slate-500">
                    You haven't added any products to your request yet. Explore our catalog and
                    select the items you need.
                  </p>
                </div>
                <Link to="/">
                  <Button variant="primary" size="lg" className="shadow-primary/10 px-8 shadow-lg">
                    Continue Browsing
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="flex flex-col divide-y divide-slate-200">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="group flex flex-wrap items-center gap-x-4 gap-y-3 py-3 transition-all duration-300 hover:bg-slate-50/50 md:flex-nowrap"
                  >
                    <div className="flex min-w-0 flex-1 items-center gap-4">
                      {/* Product Image */}
                      <Link
                        to={`/pdp`}
                        className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-slate-50 p-1 transition-opacity hover:opacity-80"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          width={64}
                          height={64}
                          className="h-full w-full object-contain mix-blend-multiply"
                        />
                      </Link>

                      {/* Details */}
                      <div className="flex min-w-0 flex-1 flex-col justify-center">
                        <span className="mb-0.5 block text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
                          {product.partNumber}
                        </span>
                        <Link
                          to={`/pdp`}
                          className="group-hover:text-primary inline-block transition-colors"
                        >
                          <h3 className="font-heading line-clamp-2 leading-snug font-semibold text-slate-900">
                            {product.name}
                          </h3>
                        </Link>
                        <Link
                          to="/category"
                          className="hover:text-primary mt-1 text-xs font-medium text-slate-400 transition-colors"
                        >
                          Add more items from the same category
                        </Link>
                      </div>
                    </div>

                    {/* Quantity + Delete */}
                    <div className="flex w-full shrink-0 items-center gap-2 pl-20 md:w-auto md:pl-0">
                      <QuantityInput
                        initial={product.quantity}
                        min={1}
                        onChange={(val) => handleQuantityChange(product.id, val)}
                        size="sm"
                      />
                      <button
                        onClick={() => handleRemoveProduct(product.id)}
                        className="rounded-full p-1.5 text-slate-400 transition-colors hover:bg-red-50 hover:text-red-500"
                        aria-label="Remove item"
                      >
                        <FiTrash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quote Form (Right Sidebar) */}
          <div className="lg:col-span-5">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-8">
                <h2 className="font-heading mb-2 text-2xl font-bold text-slate-900">
                  Customer Details
                </h2>
                <p className="text-sm text-slate-500">
                  Fill in your details to receive a custom quote.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <Input
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <Input
                    label="Company Name"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    error={errors.company}
                  />
                  <Input
                    label="VAT"
                    name="vat"
                    placeholder="Company VAT Number"
                    value={formData.vat}
                    onChange={handleChange}
                    error={errors.vat}
                  />
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <Input
                    label="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                  />
                  <Input
                    type="tel"
                    label="Phone Number"
                    name="phone"
                    placeholder="+966 5X XXX XXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    error={errors.phone}
                  />
                </div>
                <Textarea
                  label="Additional Notes (Optional)"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  error={errors.notes}
                  rows={2}
                />

                <div className="mt-4 border-t border-slate-100 pt-3">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 text-slate-500">
                      <div className="bg-primary/20 h-8 w-1 rounded-full" />
                      <p className="text-xs leading-relaxed">
                        Our sales team will contact you with pricing and availability shortly.
                      </p>
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="shadow-primary/10 w-full shadow-lg"
                      disabled={products.length === 0}
                    >
                      Submit Quote Request
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <Modal open={deleteModalOpen} onClose={() => setDeleteModalOpen(false)} size="sm">
        <ModalTitle>Confirm Removal</ModalTitle>
        <ModalBody>
          <div className="flex flex-col items-center gap-4 py-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-500">
              <FiTrash2 size={32} />
            </div>
            <div>
              <p className="text-lg font-bold text-slate-900">Remove this item?</p>
              <p className="mt-1 text-sm text-slate-500">
                Are you sure you want to remove this product from your quote request?
              </p>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <div className="flex gap-3">
            <Button variant="dark" className="flex-1" onClick={() => setDeleteModalOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              className="flex-1 border-red-600 bg-red-600 shadow-lg shadow-red-200 hover:border-red-700 hover:bg-red-700"
              onClick={confirmDelete}
            >
              Remove Item
            </Button>
          </div>
        </ModalFooter>
      </Modal>

      {/* Success Toast */}
      <Toast
        show={toastOpen}
        onClose={handleCloseToast}
        variant="success"
        title="Quote Request Submitted!"
        description="Thank you! Our sales team will reach out with a custom quote within 24 hours."
        duration={5000}
      />
    </section>
  );
}
