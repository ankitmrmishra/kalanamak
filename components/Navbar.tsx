"use client";
import React, { useState } from "react";
import { Bricolage_Grotesque, Mukta } from "next/font/google";
import { Menu, Wheat, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";
import { useRouter } from "next/navigation";

const mukta = Mukta({ weight: ["600"], subsets: ["devanagari"] });
const PoppinsFont = Bricolage_Grotesque({
  subsets: ["latin-ext"],
  weight: ["600"],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleOnClick = () => {
    console.log("Clicked menu icon");
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#fef3e9] z-50 fixed border-b-2 top-0 ">
      {/* Desktop Navbar */}
      <div
        className={`p-5 hidden md:flex justify-between items-center align-middle ${PoppinsFont.className} fixed border-b-2 w-full bg-[#fef3e9]  md:px-20 backdrop-blur-lg`}
      >
        <div
          className={`logo ${mukta.className} text-[#026147] flex justify-center items-center align-middle text-3xl gap-2 text-center`}
        >
          <span className="bg-[#026147] rounded-full text-[#fef3e9] p-2">
            <Wheat />
          </span>
          कालानमक
        </div>
        <div className="navitems flex justify-between items-center align-middle gap-5 text-[#026147]">
          <div className="hover:text-[#8B5A2B] hover:cursor-pointer">Story</div>
          <div className="hover:text-[#8B5A2B] hover:cursor-pointer">
            Products
          </div>
          <div className="hover:text-[#8B5A2B] hover:cursor-pointer">
            Services
          </div>
          <div className="hover:text-[#8B5A2B] hover:cursor-pointer">
            Subscription
          </div>
          <div className="hover:text-[#8B5A2B] hover:cursor-pointer">Blog</div>
        </div>
        <div className="contactus flex gap-5 justify-between align-middle items-center">
          <Button
            variant={"link"}
            className="rounded-full bg-transparent text-[#026147] text-xl py-7 px-10"
          >
            Contact Us
          </Button>
          <div className="flex gap-2">
            <Button
              onClick={() => router.push("/login")}
              className=" bg-[#026147] text-xl py-4 px-5 hover:bg-[#8B5A2B]"
            >
              Login
            </Button>
            <Button
              onClick={() => router.push("/signup")}
              className=" bg-[#026147] text-xl py-4 px-5 hover:bg-[#8B5A2B]"
            >
              Signup
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navbar Header */}
      <div className="flex justify-between items-center align-middle p-3 fixed w-full md:hidden border-b-2 bg-[#fef3e9]">
        <div
          className={`logo ${mukta.className} text-[#026147] flex justify-center items-center align-middle text-3xl gap-2 text-center`}
        >
          <span className="bg-[#026147] rounded-full text-[#fef3e9] p-2">
            <Wheat />
          </span>
          कालानमक
        </div>
        <div
          onClick={handleOnClick}
          className="shadow-lg rounded-full p-1 z-50"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </div>
      </div>

      {/* Mobile Navbar Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="dropdown"
            initial={{ y: "100%" }}
            animate={{ y: 200 }}
            exit={{ y: "150%" }}
            transition={{
              duration: 0.5, // Smooth transition for both open and close
              ease: "easeInOut",
            }}
            className="md:hidden fixed p-8 inset-y-0 right-0 h-full w-full bg-[#026147] text-[#fef3e9] rounded-t-2xl"
          >
            <div className="flex flex-col justify-start gap-6 items-center h-full space-y-4 p-4">
              <div className="hover:text-[#8B5A2B] hover:cursor-pointer">
                Story
              </div>
              <div className="hover:text-[#8B5A2B] hover:cursor-pointer">
                Products
              </div>
              <div className="hover:text-[#8B5A2B] hover:cursor-pointer">
                Services
              </div>
              <div className="hover:text-[#8B5A2B] hover:cursor-pointer">
                Subscription
              </div>
              <div className="hover:text-[#8B5A2B] hover:cursor-pointer">
                Blog
              </div>
              <div className="rounded-full bg-[#026147]">Contact Us</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
