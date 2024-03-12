import { OrderDetailsProps } from "@/props/OrderStatusProps";
import { handleApiError } from "./handleApiError";

const fetchOrderStatus = async (orderId: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/order/getOrderStatus/${orderId}`,
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
    if (res.order) {
      return res.order as OrderDetailsProps;
    } else {
      return null;
    }
  } catch (error) {
    handleApiError(error);
    return undefined; // Returning empty array
  }
};

export default fetchOrderStatus;
