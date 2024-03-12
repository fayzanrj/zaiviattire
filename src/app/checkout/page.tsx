import GoBack from "@/components/GoBack";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import React from "react";

const Checkout = () => {
  return (
    <div className="min-h-svh pt-16">
      <GoBack label="Home" href="/" />
      <CheckoutForm />
    </div>
  );
};

export default Checkout;
