import { Button } from "@/components/ui/Button";
import { FiArrowRight } from "react-icons/fi";
import { RiListCheck3 } from "react-icons/ri";

const categories = [
  {
    title: "Diesel Engine Driven Welding Machines",
    img: "/innovation/home/in-cat-01.webp",
  },
  {
    title: "Diesel Engine Driven Gouging Machines",
    img: "/innovation/home/in-cat-02.webp",
  },
  {
    title: "Electrical Welding Machines",
    img: "/innovation/home/in-cat-03.webp",
  },
  {
    title: "Electrode Oven",
    img: "/innovation/home/in-cat-04.webp",
  },
  {
    title: "Forklift",
    img: "/innovation/home/in-cat-05.webp",
  },
  {
    title: "Power Generators",
    img: "/innovation/home/in-cat-06.webp",
  },
  {
    title: "Air Compressor",
    img: "/innovation/home/in-cat-07.webp",
  },
  {
    title: "Tower Light",
    img: "/innovation/home/in-cat-08.webp",
  },
];

export default function ProductCategoriesList() {
  return (
    <section className="relative py-14 lg:py-24">
      <div className="container mx-auto">
        <div className="flex sm:justify-center">
          <div className="text-secondary-dark mb-4 flex gap-4 md:mb-12 md:items-center md:gap-6 lg:mb-14">
            <RiListCheck3 className="text-secondary h-10 w-10 max-md:mt-0.5 md:h-12 md:w-12 lg:h-14 lg:w-14" />
            <div className="h-[60%] w-px bg-slate-300 max-md:hidden" />
            <div>
              <h2 className="font-heading text-3xl font-bold uppercase lg:text-4xl">
                <span className="text-primary-darker">Rental</span> Equipments
              </h2>
              <p className="text-slate-600 max-md:text-sm">
                A quick overview of our core rental equipments.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {categories.map((item, i) => (
            <div
              key={i}
              className="group xl:border-secondary/10 flex flex-col items-center gap-3 px-3 py-6 text-center lg:gap-5 lg:px-8 lg:py-8 xl:border-r xl:border-b xl:nth-[4n]:border-r-0 xl:nth-last-[-n+4]:border-b-0"
            >
              <a href="/category">
                <div className="relative h-32 w-32 md:h-36 md:w-36 lg:h-60 lg:w-60">
                  <span className="border-primary/60 absolute inset-0 scale-75 rounded-full border-2 opacity-0 transition-all duration-400 group-hover:scale-110 group-hover:opacity-100" />
                  <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white bg-slate-100 shadow-sm">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              </a>
              <h3 className="font-heading group-hover:text-primary font-semibold text-slate-900 transition-colors md:text-lg">
                {item.title}
              </h3>
              <Button
                variant="dark"
                className="mt-auto gap-2"
                onClick={() => (window.location.href = "/category")}
              >
                View Products
                <FiArrowRight />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
