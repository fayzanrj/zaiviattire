import React from "react";
import { MdOutlineClear, MdOutlineDone } from "react-icons/md";
import { OrderDetailsProps, OrderStatusProps } from "@/props/OrderStatusProps";
import formatDate from "@/libs/FormatDate";
import COLORS from "@/constants/COLORS";

interface OrderStatusListItemProps {
  stepNumber: number;
  stepName: string;
  currentStatusNumber: number;
  order: OrderDetailsProps;
  variant: "CANCELLED" | "ACCEPTED";
}

const OrderStatusListItem: React.FC<OrderStatusListItemProps> = ({
  stepNumber,
  stepName,
  currentStatusNumber,
  order,
  variant,
}) => (
  <li className="align-top text-left relative mb-14">
    {/* Bar between steps */}
    {stepNumber !== 1 && (
      <div
        className={`w-1 h-14 absolute bottom-full left-[1.4rem] ${
          stepNumber <= currentStatusNumber + 1
            ? variant === "ACCEPTED"
              ? stepNumber === currentStatusNumber + 1
                ? `bg-[${COLORS.STEP_DONE}] border-[${COLORS.STEP_DONE}] animate-bounce`
                : `bg-[${COLORS.STEP_DONE}] border-[${COLORS.STEP_DONE}]`
              : `bg-red-600 border-red-600`
            : "bg-transparent border-t-0 border-b-0"
        }`}
        style={{ animationDuration: "2500ms" }}
      ></div>
    )}
    {/* Step */}
    <button
      className={`w-12 h-12 rounded-full border relative align-middle ${
        stepNumber <= currentStatusNumber
          ? variant === "ACCEPTED"
            ? `bg-[${COLORS.STEP_DONE}] border-[${COLORS.STEP_DONE}]`
            : `bg-red-600 border-red-600`
          : "bg-transparent"
      }`}
    >
      {/* Done or failed icons */}
      {stepNumber <= currentStatusNumber &&
        (variant === "ACCEPTED" ? (
          <MdOutlineDone
            color={"#ffffff"}
            className="absolute text-lg font-extrabold md:text-2xl CENTER"
          />
        ) : (
          <MdOutlineClear
            color={"#ffffff"}
            className="absolute text-lg font-extrabold md:text-2xl CENTER"
          />
        ))}
    </button>
    {/* Step name */}
    <p className="mx-4 text-lg font-semibold text-white inline align-middle">
      {stepName}{" "}
      {stepNumber === currentStatusNumber && (
        <span className="text-sm">
          ({formatDate(new Date(order.updatedAt))})
        </span>
      )}
    </p>
  </li>
);

export default OrderStatusListItem;
