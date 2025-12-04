import React from "react";
import Image from "next/image";

const PiggyBank = () => {
  return (
    <section className="w-full py-16 sm:py-24 flex justify-center px-10 ml-20 max-sm:ml-0 sm:px-8 md:flex-col">
      <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-start  ">
        
      
        <div className="relative -translate-x-50 md:flex md:flex-col md:justify-center md:items-center w-full[300px] sm:w-[380px]  lg:w-[500px] h-[380px] sm:h-[450px] md:w-5/6 flex-shrink-0 order-1 lg:order-none hidden max-lg:-translate-x-90 ">

          <Image
            src="/piiiiig.png"
            alt="Background"
            
            className=" -transalate-x-10 "
            width={507}
            height={588}
          />

      
          <div className="absolute top-10 sm:top-14 left-10 sm:left-20 translate-x-10 max-lg:translate-x-30 ">
            <h2 className="font-primary text-primary text-3xl sm:text-4xl leading-tight ">
              Start your
            </h2>

            <div className="flex gap-2 mt-1">
              <h2 className="font-primary text-primary font-bold text-3xl sm:text-4xl leading-tight">
                free plan
              </h2>

              <h2 className="font-primary text-primary text-3xl sm:text-4xl leading-tight">
                now
              </h2>
            </div>
          </div>


          
        </div>

   
        <div className="flex flex-col sm:flex-row gap-10 order-2 lg:order-none md:flex-col lg:flex-row max-lg:-translate-y-140 max-sm:translate-y-0">
          
          
          <div className="w-full sm:w-[320px] bg-primary text-white rounded-2xl p-8 shadow-lg font-primary">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">PRO</h3>

            <p className="text-4xl sm:text-[45px] font-bold">
              $20 <span className="text-base font-normal">/ month</span>
            </p>

            <ul className="mt-6 space-y-3 text-base leading-relaxed">
              <li>✔ Unlimited access for all your needs</li>
              <li>✔ Unlimited meetings</li>
              <li>✔ Unlimited templates</li>
              <li>✔ ...and other premium features</li>
            </ul>

            <button className="mt-8 w-full bg-white text-primary font-semibold py-3 rounded-lg shadow hover:bg-gray-100 transition">
              Start Now
            </button>
          </div>

       
          <div className="w-full sm:w-[320px] bg-white rounded-2xl p-8 shadow-xl font-primary">
            <h3 className="text-primary text-xl sm:text-2xl font-semibold">
              Free
            </h3>

            <p className="text-primary text-4xl sm:text-[45px] font-bold">
              $0 <span className="text-base font-normal">/ month</span>
            </p>

            <ul className="mt-6 space-y-3 text-base leading-relaxed text-primary">
              <li>✔ No credit card required</li>
              <li>✔ Up to 10 meetings</li>
            </ul>

            <div className="mt-20 sm:mt-28">
              <button className="w-full bg-primary text-white font-semibold py-3 rounded-lg shadow hover:bg-primary/90 transition">
                Start Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PiggyBank;
