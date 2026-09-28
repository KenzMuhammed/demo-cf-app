import Pagination from "@/components/ui/Pagination";
import CategoryList from "@/widgets/category/CategoryList";
import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 60;
  const itemsPerPage = 10;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <CategoryList />
      <div className="mb-10 xl:mb-14">
        <Pagination currentPage={currentPage} totalPages={totalPages} onChange={handlePageChange} />
      </div>
    </>
  );
}
