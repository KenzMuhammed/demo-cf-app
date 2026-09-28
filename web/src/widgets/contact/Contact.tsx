import { useState } from "react";
import Dropdown, { DropdownOption } from "@/components/ui/Dropdown";
import { FaGlobe, FaEnvelope, FaPhone } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { IoTimerOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

type LocationKey = "dammam" | "riyadh" | "jeddah" | "jubail" | "rental";
type Location = {
  label: string;
  address1?: React.ReactNode;
  contacts: {
    sales: { email: string; phone: string };
    rentals: { email: string; phone: string };
    services: { email: string; phone: string };
  };
  website: string;
  map: string;
};

const locations: Record<LocationKey, Location> = {
  dammam: {
    label: "Dammam",
    address1: (
      <>
        <p>At Taawun Dist,</p>
        <p>P.O. BOX 2652 - Al-Khobar 34652,</p>
        <p>Dammam, Saudi Arabia.</p>
      </>
    ),
    contacts: {
      sales: { email: "mujahid@ascosaudi.com", phone: "+966544927765" },
      rentals: { email: "albin@iscersaudi.com", phone: "+966506056061" },
      services: { email: "service@ascosaudi.com", phone: "+966504880238" },
    },
    website: "www.ascosaudi.com",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.352016893659!2d50.176364!3d26.217749299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49dd38d8158f97%3A0xdd174f30a3775797!2sAbsolute%20Solutions%20Company%20for%20Iron!5e0!3m2!1sen!2sin!4v1772519676622!5m2!1sen!2sin",
  },

  riyadh: {
    label: "Riyadh",
    address1: (
      <>
        <p>Al Hadiyah Street,</p>
        <p>Al Sulay District,</p>
        <p>Ar Riyadh, KSA</p>
      </>
    ),
    contacts: {
      sales: { email: "sujith@ascosaudi.com", phone: "+966562800648" },
      rentals: { email: "albin@iscersaudi.com", phone: "+966506056061" },
      services: { email: "service@ascosaudi.com", phone: "+966504880238" },
    },
    website: "www.ascosaudi.com",
    map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3626.751833886923!2d46.844659!3d24.6322368!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2fa9daaac343b3%3A0x1d70796cbea99d0d!2sAbsolute%20Solutions%20Company%20for%20Iron%20%5BASCO%20-%20RIYADH%5D%20HYUNDAI%20WELDING!5e0!3m2!1sen!2sin!4v1772519870072!5m2!1sen!2sin",
  },

  jeddah: {
    label: "Jeddah",
    contacts: {
      sales: { email: "harees@ascosaudi.com", phone: "+966562955609" },
      rentals: { email: "albin@iscersaudi.com", phone: "+966506056061" },
      services: { email: "service@ascosaudi.com", phone: "+966504880238" },
    },
    website: "www.ascosaudi.com",
    map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3579.304556251046!2d50.17893600000001!3d26.219292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDEzJzA5LjUiTiA1MMKwMTAnNDQuMiJF!5e0!3m2!1sen!2sin!4v1772519899216!5m2!1sen!2sin",
  },

  jubail: {
    label: "Jubail",
    contacts: {
      sales: { email: "kiran@ascosaudi.com", phone: "+966546253793" },
      rentals: { email: "albin@iscersaudi.com", phone: "+966506056061" },
      services: { email: "service@ascosaudi.com", phone: "+966504880238" },
    },
    website: "www.ascosaudi.com",
    map: "https://maps.google.com/maps?q=Jubail&t=&z=12&ie=UTF8&iwloc=&output=embed",
  },

  rental: {
    label: "Rental",
    address1: (
      <>
        <p>5C As Saadah Street,</p>
        <p>At Taawun Dist,</p>
        <p>Al Khobar, KSA</p>
      </>
    ),
    contacts: {
      sales: { email: "mujahid@ascosaudi.com", phone: "+966544927765" },
      rentals: { email: "albin@iscersaudi.com", phone: "+966506056061" },
      services: { email: "service@ascosaudi.com", phone: "+966504880238" },
    },
    website: "www.ascosaudi.com",
    map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3579.304556251046!2d50.17893600000001!3d26.219292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDEzJzA5LjUiTiA1MMKwMTAnNDQuMiJF!5e0!3m2!1sen!2sin!4v1772519899216!5m2!1sen!2sin",
  },
};

export default function Contact() {
  const [activeLocation, setActiveLocation] = useState<LocationKey>("dammam");

  const location = locations[activeLocation];

  const locationOptions: DropdownOption[] = Object.entries(locations).map(([key, value]) => ({
    label: value.label,
    value: key,
  }));

  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <img
        src="/contact/contact-bg-1.webp"
        alt="Contact Us"
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-50"
      />

      <div className="relative container">
        <div className="grid lg:grid-cols-5">
          <div className="relative z-10 hidden flex-col gap-1 lg:flex">
            {Object.entries(locations).map(([key, value]) => {
              const isActive = activeLocation === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveLocation(key as LocationKey)}
                  className={`relative w-full rounded-tl-2xl rounded-bl-2xl border border-r-0 border-white/60 px-6 py-5 text-left font-semibold shadow-sm transition-all duration-300 ${
                    isActive
                      ? "bg-white/70 backdrop-blur-sm"
                      : "text-gray-800 backdrop-blur-sm hover:bg-white/60 hover:text-gray-800"
                  }`}
                >
                  {value.label}
                </button>
              );
            })}
          </div>

          <div className="relative z-10 mb-6 lg:hidden">
            <Dropdown
              value={activeLocation}
              options={locationOptions}
              onChange={(val) => setActiveLocation(val as LocationKey)}
              placeholder="Select Location"
            />
          </div>

          <div className="relative z-10 overflow-hidden rounded-tr-4xl rounded-br-4xl bg-white/70 backdrop-blur-sm max-lg:rounded-2xl lg:col-span-4">
            <div className="space-y-6 p-4 md:p-6 xl:p-8">
              <div>
                <div className="flex gap-4 max-sm:flex-col md:justify-between">
                  <h3 className="font-heading text-2xl font-bold text-gray-900">
                    {location.label} Office
                  </h3>

                  <Link
                    to="https://www.ascosaudi.com"
                    target="_blank"
                    className="hover:text-secondary flex items-center gap-2 text-sm text-gray-700"
                  >
                    <FaGlobe className="text-secondary-darker text-lg" />
                    {location.website}
                  </Link>
                </div>

                {(location.address1 || activeLocation === "jubail") && (
                  <div className="mt-4 flex gap-3 max-md:flex-col">
                    <div className="flex gap-3 rounded-2xl p-4 shadow-sm backdrop-blur-lg md:w-1/2 md:p-5 xl:p-6">
                      <div className="pt-0.5">
                        <IoTimerOutline size={24} className="text-neutral-700" />
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-2 flex items-center gap-2 text-base font-semibold">
                          Working Time
                        </h4>
                        <div className="text-sm text-neutral-600">
                          <p>Sunday to Thursday - 8:00 a.m. to 5:00 p.m.</p>
                          <p>Friday & Saturday - Week off</p>
                        </div>
                      </div>
                    </div>

                    {location.address1 && (
                      <div className="flex gap-3 rounded-2xl p-4 shadow-sm backdrop-blur-lg md:w-1/2 md:p-5 xl:p-6">
                        <div className="pt-0.5">
                          <GrLocation size={24} className="text-neutral-700" />
                        </div>
                        <div className="flex-1">
                          <h4 className="mb-2 flex items-center gap-2 text-base font-semibold">
                            Address
                          </h4>
                          {location.address1}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {activeLocation !== "rental" && (
                <div className="grid gap-8 md:grid-cols-3 lg:gap-6 xl:divide-x xl:divide-black/10">
                  {(["sales", "rentals", "services"] as const).map((dep) => (
                    <div
                      key={dep}
                      className="flex flex-col gap-2 xl:px-6 first:xl:pl-0 last:xl:pr-0"
                    >
                      <h4 className="font-semibold text-gray-800 capitalize">{dep}</h4>

                      <a
                        href={`mailto:${location.contacts[dep].email}`}
                        className="hover:text-primary flex items-center gap-2 text-sm text-gray-600"
                      >
                        <FaEnvelope />
                        {location.contacts[dep].email}
                      </a>

                      <a
                        href={`tel:${location.contacts[dep].phone}`}
                        className="hover:text-primary flex items-center gap-2 text-sm text-gray-600"
                      >
                        <FaPhone />
                        {location.contacts[dep].phone}
                      </a>
                    </div>
                  ))}
                </div>
              )}

              {location.address1 && (
                <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
                  <iframe
                    src={location.map}
                    className="h-72 w-full rounded-2xl border-0"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
