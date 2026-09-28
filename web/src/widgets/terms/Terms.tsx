import React from "react";
import { RiFileTextLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Breadcrumb from "@/components/ui/Breadcrumb";

export default function TermsConditions() {
  return (
    <section className="container mx-auto px-4 py-10 md:py-16">
      <Breadcrumb className="mb-6" items={[{ label: "Terms & Conditions ", href: "/terms" }]} />
      <div className="flex">
        <div className="text-secondary-dark mb-8 flex gap-4 md:mb-12 md:items-center md:gap-6 lg:mb-14">
          <RiFileTextLine className="text-secondary h-10 w-10 max-md:mt-0.5 md:h-12 md:w-12 lg:h-14 lg:w-14" />
          <div className="h-[60%] w-px bg-slate-300 max-md:hidden" />
          <div>
            <h1 className="font-heading text-3xl font-bold uppercase lg:text-4xl">
              <span className="text-primary-darker">Terms & </span>Conditions
            </h1>
            <p className="text-slate-600 max-md:text-sm">Last Modified: 13.03.26</p>
          </div>
        </div>
      </div>

      <p className="mb-6 text-gray-700">
        These Terms and Conditions govern the use of the website operated by Absolute Solutions
        Company for Iron (ASCO). By accessing or using this website, users agree to comply with the
        terms outlined on this page. If you do not agree with any part of these Terms and
        Conditions, you should discontinue using the website.
      </p>

      <h2 className="font-heading mt-8 mb-3 text-xl font-semibold text-gray-900">
        1. Use of the Website
      </h2>
      <p className="mb-6 text-gray-700">
        The ASCO website is intended to provide information about our products, services, and
        industrial solutions. Users may browse the website, explore product information, and submit
        enquiries through the provided contact or messaging channels. The content on this website is
        intended for informational purposes and for facilitating communication with our team. Users
        agree to use the website responsibly and not engage in activities that may disrupt or
        interfere with the operation of the website.
      </p>

      <h2 className="font-heading mt-8 mb-3 text-xl font-semibold text-gray-900">
        2. Product Information
      </h2>
      <p className="mb-6 text-gray-700">
        ASCO strives to ensure that product descriptions, specifications, and related information
        presented on the website are accurate and up to date. However, product information provided
        on the website may be subject to updates or changes without prior notice. Images and
        descriptions displayed on the website are for reference purposes only.
      </p>

      <h2 className="font-heading mt-8 mb-3 text-xl font-semibold text-gray-900">
        3. Product Enquiries and Quotations
      </h2>
      <p className="mb-6 text-gray-700">
        The website allows users to submit product enquiries through the cart or enquiry features.
        Submitting an enquiry does not constitute a confirmed order or purchase. Pricing,
        availability, and final specifications will be confirmed directly by ASCO after reviewing
        the enquiry request. Users may be redirected to messaging platforms such as WhatsApp to
        communicate with our team regarding product enquiries or quotations.
      </p>

      <h2 className="font-heading mt-8 mb-3 text-xl font-semibold text-gray-900">
        4. Third-Party Brands
      </h2>
      <p className="mb-6 text-gray-700">
        The ASCO website may reference products from various global manufacturers and brands. All
        trademarks, brand names, and product names mentioned on this website remain the property of
        their respective owners. Their presence on this website does not imply ownership of those
        trademarks by ASCO.
      </p>

      <h2 className="font-heading mt-8 mb-3 text-xl font-semibold text-gray-900">
        5. Intellectual Property
      </h2>
      <p className="mb-6 text-gray-700">
        All content on this website, including text, graphics, images, logos, and website design
        elements, is the property of ASCO unless otherwise stated. Users may not reproduce,
        distribute, modify, or reuse any website content without prior written permission from ASCO.
      </p>

      <h2 className="font-heading mt-8 mb-3 text-xl font-semibold text-gray-900">
        6. Website Availability
      </h2>
      <p className="mb-6 text-gray-700">
        ASCO makes reasonable efforts to ensure that the website operates smoothly and remains
        accessible to users. However, we do not guarantee uninterrupted access to the website and
        may occasionally perform updates, maintenance, or improvements that temporarily affect
        website availability.
      </p>

      <h2 className="font-heading mt-8 mb-3 text-xl font-semibold text-gray-900">
        7. Limitation of Liability
      </h2>
      <p className="mb-6 text-gray-700">
        ASCO shall not be held responsible for any direct or indirect damages arising from the use
        of this website or reliance on information provided on the website. Users are responsible
        for verifying product specifications and service requirements directly with ASCO before
        making operational decisions.
      </p>

      <h2 className="font-heading mt-8 mb-3 text-xl font-semibold text-gray-900">
        8. Third-Party Links
      </h2>
      <p className="mb-6 text-gray-700">
        The website may contain links to external websites for additional information or resources.
        ASCO is not responsible for the content, policies, or practices of external websites that
        may be accessed through such links. Users are encouraged to review the privacy policies of
        any external websites they visit. You can view our{" "}
        <Link to="/privacy" className="text-sky-600 underline hover:text-sky-700">
          Privacy Policy
        </Link>{" "}
        for more details.
      </p>

      <h2 className="font-heading mt-8 mb-3 text-xl font-semibold text-gray-900">
        9. Changes to Terms and Conditions
      </h2>
      <p className="mb-6 text-gray-700">
        ASCO reserves the right to modify or update these Terms and Conditions at any time. Updated
        versions will be published on this page and will take effect immediately upon posting.
      </p>

      <h2 className="font-heading mt-8 mb-3 text-xl font-semibold text-gray-900">10. Contact</h2>
      <p className="mb-6 text-gray-700">
        For any questions regarding these Terms and Conditions, users may contact ASCO through our{" "}
        <Link to="/contact" className="text-sky-600 underline hover:text-sky-700">
          Contact Page
        </Link>
        .
      </p>
    </section>
  );
}
