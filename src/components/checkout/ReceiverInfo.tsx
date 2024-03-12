import React, { useState } from "react";
import CheckoutInputField from "./CheckoutInputField";
import { FormDataProps } from "@/props/FormDataProps";

const ReceiverInfo: React.FC<FormDataProps> = ({ register, errors, watch }) => {
  return (
    <>
      <h2 className="text-2xl font-semibold md:hidden">Receiver information</h2>
      <div className="grid grid-cols-2 gap-2">
        <CheckoutInputField
          label="First Name"
          type="text"
          register={register}
          errors={errors}
          watch={watch}
          id="firstName"
        />
        <CheckoutInputField
          label="Last Name"
          type="text"
          register={register}
          watch={watch}
          errors={errors}
          id="lastName"
        />
      </div>
      <CheckoutInputField
        label="Email address"
        type="email"
        register={register}
        errors={errors}
        watch={watch}
        id="email"
      />
      <CheckoutInputField
        label="Phone number"
        type="number"
        register={register}
        errors={errors}
        watch={watch}
        id="phoneNumber"
      />
    </>
  );
};

export default ReceiverInfo;
