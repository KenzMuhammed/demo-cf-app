import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

interface QuantityInputProps {
  initial?: number;
  min?: number;
  size?: "sm" | "normal";
  onChange?: (value: number) => void;
  label?: string;
}

export default function QuantityInput({
  initial = 1,
  min = 1,
  size = "normal",
  onChange,
  label = "Quantity",
}: QuantityInputProps) {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    setQuantity((prev) => {
      const newVal = prev + 1;
      onChange?.(newVal);
      return newVal;
    });
  };

  const decrement = () => {
    setQuantity((prev) => {
      const newVal = prev > min ? prev - 1 : prev;
      onChange?.(newVal);
      return newVal;
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = parseInt(e.target.value);
    if (isNaN(val) || val < min) val = min;
    setQuantity(val);
    onChange?.(val);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      increment();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      decrement();
    }
  };

  const buttonHeight = size === "sm" ? "h-8" : "h-[42px]";
  const buttonPadding = size === "sm" ? "px-2" : "px-4";

  const buttonClasses = `flex items-center justify-center ${buttonHeight} ${buttonPadding} border-gray-300 text-gray-700 hover:bg-gray-100 transition`;
  const inputClasses = `
  text-slate-900 bg-white
  text-center 
  outline-none 
  border-none 
  ${buttonHeight} 
  ${size === "sm" ? "w-10 text-sm" : "w-16"} 
  appearance-none
  [&::-webkit-inner-spin-button]:appearance-none
  [&::-webkit-outer-spin-button]:appearance-none
  -moz-appearance-textfield
`;
  return (
    <div
      className="flex items-center overflow-hidden rounded-md border border-gray-300"
      role="group"
      aria-label={label}
    >
      <button
        type="button"
        onClick={decrement}
        className={`border-r ${buttonClasses}`}
        aria-label="Decrease quantity"
      >
        <FiMinus />
      </button>

      <input
        type="number"
        value={quantity}
        min={min}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={inputClasses}
        aria-label={label}
        inputMode="numeric"
        pattern="[0-9]*"
      />

      <button
        type="button"
        onClick={increment}
        className={`border-l ${buttonClasses}`}
        aria-label="Increase quantity"
      >
        <FiPlus />
      </button>
    </div>
  );
}
