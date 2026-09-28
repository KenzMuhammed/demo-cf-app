import { useLayoutEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export type DropdownOption = {
  label: string;
  value: string;
};

type DropdownProps = {
  label?: string;
  value?: string | string[];
  placeholder?: string;
  options: DropdownOption[];
  onChange: (value: any) => void;
  error?: string;
  search?: boolean;
  requiredSymbol?: boolean;
  checklist?: boolean;
};

export default function Dropdown({
  label,
  value,
  placeholder = "Select",
  options,
  onChange,
  error,
  search = false,
  requiredSymbol = true,
  checklist = false,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const displayOptions = search
    ? options.filter((o) => o.label.toLowerCase().includes(searchQuery.toLowerCase()))
    : options;

  useLayoutEffect(() => {
    if (!open) setSearchQuery("");
  }, [open]);

  useLayoutEffect(() => {
    if (!open) return;

    const handleOutside = (e: MouseEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [open]);

  const isSelected = checklist
    ? Array.isArray(value) && value.length > 0
    : !!options.find((o) => o.value === value);

  const getDisplayText = () => {
    if (checklist) {
      const currentValues = Array.isArray(value) ? value : [];
      if (currentValues.length === 0) return placeholder;

      const selectedLabels = options
        .filter((o) => currentValues.includes(o.value))
        .map((o) => o.label);

      return selectedLabels.join(", ");
    } else {
      const selected = options.find((o) => o.value === value);
      return selected?.label || placeholder;
    }
  };

  const handleSelect = (val: string) => {
    if (checklist) {
      const currentValues = Array.isArray(value) ? value : [];
      let newValues;

      if (currentValues.includes(val)) {
        newValues = currentValues.filter((v) => v !== val);
      } else {
        newValues = [...currentValues, val];
      }

      onChange(newValues);
    } else {
      onChange(val);
      setOpen(false);
      if (dropdownRef.current) dropdownRef.current.scrollTop = 0;
    }
  };

  return (
    <div ref={wrapperRef} className="relative flex flex-col">
      {label && (
        <label className="mb-1.5 font-medium text-gray-700">
          {label} {requiredSymbol && <span className="text-red-500">*</span>}
        </label>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`focus:border-primary focus:ring-primary/20 flex h-11 w-full items-center justify-between rounded-lg border bg-white px-4 transition hover:border-gray-400 focus:ring-2 focus:outline-none ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      >
        <span className={`truncate pr-2 ${isSelected ? "" : "text-gray-400"}`}>
          {getDisplayText()}
        </span>
        <FiChevronDown
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      {open && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 z-50 mt-1 flex max-h-60 w-full flex-col overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg"
        >
          {search && (
            <div className="shrink-0 border-b border-gray-100 p-2">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="focus:border-primary focus:ring-primary/50 w-full rounded-md border border-gray-200 px-3 py-1.5 text-sm text-slate-900 transition outline-none focus:ring-1"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}
          <div className="flex-1 overflow-auto">
            {displayOptions.length > 0 ? (
              displayOptions.map((option) => {
                const isChecked = checklist
                  ? Array.isArray(value) && value.includes(option.value)
                  : value === option.value;
                return (
                  <button
                    key={option.value}
                    onClick={() => handleSelect(option.value)}
                    className={`hover:bg-primary/10 flex w-full items-center px-4 py-4 text-left text-sm text-slate-900 transition ${
                      isChecked ? "bg-primary/15 font-medium" : ""
                    }`}
                  >
                    {checklist && (
                      <div
                        className={`mr-3 flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
                          isChecked ? "border-primary bg-primary" : "border-gray-300 bg-white"
                        }`}
                      >
                        {isChecked && (
                          <svg
                            className="h-3 w-3 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    )}
                    <span className="truncate">{option.label}</span>
                  </button>
                );
              })
            ) : (
              <div className="px-4 py-3 text-center text-sm text-gray-500">No options found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
