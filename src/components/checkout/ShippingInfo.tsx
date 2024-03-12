import React from "react";
import CheckoutInputField from "./CheckoutInputField";
import { FormDataProps } from "@/props/FormDataProps";

const ShippingInfo: React.FC<FormDataProps> = ({ register, errors, watch }) => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold md:hidden">Shipping information</h2>
      <CheckoutInputField
        label="Address"
        type="text"
        register={register}
        errors={errors}
        id="address"
        watch={watch}
      />

      <div className="grid grid-cols-2 gap-2">
        <CheckoutInputField
          label="City"
          type="text"
          register={register}
          errors={errors}
          id="city"
          watch={watch}
        />
        <CheckoutInputField
          label="Zip Code"
          type="number"
          register={register}
          errors={errors}
          id="zip"
          watch={watch}
        />
      </div>
    </div>
  );
};

export default ShippingInfo;
