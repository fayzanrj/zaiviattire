import COLORS from "@/constants/COLORS";
import { DM_Sans } from "next/font/google";
import React from "react";

// Font
const dmSerif = DM_Sans({ subsets: ["latin"], weight: "600" });

interface ProductPriceProps {
  variant: "ListItem" | "ProductDetails";
  discount: number | undefined;
  price: number;
}

const ProductPrice: React.FC<ProductPriceProps> = ({
  variant,
  discount,
  price,
}) => {
  return (
    <div className={variant === "ListItem" ? "text-center" : "my-2"}>
      <p
        className={`inline-block ${
          variant === "ListItem"
            ? discount
              ? "line-through text-xs"
              : "no-underline"
            : discount
            ? "line-through text-sm"
            : "text-xl"
        }`}
      >
        PKR <span className={dmSerif.className}>{price}</span> /-
      </p>

      {/* If there is discount on the product */}
      {typeof discount === "number" && discount > 0 && (
        <p
          className={`inline-block px-1 mx-1 bg-${COLORS.BG_DARK} ${
            variant === "ProductDetails" ? "text-xl" : "text"
          }`}
        >
          PKR{" "}
          <span className={dmSerif.className}>
            {price - Math.floor(price / discount)}
          </span>
          /-
        </p>
      )}
    </div>
  );
};

export default ProductPrice;
