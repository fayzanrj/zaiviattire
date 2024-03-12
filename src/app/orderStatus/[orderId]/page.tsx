import GoBack from "@/components/GoBack";
import NoDataFound from "@/components/NoDataFound";
import ServerError from "@/components/ServerError";
import OrderStatusListItem from "@/components/orderStatus/OrderStatusListItem";
import fetchOrderStatus from "@/libs/FetchOrderStatus";
import formatDate from "@/libs/FormatDate";
import { OrderStatusProps } from "@/props/OrderStatusProps";
import Link from "next/link";
import React from "react";

interface PageProps {
  params: { orderId: string };
}

// All Status Steps
const STATUS_STEPS = [
  { stepNumber: 1, stepName: "Processing" },
  { stepNumber: 2, stepName: "Pending" },
  { stepNumber: 3, stepName: "Confirmed" },
  { stepNumber: 4, stepName: "Dispatched" },
  { stepNumber: 5, stepName: "Delivered" },
];

// Function to get current status number
const getStatusNumber = (status: OrderStatusProps) => {
  switch (status) {
    case "Processing":
      return 1;
    case "Pending":
      return 2;
    case "Confirmed":
      return 3;
    case "Dispatched":
      return 4;
    default:
      return 5;
  }
};

const OrderStatusDetails: React.FC<PageProps> = async ({ params }) => {
  // Fetching Order current status
  const order = await fetchOrderStatus(params.orderId);

  // If there's an server error
  if (order === undefined) {
    return <ServerError />;
  }

  // If no order found with provided order ID
  if (order === null) {
    return (
      <div className="min-h-dvh pt-16">
        <GoBack label="Check Order Status" href="/orderStatus" />
        <NoDataFound>
          <h3 className="text-2xl text-center font-semibold text-white">
            No order found for <br />
            <span className="text-3xl">OrderId#{params.orderId}</span>
          </h3>
          <Link href={"/orderStatus"} className=" my-14">
            <button className="py-1.5 px-4 font-semibold bg-white rounded-lg">
              CHECK ANOTHER ORDER
            </button>
          </Link>
        </NoDataFound>
      </div>
    );
  }

  // Getting current status number
  const currentStatusNumber = getStatusNumber(order.status);

  return (
    <div className="min-h-dvh py-16  text-center">
      {/* Go back button */}
      <GoBack label="Check Order Status" href="/orderStatus" />

      {/* Order ID Heading */}
      <div className="pt-10">
        <h1 className="text-3xl font-bold text-white">
          Order#{params.orderId}
        </h1>
      </div>

      {/* Order basic info */}
      <section className="text-center px-2 my-8 w-[95%] sm:w-[30rem] mx-auto">
        <table className="w-full text-white">
          <tbody>
            <TableItem label="Customer name" value={order.customerName} />

            <TableItem
              label="Placed on"
              value={formatDate(new Date(order.createdAt))}
            />
            <TableItem
              label="Last Updated on"
              value={formatDate(new Date(order.updatedAt))}
            />

            {order.cancelReason && (
              <TableItem
                label="Cancellation Reason"
                value={order.cancelReason}
              />
            )}
          </tbody>
        </table>
      </section>

      {/* Order Status */}
      <section className="text-center my-8 w-[95%] sm:w-[30rem] mx-auto px-2">
        <h2 className="text-left font-semibold text-2xl text-white my-4">
          Order Status
        </h2>
        {order.status === "Cancelled" ? (
          // If order is cancelled
          <ul>
            <OrderStatusListItem
              currentStatusNumber={2}
              stepNumber={1}
              stepName="Processing"
              order={order}
              variant="ACCEPTED"
            />
            <OrderStatusListItem
              currentStatusNumber={2}
              stepNumber={2}
              stepName="Cancelled"
              order={order}
              variant="CANCELLED"
            />
          </ul>
        ) : (
          <ul className="mx-auto my-8 w-[95%] sm:w-[30rem] ">
            {STATUS_STEPS.map((step) => (
              <OrderStatusListItem
                key={step.stepNumber}
                stepNumber={step.stepNumber}
                stepName={step.stepName}
                currentStatusNumber={currentStatusNumber}
                order={order}
                variant="ACCEPTED"
              />
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default OrderStatusDetails;

// Table Item component
const TableItem: React.FC<{ label: string; value: string }> = ({
  value,
  label,
}) => (
  <tr>
    <th className="w-1/2 text-left align-top py-2">{label}</th>
    <td className="font-sans break-words text-left py-2">{value}</td>
  </tr>
);
