"use client";
import { getProductColors, getProductSizes } from "@/libs/GetVariants";
import { ProductProps } from "@/props/ProductProps";
import React, { useMemo, useState } from "react";
import AddToCart from "./AddToCart";
import ColorSelection from "./ColorSelection";
import QuantitySelection from "./QuantitySelection";
import SizeSelection from "./SizeSelection";

interface VariantSelectionProps {
  product: ProductProps;
}

// The VariantSelection component handles the selection of product variants (color, size, quantity).
const VariantSelection: React.FC<VariantSelectionProps> = ({ product }) => {
  // Retrieve sizes and colors from product variants using useMemo for memoization.
  const sizes = useMemo(
    () => getProductSizes(product.variants),
    [product.variants]
  );
  const colors = useMemo(
    () => getProductColors(product.variants),
    [product.variants]
  );

  // State for selected size, color, and quantity.
  const [selectedSize, setSelectedSize] = useState<string>(sizes[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div>
      {/* Color selection component */}
      <ColorSelection
        colors={colors}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />

      {/* Size and Quantity selection section */}
      <div className="grid grid-cols-2 place-items-end gap-2 my-2">
        {/* Size selection component */}
        <SizeSelection
          sizes={sizes}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />

        {/* Quantity selection component */}
        <QuantitySelection quantity={quantity} setQuantity={setQuantity} />
      </div>

      {/* Add to cart button component */}
      <AddToCart
        {...product}
        selectedColor={selectedColor}
        selectedSize={selectedSize}
        quantity={quantity}
      />
    </div>
  );
};

export default VariantSelection;
