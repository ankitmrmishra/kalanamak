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
    <div className="md:mt-10 px-2 flex w-full   md:py-10 justify-center align-middle items-center md:items-start  ">
      <div className="logincomponent bg-[#000000] w-[25rem]  md:min-w-[30rem] md:mt-1 rounded-lg py-3 px-10  flex flex-col justify-between align-middle border border-[#026147] ">
        <div className="logo flex flex-col justify-center align-middle items-center ">
          <div
            className={`logo ${mukta.className} text-[#fef3e9] flex justify-center items-center align-middle text-3xl gap-2 text-center`}
          >
            <span className="bg-[#026147] rounded-full text-[#fef3e9] p-2">
              <Wheat />
            </span>
            कालानमक
          </div>
          <span className="text-2xl text-white py-2 font-semibold text-center  md:w-96">
            Join KalaNamak to get the best Kalanamak rice at your doorstep.
          </span>
        </div>
        <div className="form ">
          <form action="" method="post" className=" flex flex-col  py-4 gap-5">
            <div className="email">
              <span className="text-white">Email</span>
              <input
                type="email"
                name=""
                id=""
                placeholder="example@gmail.com"
                className=" w-full rounded-lg h-10 placeholder-white/60 text-white px-2  bg-[#0261482d] border border-[#026147] "
              />
            </div>
            <div className="name flex gap-3 md:flex-row flex-col">
              <div className="w-full">
                <span className="text-white">First Name</span>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Yash"
                  className=" w-full rounded-lg h-10 placeholder-white/60 text-white px-2  bg-[#0261482d] border border-[#026147] "
                />
              </div>
              <div className="w-full">
                <span className="text-white">Last Name</span>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Tripathi"
                  className=" w-full rounded-lg h-10 placeholder-white/60 text-white px-2  bg-[#0261482d] border border-[#026147] "
                />
              </div>
            </div>
            <div className="password">
              <span className="text-white">Password</span>
              <input
                type="password"
                name=""
                id=""
                placeholder="************"
                className=" w-full rounded-lg h-10 placeholder-white/60 text-white px-2  bg-[#0261482d] border border-[#026147] "
              />
            </div>
            <div className="password">
              <span className="text-white">Confirm Password</span>
              <input
                type="password"
                name=""
                id=""
                placeholder="************"
                className=" w-full rounded-lg h-10 placeholder-white/60 text-white px-2  bg-[#0261482d] border border-[#026147] "
              />
            </div>

            {/* <div className="">
              <span className="text-white">Address</span>
              <input
                type="text"
                name=""
                id=""
                placeholder="e.g. H.No. 232/A Vihar Colony"
                className=" w-full rounded-lg h-10 placeholder-white/60 text-white px-2  bg-[#0261482d] border border-[#026147] "
              />
            </div> */}
            {/* <div className="name flex gap-3 md:flex-row flex-col w-full ">
              <div className="w-full">
                <span className="text-white">City</span>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="e.g. Siddharth Nagar"
                  className=" w-full rounded-lg h-10 placeholder-white/60 text-white px-2  bg-[#0261482d] border border-[#026147] "
                />
              </div>
              <div className="w-full">
                <span className="text-white">State</span>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="e.g. Uttar Pradesh"
                  className=" w-full rounded-lg h-10 placeholder-white/60 text-white px-2  bg-[#0261482d] border border-[#026147] "
                />
              </div>
            </div> */}
            {/* <div className="name flex gap-3 md:flex-row flex-col">
              <div className="">
                <span className="text-white">Pin Code</span>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="e.g. 272207"
                  className=" w-full rounded-lg h-10 placeholder-white/60 text-white px-2  bg-[#0261482d] border border-[#026147] "
                />
              </div>
              <div className="">
                <span className="text-white">Phone Number</span>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="e.g. (+91)8945632589"
                  className=" w-full rounded-lg h-10 placeholder-white/60 text-white px-2  bg-[#0261482d] border border-[#026147] "
                />
              </div>
            </div> */}
          </form>
        </div>
        <Button className=" bg-[#026147] w-full text-xl py-4 px-5 hover:bg-[#8B5A2B]">
          SignUp
        </Button>
      </div>
    </div>
  );
};

export default page;
