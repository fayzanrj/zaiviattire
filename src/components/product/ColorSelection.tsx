"use client";
import { ColorProps } from "@/props/ProductProps";
import React, { useMemo, useCallback } from "react";

interface ColorSelectionProps {
  selectedColor: ColorProps;
  colors: ColorProps[];
  setSelectedColor: React.Dispatch<React.SetStateAction<ColorProps>>;
}

const ColorSelection: React.FC<ColorSelectionProps> = ({
  setSelectedColor,
  selectedColor,
  colors,
}) => {
  // Memoizing the function to generate button styles based on color properties.
  const generateButtonStyles = useCallback(
    (color: ColorProps) => ({
      backgroundColor: color.hexCode,
    }),
    []
  );

  // Memoizing the mapped buttons to optimize performance.
  const memoizedButtons = useMemo(() => {
    // Mapping through the colors array to create color selection buttons.
    return colors.map((color, index) => (
      <button
        key={color.name}
        style={generateButtonStyles(color)}
        className={`w-5 h-5 rounded-full mx-2 shadow-lg border-2 border-neutral-600 focus:outline-none du ${
          // Applying scaling effect based on whether the color is selected or not.
          selectedColor.hexCode === color.hexCode ? "scale-125" : "scale-100"
        }`}
        // Handling the click event to update the selected color.
        onClick={() =>
          setSelectedColor({ hexCode: color.hexCode, name: color.name })
        }
        name={color.name}
        aria-label={`${color.name} color`}
        aria-pressed={
          selectedColor.hexCode === color.hexCode ? "true" : "false"
        }
        tabIndex={0}
      />
    ));
  }, [colors, selectedColor, generateButtonStyles, setSelectedColor]);

  // Render the color picker component with selected color information.
  return (
    <div className="my-2">
      <p className="my-2 font-semibold">
        Color : <span>{selectedColor.name}</span>
      </p>
      <div>{memoizedButtons}</div>
    </div>
  );
};

export default ColorSelection;
