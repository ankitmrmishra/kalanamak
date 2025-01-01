"use client";
import React, { useState } from "react";
import { Mukta } from "next/font/google";
import { Wheat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const mukta = Mukta({ weight: ["600"], subsets: ["devanagari"] });

interface Formprops {
  email: string;
  password: string;
  Firstname: string;
  Lastname: string;
}

const Page = () => {
  const [formstate, setformstate] = useState<Formprops>({
    email: "",
    password: "",
    Firstname: "",
    Lastname: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Start loading

    const loadingToast = toast("Signing up...", { duration: Infinity });

    try {
      const response = await fetch("http://localhost:3000/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formstate),
      });

      const result = await response.json();

      if (response.ok) {
        toast.dismiss(loadingToast);
        toast.success("Signed up successfully!");
      } else {
        toast.dismiss(loadingToast);
        toast.error("Error signing up", {
          description: result.error || "Unknown error occurred",
        });
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Error occurred while signing up");
      console.log(error);
    } finally {
      setLoading(false); // End loading
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setformstate({ ...formstate, [e.target.name]: e.target.value });
  };

  return (
    <div className="md:mt-10 px-2 flex w-full md:py-10 justify-center align-middle items-center md:items-start">
      <div className="logincomponent bg-[#000000] w-[25rem] md:min-w-[30rem] md:mt-1 rounded-lg py-3 px-10 flex flex-col justify-between align-middle border border-[#026147]">
        <div className="logo flex flex-col justify-center align-middle items-center">
          <div
            className={`logo ${mukta.className} text-[#fef3e9] flex justify-center items-center align-middle text-3xl gap-2 text-center`}
          >
            <span className="bg-[#026147] rounded-full text-[#fef3e9] p-2">
              <Wheat />
            </span>
            कालानमक
          </div>
          <span className="text-2xl text-white py-2 font-semibold text-center md:w-96">
            Join KalaNamak to get the best Kalanamak rice at your doorstep.
          </span>
        </div>
        <div className="form">
          <form action="" method="post" className="flex flex-col py-4 gap-5">
            <div className="email">
              <span className="text-white">Email</span>
              <input
                onChange={handleChange}
                required
                type="email"
                name="email"
                placeholder="example@gmail.com"
                className="w-full rounded-lg h-10 placeholder-white/60 text-white px-2 bg-[#0261482d] border border-[#026147]"
              />
            </div>
            <div className="name flex gap-3 md:flex-row flex-col">
              <div className="w-full">
                <span className="text-white">First Name</span>
                <input
                  onChange={handleChange}
                  required
                  type="text"
                  name="Firstname"
                  placeholder="Yash"
                  className="w-full rounded-lg h-10 placeholder-white/60 text-white px-2 bg-[#0261482d] border border-[#026147]"
                />
              </div>
              <div className="w-full">
                <span className="text-white">Last Name</span>
                <input
                  onChange={handleChange}
                  required
                  type="text"
                  name="Lastname"
                  placeholder="Tripathi"
                  className="w-full rounded-lg h-10 placeholder-white/60 text-white px-2 bg-[#0261482d] border border-[#026147]"
                />
              </div>
            </div>
            <div className="password">
              <span className="text-white">Password</span>
              <input
                onChange={handleChange}
                required
                type="password"
                name="password"
                placeholder="************"
                className="w-full rounded-lg h-10 placeholder-white/60 text-white px-2 bg-[#0261482d] border border-[#026147]"
              />
            </div>
          </form>
        </div>
        <Button
          onClick={handleSubmit}
          disabled={loading}
          className={`w-full text-xl py-4 px-5 ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-[#026147] hover:bg-[#8B5A2B]"
          }`}
        >
          {loading ? "Signing Up..." : "SignUp"}
        </Button>
      </div>
    </div>
  );
};

export default Page;