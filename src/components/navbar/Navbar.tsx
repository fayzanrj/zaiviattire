"use client";
import React, { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import Logo from "../Logo";
import Cart from "../cart/Cart";
import NavbarMenu from "./NavbarMenu";
import SearchMenu from "./SearchMenu";
import NavbarLinkProps from "@/props/NavbarLinkProps";
import { usePathname } from "next/navigation";
import COLORS from "@/constants/COLORS";

interface NavbarProps {
  navbarLinks: NavbarLinkProps[];
}

const NAVBAR_STYLE =
  "fixed top-0 z-30 flex items-center justify-between w-full p-2 overflow-x-hidden duration-500";
const BUTTON_STYLE = "h-10 mx-1.5";

const Navbar: React.FC<NavbarProps> = ({ navbarLinks }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [prevScrollpos, setPrevScrollpos] = useState<number>(0);
  const path = usePathname();

  useEffect(() => {
    // Function to hide scrollbar on scroll down
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const navbar = document.getElementById("navbar") as HTMLElement;

      if (navbar) {
        if (prevScrollpos > currentScrollPos || currentScrollPos === 0) {
          navbar.classList.remove("scrolled-up");
        } else {
          navbar.classList.add("scrolled-up");
        }
      }

      setPrevScrollpos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos]);

  // Function to open Navbar Menu and Search Menu
  const openModal = (
    setModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setModal(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <nav
        id="navbar"
        className={`${NAVBAR_STYLE} ${
          path === "/" ? "bg-transparent" : `bg-[${COLORS.BG_DARK}]`
        }`}
      >
        <Logo />

        <ul>
          {/* Search modal button */}
          <li className="inline-block align-middle">
            <button
              className={BUTTON_STYLE}
              onClick={() => openModal(setIsSearchOpen)}
              aria-label="Open Search"
            >
              <IoSearch size={"1.7rem"} color="#ffffff" />
            </button>
          </li>

          {/* Cart modal button */}
          <li className="inline-block align-middle">
            <button
              className={BUTTON_STYLE}
              onClick={() => openModal(setIsCartOpen)}
              aria-label="Open Cart"
            >
              <FiShoppingCart size={"1.75rem"} color="#ffffff" />
            </button>
          </li>

          {/* Menu modal button */}
          <li className="inline-block align-middle">
            <button
              className={BUTTON_STYLE}
              onClick={() => openModal(setIsMenuOpen)}
              aria-label="Open Menu"
            >
              <HiMenuAlt3 size={"1.9rem"} color="#ffffff" />
            </button>
          </li>
        </ul>
      </nav>
      {/* Navbar menu component */}
      <NavbarMenu
        navbarLinks={navbarLinks}
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
      />
      {/* Search Menu component */}
      <SearchMenu
        setIsSearchOpen={setIsSearchOpen}
        isSearchOpen={isSearchOpen}
      />
      {/* Cart component */}
      <Cart setIsCartOpen={setIsCartOpen} isCartOpen={isCartOpen} />
    </>
  );
};

export default Navbar;
