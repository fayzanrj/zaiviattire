import Link from "next/link";
import React from "react";

interface CartButtonLayoutProps {
  children: React.ReactNode;
  href: string;
  closeCart: () => void;
}

const CartButtonLayout: React.FC<CartButtonLayoutProps> = ({
  children,
  href,
  closeCart,
}) => {
  return (
    <Link href={href} onClick={closeCart}>
      <button className="w-full px-6 py-2 bg-white rounded-lg">
        <p className="text-xl font-bold text-black">{children}</p>
      </button>
    </Link>
  );
};

export default CartButtonLayout;
