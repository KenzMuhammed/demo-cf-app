import React from "react";

interface InputProps {
  label: string;
  name: string;
  value: string | number;
  placeholder?: string;
  type?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  requiredSymbol?: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>; // for min, max, step, etc.
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  value,
  placeholder = "",
  type = "text",
  error,
  onChange,
  requiredSymbol = true,
  inputProps = {},
}) => {
  return (
    <div className="flex flex-col">
      <label className="mb-1.5 font-medium text-gray-700">
        {label} {requiredSymbol && <span className="text-red-500">*</span>}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        {...inputProps}
        className={`focus:border-primary focus:ring-primary/20 h-11 w-full rounded-lg border border-gray-300 bg-white px-4 text-slate-900 transition hover:border-gray-400 focus:ring-2 focus:outline-none ${
          error ? "border-red-500" : ""
        }`}
      />

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
