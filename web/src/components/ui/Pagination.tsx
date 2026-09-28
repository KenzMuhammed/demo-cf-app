import { useState, useEffect } from "react";
import clsx from "clsx";
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  visiblePages?: number;
  onChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  visiblePages = 5,
  onChange,
}: PaginationProps) {
  const totalGroups = Math.ceil(totalPages / visiblePages);
  const currentGroup = Math.floor((currentPage - 1) / visiblePages);

  const startPage = currentGroup * visiblePages + 1;
  const endPage = Math.min(startPage + visiblePages - 1, totalPages);
  const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  const [inputPage, setInputPage] = useState(String(currentPage));

  useEffect(() => {
    setInputPage(String(currentPage));
  }, [currentPage]);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    onChange(page);
    setInputPage(page.toString());
  };

  const handleGo = () => {
    let page = Number(inputPage);

    if (!page || page < 1) page = 1;
    if (page > totalPages) page = totalPages;

    goToPage(page);
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex flex-wrap items-center justify-center gap-2 md:hidden">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="border-secondary-light/60 flex h-8 w-8 items-center justify-center rounded-xl border bg-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          <FiChevronLeft className="h-4 w-4" />
        </button>

        {pages.map((page) => (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className={clsx(
              "h-8 w-8 rounded-xl border text-xs font-semibold disabled:cursor-not-allowed disabled:opacity-40",
              page === currentPage
                ? "bg-primary border-primary text-white"
                : "border-secondary-light/40 text-secondary-darker bg-white"
            )}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="border-secondary-light/60 flex h-8 w-8 items-center justify-center rounded-xl border bg-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          <FiChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="flex items-center gap-2 md:hidden">
        <button
          onClick={() => goToPage(1)}
          disabled={currentPage === 1}
          className="border-secondary-light/60 flex h-8 items-center gap-1 rounded-xl border bg-white px-2 text-xs disabled:cursor-not-allowed disabled:opacity-40"
        >
          <FiChevronsLeft className="h-4 w-4" />
          First
        </button>

        <button
          onClick={() => goToPage(totalPages)}
          disabled={currentPage === totalPages}
          className="border-secondary-light/60 flex h-8 items-center gap-1 rounded-xl border bg-white px-2 text-xs disabled:cursor-not-allowed disabled:opacity-40"
        >
          Last
          <FiChevronsRight className="h-4 w-4" />
        </button>
      </div>

      <div className="hidden flex-wrap items-center justify-center gap-2 md:flex">
        <button
          onClick={() => goToPage(1)}
          disabled={currentPage === 1}
          className="border-secondary-light/60 flex h-10 items-center gap-1 rounded-xl border bg-white px-3 text-sm disabled:cursor-not-allowed disabled:opacity-40"
        >
          <FiChevronsLeft className="h-5 w-5" />
          First
        </button>

        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="border-secondary-light/60 flex h-10 w-10 items-center justify-center rounded-xl border bg-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          <FiChevronLeft className="h-5 w-5" />
        </button>

        {pages.map((page) => (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className={clsx(
              "h-10 w-10 rounded-xl border text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-40",
              page === currentPage
                ? "bg-primary border-primary text-white"
                : "border-secondary-light/40 text-secondary-darker bg-white"
            )}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="border-secondary-light/60 flex h-10 w-10 items-center justify-center rounded-xl border bg-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          <FiChevronRight className="h-5 w-5" />
        </button>

        <button
          onClick={() => goToPage(totalPages)}
          disabled={currentPage === totalPages}
          className="border-secondary-light/60 flex h-10 items-center gap-1 rounded-xl border bg-white px-3 text-sm disabled:cursor-not-allowed disabled:opacity-40"
        >
          Last
          <FiChevronsRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-2 flex items-center gap-2">
        <span className="text-xs text-gray-600 sm:text-sm">Go to page</span>

        <input
          type="number"
          min={1}
          max={totalPages}
          value={inputPage}
          onChange={(e) => setInputPage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleGo();
          }}
          className="h-8 w-12 rounded-xl border border-gray-300 text-center text-xs focus:border-amber-400 focus:outline-none sm:h-10 sm:w-16 sm:text-sm [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />

        <button
          onClick={handleGo}
          className="bg-secondary-lighter hover:bg-secondary-light flex h-8 items-center justify-center rounded-xl px-2 text-xs text-white sm:h-10 sm:px-3 sm:text-sm"
        >
          Go
        </button>

        <span className="text-xs text-gray-500 sm:text-sm">/ {totalPages}</span>
      </div>
    </div>
  );
}
