import { useState, useEffect } from "react";
import { FaFilePdf, FaDownload } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";

type TabType = "description" | "specifications" | "datasheets" | "faq";

const tabs = [
  { id: "description", label: "Overview" },
  { id: "specifications", label: "Specifications" },
  { id: "datasheets", label: "Datasheets" },
  { id: "faq", label: "FAQ" },
];

const datasheets = [
  { name: "Welding Machine Technical Datasheet.pdf", url: "#" },
  { name: "MIG Welding Machine Guide.pdf", url: "#" },
  { name: "Arc Welding Operation Manual.pdf", url: "#" },
  { name: "Safety Welding Instructions.pdf", url: "#" },
];

const specs = [
  { label: "Input Voltage", value: "380V / 415V Three Phase" },
  { label: "Rated Input Power", value: "18.7 kVA (typical)" },
  { label: "Output Current Range", value: "50A – 500A Adjustable" },
  { label: "Duty Cycle (60%)", value: "500A @ 60% Duty" },
  { label: "Duty Cycle (100%)", value: "387A @ 100% Duty" },
  { label: "Welding Process", value: "MIG / TIG / ARC / MMA" },
  { label: "Cooling Method", value: "Forced Air / Air Cooled" },
  { label: "Power Factor", value: "0.85 – 0.95 (max)" },
  { label: "Efficiency (Max Current)", value: "≈ 85% – 88%" },
  { label: "Weight", value: "50 – 65 kg (approx)" },
];

const faqs = [
  {
    question: "What types of welding machines do you offer?",
    answer:
      "We provide MIG, TIG, and ARC welding machines engineered for heavy industrial applications, delivering reliable performance for multiple welding requirements.",
  },
  {
    question: "What industries can use these machines?",
    answer:
      "Our welding machines are suitable for fabrication, construction, and pipeline industries, providing flexibility and superior weld quality across industrial projects.",
  },
  {
    question: "How does your equipment ensure consistent performance?",
    answer:
      "Built using advanced inverter technology, our machines provide stable current output, energy efficiency, and high-quality welds for demanding industrial tasks.",
  },
  {
    question: "Can these machines handle multiple welding processes?",
    answer:
      "Yes, these machines support MIG, TIG, and ARC welding, allowing operators to switch processes easily based on project requirements.",
  },
  {
    question: "What are the key benefits of your welding equipment?",
    answer:
      "Key benefits include powerful arc stability, consistent weld quality, energy efficiency, and flexibility to handle different metals and fabrication projects.",
  },
];

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState<TabType>("description");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null); // <-- add this

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const handleOpenSpec = () => {
      setActiveTab("specifications");
      const specIndex = tabs.findIndex((t) => t.id === "specifications");
      setOpenIndex(specIndex);
    };

    window.addEventListener("openSpecifications", handleOpenSpec);

    return () => {
      window.removeEventListener("openSpecifications", handleOpenSpec);
    };
  }, []);

  const renderContent = (tab: TabType) => {
    if (tab === "description") {
      return (
        <div className="max-w-4xl space-y-5">
          <h2 className="text-primary font-heading mb-6 text-2xl font-semibold">
            Hyundai Flux Cored Wire, SC-71MSR, 1.2 mm × 15 kg Vacuum Pack. Made in Korea. AWS A5.20
            E71T-12MJ / A5.36 / ASME SFA5.36 E71T1-M21A5(P5)-CS2.
          </h2>
          <div className="editor-content max-w-4xl text-sm leading-relaxed text-gray-700 sm:text-base">
            <p>
              <strong>Specification:</strong>
            </p>
            <ul>
              <li>
                <strong>Diameter:</strong> 1.2 mm
              </li>
              <li>
                <strong>Packaging:</strong> 15 kg Vacuum Pack
              </li>
              <li>
                <strong>Country of Origin:</strong> Korea
              </li>
              <li>
                <strong>Classification:</strong>
                <ul>
                  <li>AWS A5.20 E71T-12MJ</li>
                  <li>AWS A5.36 / ASME SFA5.36 E71T1-M21A5(P5)-CS2</li>
                </ul>
              </li>
              <li>
                <strong>Wire Type:</strong> Gas-Shielded Flux Cored Wire
              </li>
              <li>
                <strong>Shielding Gas:</strong> Ar + 20–25% CO₂ (M21)
              </li>
              <li>
                <strong>Polarity:</strong> DC+
              </li>
              <li>
                <strong>Welding Positions:</strong> All Positions
              </li>
            </ul>

            <p>
              <strong>Features:</strong>
            </p>
            <ul>
              <li>Excellent arc stability and smooth metal transfer</li>
              <li>Low spatter generation</li>
              <li>Superior bead appearance and profile</li>
              <li>Easy slag removal</li>
              <li>High deposition efficiency and welding speed</li>
              <li>Excellent impact toughness at low temperatures</li>
              <li>Suitable for robotic, automated, and semi-automatic welding</li>
              <li>Vacuum-packed for moisture protection and longer shelf life</li>
            </ul>

            <p>
              <strong>Applications:</strong>
            </p>
            <ul>
              <li>Structural steel fabrication</li>
              <li>Shipbuilding and offshore construction</li>
              <li>Pressure vessels and storage tanks</li>
              <li>Heavy equipment manufacturing</li>
              <li>Oil &amp; gas industry</li>
              <li>Bridge and infrastructure projects</li>
            </ul>

            <p>
              <strong>Advantages:</strong>
            </p>
            <ul>
              <li>Increased productivity through higher deposition rates</li>
              <li>Reduced post-weld cleaning and finishing</li>
              <li>Consistent weld quality and mechanical properties</li>
              <li>Excellent weldability in demanding industrial environments</li>
              <li>Suitable for critical fabrication applications requiring high toughness</li>
            </ul>

            <p>
              <strong>Brand:</strong> Hyundai Welding
              <br />
              <strong>Model:</strong> SC-71MSR
              <br />
              <strong>Origin:</strong> South Korea
              <br />
              <strong>Standards:</strong> AWS A5.20 E71T-12MJ, AWS A5.36 / ASME SFA5.36
              E71T1-M21A5(P5)-CS2
              <br />
              <strong>Package:</strong> 15 kg Vacuum Pack
              <br />
              <strong>Diameter:</strong> 1.2 mm
              <br />
              <strong>Shielding Gas:</strong> Ar + 20–25% CO₂ (M21)
              <br />
              <strong>Welding Position:</strong> All Positions (Flat, Horizontal, Vertical-Up, and
              Overhead)
            </p>
          </div>
        </div>
      );
    }

    if (tab === "specifications") {
      return (
        <div>
          <h3 className="text-primary font-heading mb-6 text-2xl font-semibold">
            Technical Specifications
          </h3>

          <div className="w-full border border-gray-200">
            {specs.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col justify-between px-4 py-3 text-sm sm:flex-row ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <p className="font-medium text-gray-600 sm:w-1/2">{item.label}</p>

                <p className="mt-1 font-semibold text-gray-900 sm:mt-0 sm:w-1/2">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (tab === "datasheets") {
      return (
        <div>
          <h3 className="text-primary font-heading mb-6 text-2xl font-semibold">
            Product Datasheets
          </h3>

          <div className="grid gap-4 md:grid-cols-2">
            {datasheets.map((pdf, index) => (
              <div
                key={index}
                className="flex items-center justify-between border border-white/40 bg-white/70 p-4 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <FaFilePdf className="text-lg text-red-500" />
                  <span>{pdf.name}</span>
                </div>

                <a
                  href={pdf.url}
                  className="group text-primary flex items-center gap-2 font-medium transition-all duration-200"
                >
                  <FaDownload className="transition-transform duration-200 group-hover:rotate-12" />
                  <span className="hidden lg:block">Download</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (tab === "faq") {
      return (
        <div className="space-y-3">
          <h3 className="text-primary font-heading mb-6 text-2xl font-semibold">
            Frequently Asked Questions
          </h3>
          {faqs.map((faq, index) => {
            const isOpen = faqOpenIndex === index;

            return (
              <div
                key={index}
                className="border-primary/20 rounded-md border bg-white lg:rounded-lg xl:rounded-xl"
              >
                <button
                  onClick={() => setFaqOpenIndex(faqOpenIndex === index ? null : index)}
                  className="flex w-full items-center justify-between gap-2 px-6 py-5 text-left font-medium text-gray-900 transition-colors"
                >
                  <span>{faq.question}</span>
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md transition lg:rounded-lg xl:rounded-xl ${
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
                  <div className="px-6 pb-6 text-gray-700">{faq.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  };

  return (
    <div id="product-tabs" className="w-full pt-12">
      <div className="bg-secondary-darker hidden w-full overflow-hidden border border-white/20 md:flex">
        {tabs.map((tab, index) => {
          const isLast = index === tabs.length - 1;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`group relative flex-1 py-5 text-center text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeTab === tab.id ? "bg-secondary text-white" : "text-gray-400 hover:text-white"
              } ${!isLast ? "clip-tab" : ""}`}
            >
              <span className="relative z-10">{tab.label}</span>

              <span
                className={`bg-primary absolute bottom-0 left-0 h-0.75 w-full transform transition-transform duration-300 ${
                  activeTab === tab.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-50"
                }`}
              />

              {activeTab === tab.id && (
                <span className="pointer-events-none absolute inset-0 bg-white/10 backdrop-blur-sm" />
              )}
            </button>
          );
        })}
      </div>

      <div
        className="hidden border border-white/30 bg-white/60 bg-cover bg-center p-10 backdrop-blur-sm md:block"
        style={{ backgroundImage: "url('/industry/faq2.webp')" }}
      >
        {renderContent(activeTab)}
      </div>

      <div className="space-y-1 md:hidden">
        {tabs.map((tab, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={tab.id} className="overflow-hidden border border-white/30 backdrop-blur-sm">
              <button
                onClick={() => toggleAccordion(index)}
                className="bg-secondary hover:bg-secondary/90 flex w-full items-center justify-between px-5 py-4 text-left font-semibold text-white transition-colors duration-200"
              >
                {tab.label}
                <span className="text-white/80">
                  {isOpen ? <FiMinus size={18} /> : <FiPlus size={18} />}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-650 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div
                  className={`bg-white bg-cover bg-center p-4 ${tab.id === "faq" ? "" : ""}`}
                  style={{
                    backgroundImage: tab.id === "faq" ? "none" : "url('/industry/faq2.webp')",
                  }}
                >
                  {renderContent(tab.id as TabType)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
