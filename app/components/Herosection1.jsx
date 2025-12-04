
import Image from "next/image";

import React from "react";
import Link from "next/link";
const HeroSection1 = () => {

  return (
    <section className="w-full">
      <div
        className="
        flex flex-col-reverse md:flex-row
        items-center justify-between
        sm:px-8 md:px-12 
        py-10 sm:py-14 md:py-20
        gap-10
      "
      >
        
        <div className="w-full md:w-1/2">
          <div className="space-y-6">

            
            <div
              className="
              font-krona tracking-tight
              text-[36px] sm:text-[44px] md:text-[50px]
              leading-[1.2]
            "
            >
             
              <div className="text-secondary">Make Meetings</div>

              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                <span className="text-secondary">More</span>
                <span className="text-primary">Efficient and</span>
              </div>

              <div className="text-primary">Effective</div>
            </div>

            
            <div
              className="
              text-secondary font-primary
              text-[16px] sm:text-[18px] md:text-[20px]
              leading-[26px] sm:leading-[30px] md:leading-[35px]
            "
            >
              <h5>Noda helps digital product teams improve the way</h5>
              <h5>they meet by encouraging productive meeting</h5>
              <h5>behaviors and adding structure to meeting facilitation</h5>
            </div>
          </div>

         <Link href="/signup">
         
          <button

            className="
            mt-6
            px-6 sm:px-8 py-3
            bg-primary text-white
            text-lg rounded-lg
            font-primary font-semibold
            hover:opacity-90 transition
            cursor-pointer
          "
        
          >
            Sign Up
          </button>
          </Link>
         
        </div>

        
        <div className="hidden md:flex w-full md:w-1/2 justify-end">
          <Image
            src="/desktop.png"
            alt="Laptop preview"
            width={990}
            height={761}
            className="
              object-contain
              w-full
              max-w-[480px] sm:max-w-[520px] lg:max-w-[650px]
              lg:translate-x-4
            "
          />
        </div>
      </div>

     
      <div className="flex justify-center py-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-primary text-primary">
          How it works
        </h2>
      </div>
    </section>
  );
};

export default HeroSection1;
