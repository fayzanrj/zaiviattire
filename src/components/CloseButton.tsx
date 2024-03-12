"use client";
import React from "react";
import { IoMdClose } from "react-icons/io";

type CloseButtonProps = {
  closeMenu: () => void;
};

const CloseButton: React.FC<CloseButtonProps> = ({ closeMenu }) => {
  return (
    <button
      className="absolute top-4 right-2"
      onClick={closeMenu}
      aria-label="close button"
    >
      <IoMdClose size={"2rem"} color="#ffffff" />
    </button>
  );
};

export default CloseButton;
