import Pagination from "@/components/ui/Pagination";
import BrandList from "@/widgets/brand-list/BrandList";
import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 400;
  const itemsPerPage = 10;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <>
      <BrandList />
      <div className="mb-10 xl:mb-14">
        <Pagination currentPage={currentPage} totalPages={totalPages} onChange={handlePageChange} />
      </div>
    </>
  );
}
