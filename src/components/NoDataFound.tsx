"use client";
import Image from "next/image";
import React from "react";
import NoDataImage from "../../public/images/no-data.png";

interface NoDataProps {
  children: React.ReactNode;
}

const NoDataFound: React.FC<NoDataProps> = ({ children }) => {
  return (
    <section className="flex items-center flex-col">
      <Image
        src={NoDataImage}
        width={800}
        height={100}
        quality={100}
        alt="No-data-image"
        className="w-96 h-96"
      />
      {children}
    </section>
  );
};

export default NoDataFound;
