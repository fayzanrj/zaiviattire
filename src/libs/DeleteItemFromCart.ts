import { CartItemProps } from "@/props/CartItemProps";
import toast from "react-hot-toast";
import saveCartToLS from "./SaveCartToLS";

const deleteItemFromCart = (prev: CartItemProps[], productIndex: number) => {
  try {
    const updatedList = prev.filter((_, index) => index !== productIndex);
    saveCartToLS(updatedList);
    toast.success("Item removed from cart");
    return updatedList;
  } catch (error) {
    console.error(error);
    toast.error("Some error occured");
    return prev;
  }
};

export default deleteItemFromCart;
