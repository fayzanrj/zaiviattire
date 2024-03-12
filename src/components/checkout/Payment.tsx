import React from "react";

const Payment = () => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold md:hidden">Payment information</h2>
      <div className="text-left">
        <label className="mb-2 ml-1">Payment method</label>
        <br />
        <input
          type="checkbox"
          className="mt-4 align-middle checkbox"
          checked
          readOnly
        />
        <span className="inline-block mt-4 ml-2 text-lg align-middle">
          Cash on delivery (COD)
        </span>
      </div>

      <div className="mt-10 text-left">
        <label className="mb-2 ml-1">Delivery</label>
        <br />
        <input
          type="checkbox"
          className="mt-4 align-middle checkbox"
          checked
          readOnly
        />
        <span className="inline-block mt-4 ml-2 text-lg align-middle">
          Standard Delivery (PKR{" "}
          <span style={{ fontFamily: "sans-serif" }}>250</span>)
        </span>
      </div>
    </div>
  );
};

export default Payment;
