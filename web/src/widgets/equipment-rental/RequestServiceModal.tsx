import { useState } from "react";
import { Modal, ModalTitle, ModalBody, ModalFooter } from "@/components/ui/Modal";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/TextArea";
import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";

interface RequestQuoteModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  onShowToast?: () => void;
}

export default function RequestServiceModal({
  open,
  onClose,
  onSubmit,
  onShowToast,
}: RequestQuoteModalProps) {
  const [formData, setFormData] = useState({
    company: "",
    siteLocation: "",
    machineName: "",
    machineBrand: "",
    machineService: "",
    name: "",
    email: "",
    phone: "",
    units: 1,
    productOption: "",
    rentalDuration: "",
    message: "",
    vat: "",
    otherBrand: "",
  });

  const BrandOptions = [
    { value: "absolute-weld-accessories", label: "Absolute Weld Accessories" },
    { value: "hyundai", label: "Hyundai" },
    { value: "esab", label: "ESAB" },
    { value: "hi-lo", label: "Hi-Lo" },
    { value: "senfeng", label: "Senfeng" },
    { value: "vimex", label: "Vimex" },
    { value: "euroboor", label: "Euroboor" },
    { value: "grindex", label: "Grindex" },
    { value: "pm-schweiBtechnik", label: "PM SchweiBtechnik" },
    { value: "senci", label: "Senci" },
    { value: "dwt", label: "Dwt" },
    { value: "sawyer", label: "Sawyer" },
    { value: "topsinn", label: "Topsinn" },
    { value: "haoyu", label: "Haoyu" },
    { value: "other", label: "Other" },
  ];
  const ServiceOptions = [
    { value: "onsite", label: "Onsite Repair Service" },
    { value: "inhouse", label: "Inhouse Repair Service" },
    { value: "installation-commissioning", label: "Installation & Commissioning" },
    { value: "preventive", label: "Preventive Maintenance" },
    { value: "annual-maintenance", label: "Annual Maintenance Contract" },
    { value: "other", label: "Other" },
  ];

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

    if (!formData.company.trim()) newErrors.company = "Company is required";
    // if (!formData.siteLocation.trim()) newErrors.siteLocation = "Site location is required";
    // if (!formData.machineName.trim()) newErrors.machineName = "Machine name is required";
    // if (!formData.machineBrand.trim()) newErrors.machineBrand = "Machine brand is required";
    // if (!formData.machineService.trim()) newErrors.machineService = "Machine brand is required";
    // if (!formData.vat.trim()) newErrors.vat = "Machine brand is required";
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.email.trim()) newErrors.otherBrand = "Other brand name is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Enter a valid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[0-9]{7,15}$/.test(formData.phone)) newErrors.phone = "Enter a valid phone number";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    onSubmit({ ...formData, units: quantity });
    setFormData({
      company: "",
      siteLocation: "",
      machineName: "",
      machineBrand: "",
      machineService: "",
      name: "",
      email: "",
      phone: "",
      units: 1,
      productOption: "",
      rentalDuration: "",
      message: "",
      vat: "",
      otherBrand: "",
    });

    setQuantity(1);
    onClose();
    onShowToast?.();
  };

  return (
    <Modal open={open} onClose={onClose} size="lg">
      <ModalTitle>Service Request</ModalTitle>
      <ModalBody>
        <div className="grid grid-cols-1 gap-4 text-start lg:grid-cols-2">
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
            placeholder="Company VAT Number (Optional)"
            value={formData.vat}
            onChange={handleChange}
            error={errors.vat}
            requiredSymbol={false}
          />
          <Input
            label="Site Location of Machine"
            name="siteLocation"
            placeholder="Site Location"
            value={formData.siteLocation}
            onChange={handleChange}
            error={errors.siteLocation}
            requiredSymbol={false}
          />
          <Input
            label="Machine Name"
            name="machineName"
            placeholder="Machine Name"
            value={formData.machineName}
            onChange={handleChange}
            error={errors.machineName}
            requiredSymbol={false}
          />
          <Dropdown
            label="Machine Brand"
            value={formData.machineBrand}
            onChange={(value) => {
              setFormData((prev) => ({ ...prev, machineBrand: value }));
              setErrors((prev: any) => ({ ...prev, machineBrand: "" }));
            }}
            placeholder="Select Brand"
            options={BrandOptions}
            error={errors.machineBrand}
            requiredSymbol={false}
            search
          />
          <div className={`${formData.machineBrand === "other" ? "block" : "hidden"}`}>
            <Input
              label="Brand Name"
              name="otherBrand"
              placeholder="Please mention brand name"
              value={formData.otherBrand}
              onChange={handleChange}
              error={errors.otherBrand}
            />
          </div>
          <Dropdown
            label="Required Service"
            value={formData.machineService}
            onChange={(value) => {
              setFormData((prev) => ({ ...prev, machineService: value }));
              setErrors((prev: any) => ({ ...prev, machineService: "" }));
            }}
            placeholder="Select Service"
            options={ServiceOptions}
            error={errors.machineService}
            requiredSymbol={false}
            checklist
          />
        </div>
        <div className="my-6">
          <p className="font-semibold">Contact Person Details</p>
          <hr className="mt-2 border-gray-300" />
        </div>
        <div className="grid grid-cols-1 gap-4 text-start lg:grid-cols-2">
          <Input
            label="Name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />
          <Input
            label="Email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <Input
            label="Phone Number"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
          />
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
              label="Remarks"
              name="message"
              placeholder="Enter Any Remarks"
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
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
