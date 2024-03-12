"use client";
import useAppContext from "@/hooks/useAppContext";
import deleteItemFromCart from "@/libs/DeleteItemFromCart";
import getProductIndex from "@/libs/GetProductIndex";
import { CartItemProps } from "@/props/CartItemProps";
import { ColorProps } from "@/props/ProductProps";
import React, { useCallback } from "react";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";

interface DeleteCartItemButtonProps {
  productId: string;
  variant: {
    color: ColorProps;
    size: string;
  };
}

const DeleteCartItemButton: React.FC<DeleteCartItemButtonProps> = ({
  productId,
  variant,
}) => {
  const { setCart } = useAppContext();

  // Memoized deleteItem function using useCallback to prevent unnecessary re-renders.
  const deleteItem = useCallback(() => {
    setCart((prev: CartItemProps[]) => {
      const productIndex = getProductIndex(
        prev,
        productId,
        variant.size,
        variant.color.name
      );

      if (productIndex !== -1) {
        const updatedList = deleteItemFromCart(prev, productIndex);
        return updatedList;
      }

      // Displaying a toast message if the product is not found.
      toast.error("Error: Product not found in the cart.");

      return prev;
    });
  }, [productId, variant.size, variant.color.name]);

  return (
    <button onClick={deleteItem} aria-label="Delete item">
      <MdDelete size={"1.2rem"} />
    </button>
  );
};

export default DeleteCartItemButton;
