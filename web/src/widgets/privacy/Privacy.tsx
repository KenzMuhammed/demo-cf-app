import Breadcrumb from "@/components/ui/Breadcrumb";
import React from "react";
import { RiShieldUserLine } from "react-icons/ri";

export default function PrivacyPolicy() {
  return (
    <>
      <section className="container py-10 md:py-16">
        <Breadcrumb className="mb-6" items={[{ label: "Privacy Policy ", href: "/privacy" }]} />
        <div className="flex">
          <div className="text-secondary-dark mb-8 flex gap-4 md:mb-12 md:items-center md:gap-6 lg:mb-14">
            <RiShieldUserLine className="text-secondary h-10 w-10 max-md:mt-0.5 md:h-12 md:w-12 lg:h-14 lg:w-14" />
            <div className="h-[60%] w-px bg-slate-300 max-md:hidden" />
            <div>
              <h1 className="font-heading text-3xl font-bold uppercase lg:text-4xl">
                <span className="text-primary-darker">Privacy </span>Policy
              </h1>
              <p className="text-slate-600 max-md:text-sm">Last Updated: 13.03.26</p>
            </div>
          </div>
        </div>
        <p className="mb-4 text-gray-700">
          ASCO respects your privacy and is committed to protecting any personal information that
          may be collected through our website. This Privacy Policy explains how information is
          collected, used, and safeguarded when visitors interact with our website or contact us
          regarding our products and services.
        </p>

        <h2 className="font-heading mt-8 mb-3 text-xl font-semibold text-gray-900">
          1. Information We Collect
        </h2>
        <p className="mb-3 text-gray-700">
          When you interact with our website, we may collect certain information including:
        </p>
        <ul className="mb-4 list-inside list-disc space-y-1 text-gray-700">
          <li>Name</li>
          <li>Company name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>
            Product enquiry information submitted through the website or{" "}
            <a
              href="https://wa.me/your-number"
              className="text-sky-600 underline hover:text-sky-700"
            >
              WhatsApp
            </a>{" "}
            communication
          </li>
          <li>Service or enquiry details submitted through contact forms</li>
        </ul>
        <p className="mb-6 text-gray-700">
          We may also collect limited technical information such as browser type, device
          information, and website usage data to help improve website performance.
        </p>

        <h2 className="font-heading mt-8 mb-3 text-xl font-semibold text-gray-900">
          2. How We Use Your Information
        </h2>
        <ul className="mb-6 list-inside list-disc space-y-1 text-gray-700">
          <li>Responding to enquiries submitted through the website</li>
          <li>Providing information about our products and services</li>
          <li>Processing service requests or support enquiries</li>
          <li>Improving website functionality and user experience</li>
          <li>Communicating important updates related to our services</li>
          <li>
            Processing product enquiries and quotation requests submitted through the website or
            messaging platforms
          </li>
        </ul>
        <p className="mb-6 text-gray-700">
          Personal information will only be used for legitimate business purposes related to
          ASCO&apos;s operations.
        </p>

        <h2 className="font-heading mt-8 mb-3 text-xl font-semibold text-gray-900">
          3. Cookies and Website Analytics
        </h2>
        <p className="mb-6 text-gray-700">
          Our website may use cookies or analytics tools to better understand how visitors interact
          with the site. These technologies help us improve website performance, analyze traffic
          patterns, and enhance user experience. Users may adjust browser settings to refuse cookies
          if preferred.
        </p>

        <h2 className="font-heading mt-8 mb-3 text-xl font-semibold text-gray-900">
          4. Sharing of Information
        </h2>
        <p className="mb-3 text-gray-700">
          ASCO does not sell, rent, or trade personal information to third parties. Information may
          only be shared when necessary to:
        </p>
        <ul className="mb-6 list-inside list-disc space-y-1 text-gray-700">
          <li>Provide requested services</li>
          <li>Work with authorized partners or service providers</li>
          <li>Comply with legal obligations under applicable laws</li>
        </ul>

        <h2 className="font-heading mt-8 mb-3 text-xl font-semibold text-gray-900">
          5. Data Protection and Security
        </h2>
        <p className="mb-6 text-gray-700">
          ASCO implements appropriate technical and organizational measures to protect personal
          information from unauthorized access, misuse, loss, or disclosure. We take reasonable
          precautions to ensure that information collected through the website is stored securely
          and handled responsibly.
        </p>

        <h2 className="font-heading mt-8 mb-3 text-xl font-semibold text-gray-900">
          6. Data Sharing
        </h2>
        <p className="mb-3 text-gray-700">
          ASCO does not sell or trade personal information to third parties. However, personal
          information may be shared in limited circumstances such as:
        </p>
        <ul className="mb-6 list-inside list-disc space-y-1 text-gray-700">
          <li>When required to provide requested services</li>
          <li>
            When working with trusted service providers supporting website or operational activities
          </li>
          <li>When required by applicable laws or regulatory authorities</li>
        </ul>

        <h2 className="font-heading mt-8 mb-3 text-xl font-semibold text-gray-900">
          7. Third-Party Websites
        </h2>
        <p className="mb-6 text-gray-700">
          Our website may contain links to third-party websites or external platforms. ASCO is not
          responsible for the privacy practices or content of those websites. Users are encouraged
          to review the privacy policies of any external websites they visit.
        </p>

        <h2 className="font-heading mt-8 mb-3 text-xl font-semibold text-gray-900">
          8. Your Rights
        </h2>
        <p className="mb-6 text-gray-700">
          Individuals have the right to inquire about the personal data collected about them and may
          request correction or deletion of their information where applicable. Requests regarding
          personal data can be submitted through the contact information provided below.
        </p>

        <h2 className="font-heading mt-8 mb-3 text-xl font-semibold text-gray-900">
          9. Updates to This Privacy Policy
        </h2>
        <p className="mb-6 text-gray-700">
          ASCO may update this Privacy Policy from time to time to reflect changes in regulations,
          technologies, or business practices. Any updates will be published on this page with the
          revised effective date.
        </p>

        <h2 className="font-heading mt-8 mb-3 text-xl font-semibold text-gray-900">
          10. Communication Through Messaging Platforms
        </h2>
        <p className="mb-6 text-gray-700">
          In some cases, users may choose to contact ASCO through messaging platforms such as{" "}
          <a href="https://wa.me/your-number" className="text-sky-600 underline hover:text-sky-700">
            WhatsApp
          </a>{" "}
          for product enquiries or service discussions. Information shared through these channels
          will be used solely for responding to enquiries and providing requested information.
        </p>

        <h2 className="font-heading mt-8 mb-3 text-xl font-semibold text-gray-900">
          11. Contact Us
        </h2>
        <p className="mb-6 text-gray-700">
          If you have any questions regarding this Privacy Policy or the handling of personal
          information, you may contact us through our{" "}
          <a href="/contact" className="text-sky-600 underline hover:text-sky-700">
            website contact page
          </a>
          .
        </p>
      </section>
    </>
  );
}
