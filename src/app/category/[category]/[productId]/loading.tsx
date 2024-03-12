import React from "react";

const Loader = () => {
  return (
    <div className="relative w-screen min-h-dvh">
      <div className="CENTER">
        <svg className="loaderSvg" viewBox="25 25 50 50">
          <circle className="circle" r="20" cy="50" cx="50"></circle>
        </svg>
      </div>
    </div>
  );
};

export default Loader;
