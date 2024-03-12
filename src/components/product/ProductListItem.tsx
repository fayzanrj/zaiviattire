import { getProductColors } from "@/libs/GetVariants";
import { ProductProps } from "@/props/ProductProps";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductPrice from "./ProductPrice";

// ProductListItem component
const ProductListItem: React.FC<ProductProps> = ({
  productImages,
  productTitle,
  price,
  discount,
  variants,
  productId,
  category,
}) => {
  // Extracting colors
  const colors = getProductColors(variants);

  return (
    <Link
      href={`/category/${category}/${productId}`}
      className="bg-neutral-900 w-[95vw] sm:w-64 sm:h-[24rem] text-white rounded-lg overflow-hidden"
    >
      {/* Image */}
      <div className="relative flex w-full h-3/4 aspect-auto">
        <Image
          src={productImages[0]}
          alt="img"
          loading="eager"
          width={1000}
          height={100}
          quality={100}
          sizes="100%"
          className="object-cover w-[95vw] h-[95vw] sm:w-64 sm:h-64 aspect-square"
        />
      </div>
      <div className="grid grid-cols-1 grid-rows-3 p-2 h-1/4">
        {/* Price */}
        <ProductPrice discount={discount} price={price} variant="ListItem" />

        {/* Title */}
        <div className="text-center">
          <h3 className="text-lg font-semibold">{productTitle}</h3>
        </div>

        {/* Product Color variants */}
        <div>
          {/* Colors */}
          <div className="p-1 text-center">
            {/* Mapping through colors to display color dots */}
            {colors.map((color, index) => (
              <div key={index} className="inline-block mx-2">
                <div
                  style={{ backgroundColor: color.hexCode }}
                  className="w-3.5 h-3.5 rounded-full shadow-lg"
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductListItem;
