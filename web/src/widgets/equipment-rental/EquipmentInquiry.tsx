import { useState } from "react";
import Button from "@/components/ui/Button";
import {
  RiHammerFill,
  RiTimerFlashLine,
  RiCustomerService2Fill,
  RiCheckboxCircleFill,
  RiLoader4Line,
} from "react-icons/ri";

export default function EquipmentInquiry() {
  const [activeTab, setActiveTab] = useState<"general" | "partnership">("general");

  const [formData, setFormData] = useState({
    // General Enquiry
    fullName: "",
    phone: "",
    equipment: "",
    duration: "",
    message: "",
    // Partnership Enquiry
    partnerName: "",
    partnerCompany: "",
    partnerPhone: "",
    partnerEmail: "",
    partnerEquipmentType: "",
    partnerEquipmentDetails: "",
    partnerAvailability: "",
    partnerMessage: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (activeTab === "general") {
      if (!formData.fullName.trim()) newErrors.fullName = "Name is required";
      if (!formData.phone.trim()) newErrors.phone = "Phone is required";
      if (!formData.equipment.trim()) newErrors.equipment = "Equipment type is required";
    } else {
      if (!formData.partnerName.trim()) newErrors.partnerName = "Name is required";
      if (!formData.partnerCompany.trim()) newErrors.partnerCompany = "Company Name is required";
      if (!formData.partnerPhone.trim()) newErrors.partnerPhone = "Phone is required";
      if (!formData.partnerEmail.trim()) newErrors.partnerEmail = "Email is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const inputClasses = (errorField: string) =>
    `w-full rounded-lg border ${errors[errorField] ? "border-red-500" : "border-slate-100"} bg-slate-50 px-6 py-4 text-xs font-medium outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5 placeholder:text-slate-500`;

  const labelClasses =
    "text-xs font-black uppercase tracking-widest text-slate-700 ml-2 mb-2 block";

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32" id="enquiry">
      <div className="bg-primary/5 pointer-events-none absolute top-0 right-0 h-full w-1/3 translate-x-20 skew-x-12" />
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start">
          <div className="w-full lg:w-5/12">
            <div className="border-primary mb-10 flex flex-col items-start gap-6 border-l-4 pl-6 md:pl-8">
              <h2 className="font-heading text-4xl font-black tracking-tighter text-slate-900 uppercase lg:text-6xl">
                NEED EQUIPMENT <span className="text-primary-darker font-outline-2">ON RENT?</span>
              </h2>
              <p className="max-w-md text-lg font-medium text-slate-600">
                Tell us what you need and we’ll help you get the right equipment in place without
                delays.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {[
                {
                  icon: <RiHammerFill />,
                  title: "Precision Matching",
                  desc: "We match specs to your site requirements.",
                },
                {
                  icon: <RiTimerFlashLine />,
                  title: "Rapid Deployment",
                  desc: "Same-day processing for urgent projects.",
                },
                {
                  icon: <RiCustomerService2Fill />,
                  title: "Direct Line",
                  desc: "Talk to our technical engineers immediately.",
                },
              ].map((feature, i) => (
                <div key={i} className="group flex items-start gap-4">
                  <div className="group-hover:bg-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-white text-slate-900 shadow-sm transition-all duration-300 group-hover:text-white">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xs font-bold tracking-widest text-slate-900 uppercase">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-slate-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <div className="relative flex min-h-[500px] flex-col justify-center rounded-2xl bg-white p-8 md:p-12">
              {!isSubmitted ? (
                <>
                  <div className="mb-4 hidden flex-wrap gap-6 border-slate-100 pb-px md:flex">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveTab("general");
                        setErrors({});
                      }}
                      className={`relative pb-4 text-xs font-black tracking-[0.2em] uppercase transition-all ${
                        activeTab === "general"
                          ? "text-secondary"
                          : "text-slate-600 hover:text-slate-700"
                      }`}
                    >
                      General Enquiry
                      {activeTab === "general" && (
                        <span className="bg-secondary absolute bottom-[-1px] left-0 h-[2px] w-full rounded-t-full" />
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveTab("partnership");
                        setErrors({});
                      }}
                      className={`relative pb-4 text-xs font-black tracking-[0.2em] uppercase transition-all ${
                        activeTab === "partnership"
                          ? "text-secondary"
                          : "text-slate-600 hover:text-slate-700"
                      }`}
                    >
                      Partnership Enquiry
                      {activeTab === "partnership" && (
                        <span className="bg-secondary absolute bottom-[-1px] left-0 h-[2px] w-full rounded-t-full" />
                      )}
                    </button>
                  </div>

                  {/* Mobile tabs */}
                  <div className="mb-4 flex w-full rounded-xl border border-slate-100 bg-slate-50 p-1.5 md:hidden">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveTab("general");
                        setErrors({});
                      }}
                      className={`flex-1 rounded-lg px-2 py-3 text-[10px] font-black tracking-[0.1em] uppercase transition-all sm:text-xs sm:tracking-widest ${
                        activeTab === "general"
                          ? "text-primary bg-white shadow-sm ring-1 ring-black/[0.04]"
                          : "text-slate-600 hover:text-slate-700"
                      }`}
                    >
                      General
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveTab("partnership");
                        setErrors({});
                      }}
                      className={`flex-1 rounded-lg px-2 py-3 text-[10px] font-black tracking-[0.1em] uppercase transition-all sm:text-xs sm:tracking-widest ${
                        activeTab === "partnership"
                          ? "text-primary bg-white shadow-sm ring-1 ring-black/[0.04]"
                          : "text-slate-600 hover:text-slate-700"
                      }`}
                    >
                      Partnership
                    </button>
                  </div>

                  <div className="mb-8 text-xs md:text-sm">
                    {activeTab === "general" ? (
                      <p className="font-medium text-slate-900">
                        Looking To Rent Equipment?{" "}
                        <span className="text-primary-darker">Send Us Your Requirement.</span>
                      </p>
                    ) : (
                      <p className="font-medium text-slate-900">
                        Have Equipment To Offer?{" "}
                        <span className="text-primary-darker">
                          Partner With Us To Reach More Customers.
                        </span>
                      </p>
                    )}
                  </div>

                  <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {activeTab === "general" ? (
                      <>
                        <div className="space-y-1">
                          <label className={labelClasses}>Name</label>
                          <input
                            type="text"
                            placeholder="Your Name"
                            className={inputClasses("fullName")}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            value={formData.fullName}
                          />
                          {errors.fullName && (
                            <p className="mt-1 ml-2 text-xs text-red-500">{errors.fullName}</p>
                          )}
                        </div>

                        <div className="space-y-1">
                          <label className={labelClasses}>Phone</label>
                          <input
                            type="tel"
                            placeholder="Phone Number"
                            className={inputClasses("phone")}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            value={formData.phone}
                          />
                          {errors.phone && (
                            <p className="mt-1 ml-2 text-xs text-red-500">{errors.phone}</p>
                          )}
                        </div>

                        <div className="space-y-1">
                          <label className={labelClasses}>Equipment Required</label>
                          <input
                            type="text"
                            placeholder="e.g. Welding Machine"
                            className={inputClasses("equipment")}
                            onChange={(e) =>
                              setFormData({ ...formData, equipment: e.target.value })
                            }
                            value={formData.equipment}
                          />
                          {errors.equipment && (
                            <p className="mt-1 ml-2 text-xs text-red-500">{errors.equipment}</p>
                          )}
                        </div>

                        <div className="space-y-1">
                          <label className={labelClasses}>Duration</label>
                          <input
                            type="text"
                            placeholder="Rental Duration"
                            className={inputClasses("duration")}
                            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                            value={formData.duration}
                          />
                        </div>

                        <div className="space-y-1 md:col-span-2">
                          <label className={labelClasses}>Message</label>
                          <textarea
                            rows={4}
                            placeholder="Describe your site requirements..."
                            className={`${inputClasses("message")} resize-none`}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            value={formData.message}
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="space-y-1">
                          <label className={labelClasses}>Name</label>
                          <input
                            type="text"
                            placeholder="Your Name"
                            className={inputClasses("partnerName")}
                            onChange={(e) =>
                              setFormData({ ...formData, partnerName: e.target.value })
                            }
                            value={formData.partnerName}
                          />
                          {errors.partnerName && (
                            <p className="mt-1 ml-2 text-xs text-red-500">{errors.partnerName}</p>
                          )}
                        </div>

                        <div className="space-y-1">
                          <label className={labelClasses}>Company Name</label>
                          <input
                            type="text"
                            placeholder="Your Company"
                            className={inputClasses("partnerCompany")}
                            onChange={(e) =>
                              setFormData({ ...formData, partnerCompany: e.target.value })
                            }
                            value={formData.partnerCompany}
                          />
                          {errors.partnerCompany && (
                            <p className="mt-1 ml-2 text-xs text-red-500">
                              {errors.partnerCompany}
                            </p>
                          )}
                        </div>

                        <div className="space-y-1">
                          <label className={labelClasses}>Phone Number</label>
                          <input
                            type="tel"
                            placeholder="Phone Number"
                            className={inputClasses("partnerPhone")}
                            onChange={(e) =>
                              setFormData({ ...formData, partnerPhone: e.target.value })
                            }
                            value={formData.partnerPhone}
                          />
                          {errors.partnerPhone && (
                            <p className="mt-1 ml-2 text-xs text-red-500">{errors.partnerPhone}</p>
                          )}
                        </div>

                        <div className="space-y-1">
                          <label className={labelClasses}>Email</label>
                          <input
                            type="email"
                            placeholder="Email Address"
                            className={inputClasses("partnerEmail")}
                            onChange={(e) =>
                              setFormData({ ...formData, partnerEmail: e.target.value })
                            }
                            value={formData.partnerEmail}
                          />
                          {errors.partnerEmail && (
                            <p className="mt-1 ml-2 text-xs text-red-500">{errors.partnerEmail}</p>
                          )}
                        </div>

                        <div className="space-y-1 md:col-span-2">
                          <label className={labelClasses}>Type Of Equipment</label>
                          <input
                            type="text"
                            placeholder="e.g. Generators, Heavy Machinery"
                            className={inputClasses("partnerEquipmentType")}
                            onChange={(e) =>
                              setFormData({ ...formData, partnerEquipmentType: e.target.value })
                            }
                            value={formData.partnerEquipmentType}
                          />
                        </div>

                        <div className="space-y-1 md:col-span-2">
                          <label className={labelClasses}>Equipment Details</label>
                          <input
                            type="text"
                            placeholder="(make, capacity, condition)"
                            className={inputClasses("partnerEquipmentDetails")}
                            onChange={(e) =>
                              setFormData({ ...formData, partnerEquipmentDetails: e.target.value })
                            }
                            value={formData.partnerEquipmentDetails}
                          />
                        </div>

                        <div className="space-y-1 md:col-span-2">
                          <label className={labelClasses}>Availability</label>
                          <input
                            type="text"
                            placeholder="Immediate / Specific dates"
                            className={inputClasses("partnerAvailability")}
                            onChange={(e) =>
                              setFormData({ ...formData, partnerAvailability: e.target.value })
                            }
                            value={formData.partnerAvailability}
                          />
                        </div>

                        <div className="space-y-1 md:col-span-2">
                          <label className={labelClasses}>Message</label>
                          <textarea
                            rows={4}
                            placeholder="Additional requirements or questions..."
                            className={`${inputClasses("partnerMessage")} resize-none`}
                            onChange={(e) =>
                              setFormData({ ...formData, partnerMessage: e.target.value })
                            }
                            value={formData.partnerMessage}
                          />
                        </div>
                      </>
                    )}

                    <div className="pt-4 md:col-span-2">
                      <Button variant="primary" size="lg" disabled={isSubmitting}>
                        <span className="relative z-10 flex items-center gap-2">
                          {isSubmitting ? (
                            <RiLoader4Line className="animate-spin" />
                          ) : activeTab === "general" ? (
                            "Request Equipment"
                          ) : (
                            "Submit Request"
                          )}
                        </span>
                      </Button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="animate-in fade-in zoom-in flex flex-col items-center py-10 text-center duration-500">
                  <div className="bg-primary/20 text-primary-darker mb-6 flex h-20 w-20 items-center justify-center rounded-full">
                    <RiCheckboxCircleFill size={48} />
                  </div>
                  <h3 className="font-heading mb-4 text-3xl font-black tracking-tighter text-slate-900 uppercase">
                    Request <span className="text-primary-darker">Received</span>
                  </h3>
                  <p className="mb-8 max-w-sm font-medium text-slate-600">
                    Thank you,{" "}
                    <span className="font-bold text-slate-900">
                      {activeTab === "general" ? formData.fullName : formData.partnerName}
                    </span>
                    . Our technical team will review your requirements and contact you within 24
                    hours.
                  </p>
                  <Button variant="dark" type="button" onClick={() => setIsSubmitted(false)}>
                    Submit New Request
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
