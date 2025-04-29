"use client";
import React, { useState } from "react";
import { Mukta } from "next/font/google";
import { SeparatorHorizontal, Wheat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const mukta = Mukta({ weight: ["600"], subsets: ["devanagari"] });
// const PoppinsFont = Bricolage_Grotesque({
//   subsets: ["latin-ext"],
//   weight: ["600"],
// });

interface loginform {
  email: string;
  password: string;
}

export default function Page() {
  const [formState, setformState] = useState<loginform>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const loadingToast = toast("logging in...", { duration: Infinity });

    try {
      const response = await fetch(
        "http://kalanamak.vercel.app/api/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formState),
        }
      );

      const result = await response.json();

      if (response.ok) {
        toast.dismiss(loadingToast);
        const successtoast = toast.success("Logged in successfully!");
        toast.dismiss(successtoast);
        toast.info("Redirecting...");
        router.push("/");
      } else {
        toast.dismiss(loadingToast);
        toast.error("Error Logging in", {
          description: result.error || "Unknown error occurred",
        });
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Error occurred while Logging in");
      console.log(error);
    } finally {
      setLoading(false); // End loading
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setformState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <div className=" flex w-full   justify-center align-middle  items-center h-full  min-h-screen bg-red-900">
      <div className="logincomponent bg-[#026147]/25 w-[25rem]  md:min-w-[30rem] md:mt-1 rounded-lg  px-10  flex flex-col justify-between align-middle border border-[#026147] py-10 backdrop-blur-3xl shadow-2xl ">
        <div className="logo flex flex-col ">
          <div
            className={`logo ${mukta.className} text-[#026147] flex justify-center items-center align-middle text-3xl gap-2 text-center`}
          >
            <span className="bg-[#026147] rounded-full text-[#fef3e9] p-2">
              <Wheat />
            </span>
            कालानमक
          </div>
          <span className="text-2xl text-black py-5 font-semibold text-center w-full ">
            Welcome Back <br /> Login to KalaNamak app
          </span>
        </div>
        <div className="form">
          <form action="" method="post" className=" flex flex-col  py-4 gap-5">
            <div className="">
              <span className="text-black">Email</span>
              <input
                onChange={handleChange}
                required
                type="email"
                name="email"
                id=""
                placeholder="example@gmail.com"
                className=" w-full rounded-lg h-10 placeholder-white/60 text-black px-2  bg-[#0261482d] border border-[#026147] "
              />
            </div>
            <div className="">
              <span className="text-black">Password</span>
              <input
                onChange={handleChange}
                required
                type="password"
                name="password"
                id=""
                placeholder="************"
                className=" w-full rounded-lg h-10 placeholder-white/60 text-black px-2  bg-[#0261482d] border border-[#026147] "
              />
            </div>
          </form>
        </div>
        <Button
          onClick={handleSubmit}
          className=" bg-[#026147] w-full text-xl py-4 px-5 hover:bg-[#8B5A2B]"
        >
          {loading ? "Logging in..." : "LogIn"}
        </Button>
        <Separator className="my-4 bg-black" />
        <div className="text-sm">
          <span>
            Or
            <Link href={"/signup"} className="px-1 underline text-[#8B5A2B]">
              Create a New Account
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
