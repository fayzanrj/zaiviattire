"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";

interface GoBackProps {
  label: string;
  href: string;
}

const GoBack: React.FC<GoBackProps> = ({ label, href }) => {
  const router = useRouter();
  return (
    <div className="mx-2 md:mx-20 text-left">
      <Link href={href}>
        <button className="text-white text-lg" onClick={() => router.back()}>
          <IoIosArrowBack
            className="inline-block align-middle"
            size={"1.4rem"}
          />
          <p className="inline-block align-middle mx-1">{label}</p>
        </button>
      </Link>
    </div>
  );
};

export default GoBack;
