"use client"
import React from "react";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const router = useRouter();

  const handleSignin = () => {
    router.push("/signin");
  };
  const handleSignup = () => {
    router.push("/signup");
  };

  return (
    <nav className="w-full flex items-center justify-between px-4 sm:px-8 md:px-12 py-4">
      <h1 className="text-primary font-krona text-2xl sm:text-3xl font-bold">
        Noda
      </h1>
      <div className="flex items-center gap-3 sm:gap-4">
        <button
          className="
            px-4 sm:px-6 py-2
            text-primary
            border border-primary
            rounded-lg
            font-primary
            font-semibold
            hover:bg-primary hover:text-white
            transition-all
          "
         onClick={handleSignin}
        >
          Sign In
        </button>

        <button
          className="
            px-4 sm:px-6 py-2
            bg-primary
            text-white
            rounded-lg
            font-primary font-semibold
            transition-all
            hover:bg-white hover:text-primary border border-primary
          "
            onClick={handleSignup}
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
