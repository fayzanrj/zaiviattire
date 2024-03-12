"use client";
import React, { useState } from "react";
import CloseButton from "../CloseButton";
import { IoSearch } from "react-icons/io5";
import Logo from "../Logo";
import SearchBar from "../SearchBar";

type SearchMenuProps = {
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSearchOpen: boolean;
};

const SearchMenu: React.FC<SearchMenuProps> = ({
  isSearchOpen,
  setIsSearchOpen,
}) => {
  // Function to close search menu
  const closeMenu = () => {
    setIsSearchOpen(false);
    document.body.style.overflowY = "auto";
  };

  return (
    <div
      id="searchMenu"
      className={`w-screen h-dvh p-4 bg-[#121212]  fixed z-50 duration-1000 ${
        isSearchOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo */}
      <div className="absolute top-2 left-2" onClick={closeMenu}>
        <Logo />
      </div>

      {/* Search bar */}
      <div className="w-96 relative CENTER">
        <SearchBar variant="SEARCH_MENU" closeMenu={closeMenu} />
      </div>

      {/* Menu close button */}
      <CloseButton closeMenu={closeMenu} />
    </div>
  );
};

export default SearchMenu;
