import { CartItemProps } from "@/props/CartItemProps";
import Image from "next/image";
import React from "react";
import QuantityChanger from "./QuantityChanger";
import DeleteCartItemButton from "./DeleteCartItemButton";

interface CartItemComponentProps extends CartItemProps {
  componentVariant: "CART" | "CHECKOUT";
}

const CartItem: React.FC<CartItemComponentProps> = ({
  productImage,
  productTitle,
  variant,
  price,
  discount,
  totalPrice,
  productId,
  componentVariant,
}) => {
  return (
    <div className="flex justify-center w-full p-4 border-b h-44 border-stone-400">
      {/* Product Image */}
      <div>
        <Image
          src={productImage}
          alt="img"
          height={1000}
          width={1000}
          quality={100}
          className="w-32 h-32 aspect-square object-cover"
        />
      </div>
      <div className="w-[70%] p-2">
        {/* title */}
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">{productTitle}</h2>
          {componentVariant === "CART" && (
            <DeleteCartItemButton productId={productId} variant={variant} />
          )}
        </div>

        {/* Variant */}
        <div>
          <p className="text-sm text-left">
            {variant.color.name}/{variant.size}
          </p>
        </div>

        {/* Quantity and price */}
        <div className="grid grid-cols-5">
          {componentVariant === "CHECKOUT" ? (
            <div className="col-span-3 text-left">
              <p>
                Quantity : <span>{variant.quantity}</span>
              </p>
            </div>
          ) : (
            <QuantityChanger productId={productId} variant={variant} />
          )}
          <div className="col-span-2 text-right">
            {/* Actual price */}
            <p>
              PKR <span style={{ fontFamily: "sans-serif" }}>{price}</span>
            </p>

            {/*   Quantity */}
            <p style={{ fontFamily: "sans-serif" }}>x {variant.quantity}</p>

            {/* Discount */}
            <p>
              -{" "}
              <span style={{ fontFamily: "sans-serif" }}>
                {typeof discount == "number"
                  ? Math.floor(totalPrice / discount)
                  : "0.00"}
              </span>
            </p>

            {/* Price after discount */}
            <p>
              PKR{" "}
              <span style={{ fontFamily: "sans-serif" }}>
                {typeof discount === "number"
                  ? totalPrice - Math.floor(totalPrice / discount)
                  : totalPrice}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
