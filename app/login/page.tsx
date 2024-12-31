"use client";
import React from "react";
import { Mukta } from "next/font/google";
import { Wheat } from "lucide-react";
import { Button } from "@/components/ui/button";

const mukta = Mukta({ weight: ["600"], subsets: ["devanagari"] });
// const PoppinsFont = Bricolage_Grotesque({
//   subsets: ["latin-ext"],
//   weight: ["600"],
// });

const page = () => {
  return (
    <div className="md:mt-10 h-[90vh] flex w-full  bg-black md:py-10 justify-center align-middle items-center  ">
      <div className="logincomponent bg-[#000000] w-[25rem]  md:min-w-[30rem] md:mt-1 rounded-lg  px-10  flex flex-col justify-between align-middle border border-[#026147] py-44 ">
        <div className="logo flex flex-col ">
          <div
            className={`logo ${mukta.className} text-[#026147] flex justify-center items-center align-middle text-3xl gap-2 text-center`}
          >
            <span className="bg-[#026147] rounded-full text-[#fef3e9] p-2">
              <Wheat />
            </span>
            कालानमक
          </div>
          <span className="text-2xl text-white py-5 font-semibold text-center w-full ">
            Welcome Back <br /> Login to KalaNamak app
          </span>
        </div>
        <div className="form">
          <form action="" method="post" className=" flex flex-col  py-4 gap-5">
            <div className="">
              <span className="text-white">Email</span>
              <input
                type="email"
                name=""
                id=""
                placeholder="example@gmail.com"
                className=" w-full rounded-lg h-10 placeholder-white/60 text-white px-2  bg-[#0261482d] border border-[#026147] "
              />
            </div>
            <div className="">
              <span className="text-white">Password</span>
              <input
                type="email"
                name=""
                id=""
                placeholder="************"
                className=" w-full rounded-lg h-10 placeholder-white/60 text-white px-2  bg-[#0261482d] border border-[#026147] "
              />
            </div>
          </form>
        </div>
        <Button className=" bg-[#026147] w-full text-xl py-4 px-5 hover:bg-[#8B5A2B]">
          Login
        </Button>
      </div>
    </div>
  );
};

export default page;
