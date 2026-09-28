import ProductCard from "@/components/common/ProductCard";
import Breadcrumb from "@/components/ui/Breadcrumb";

// Base products array (10 items you provided)
const baseProducts = [
  {
    id: "1012",
    partNumber: "P1012",
    name: "Gas Regulator for Welding Cylinder",
    image: "/products/product-15.webp",
    listPrice: "150.00",
    salePrice: "135.00",
    priceCurrency: "SAR",
    Inventory: "InStock",
    isRental: "false",
    rentalCharge: "80",
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
    image: "/products/product-4.webp",
    listPrice: "540.00",
    salePrice: "495.00",
    priceCurrency: "SAR",
    Inventory: "InStock",
    isRental: "true",
    rentalCharge: "200",
    rentalUOM: "piece",
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
    id: "1011",
    partNumber: "P1011",
    name: "Welding Apron Industrial Leather",
    image: "/products/product-11.webp",
    listPrice: "85.00",
    salePrice: "75.00",
    priceCurrency: "SAR",
    Inventory: "InStock",
    isRental: "false",
    rentalCharge: "",
    rentalUOM: "",
  },
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
];

const relatedProducts = Array.from({ length: 50 }, (_, i) => {
  const base = baseProducts[i % baseProducts.length];
  return {
    ...base,
    id: `P${1000 + i}`,
    partNumber: `P${1000 + i}`,
    name: `${base.name} Variant ${i + 1}`,
  };
});

const productData = {
  exportedDate: "2026-03-16",
  ProductList: [
    {
      id: "1235",
      partNumber: "P12345",
      name: "Absolute Weld Acetylene Gas Nozzle 10-20 mm for flame cutting G02-3",
      relatedProducts,
    },
  ],
};

// Component
export default function BrandList() {
  const products = productData.ProductList[0].relatedProducts;

  return (
    <section className="relative py-10 md:py-16">
      <div className="fixed inset-0 -z-10">
        <img
          src="/brands/brand-list-banner.webp"
          alt="Category Background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-white/95"></div>
      </div>

      <div className="relative container">
        <Breadcrumb className="mb-6" items={[{ label: "ESAB Welding", href: "/brand-list" }]} />

        <div className="mb-8 flex flex-col items-center gap-4 md:mb-12 md:flex-row md:items-center lg:mb-14">
          <img
            src="/brands/ESAB.webp"
            alt="Esab"
            width={150}
            height={50}
            className="object-contain"
          />
          <div className="hidden h-[60%] w-px bg-slate-300 md:block" />
          <div className="text-center md:text-left lg:text-left">
            <h2 className="font-heading text-3xl font-bold uppercase lg:text-4xl">
              <span className="text-primary-darker">Esab Welding </span>
              and Cutting Solutions
            </h2>
            <p className="text-slate-600 max-md:text-sm">
              Explore reliable welding machines and industrial equipment.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {products.map((product) => (
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
