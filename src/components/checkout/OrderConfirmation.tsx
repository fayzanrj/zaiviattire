import React from "react";
import ConfirmAnimation from "./ConfirmAnimation";
import { MdOutlineClear } from "react-icons/md";

interface OrderConfirmationProps {
  getValues: any;
  orderPlacementStatus: "PLACED" | "FAILED" | "NOT_PLACED";
  total: number;
  discount: number;
  orderNumber: string;
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({
  getValues,
  orderPlacementStatus,
  total,
  discount,
  orderNumber,
}) => {
  // Getting values from Form Hook
  const { firstName, lastName, email, phoneNumber, address, city, zip } =
    getValues();
  const receiverInfo = `${firstName} ${lastName}`;

  return (
    <div className="text-left mb-8">
      {orderPlacementStatus === "PLACED" && (
        <>
          <div className="w-full mb-8 relative">
            <ConfirmAnimation isOrdered={orderPlacementStatus === "PLACED"} />
            <p className="text-center text-2xl absolute left-1/2 transform -translate-x-1/2  bottom-0 font-semibold">
              Order placed
            </p>
          </div>
          <h3 className="text-xl">
            <strong>Order#{orderNumber}</strong>
          </h3>
          <p className="text-lg">Your order has been placed. Thank you!</p>
          <p className="my-2 border border-white p-2">
            <strong>Important note:</strong> Our representative will call/text
            you to confirm your order. If you do not answer, we might have to
            cancel your order.
          </p>
        </>
      )}

      {orderPlacementStatus === "FAILED" && (
        <>
          <div className="w-full mb-8 relative">
            <div className="text-center mt-6">
              <button className="w-24 h-24 rounded-full text-center bg-red-600 border-red-600">
                <MdOutlineClear
                  color="#ffffff"
                  size={"3rem"}
                  className="mx-auto"
                />
              </button>{" "}
              <p className="text-center text-2xl font-semibold">
                Order placement failed
              </p>
            </div>
          </div>
          <p className="text-lg break-words">
            There appears to be some issue in placing your order. Kindly try
            again later or feel free to contact our representatives
          </p>
        </>
      )}
      {/* Order Details */}
      {orderPlacementStatus !== "FAILED" && (
        <>
          <div className="my-6">
            <h3 className="text-xl font-bold mb-1">Receiver Information</h3>
            <p className="font-semibold">Name: {receiverInfo}</p>
            <p className="font-semibold">Email: {email}</p>
            <p className="font-semibold">Phone no.: {phoneNumber}</p>
          </div>

          <div className="my-6">
            <h3 className="text-xl font-bold mb-1">Shipping Information</h3>
            <p className="font-semibold">
              Address: {`${address}, ${city}, ${zip}`}
            </p>
          </div>

          <div className="my-6">
            <h3 className="text-xl font-bold mb-1">Payment Information</h3>
            <p className="font-semibold">Payment: Cash on delivery (COD)</p>
            <p className="font-semibold">
              Total payable: PKR {total - discount + 250}
            </p>
          </div>
        </>
      )}

      {/* Button to place Order */}
      {orderPlacementStatus === "NOT_PLACED" && (
        <div className="text-center">
          <button className="min-w-48 text-black px-6 py-2 bg-white rounded-lg">
            <p className="font-bold">Confirm & Place Order</p>
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmation;
