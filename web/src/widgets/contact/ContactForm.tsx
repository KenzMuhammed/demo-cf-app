import { useState } from "react";
import Dropdown from "@/components/ui/Dropdown";
import Button from "@/components/ui/Button";
import { FiArrowRight } from "react-icons/fi";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import Input from "@/components/ui/Input";

const departmentOptions = [
  { label: "Sales", value: "sales" },
  { label: "Rentals", value: "rentals" },
  { label: "Services", value: "services" },
];

export default function CompanySection() {
  const [formData, setFormData] = useState({
    formLocation: "",
    department: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleDropdownChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: "" });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.formLocation) newErrors.formLocation = "Location is required.";
    if (!formData.department) newErrors.department = "Department is required.";
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid.";
    if (!formData.phone) newErrors.phone = "Phone is required.";
    else if (!/^\+?\d{7,15}$/.test(formData.phone)) newErrors.phone = "Phone number is invalid.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("Form Submitted:", formData);
    setFormData({ formLocation: "", department: "", name: "", email: "", phone: "", message: "" });
    alert("Your inquiry has been submitted successfully!");
  };

  return (
    <section className="relative overflow-hidden bg-gray-50 py-14 lg:py-24" id="rental-contact">
      <div className="absolute inset-0">
        <img
          src="/contact/contact-banner01.webp"
          alt="Contact Background"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 z-0 bg-white/80" />

      <div className="relative z-10 container mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 flex gap-4 md:mb-10 md:items-center lg:mb-14">
              <FaEnvelopeOpenText className="text-primary-darker h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14" />
              <div className="hidden h-[60%] w-px bg-slate-300 md:block" />
              <div>
                <h3 className="font-heading text-3xl font-bold uppercase lg:text-4xl">
                  <span className="text-primary-darker">Connect</span> Us
                </h3>
                <p className="text-slate-600 max-md:text-sm">
                  Have questions? Reach out to us for support, inquiries, or assistance.
                </p>
              </div>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label className="mb-1.5 block font-medium text-gray-600">
                  Department <span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={formData.department}
                  options={departmentOptions}
                  onChange={(val) => handleDropdownChange("department", val as string)}
                  placeholder="Select Department"
                />
                {errors.department && (
                  <p className="mt-1 text-sm text-red-500">{errors.department}</p>
                )}
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Input
                  label="Name"
                  name="name"
                  value={formData.name}
                  placeholder="Name"
                  error={errors.name}
                  onChange={handleChange}
                />
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  placeholder="Email"
                  error={errors.email}
                  onChange={handleChange}
                />
              </div>

              <div className="grid gap-6 md:grid-cols-1">
                <Input
                  label="Phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  placeholder="Phone"
                  error={errors.phone}
                  onChange={handleChange}
                />

                <div>
                  <label className="mb-1.5 block font-medium text-gray-600">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us more"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3"
                  />
                </div>
              </div>

              <div className="text-right">
                <Button type="submit" className="mt-auto gap-2">
                  Submit <FiArrowRight />
                </Button>
              </div>
            </form>
          </div>

          <div className="relative hidden lg:block">
            <img
              src="/contact/contact-banner03.webp"
              alt="Global Presence"
              width={500}
              height={500}
              className="h-full w-full rounded-4xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
