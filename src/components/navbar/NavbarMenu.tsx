import COLORS from "@/constants/COLORS";
import { NAV_LINKS } from "@/constants/NAV_LINKS";
import NavbarLinkProps from "@/props/NavbarLinkProps";
import React from "react";
import CloseButton from "../CloseButton";
import Logo from "../Logo";
import NavbarMenuListItemProps from "./NavbarMenuListItem";

type NavbarMenuProps = {
  navbarLinks: NavbarLinkProps[];
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuOpen: boolean;
};

const NavbarMenu: React.FC<NavbarMenuProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  navbarLinks,
}) => {
  // Function to close menu
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflowY = "auto";
  };

  return (
    <div
      className={`w-screen h-dvh p-4 bg-[${
        COLORS.BG_DARK
      }] fixed z-50 duration-1000 ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Logo */}
      <div className="absolute top-2 left-2" onClick={closeMenu}>
        <Logo />
      </div>

      {/* Menu */}
      <ul className="w-full text-center md:w-96 CENTER">
        {navbarLinks.map((nav) => (
          <NavbarMenuListItemProps
            key={nav.id}
            isCategory
            navbarLink={nav}
            closeMenu={closeMenu}
          />
        ))}
        {NAV_LINKS.map((nav) => (
          <NavbarMenuListItemProps
            key={nav.id}
            isCategory={false}
            navbarLink={nav}
            closeMenu={closeMenu}
          />
        ))}
      </ul>

      {/* Close button */}
      <CloseButton closeMenu={closeMenu} />
    </div>
  );
};

export default NavbarMenu;
