import ProductCard from "@/components/common/ProductCard";
import { RiBox3Line } from "react-icons/ri";
import Breadcrumb from "@/components/ui/Breadcrumb";

const baseProducts = [
  {
    id: "1001",
    partNumber: "P1001",
    name: "Absolute Weld Acetylene Gas Nozzle 170-220 mm for flame cutting G02-9",
    image: "/products/product-1.webp",
    listPrice: "120.00",
    salePrice: "95.00",
    priceCurrency: "SAR",
    Inventory: "InStock",
    isRental: "true",
    rentalCharge: "100",
    rentalUOM: "piece",
  },
  {
    id: "1002",
    partNumber: "P1002",
    name: "Absolute Weld Acetylene Gas Nozzle 20-40 mm for flame cutting G02-4",
    image: "/products/product-2.webp",
    listPrice: "85.00",
    salePrice: "70.00",
    priceCurrency: "SAR",
    Inventory: "OutOfStock",
    isRental: "false",
    rentalCharge: "",
    rentalUOM: "",
  },
  {
    id: "1003",
    partNumber: "P1003",
    name: "Absolute Weld Acetylene Gas Nozzle 10-20 mm for flame cutting G02-3",
    image: "/products/product-3.webp",
    listPrice: "75.00",
    salePrice: "60.00",
    priceCurrency: "SAR",
    Inventory: "InStock",
    isRental: "false",
    rentalCharge: "",
    rentalUOM: "",
  },
  {
    id: "1004",
    partNumber: "P1004",
    name: "Industrial Plasma Cutting Torch for CNC Systems",
    image: "/products/product-8.webp",
    listPrice: "540.00",
    salePrice: "495.00",
    priceCurrency: "SAR",
    Inventory: "InStock",
    isRental: "true",
    rentalCharge: "200",
    rentalUOM: "piece",
  },
  {
    id: "1005",
    partNumber: "P1005",
    name: "ER70S-6 MIG Welding Wire 0.8 mm – 15 kg Spool",
    image: "/products/product-5.webp",
    listPrice: "220.00",
    salePrice: "199.00",
    priceCurrency: "SAR",
    Inventory: "InStock",
    isRental: "false",
    rentalCharge: "",
    rentalUOM: "",
  },
  {
    id: "1006",
    partNumber: "P1006",
    name: "308L Stainless Steel TIG Welding Rods 2.4 mm",
    image: "/products/product-6.webp",
    listPrice: "310.00",
    salePrice: "275.00",
    priceCurrency: "SAR",
    Inventory: "OutOfStock",
    isRental: "false",
    rentalCharge: "",
    rentalUOM: "",
  },
  {
    id: "1007",
    partNumber: "P1007",
    name: "Carbon Steel MIG Welding Wire 0.8 mm – 15 kg Spool",
    image: "/products/product-13.webp",
    listPrice: "210.00",
    salePrice: "190.00",
    priceCurrency: "SAR",
    Inventory: "InStock",
    isRental: "false",
    rentalCharge: "",
    rentalUOM: "",
  },
  {
    id: "1008",
    partNumber: "P1008",
    name: "Industrial TIG Torch Handle for 308L Rods",
    image: "/products/product-14.webp",
    listPrice: "320.00",
    salePrice: "300.00",
    priceCurrency: "SAR",
    Inventory: "InStock",
    isRental: "true",
    rentalCharge: "150",
    rentalUOM: "piece",
  },
  {
    id: "1009",
    partNumber: "P1009",
    name: "Welding Helmet Auto Darkening Lens",
    image: "/products/product-9.webp",
    listPrice: "180.00",
    salePrice: "150.00",
    priceCurrency: "SAR",
    Inventory: "InStock",
    isRental: "true",
    rentalCharge: "",
    rentalUOM: "",
  },
  {
    id: "1010",
    partNumber: "P1010",
    name: "Welding Gloves Heavy Duty Leather",
    image: "/products/product-10.webp",
    listPrice: "45.00",
    salePrice: "38.00",
    priceCurrency: "SAR",
    Inventory: "InStock",
    isRental: "false",
    rentalCharge: "",
    rentalUOM: "",
  },
];

const relatedProducts = Array.from({ length: 50 }, (_, i) => {
  const base = baseProducts[i % baseProducts.length];
  return {
    ...base,
    id: `P${1000 + i}`,
    partNumber: `P${1000 + i}`,
    name: i < 10 ? base.name : `${base.name} Variant ${i + 1}`,
  };
});

export default function CategoryList() {
  return (
    <section className="relative py-10 md:py-16">
      <div className="fixed inset-0 -z-10">
        <img
          src="/category/category-bg.webp"
          alt="Category Background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-white/90"></div>
      </div>
      <div className="relative container">
        <Breadcrumb
          className="mb-6"
          items={[{ label: "Welding Consumables", href: "/category" }]}
        />
        <div className="flex">
          <div className="text-secondary-dark mb-8 flex gap-4 md:mb-12 md:items-center md:gap-6 lg:mb-14">
            <RiBox3Line className="text-secondary h-10 w-10 max-md:mt-0.5 md:h-12 md:w-12 lg:h-14 lg:w-14" />
            <div className="h-[60%] w-px bg-slate-300 max-md:hidden" />
            <div>
              <h2 className="font-heading text-3xl font-bold uppercase lg:text-4xl">
                <span className="text-primary-darker">Welding </span>Consumables
              </h2>
              <p className="text-slate-600 max-md:text-sm">
                Explore reliable welding machines and industrial equipment.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {relatedProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              Inventory={product.Inventory as "InStock" | "OutOfStock"}
              isRental={product.isRental as "true" | "false"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
