import GoBack from "@/components/GoBack";
import OrderStatusForm from "@/components/orderStatus/OrderStatusForm";

const OrderStatus = () => {
  return (
    <div className="min-h-svh pt-16">
      {/* Go back button */}
      <GoBack label="Home" href="/" />

      <div className="w-fit mx-auto">
        {/* Heading */}
        <h1 className="text-white text-4xl font-semibold my-20">
          Check order status
        </h1>

        <OrderStatusForm />
      </div>
    </div>
  );
};

export default OrderStatus;
