"use client";
import NavbarLinkProps from "@/props/NavbarLinkProps";
import Link from "next/link";

interface NavbarMenuListItemProps {
  navbarLink: NavbarLinkProps;
  isCategory: boolean;
  closeMenu: () => void;
}

const NavbarMenuListItem: React.FC<NavbarMenuListItemProps> = ({
  navbarLink,
  closeMenu,
  isCategory,
}) => (
  <li
    onClick={closeMenu}
    className="m-6 text-2xl font-bold text-white md:text-3xl"
  >
    <Link href={isCategory ? `/category/${navbarLink.href}` : navbarLink.href}>
      {navbarLink.displayName}
    </Link>
  </li>
);

export default NavbarMenuListItem;
