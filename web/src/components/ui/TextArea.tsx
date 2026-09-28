import React from "react";

interface TextareaProps {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  rows?: number;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  name,
  value,
  placeholder = "",
  rows = 4,
  error,
  onChange,
}) => {
  return (
    <div className="flex flex-col">
      <label className="mb-1.5 font-medium text-gray-700">
        {label}
        {/* <span className="text-red-500">*</span> */}
      </label>

      <textarea
        name={name}
        value={value}
        rows={rows}
        placeholder={placeholder}
        onChange={onChange}
        className="focus:border-primary focus:ring-primary/20 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-slate-900 transition hover:border-gray-400 focus:ring-2 focus:outline-none"
      />

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Textarea;
