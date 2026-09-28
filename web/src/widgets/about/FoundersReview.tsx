import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

export default function FoundersReview() {
  return (
    <section className="relative bg-slate-50 py-16 lg:py-28">
      <div
        className="absolute top-0 left-0 h-full w-full bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: "url(/about/founder-bg.jpg)" }}
      />
      <div className="relative container mx-auto px-6">
        <div className="grid items-center justify-center gap-4 lg:grid-cols-3">
          <div className="flex justify-center lg:grid-cols-1">
            <div className="to-primary-darker via-primary-darker from-primary-darker/80 relative flex w-1/2 justify-center overflow-hidden rounded-full bg-linear-180 shadow-lg lg:w-3/4 xl:w-1/2">
              <div className="">
                <img
                  src="/avatar-02.webp"
                  alt=" "
                  width={200}
                  height={400}
                  className="w-full overflow-hidden"
                />
              </div>
            </div>
          </div>
          <div className="flex space-y-8 border-y border-dashed border-gray-400 py-10 lg:col-span-2 lg:w-3/4">
            <div>
              <RiDoubleQuotesL className="text-primary-darker me-1" size={30} />
            </div>
            <div className="font-heading space-y-3 leading-8 font-medium text-gray-700">
              <p>
                When we started ASCO in 2020, the goal was clear from day one — to build an
                industrial solutions company that clients could genuinely rely on. In an environment
                where performance, safety, and timelines matter, there is no space for shortcuts.
              </p>
              <p>
                From equipment supply to service support, we have focused on working with trusted
                global brands and building a team that understands real on-site challenges. Every
                decision we make is guided by practicality, accountability, and long-term
                partnerships.
              </p>
              <p>
                We continue to grow with one simple belief: doing things right, supporting our
                clients consistently, and earning trust through our work.
                <span className="inline-flex">
                  <RiDoubleQuotesR size={30} className="text-primary-darker" />
                </span>
              </p>
              <div>
                <p className="mt-4 text-xl font-bold">Mathew Yohannan</p>
                <p className="text-primary-darker font-semibold">Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
