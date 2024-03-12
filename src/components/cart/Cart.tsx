"use client";
import COLORS from "@/constants/COLORS";
import useAppContext from "@/hooks/useAppContext";
import { CartItemProps } from "@/props/CartItemProps";
import React, { useMemo, useEffect } from "react";
import CloseButton from "../CloseButton";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import CartButtonLayout from "./CartButtonLayout";

type CartProps = {
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isCartOpen: boolean;
};

const Cart: React.FC<CartProps> = ({ setIsCartOpen, isCartOpen }) => {
  const { cart, total, discount } = useAppContext();

  // Memoizing the closeCart function to prevent unnecessary re-renders.
  const closeCart = useMemo(
    () => () => {
      setIsCartOpen(false);
      document.body.style.overflowY = "auto";
    },
    [isCartOpen]
  );

  return (
    <div
      className={`w-screen h-dvh bg-[rgb(0,0,0,0.8)] bg-[${
        COLORS.BG_DARK
      }] fixed z-50 ${
        isCartOpen ? "translate-x-0 " : "translate-x-full delay-300"
      }`}
    >
      {/* Side div */}
      <aside
        className={`w-11/12 bg-neutral-900 text-white float-right py-4 sm:w-1/2 z-50 pb-20 overflow-y-auto md:w-96 h-dvh duration-300 relative ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Heading */}
        <header className="px-4 pb-4 border-b border-stone-400">
          <h2 className="text-2xl inline-block align-middle font-semibold">
            Your cart <span>({cart?.length || 0})</span>
          </h2>

          <div className="inline-block align-middle">
            {/* Close button */}
            <CloseButton closeMenu={closeCart} />
          </div>
        </header>

        {/* Cart Items */}
        <section className="overflow-y-auto SCROLL_BAR max-h-[90%]">
          {cart?.length > 0 ? (
            cart.map((cartItem: CartItemProps, index: number) => (
              <CartItem
                key={cartItem.productId + index}
                {...cartItem}
                componentVariant={"CART"}
              />
            ))
          ) : (
            <div className="h-[75svh] relative">
              <h3 className="CENTER text-2xl font-semibold text-center">
                There&#39;s no items in the cart
              </h3>
            </div>
          )}

          {/* Total */}
          {cart?.length > 0 && (
            <CartTotal total={total} discount={discount} variant="CART" />
          )}
        </section>

        {/* Checkout button */}
        <section className="fixed bottom-0 w-full h-20 p-1 px-6 text-center">
          {total === 0 ? (
            <CartButtonLayout href="/" closeCart={closeCart}>
              Continue shopping
            </CartButtonLayout>
          ) : (
            <>
              <p className="mb-1.5 text-xs">
                Taxes and shipping calculated at checkout
              </p>
              <CartButtonLayout href="/checkout" closeCart={closeCart}>
                Check out - PKR{" "}
                <span style={{ fontFamily: "sans-serif" }}>
                  {total - discount}
                </span>
              </CartButtonLayout>
            </>
          )}
        </section>
      </aside>
    </div>
  );
};

export default Cart;
