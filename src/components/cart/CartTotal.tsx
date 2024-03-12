import { DM_Sans } from "next/font/google";
import React from "react";

const dmSerif = DM_Sans({ subsets: ["latin"], weight: "600" });

type CartTotalProps = {
  variant: "CART" | "CHECKOUT";
  total: number;
  discount: number;
};

const CartTotal: React.FC<CartTotalProps> = ({ total, discount, variant }) => {
  return (
    <div className={`w-full md:w-96 lg:w-full lg:max-w-[30rem] px-10`}>
      <table className="w-full my-2">
        <tbody>
          <tr>
            <td className="w-1/2 py-1 font-semibold text-left">Sub Total</td>
            <td className="w-1/2 py-1 text-right">
              PKR <span className={dmSerif.className}>{total}</span>
            </td>
          </tr>
          <tr>
            <td className="w-1/2 py-1 font-semibold text-left">Discount</td>
            <td className="w-1/2 py-1 text-right">
              - PKR{" "}
              <span className={dmSerif.className}>
                {discount === 0 ? "0.00" : discount}
              </span>
            </td>
          </tr>
          {variant === "CHECKOUT" && (
            <tr>
              <td className="w-1/2 py-1 font-semibold text-left">
                Delivery charges
              </td>
              <td className="w-1/2 py-1 text-right">
                PKR <span className={dmSerif.className}>250</span>
              </td>
            </tr>
          )}
          <tr>
            <td className="w-1/2 py-1 text-lg font-semibold text-left">
              Total
            </td>
            <td className="w-1/2 py-1 text-right">
              PKR{" "}
              <span className={`${dmSerif.className} text-lg`}>
                {variant === "CHECKOUT"
                  ? total - discount + 250
                  : total - discount}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartTotal;
