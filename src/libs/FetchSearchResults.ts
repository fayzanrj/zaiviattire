import { OrderDetailsProps } from "@/props/OrderStatusProps";
import { handleApiError } from "./handleApiError";
import { ProductProps } from "@/props/ProductProps";

const fetchSearchResults = async (query: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/product/searchProducts?query=${query}`,
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
    if (res.products) {
      return res.products as ProductProps[];
    } else {
      return null;
    }
  } catch (error) {
    handleApiError(error);
    return undefined; // Returning empty array
  }
};

export default fetchSearchResults;
