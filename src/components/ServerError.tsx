"use client";
import Image from "next/image";
import ErrorImage from "../../public/images/server-error.png";

const ServerError = () => {
  return (
    <div className="min-h-dvh w-full flex justify-center items-center flex-col">
      <Image
        src={ErrorImage}
        width={700}
        height={700}
        alt="error"
        className="w-96 h-96 overflow-hidden"
      />
      <div className="my-4 w-full text-center">
        <button
          className=" py-1 px-4 border text-white rounded-lg"
          onClick={() => location.reload()}
        >
          REFRESH PAGE
        </button>
      </div>
    </div>
  );
};

export default ServerError;
