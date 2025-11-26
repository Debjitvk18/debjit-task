import React from "react";
import Image from "next/image";

const PiggyBank = () => {
  return (
    <div className="w-full py-24 flex justify-center">
      <div className="flex gap-20">
        <div className="relative w-[450px] h-[500px]">
          <Image
            src="/othermango.png"
            alt="Background"
            width={600}
            height={600}
            className="absolute top-0 left-0 z-0"
          />
          <div className="absolute top-[60px] left-[20px] z-20">
            <h2 className="font-primary text-primary text-[40px] leading-[55px]">
              Start your
            </h2>
             
             <div className="flex gap-1.5">
               <h2 className="font-primary text-primary text-[40px] font-bold leading-[55px]">
              free plan
            </h2>

            <h2 className="font-primary text-primary text-[40px] leading-[55px]">
              now
            </h2>
             </div>
            
          </div>
          <Image
            src="/pig.png"
            alt="Pig"
            width={250}
            height={250}
            className="absolute bottom-[-20px] left-[50px] z-30"
          />
        </div>
        <div className="flex gap-10">
          <div className="w-[330px] bg-primary text-white rounded-2xl p-8 shadow-lg font-primary">
            <h3 className="text-white text-[22px] font-semibold mb-2">PRO</h3>

            <p className="text-[45px] font-bold">$20
              <span className="text-[16px] font-normal"> / month</span>
            </p>

            <ul className="mt-6 space-y-3 text-[16px] leading-[24px]">
              <li>
               
                 ✔ Unlimited access for all your needs</li>
              <li>
               
                 ✔ Unlimited meetings</li>
              <li>
                
                ✔ Unlimited templates</li>
              <li>
                
               ✔ ...and access to other premium features</li>
            </ul>

            <button className="mt-8 w-full bg-white text-primary font-semibold py-3 rounded-lg shadow">
              Start Now
            </button>
          </div>
          <div className="w-[330px] bg-white rounded-2xl p-8 shadow-[0_4px_40px_rgba(0,0,0,0.1)] font-primary">
            <h3 className="text-primary text-[22px] font-semibold ">Free</h3>

            <p className="text-primary text-[45px] font-bold">$0
              <span className="text-[16px] font-normal"> / month</span>
            </p>

            <ul className="mt-6 space-y-3 text-[16px] leading-[24px] text-primary">
              <li>✔ No credit card required</li>
              <li>✔ Up to 10 meetings</li>
            </ul>
            <div className="mt-28   ">
               <button className="mt-8 w-full bg-primary text-white font-semibold py-3 rounded-lg shadow ">
              Start Now
            </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default PiggyBank;
