import { useState } from "react";
import { FiPlus, FiMinus, FiMail, FiPhone } from "react-icons/fi";
import { RiListCheck3 } from "react-icons/ri";

export default function FaqEquipment() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What types of equipment are available for rental?",
      answer:
        "We offer a range of welding, cutting, power, and industrial equipment based on project and operational requirements.",
    },
    {
      question: "How do I request equipment for rental?",
      answer:
        "You can contact our team directly by phone or email with your requirements, and we’ll guide you through the process.",
    },
    {
      question: "Do you provide short-term and long-term rentals?",
      answer:
        "Yes, we offer both short-term and long-term rental options depending on your project duration.",
    },
    {
      question: "Is technical support included with the rental?",
      answer:
        "Yes, all rentals include technical support, along with onsite assistance if required.",
    },
    {
      question: "What happens in case of equipment breakdown?",
      answer:
        "Our team provides quick support, and replacement equipment can be arranged if needed to avoid delays.",
    },
    {
      question: "Do you provide delivery and setup?",
      answer: "Yes, equipment is delivered and deployed at your site based on the agreed terms.",
    },
    {
      question: "Are maintenance and servicing included?",
      answer:
        "Yes, scheduled maintenance and servicing are included to ensure reliable performance during the rental period.",
    },
    {
      question: "Can rental plans be customized?",
      answer:
        "Yes, rental agreements can be customized based on equipment type, duration, and operational needs.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="bg-primary/10 relative bg-cover bg-center py-14 lg:py-24"
      style={{ backgroundImage: "url('/industry/faq2.webp')" }}
    >
      <div className="container">
        <div className="flex sm:justify-center">
          <div className="text-secondary-dark mb-4 flex gap-4 md:mb-12 md:items-center md:gap-6 lg:mb-14">
            <RiListCheck3 className="h-10 w-10 max-md:mt-0.5 md:h-12 md:w-12 lg:h-14 lg:w-14" />
            <div className="h-[60%] w-px bg-slate-300 max-md:hidden" />
            <div>
              <h3 className="font-heading text-3xl font-bold uppercase lg:text-4xl">
                <span className="text-primary-darker">FAQ</span>s
              </h3>
              <p className="text-slate-600 max-md:text-sm">
                Frequently Asked Questions about our products and services.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto grid gap-12 lg:grid-cols-2">
          <div className="space-y-5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="border-primary/20 rounded-md border bg-white lg:rounded-lg xl:rounded-xl"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                  >
                    <h4 className="font-heading text-lg font-bold text-gray-900 uppercase">
                      {faq.question}
                    </h4>

                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-md transition lg:rounded-lg xl:rounded-xl ${
                        isOpen
                          ? "bg-secondary-light text-white"
                          : "bg-primary/10 text-secondary-light"
                      }`}
                    >
                      {isOpen ? <FiMinus size={18} /> : <FiPlus size={18} />}
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6">
                      <p className="leading-relaxed text-gray-700">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="relative flex flex-col">
            <div className="relative h-70 w-full overflow-hidden rounded-t-md lg:rounded-t-lg xl:rounded-t-xl">
              <img
                src="/industry/faq4.webp"
                alt="Industrial Welding"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="bg-secondary-light -mt-10 flex flex-col rounded-b-md px-8 pt-20 pb-10 text-white shadow-lg lg:rounded-b-lg xl:rounded-b-xl">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white/20 lg:rounded-lg xl:rounded-xl">
                  <FiMail />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold lg:text-2xl">
                    Ask the Help Community Write Now!
                  </h4>
                  <p className="mt-1 text-white/80">
                    <a
                      href="mailto:info@innosaudi.com"
                      className="text-xl font-semibold text-white hover:underline"
                    >
                      info@innosaudi.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="my-6 h-px bg-white/30" />
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white/20 lg:rounded-lg xl:rounded-xl">
                  <FiPhone />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold lg:text-2xl">
                    Still Have Questions? Call Now!
                  </h4>
                  <p className="mt-1 text-xl font-semibold">
                    <a href="tel:+0138966693" className="hover:underline">
                      +01 38 966 693
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
