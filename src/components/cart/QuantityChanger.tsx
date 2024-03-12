"use client";
import useAppContext from "@/hooks/useAppContext";
import getProductIndex from "@/libs/GetProductIndex";
import increaseProductQuantity from "@/libs/IncreaseQuantity";
import saveCartToLS from "@/libs/SaveCartToLS";
import { CartItemProps } from "@/props/CartItemProps";
import { ProductVariant } from "@/props/ProductProps";
import React, { useCallback } from "react";
import { FiMinus } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";

interface QuantityChangerProps {
  productId: string;
  variant: ProductVariant;
}

// The QuantityChanger component provides buttons to increase or decrease the quantity of a product in the cart.
const QuantityChanger: React.FC<QuantityChangerProps> = ({
  productId,
  variant,
}) => {
  const { setCart } = useAppContext();

  // Memoized addQuantity function using useCallback to prevent unnecessary re-renders.
  const addQuantity = useCallback(() => {
    setCart((prev: CartItemProps[]) => {
      const productIndex = getProductIndex(
        prev,
        productId,
        variant.size,
        variant.color.name
      );

      if (productIndex !== -1) {
        const updatedCart = increaseProductQuantity(prev, productIndex, 1);
        return updatedCart;
      } else {
        return prev;
      }
    });
  }, [setCart, productId, variant.size, variant.color.name]);

  // Memoized subtractQuantity function using useCallback to prevent unnecessary re-renders.
  const subtractQuantity = useCallback(() => {
    setCart((prev: CartItemProps[]) => {
      const productIndex = getProductIndex(
        prev,
        productId,
        variant.size,
        variant.color.name
      );

      if (productIndex !== -1) {
        let updatedCart = [...prev];
        const cartItem = updatedCart[productIndex];

        if (cartItem.variant.quantity > 1) {
          cartItem.variant.quantity--;
          cartItem.totalPrice = cartItem.variant.quantity * cartItem.price;
        }

        // Save the updated cart to local storage.
        saveCartToLS(updatedCart);
        return updatedCart;
      } else {
        return prev;
      }
    });
  }, [setCart, productId, variant.size, variant.color.name]);

  return (
    <div className="grid w-full h-full grid-cols-3 col-span-3 gap-1 place-content-center">
      {/* Subtract quantity button */}
      <div className="relative w-full h-10 p-1">
        <button
          onClick={subtractQuantity}
          className="w-full h-full text-black rounded-md bg-stone-400 CENTER"
        >
          <FiMinus className="CENTER" />
        </button>
      </div>

      {/* Quantity display */}
      <div className="w-full h-10">
        <input
          className="w-full h-full text-center bg-transparent"
          value={variant.quantity}
          readOnly
        />
      </div>

      {/* Add quantity button */}
      <div className="relative w-full h-10 p-1">
        <button
          onClick={addQuantity}
          className="w-full h-full px-2.5 text-black rounded-md bg-stone-400 CENTER"
        >
          <IoMdAdd className="CENTER" />
        </button>
      </div>
    </div>
  );
};

export default QuantityChanger;
