import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { RiArrowDownSLine, RiMenuLine, RiCloseLine, RiPhoneLine } from "react-icons/ri";

const servicesLinks = [
  { label: "Rental Services", href: "/equipment-rental" },
  { label: "Used Equipment Services", href: "/services" },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDD, setServicesDD] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const closeMobileMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="font-heading h-full">
        <ul className="hidden h-full items-stretch text-white xl:flex">
          <li>
            <a
              href="/about"
              className="hover:text-secondary hover:border-secondary flex h-full items-center border-b-2 border-transparent px-6 font-semibold text-white uppercase transition-all duration-300 max-2xl:px-4"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="/equipment-rental"
              className="hover:text-secondary hover:border-secondary flex h-full items-center border-b-2 border-transparent px-6 font-semibold text-white uppercase transition-all duration-300 max-2xl:px-4"
            >
              Rentals
            </a>
          </li>

          <li>
            <a
              href="/category"
              className="hover:text-secondary hover:border-secondary flex h-full items-center border-b-2 border-transparent px-6 font-semibold text-white uppercase transition-all duration-300 max-2xl:px-4"
            >
              Used Equipments
            </a>
          </li>

          <li>
            <a
              href="/services"
              className="hover:text-secondary hover:border-secondary flex h-full items-center border-b-2 border-transparent px-6 font-semibold text-white uppercase transition-all duration-300 max-2xl:px-4"
            >
              Services
            </a>
          </li>

          {/* Services dropdown kept for reference */}
          {/* <li
            className="relative"
            onMouseEnter={() => setServicesDD(true)}
            onMouseLeave={() => setServicesDD(false)}
          >
            <a
              href="/services"
              className={`flex h-full items-center gap-1 border-b-2 px-6 font-semibold uppercase transition-all duration-300 max-2xl:px-4 ${
                servicesDD
                  ? "text-secondary border-secondary"
                  : "text-white hover:text-secondary hover:border-secondary border-transparent"
              }`}
            >
              Services
              <RiArrowDownSLine
                className={`transition ${servicesDD ? "rotate-180" : ""}`}
              />
            </a>

            <div
              className={`absolute top-full left-0 min-w-64 bg-white shadow-lg transition ${
                servicesDD
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0"
              }`}
            >
              <ul>
                {servicesLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setServicesDD(false)}
                      className="hover:bg-primary hover:text-white text-black block px-4 py-3 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li> */}

          <li>
            <a
              href="/blog"
              className="hover:text-secondary hover:border-secondary flex h-full items-center border-b-2 border-transparent px-6 font-semibold text-white uppercase transition-all duration-300 max-2xl:px-4"
            >
              Resources
            </a>
          </li>

          <li>
            <a
              href="/contact"
              className="hover:text-secondary hover:border-secondary flex h-full items-center border-b-2 border-transparent px-6 font-semibold text-white uppercase max-2xl:px-4"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex h-full items-center gap-1 pr-2 xl:hidden">
        <a
          href="tel:+966540292633"
          className="hover:text-primary flex h-10 w-10 items-center justify-center text-white transition-colors"
          aria-label="Call Us"
        >
          <RiPhoneLine size={22} />
        </a>
        <button
          onClick={() => setMenuOpen(true)}
          className="hover:text-primary flex h-full w-12 items-center justify-center text-white transition-colors"
          aria-label="Menu"
        >
          <RiMenuLine size={26} />
        </button>
      </div>

      {mounted && typeof window !== "undefined" && document.body
        ? createPortal(
            <>
              {menuOpen && (
                <div
                  onClick={closeMobileMenu}
                  className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                />
              )}
              <aside
                className={`font-heading fixed top-0 right-0 z-50 h-screen w-80 bg-black text-white shadow-2xl transition-transform ${
                  menuOpen ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <div className="flex items-center justify-between border-b border-gray-800 p-5">
                  <span className="font-semibold uppercase">Site Navigation</span>
                  <button onClick={closeMobileMenu} aria-label="Close">
                    <RiCloseLine size={22} />
                  </button>
                </div>
                <ul className="h-[calc(100vh-140px)] overflow-y-auto pt-0 text-base font-semibold">
                  <li className="border-b border-gray-800 px-5">
                    <a
                      href="/about"
                      onClick={closeMobileMenu}
                      className="hover:text-secondary block py-3 text-white"
                    >
                      About
                    </a>
                  </li>
                  <li className="border-b border-gray-800 px-5">
                    <a
                      href="/equipment-rental"
                      onClick={closeMobileMenu}
                      className="hover:text-secondary block py-3 text-white"
                    >
                      Rentals
                    </a>
                  </li>
                  <li className="border-b border-gray-800 px-5">
                    <a
                      href="/category"
                      onClick={closeMobileMenu}
                      className="hover:text-secondary block py-3 text-white"
                    >
                      Used Equipments
                    </a>
                  </li>
                  <li className="border-b border-gray-800 px-5">
                    <a
                      href="/services"
                      onClick={closeMobileMenu}
                      className="hover:text-secondary block py-3 text-white"
                    >
                      Services
                    </a>
                  </li>

                  {/* Mobile Services dropdown kept for reference */}
                  {/* <li className="border-b border-gray-800 px-5">
                    <div className="flex">
                      <button
                        onClick={() => {
                          window.location.href = "/services";
                        }}
                        className="flex w-full items-center justify-between py-3 text-left"
                      >
                        Services
                      </button>
                      <div
                        onClick={() => setServicesOpen((v) => !v)}
                        className="flex cursor-pointer items-center border-s border-gray-800 ps-4"
                      >
                        <RiArrowDownSLine
                          className={`transition ${servicesOpen ? "rotate-180" : ""}`}
                        />
                      </div>
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        servicesOpen ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      <ul className="mb-4 ps-4">
                        {servicesLinks.map((item) => (
                          <li key={item.label}>
                            <a
                              href={item.href}
                              onClick={closeMobileMenu}
                              className="hover:text-secondary block py-2 text-gray-400"
                            >
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li> */}
                  <li className="border-b border-gray-800 px-5">
                    <a
                      href="/blog"
                      onClick={closeMobileMenu}
                      className="hover:text-secondary block py-3 text-white"
                    >
                      Resources
                    </a>
                  </li>
                  <li className="border-b border-gray-800 px-5">
                    <a
                      href="/contact"
                      onClick={closeMobileMenu}
                      className="hover:text-secondary block py-3 text-white"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
                <div className="absolute bottom-0 w-full border-t border-gray-800 bg-black p-5">
                  <a
                    href="tel:+966540292633"
                    className="bg-primary hover:bg-primary-light flex items-center justify-center gap-2 rounded-lg py-3 font-semibold text-white"
                  >
                    <RiPhoneLine className="h-5 w-5" />
                    <span>Call Us: +966 54 029 2633</span>
                  </a>
                </div>
              </aside>
            </>,
            document.body
          )
        : null}
    </>
  );
}
