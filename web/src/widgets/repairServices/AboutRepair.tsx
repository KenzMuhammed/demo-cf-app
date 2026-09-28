import { IconType } from "react-icons";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FiActivity, FiShield } from "react-icons/fi";
import { FaGear } from "react-icons/fa6";

type CardItem = {
  description: string;
  icon: IconType;
};

const items: CardItem[] = [
  {
    icon: VscWorkspaceTrusted,
    description:
      "We provide reliable in-house and onsite equipment repair services for welding, cutting, and industrial machinery across Saudi Arabia.",
  },
  {
    icon: FiActivity,
    description:
      "Our service team focuses on quick response and consistent repair quality to help reduce downtime and keep operations running.",
  },
  {
    icon: FiShield,
    description:
      "As an authorized service center for brands like ESAB, Hyundai Welding, Senfeng, Euroboor, and others, we handle repairs and warranty support as per manufacturer standards.",
  },
];

export default function AboutRepair() {
  return (
    <section className="relative overflow-hidden py-14 md:py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src="/about/team-bg3.svg"
          alt="Background Pattern"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-3"
        />
      </div>
      <div className="relative z-10 container px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center gap-6 text-gray-900">
          <FaGear className="text-primary h-12 w-12 lg:h-14 lg:w-14" />
          <div className="hidden h-10 w-px bg-gray-300 md:block" />
          <div>
            <h2 className="font-heading text-3xl font-bold uppercase lg:text-4xl">
              Reliable<span className="text-primary"> Repair </span>Support
            </h2>
            <p className="text-sm text-gray-500">Expert repairs you can depend on</p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl space-y-12 text-gray-800">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="relative flex gap-6">
                {index !== items.length - 1 && (
                  <div className="absolute top-16 left-7 h-full w-px bg-gray-300" />
                )}
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white shadow-sm">
                  <Icon size={26} />
                </div>
                <p className="pt-1 text-lg leading-relaxed text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
