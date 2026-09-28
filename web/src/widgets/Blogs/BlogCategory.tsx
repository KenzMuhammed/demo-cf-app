import { Link } from "react-router-dom";

export default function CategoryList() {
  const categories = [
    "Welding Consumables",
    "Welding Equipment & Machines",
    "Gas Cutting & Welding Accessories",
    "Machine Tools",
    "Power Tools & Hand Tools",
    "Industrial Abrasives",
    "Automation & Welding Solutions",
    "Welding Accessories & Safety Products",
  ];

  return (
    <div className="grid grid-cols-1 gap-3">
      <h3 className="font-heading text-lg font-semibold text-gray-300">Categories</h3>
      {categories.map((title, idx) => (
        <Link key={idx} to="/category" className="group">
          <div className="flex h-14 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 text-center shadow-sm backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:shadow-lg">
            <h2 className="font-heading text-sm font-medium text-gray-200 transition-colors duration-300 group-hover:text-white">
              {title}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
