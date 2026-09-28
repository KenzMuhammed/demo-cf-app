import { BiRocket, BiBuilding } from "react-icons/bi";
import { WiStars } from "react-icons/wi";
import { ImageGallery } from "./ImageGallery";

const backgroundImage = "/about/mission-bg.webp";

export default function Mission() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-28 xl:py-36">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-scroll bg-center lg:bg-fixed"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 -z-10 bg-black/85" />
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-start gap-4 lg:grid lg:grid-cols-2">
          <div className="flex flex-col gap-10">
            <div>
              <div className="mb-5 flex items-center gap-4">
                <div className="bg-primary/20 text-primary flex h-14 w-14 items-center justify-center rounded-xl">
                  <BiRocket size={28} />
                </div>
                <h2 className="font-heading text-primary text-3xl font-bold uppercase lg:text-4xl">
                  Mission
                </h2>
              </div>
              <p className="border-primary border-l ps-4 leading-relaxed text-slate-300 lg:w-9/10 xl:text-lg">
                Our mission is to provide outstanding service by combining advanced technology,
                flexibility, and effective logistics. We are dedicated to meeting our
                customers&apos; needs with professional, efficient solutions and timely delivery.
                Through continuous improvement and a commitment to quality, we strive to exceed
                expectations and deliver exceptional results for every project.
              </p>
            </div>
            <div>
              <div className="mb-5 flex items-center gap-4">
                <div className="bg-primary/20 text-primary flex h-14 w-14 items-center justify-center rounded-xl">
                  <BiBuilding size={28} />
                </div>
                <h2 className="font-heading text-primary text-3xl font-bold uppercase lg:text-4xl">
                  Vision
                </h2>
              </div>
              <p className="border-primary border-l ps-4 leading-relaxed text-slate-300 lg:w-5/6 xl:text-lg">
                To be a trusted industrial solutions partner, supporting the growth and efficiency
                of industrial operations across Saudi Arabia.
              </p>
            </div>
          </div>
          <div className="max-lg:w-full">
            <div className="mb-6 flex items-center justify-start gap-2 text-white max-lg:mt-8">
              <WiStars size={40} />
              <p className="font-heading text-3xl font-semibold">Key Highlights</p>
            </div>
            <ImageGallery />
          </div>
        </div>
      </div>
    </section>
  );
}
