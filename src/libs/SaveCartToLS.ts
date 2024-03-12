import { CartItemProps } from "@/props/CartItemProps";
import { ColorProps, ProductProps, ProductVariant } from "@/props/ProductProps";

interface cartLsItemProps {
  productId: string;
  variant: ProductVariant;
}

const saveCartToLS = async (cart: CartItemProps[]) => {
  const cartItems: cartLsItemProps[] = [];
  cart.forEach((item) => {
    cartItems.push({
      productId: item.productId,
      variant: item.variant,
    });
  });
  localStorage.setItem("cart", JSON.stringify(cartItems));
};

export default saveCartToLS;
