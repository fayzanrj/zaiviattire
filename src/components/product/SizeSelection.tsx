"use client";
import React, { useMemo } from "react";

interface SizeSelectionProps {
  sizes: string[];
  selectedSize: string;
  setSelectedSize: React.Dispatch<React.SetStateAction<string>>;
}

// The SizeSelection component provides a dropdown to select product sizes.
const SizeSelection: React.FC<SizeSelectionProps> = ({
  sizes,
  selectedSize,
  setSelectedSize,
}) => {
  // Memoize the options for the select element to optimize performance.
  const memoizedOptions = useMemo(() => {
    return sizes.map((size) => (
      <option className="w-11/12 rounded-md" key={size} value={size}>
        {size}
      </option>
    ));
  }, [sizes]);

  // Handler for size change event.
  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSize(e.target.value);
  };

  return (
    <div className="w-full">
      {/* Size chart button */}
      <button aria-label="size chart button">Size Chart</button>

      {/* Label for size selection */}
      <label htmlFor="size" className="sr-only">
        Select Size
      </label>

      <div>
        {/* Display the selected size */}
        <p className="my-1 font-semibold" id="selected-size-label">
          Size: {selectedSize}
        </p>

        {/* Size selection dropdown */}
        <select
          id="size"
          aria-labelledby="selected-size-label"
          className="w-full h-10 px-4 text-lg font-semibold text-black rounded-lg outline-none"
          value={selectedSize}
          onChange={handleSizeChange}
        >
          {memoizedOptions}
        </select>
      </div>
    </div>
  );
};

export default SizeSelection;
