import Navbar from "@/layouts/Navbar";
import { RiShoppingCartLine, RiPhoneLine } from "react-icons/ri";

export default function Header() {
  return (
    <header className="from-primary-light to-primary sticky top-0 w-full bg-linear-to-b max-xl:bg-slate-900">
      <div className="container">
        <div className="relative">
          <div className="pointer-events-none absolute top-0 right-full left-auto z-10 h-full w-full bg-white" />

          <div className="header-height flex w-full justify-between">
            <div className="flex max-xl:w-full max-xl:justify-between">
              <div className="slope-brand flex items-center justify-center bg-white pe-14">
                <a href="/" className="flex items-center" aria-label="Innovation Rental Home">
                  <img
                    src="/innovation/innovation-logo.svg"
                    alt="Innovation Rental"
                    width={180}
                    height={56}
                    className="h-16 w-auto max-xl:h-12"
                  />
                </a>
              </div>
              <Navbar />
            </div>
            <div className="flex items-center justify-end gap-6 max-xl:hidden">
              <div className="group hidden items-center gap-3 lg:flex">
                <a
                  href="tel:+966540292633"
                  aria-label="Contact Number"
                  className="bg-primary-dark group-hover:bg-primary flex h-12 w-12 items-center justify-center rounded-full text-white backdrop-blur-sm transition-all"
                >
                  <RiPhoneLine size={20} />
                </a>
                <div>
                  <p className="font-heading font-semibold text-gray-100">Call Us</p>
                  <a
                    href="tel:+966540292633"
                    className="group-hover:text-primary-lighter text-sm font-medium text-white transition-colors"
                    aria-label="Contact Number"
                  >
                    +966 54 029 2633
                  </a>
                </div>
              </div>
              {/* <a
                href="/rfq"
                className="group hidden items-center gap-3 lg:flex"
              >
                <span className="bg-primary-dark flex h-12 w-12 items-center justify-center rounded-full text-white backdrop-blur-sm transition-all">
                  <RiShoppingCartLine size={20} />
                </span>
                <div>
                  <p className="font-heading font-semibold text-gray-100">
                    RFQ
                  </p>
                  <p className="group-hover:text-primary-lighter text-sm font-medium text-white transition-colors">
                    Items (6)
                  </p>
                </div>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
