import { FiMapPin, FiClock, FiCopy, FiCheckCircle } from "react-icons/fi";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";

export default function JobDescripton() {
  const overviewPoints = [
    {
      title: "Inspection & Diagnosis",
      desc: "Inspect, diagnose, and repair industrial welding machines and equipment.",
    },
    {
      title: "Preventive Maintenance",
      desc: "Perform routine preventive maintenance to ensure optimal machine performance.",
    },
    {
      title: "Installation & Testing",
      desc: "Install, test, and commission new welding systems at client sites.",
    },
    {
      title: "Troubleshooting",
      desc: "Troubleshoot electrical, mechanical, and control-related faults.",
    },
    {
      title: "Documentation",
      desc: "Maintain service reports and documentation for completed work.",
    },
    {
      title: "Customer Support",
      desc: "Provide technical guidance to customers on proper equipment usage.",
    },
    {
      title: "Safety Compliance",
      desc: "Ensure all repairs comply with safety standards and company procedures.",
    },
  ];

  return (
    <section className="relative bg-slate-50 py-16 lg:py-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 h-150 w-150 translate-x-1/3 -translate-y-1/3 animate-pulse rounded-full bg-indigo-300/40 blur-[100px] [animation-duration:8s]" />
        <div className="absolute bottom-0 left-0 h-150 w-150 -translate-x-1/3 translate-y-1/3 animate-pulse rounded-full bg-cyan-200/50 blur-[100px] [animation-duration:10s]" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(15,23,42,0.08)_1px,transparent_1px)] bg-size-[22px_22px] opacity-40" />
        </div>
      </div>
      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:sticky lg:top-24 lg:col-span-5">
            <div className="relative rounded-3xl border border-white/60 bg-white/70 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-shadow duration-500 hover:shadow-[0_25px_65px_rgba(0,0,0,0.08)] xl:p-10">
              <div className="relative z-10">
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 shadow-[0_2px_10px_rgba(99,102,241,0.1)]">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-500 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-600"></span>
                  </span>
                  Full-time Position
                </div>
                <h1 className="font-heading mb-8 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:leading-[1.1]">
                  Welding Machine{" "}
                  <span className="from-primary to-primary-dark bg-linear-to-r bg-clip-text text-transparent">
                    Service Technician
                  </span>
                </h1>
                <div className="mb-10 space-y-4">
                  <div className="group flex items-center gap-4 rounded-2xl border border-slate-100/80 bg-white/80 p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-100 hover:bg-white hover:shadow-md">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-indigo-100/50 bg-indigo-50 text-indigo-600 transition-transform duration-300 group-hover:scale-105">
                      <FiClock size={24} />
                    </div>
                    <div>
                      <p className="mb-0.5 text-sm text-slate-500">Experience</p>
                      <p className="font-semibold text-slate-900">2+ Years Required</p>
                    </div>
                  </div>
                  <div className="group flex items-center gap-4 rounded-2xl border border-slate-100/80 bg-white/80 p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-cyan-100 hover:bg-white hover:shadow-md">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-100/50 bg-cyan-50 text-cyan-600 transition-transform duration-300 group-hover:scale-105">
                      <FiMapPin size={24} />
                    </div>
                    <div>
                      <p className="mb-0.5 text-sm text-slate-500">Location</p>
                      <p className="font-semibold text-slate-900">Dammam, Saudi Arabia</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  {/* <Button
                    variant="primary"
                    className="cursor-pointer justify-center py-4 text-lg shadow-[0_8px_20px_rgba(99,102,241,0.2)] transition-all hover:-translate-y-0.5"
                    onClick={() => setApplyRole(true)}
                  >
                    Apply for this role
                  </Button> */}
                  <span className="text-gray-400">Interested in this role? Drop your CV at</span>{" "}
                  <Link to="mailto:careers@asco.com">careers@asco.com</Link>{" "}
                  <span className="text-gray-400">and we’ll reach out.</span>
                </div>
                <div className="mt-8 border-t border-slate-200/80 pt-8">
                  <p className="mb-4 text-sm font-medium text-slate-500">Share this opportunity</p>
                  <div className="flex gap-8">
                    <Button variant="link">
                      <FaWhatsapp size={20} className="text-green-500" />
                    </Button>
                    <Button variant="link">
                      <FaLinkedin size={18} className="text-blue-600" />
                    </Button>
                    <Button variant="link">
                      <FiCopy size={18} className="text-slate-500" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 lg:pl-8">
            <div className="mb-14">
              <h2 className="font-heading mb-6 text-3xl font-bold text-slate-900 lg:text-4xl">
                Overview of the <span className="text-primary">Role</span>
              </h2>
              <p className="text-lg leading-relaxed text-slate-600">
                Join our expert Service & Maintenance team. As a Service Technician, you will play a
                critical role in ensuring industrial operations continue running smoothly by
                diagnosing, repairing, and optimizing complex welding systems across Dammam and the
                wider region.
              </p>
            </div>
            <div className="space-y-8">
              <h3 className="font-heading flex items-center gap-4 text-xl font-bold text-slate-900">
                <span className="h-0.5 w-10 rounded-full bg-indigo-500"></span>
                Key Responsibilities
              </h3>
              <div className="grid gap-4">
                {overviewPoints.map((point, i) => (
                  <div
                    key={i}
                    className="group flex cursor-default items-center gap-4 rounded-2xl border border-transparent p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-200 hover:bg-white/80 hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
                  >
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-indigo-100/50 bg-indigo-50 text-indigo-600 shadow-[0_2px_10px_rgba(99,102,241,0.1)] transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-100 group-hover:text-indigo-700">
                      <FiCheckCircle size={18} className="stroke-[2.5]" />
                    </div>
                    <p className="text-[15px] leading-relaxed font-medium text-slate-600 transition-colors group-hover:text-slate-900">
                      {point.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
