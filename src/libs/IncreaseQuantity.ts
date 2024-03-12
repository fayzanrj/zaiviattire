import { CartItemProps } from "@/props/CartItemProps";
import saveCartToLS from "./SaveCartToLS";

const increaseProductQuantity = (
  products: CartItemProps[],
  existingProductIndex: number,
  quantity: number
) => {
  const updatedCart = [...products];
  const existingProduct = updatedCart[existingProductIndex];

  updatedCart[existingProductIndex] = existingProduct;
  if (existingProduct.variant.quantity < 10) {
    existingProduct.variant.quantity += quantity;
    if (existingProduct.variant.quantity > 10) {
      existingProduct.variant.quantity = 10;
    }
    existingProduct.totalPrice =
      existingProduct.variant.quantity * existingProduct.price;
  }

  updatedCart[existingProductIndex] = existingProduct;

  saveCartToLS(updatedCart);
  return updatedCart;
};

export default increaseProductQuantity;
