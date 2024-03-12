import { CartItemProps } from "@/props/CartItemProps";
import React from "react";
import CartItem from "../cart/CartItem";
import CartTotal from "../cart/CartTotal";

interface OrderSummaryProps {
  total: number;
  discount: number;
  orderItems: CartItemProps[];
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  total,
  discount,
  orderItems,
}) => {
  return (
    <div className=" w-full md:max-w-[30rem] md:my-6">
      {/* Heading */}
      <header className="w-full text-center">
        <h2 className="font-bold text-2xl">Order Summary</h2>
      </header>

      {/* Items */}
      <div className="w-full md:w-96 text-center lg:w-[30rem]">
        {orderItems.map((cartItem: CartItemProps, index: number) => (
          <CartItem
            key={cartItem.productId + index}
            {...cartItem}
            componentVariant={"CHECKOUT"}
          />
        ))}
      </div>

      {/* total */}
      <CartTotal variant="CHECKOUT" total={total} discount={discount} />
    </div>
  );
};

export default OrderSummary;
