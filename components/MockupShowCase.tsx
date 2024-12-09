import React from "react";
import Mockup from "../public/assets/ShoopinMockup.png";
import Image from "next/image";
const MockupShowCase = () => {
  return (
    <div className=" max-h-max flex justify-center relative align-top items-start">
      <div className=" flex justify-center align-bottom items-center bg-red-800">
        <Image src={Mockup} alt="" />
      </div>
    </div>
  );
};

export default MockupShowCase;
