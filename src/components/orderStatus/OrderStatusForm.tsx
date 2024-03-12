"use client";
import COLORS from "@/constants/COLORS";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const OrderStatusForm = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [orderId, setOrderId] = useState<string>("");
  const router = useRouter();

  // Function on handle submit event on form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/orderStatus/${orderId}`);
  };

  return (
    <form
      className="relative w-[95vw] sm:w-96 text-center"
      onSubmit={handleSubmit}
    >
      {/* Label */}
      <label
        htmlFor="orderNo"
        className={`font-semibold text-white absolute px-1 duration-300 ${
          isFocused
            ? `top-[1.2rem] left-2 text-xs bg-[${COLORS.BG_DARK}]`
            : "top-10 left-2 -z-10"
        } `}
      >
        Enter Order no.
      </label>
      <br />

      {/* Input field */}
      <input
        id="orderNo"
        className="w-full p-3 mt-1 font-semibold text-white bg-transparent border rounded-md"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        required
        max={20}
        onFocus={() => setIsFocused(true)}
        onBlur={() =>
          orderId.length ? setIsFocused(true) : setIsFocused(false)
        }
      />

      {/* Submission button */}
      <button className="py-1 px-10 bg-white text-black rounded-md font-bold float-right my-2">
        CHECK STATUS
      </button>
    </form>
  );
};

export default OrderStatusForm;
