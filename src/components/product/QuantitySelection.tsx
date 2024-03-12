"use client";
import React from "react";
import { FiMinus } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";

interface QuantitySelectionProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const QuantitySelection: React.FC<QuantitySelectionProps> = ({
  setQuantity,
  quantity,
}) => {
  // Function to handle quantity change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value);

    // Ensuring quantity is between 1 and 10
    setQuantity(value > 10 ? 10 : value < 1 ? 1 : value);
  };

  // Function to handle blur event
  const handleBlur = () => {
    // Default to 1 if the input is not a valid number
    if (!quantity) {
      setQuantity(1);
    }
  };

  // Function to increment quantity
  const addItem = () => setQuantity((prev) => (prev < 10 ? prev + 1 : prev));

  // Function to decrement quantity
  const removeItem = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <div className="grid w-full h-10 grid-cols-3 px-4 text-black bg-white rounded-lg outline-none place-items-stretch">
      {/* Subtract button */}
      <div className="w-full relative">
        <button
          className="w-10 h-full px-3 disabled:text-gray-500 disabled:opacity-30 relative"
          disabled={quantity === 1}
          onClick={removeItem}
          aria-label="Decrease Quantity"
        >
          <FiMinus size={"1.125rem"} className="CENTER" />
        </button>
      </div>

      {/* Quantity input */}
      <div className="w-full">
        <label className="sr-only">Quantity</label>
        <input
          className="w-full h-full outline-none text-2xl text-center border-none"
          value={quantity}
          type="number"
          max={10}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-label="Quantity"
          aria-live="assertive"
          aria-atomic="true"
        />
      </div>

      {/* Add button */}
      <div className="w-full text-right">
        <button
          className="w-10 h-full px-3 text-center disabled:text-gray-500 disabled:opacity-30 relative"
          disabled={quantity === 10}
          onClick={addItem}
          aria-label="Increase Quantity"
        >
          <IoMdAdd size={"1.2rem"} className="CENTER" />
        </button>
      </div>
    </div>
  );
};

export default QuantitySelection;
