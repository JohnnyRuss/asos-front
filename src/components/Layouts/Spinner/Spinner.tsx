import React from "react";

import "./spinner.css";

const Spinner: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0">
      <div className="spinner__box w-12 h-12 bg-app-gray-shade mx-auto mt-16 rounded-full">
        <figure className="w-full h-full rounded-[inherit] flex justify-center items-center overflow-hidden">
          <img
            src="/assets/logo/logo-small.webp"
            alt="asos ASOS"
            className="object-contain w-full h-full"
          />
        </figure>
      </div>
    </div>
  );
};

export default Spinner;
