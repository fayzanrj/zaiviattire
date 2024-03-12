import COLORS from "@/constants/COLORS";
import { FormDataProps } from "@/props/FormDataProps";
import React, { useState } from "react";

interface CheckoutInputFieldProps extends FormDataProps {
  label: string;
  type: "number" | "text" | "email";
  id: string;
}

const CheckoutInputField: React.FC<CheckoutInputFieldProps> = ({
  label,
  type,
  register,
  errors,
  id,
  watch,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <div className="relative w-full mx-auto mb-1 text-left">
      {/* Label */}
      <label
        className={`font-semibold absolute px-1 duration-300 ${
          isFocused || watch(id)
            ? `top-[1.2rem] left-2 text-xs bg-[${COLORS.BG_DARK}]`
            : "top-9 left-2 -z-10"
        } `}
        htmlFor={id}
      >
        {label}
      </label>
      <br />

      {/* Input field */}
      <input
        className="w-full p-2 mt-1 font-semibold text-white bg-transparent border rounded-md outline-none border-stone-400"
        type={type}
        id={id}
        {...register(id)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <br />
      <div className="mt-2 h-2">
        {/* Input error message */}
        {errors[id]?.message && (
          <p className="text-sm font-semibold text-red-400">
            {errors[id].message}
          </p>
        )}
      </div>
    </div>
  );
};

export default CheckoutInputField;
