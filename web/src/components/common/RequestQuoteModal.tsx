import { useState } from "react";
import { FiCheck } from "react-icons/fi";
import { Modal, ModalTitle, ModalBody, ModalFooter } from "@/components/ui/Modal";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/TextArea";
import Button from "@/components/ui/Button";
import QuantityInput from "@/components/ui/QuantityInput";

interface RequestQuoteModalProps {
  open: boolean;
  onClose: () => void;
  product: {
    id: string;
    name: string;
    image: string;
    inStock: boolean;
  };
  onSubmit: (data: any) => void;
  onShowToast?: () => void;
}

export default function RequestQuoteModal({
  open,
  onClose,
  product,
  onSubmit,
  onShowToast,
}: RequestQuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    units: 1,
    productOption: "",
    rentalDuration: "",
    notes: "",
  });

  const [quantity, setQuantity] = useState(1);
  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "rentalDuration" && !/^\d*$/.test(value)) return;
    if (name === "units") {
      const num = parseInt(value, 10);
      if (!isNaN(num) && num > 0) setQuantity(num);
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev: any) => ({ ...prev, [name]: "" }));
  };

  const handleQuantityChange = (val: number) => {
    setQuantity(val);
    setFormData((prev) => ({ ...prev, units: val }));
  };

  const validateForm = () => {
    const newErrors: any = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Enter a valid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[0-9]{7,15}$/.test(formData.phone)) newErrors.phone = "Enter a valid phone number";
    if (!formData.productOption) newErrors.productOption = "Please choose purchase type";
    if (formData.productOption === "rental" && !formData.rentalDuration)
      newErrors.rentalDuration = "Rental duration is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    // Ensure units match quantity
    onSubmit({ ...formData, units: quantity });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      units: 1,
      productOption: "",
      rentalDuration: "",
      notes: "",
    });
    setQuantity(1);
    onClose();
    onShowToast?.();
  };
  return (
    <Modal open={open} onClose={onClose}>
      <ModalTitle>Request Product Quote</ModalTitle>

      <ModalBody>
        <div className="mb-6 flex flex-col gap-4">
          <div className="flex flex-col items-start gap-4 md:flex-row">
            <div className="w-28 shrink-0 overflow-hidden md:w-32">
              <img
                src={product.image}
                alt={product.name}
                width={128}
                height={128}
                className="object-contain"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between">
              <h2 className="text-base font-bold text-gray-900">{product.name}</h2>
              <div className="mt-3 flex items-center gap-4">
                <span className="flex items-center gap-1 rounded-full border-green-800 bg-green-100 px-3 py-1 text-sm text-green-800">
                  <FiCheck className="h-4 w-4" />
                  In Stock
                </span>
                <QuantityInput
                  initial={quantity}
                  min={1}
                  onChange={handleQuantityChange}
                  size="sm"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Input
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />
          <Input
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <Input
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
          />
          {/* <RadioGroup
            label="Choose Purchase Type"
            name="productOption"
            options={[
              { label: "Buy", value: "buy" },
              { label: "Rental", value: "rental" },
            ]}
            value={formData.productOption}
            onChange={handleChange}
            error={errors.productOption}
          /> */}
          {formData.productOption === "rental" && (
            <div className="lg:col-span-2">
              <Input
                label="Rental Duration (Days)"
                name="rentalDuration"
                value={formData.rentalDuration}
                onChange={handleChange}
                type="number"
                error={errors.rentalDuration}
              />
            </div>
          )}
          <div className="lg:col-span-2">
            <Textarea
              label="Additional Notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              error={errors.notes}
            />
          </div>
        </div>
      </ModalBody>

      <ModalFooter>
        <div className="flex w-full flex-col justify-end gap-2 md:w-auto md:flex-row md:gap-3">
          <Button variant="dark" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Submit Request</Button>
        </div>
      </ModalFooter>
    </Modal>
  );
}
