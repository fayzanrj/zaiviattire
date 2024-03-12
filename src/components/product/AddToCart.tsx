"use client";
import useAppContext from "@/hooks/useAppContext";
import getExpectedDeliveryDate from "@/libs/GetExpectedDeliveryDate";
import getProductIndex from "@/libs/GetProductIndex";
import increaseProductQuantity from "@/libs/IncreaseQuantity";
import saveCartToLS from "@/libs/SaveCartToLS";
import { CartItemProps } from "@/props/CartItemProps";
import { ColorProps, ProductVariant } from "@/props/ProductProps";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { TbTruckDelivery } from "react-icons/tb";

interface AddToCartProps {
  id: string;
  productId: string;
  productTitle: string;
  designId: string;
  price: number;
  variants: ProductVariant[];
  discount?: number;
  productImages: string[];
  selectedSize: string;
  selectedColor: ColorProps;
  quantity: number;
}

const AddToCart: React.FC<AddToCartProps> = ({
  id,
  productId,
  productImages,
  productTitle,
  selectedColor,
  selectedSize,
  quantity,
  designId,
  discount,
  variants,
  price,
}) => {
  const { setCart } = useAppContext();
  const [isSoldOut, setIsSoldOut] = useState<boolean>(false);

  // Use effect to check availability of product
  useEffect(() => {
    const selectedVariant = variants.findIndex(
      (item: ProductVariant) =>
        item.color.name === selectedColor.name && item.size === selectedSize
    );

    if (
      selectedVariant !== -1 &&
      variants[selectedVariant].quantity >= quantity
    ) {
      setIsSoldOut(false);
    } else {
      setIsSoldOut(true);
    }
  }, [selectedColor, selectedSize]);

  // Function to add item in cart
  const handleAdd = () => {
    try {
      setCart((prev: CartItemProps[]) => {
        // Checking if the product already exists in the cart
        // Getting index
        const existingProductIndex = getProductIndex(
          prev,
          productId,
          selectedSize,
          selectedColor.name
        );

        // If the product already exists, update its quantity
        if (existingProductIndex !== -1) {
          const updatedCart = increaseProductQuantity(
            prev,
            existingProductIndex,
            quantity
          );
          saveCartToLS(updatedCart);
          return updatedCart;
        } else {
          // Finding selected variant index
          const selectedVariant = variants.findIndex(
            (item: ProductVariant) =>
              item.color.name === selectedColor.name &&
              item.size === selectedSize
          );
          // If the product doesn't exist, add it to the cart
          const product: CartItemProps = {
            id,
            productId,
            productTitle,
            designId,
            price,
            totalPrice: price * quantity,
            discount: discount || "N/A",
            productImage: productImages[0],
            variant: {
              id: variants[selectedVariant].id,
              color: selectedColor,
              size: selectedSize,
              quantity,
            },
          };
          const updatedCart = [...prev, product];
          saveCartToLS(updatedCart);
          return updatedCart;
        }
      });
      toast.success("Item added in the cart");
    } catch (error) {
      toast.error("Some error occured");
    }
  };

  return isSoldOut ? (
    // If variants is not available
    <button className="w-full h-12 rounded-lg bg-neutral-600">
      <p className="text-lg font-semibold">Sold out</p>
    </button>
  ) : (
    <>
      {/* Add to cart button */}
      <button
        className="w-full h-12 rounded-lg bg-neutral-600"
        onClick={handleAdd}
      >
        <p className="text-lg font-semibold">Add to Cart</p>
      </button>

      {/* Buy now button (not functional yet) */}
      <button className="hidden w-full h-12 my-2 rounded-lg bg-neutral-600">
        <p className="text-lg font-semibold">Buy Now</p>
      </button>

      {/* Delivery time */}
      <div className="w-full h-10 p-2 my-2 rounded-lg bg-neutral-900">
        <TbTruckDelivery className="inline-block" size={"1.2rem"} />
        <p className="align-middle inline-block mx-1.5 font-semibold">
          {getExpectedDeliveryDate()}
        </p>
      </div>
    </>
  );
};

export default React.memo(AddToCart);
