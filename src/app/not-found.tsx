"use client";
import NotFoundImage from "../../public/images/not_found.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="min-h-dvh py-16 text-center">
      <Image
        src={NotFoundImage}
        width={700}
        height={100}
        quality={100}
        alt="Not found Image"
        className="w-[30rem] h-[30rem] mx-auto"
      />
      <button
        className="py-1 px-4 border text-white rounded-lg"
        onClick={() => router.push("/")}
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFound;
