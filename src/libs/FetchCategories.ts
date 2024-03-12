import { OrderDetailsProps } from "@/props/OrderStatusProps";
import { handleApiError } from "./handleApiError";
import { ProductProps } from "@/props/ProductProps";
import NavbarLinkProps from "@/props/NavbarLinkProps";

const fetchCategories = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/category/getAllCategories`,
      {
        cache: "no-store",
        //@ts-ignore
        headers: {
          "Content-Type": "application/json",
          accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
        },
      }
    );
    const res = await response.json();
    if (res.categories) {
      return res.categories as NavbarLinkProps[];
    } else {
      return null;
    }
  } catch (error) {
    handleApiError(error);
    return undefined; // Returning empty array
  }
};

export default fetchCategories;
