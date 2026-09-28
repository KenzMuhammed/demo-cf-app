import React from "react";
import { FaCheck } from "react-icons/fa";

interface RadioGroupProps {
  label: string;
  name: string;
  options: { label: string; value: string }[];
  value?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  name,
  options,
  value,
  error,
  onChange,
}) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 font-semibold text-gray-800">
        {label} <span className="text-red-500">*</span>
      </label>

      <div className="flex flex-wrap gap-3">
        {options.map((option) => {
          const isSelected = value === option.value;
          return (
            <label
              key={option.value}
              className={`relative flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                isSelected
                  ? "from-secondary to-secondary-lighter border-transparent bg-linear-to-r text-white shadow-md"
                  : "border-gray-300 bg-gray-100 text-gray-700 hover:bg-gray-200"
              } `}
            >
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={isSelected}
                onChange={onChange}
                className="hidden"
              />
              <span>{option.label}</span>
              {isSelected && <FaCheck className="ml-1 text-white" />}
            </label>
          );
        })}
      </div>

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default RadioGroup;
