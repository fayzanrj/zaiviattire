import Image from "next/image";
import React from "react";
import LogoWhite from "../../public/logo/logo_white.png";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={LogoWhite} width={120} height={120} alt="logo" />
    </Link>
  );
};

export default Logo;
