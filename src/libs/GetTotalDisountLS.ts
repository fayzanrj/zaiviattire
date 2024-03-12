import { CartItemProps } from "@/props/CartItemProps";

export const getTotalDiscountLS = (cart: CartItemProps[]) => {
  let totalprice = 0;
  let discountedprice = 0;
  cart?.forEach((cartItem: CartItemProps) => {
    totalprice += cartItem.totalPrice;

    if (typeof cartItem.discount === "number") {
      discountedprice += Math.floor(cartItem.totalPrice / cartItem.discount);
    }
  });
  return { totalprice, discountedprice };
};
