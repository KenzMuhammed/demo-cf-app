import { FaHandshake } from "react-icons/fa6";

export default function OurPromise() {
  return (
    <section className="relative overflow-hidden bg-black bg-[url('/industry/industry-banner-02.webp')] bg-cover bg-fixed bg-center py-14 text-white lg:py-24">
      <div className="absolute inset-0 bg-black/85" />
      <div className="absolute inset-0 animate-pulse bg-yellow-500/5 mix-blend-overlay" />
      <div className="absolute inset-0 animate-[spin_40s_linear_infinite] bg-[radial-gradient(circle_at_center,rgba(255,204,0,0.15),transparent_60%)]" />

      <div className="relative container">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="flex">
              <div className="mb-8 flex gap-4 text-white md:mb-12 md:items-center md:gap-6 lg:mb-16">
                <FaHandshake className="text-secondary-lighter h-10 w-10 max-md:mt-0.5 md:h-12 md:w-12 lg:h-14 lg:w-14" />
                <div className="h-[60%] w-px bg-slate-300 max-md:hidden" />
                <div>
                  <h3 className="font-heading text-3xl font-bold uppercase lg:text-4xl">
                    Our <span className="text-primary">Promise</span>
                  </h3>
                </div>
              </div>
            </div>

            <h4 className="font-heading mb-6 text-3xl leading-tight font-extrabold lg:text-5xl">
              Reliable solutions, <br />
              anytime, every time
            </h4>

            <p className="max-w-lg text-lg leading-relaxed text-gray-300">
              ASCO works closely with companies across these industries, delivering dependable
              service, technical expertise, and long term operational support.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "24×7 Support",
                desc: "Round-the-clock assistance for uninterrupted operations.",
              },
              {
                title: "Certified Experts",
                desc: "Highly trained technical team with industry credentials.",
              },
              {
                title: "On-Time Delivery",
                desc: "Precision planning and execution without delays.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-tr-md rounded-br-md border border-gray-700 bg-black/80 p-6 backdrop-blur transition hover:border-yellow-500 lg:rounded-tr-lg lg:rounded-br-lg xl:rounded-tr-xl xl:rounded-br-xl"
              >
                <div className="absolute top-0 left-0 h-full w-1 bg-yellow-500 transition-all group-hover:w-full group-hover:opacity-10" />
                <h3 className="mb-2 text-xl font-semibold text-yellow-400">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-0.5 w-full bg-linear-to-r from-transparent via-yellow-500 to-transparent opacity-40" />
    </section>
  );
}
