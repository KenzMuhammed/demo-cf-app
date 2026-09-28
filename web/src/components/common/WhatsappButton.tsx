import React from "react";
import clsx from "clsx";
import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsappButton() {
  return (
    <div className={clsx("fixed right-4 bottom-4 z-10 md:right-6 md:bottom-6")}>
      <a
        href="https://wa.me/966540292633"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-12 items-center overflow-hidden rounded-full bg-green-500 text-white shadow-lg transition-all duration-500 ease-in-out hover:shadow-xl md:h-14"
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center md:h-14 md:w-14">
          <FaWhatsapp
            size={24}
            className="transition-transform duration-500 group-hover:translate-x-1"
          />
        </span>
        <span className="max-w-0 overflow-hidden text-sm font-medium whitespace-nowrap opacity-0 transition-all duration-500 group-hover:max-w-xs group-hover:pr-5 group-hover:opacity-100">
          +966 54 029 2633
        </span>
      </a>
    </div>
  );
}
