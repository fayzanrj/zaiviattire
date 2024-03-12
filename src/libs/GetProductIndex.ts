import { CartItemProps } from "@/props/CartItemProps";

const getProductIndex = (
  products: CartItemProps[],
  productId: string,
  selectedSize: string,
  selctedColorName: string
) => {
  const index = products.findIndex(
    (cartItem: CartItemProps) =>
      cartItem.productId === productId &&
      cartItem.variant.size === selectedSize &&
      cartItem.variant.color.name === selctedColorName
  );

  return index;
};

export default getProductIndex;
