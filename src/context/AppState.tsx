"use client";
import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import AppContext from "./AppContext";
import { CartItemProps } from "@/props/CartItemProps";
import { getTotalDiscountLS } from "@/libs/GetTotalDisountLS";
import GetCartFromLS from "@/libs/GetCartFromLS";

const AppState = ({ children }: { children: React.ReactNode }) => {
  const [total, setTotal] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [cart, setCart] = useState<CartItemProps[]>([]);

  const appContextValue = { cart, setCart, total, discount };

  useEffect(() => {
    const { totalprice, discountedprice } = getTotalDiscountLS(cart);
    setTotal(totalprice);
    setDiscount(discountedprice);
  }, [cart]);

  useLayoutEffect(() => {
    const fetchCart = async () => {
      const cartFromLS = localStorage.getItem("cart");
      if (cartFromLS) {
        const parsedCart = JSON.parse(cartFromLS);

        if (parsedCart) {
          const { cartList } = await GetCartFromLS(parsedCart);
          setCart(cartList);
        }
      }
    };
    fetchCart();
  }, []);

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
