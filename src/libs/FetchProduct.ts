import { ProductProps } from "@/props/ProductProps";
import { handleApiError } from "./handleApiError";

const fetchProduct = async (productId: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/product/getProductByProductId/${productId}`,
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
    if (res.product) {
      return res.product as ProductProps;
    } else {
      return null;
    }
  } catch (error) {
    handleApiError(error);
    return undefined; // Returning empty array
  }
};

export default fetchProduct;
