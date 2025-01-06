"use client";
import { useEmailVerificationStore } from "@/store/verification-store";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { toast } from "sonner";

const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { email, tokenType } = useEmailVerificationStore();

  // Add this to debug the store values
  useEffect(() => {
    console.log("Current email:", email);
    console.log("Current token:", tokenType);
  }, [email, tokenType]);

  const handleClick = async () => {
    console.log("clicked");

    if (!email || !tokenType) {
      toast.error("Missing verification credentials", {
        description: "Email or verification token is missing",
      });
      return;
    }

    setLoading(true);
    const loadingToast = toast("Verifying your email...", {
      duration: Infinity,
    });

    try {
      // Encode the URL parameters to handle special characters
      const encodedEmail = encodeURIComponent(email);
      const encodedToken = encodeURIComponent(tokenType);

      const response = await fetch(
        `http://localhost:3000/api/auth/verify?token=${encodedToken}&email=${encodedEmail}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.json();

      if (response.ok) {
        toast.dismiss(loadingToast);
        toast.success("Account verified successfully!");

        // Add a small delay before redirecting
        setTimeout(() => {
          router.push("/");
        }, 1500);
      } else {
        toast.dismiss(loadingToast);
        toast.error("Verification failed", {
          description: result.error || "Unknown error occurred",
        });
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      console.error("Verification error:", error);
      toast.error("Error occurred while verifying");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">Verify Your Email</h1>
      <button
        onClick={handleClick}
        className={`
          px-6 py-3 rounded-lg text-white font-medium
          ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700 transition-colors"
          }
        `}
      >
        {loading ? "Verifying..." : "Verify Email"}
      </button>
    </div>
  );
};

export default Page;
