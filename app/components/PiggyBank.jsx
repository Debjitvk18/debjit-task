import React from "react";
import Image from "next/image";

const PiggyBank = () => {
  return (
    <section className="w-full py-16 sm:py-24 flex justify-center px-4 sm:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
        <div className="hidden lg:block relative w-[450px] h-[500px] ">
          <Image
            src="/othermango.png"
            alt="Background"
            width={700}
            height={660}
            className="relative w-full h-full -translate-x-50 "
          />
          <div className="absolute top-14 left-20 -translate-x-50 ">
            <h2 className="font-primary text-primary text-4xl leading-tight ">
              Start your
            </h2>

            <div className="flex gap-2 mt-1">
              <h2 className="font-primary text-primary font-bold text-4xl leading-tight">
                free plan
              </h2>

              <h2 className="font-primary text-primary text-4xl leading-tight">
                now
              </h2>
            </div>
          </div>
          <Image
            src="/pig.png"
            alt="Pig"
            width={260}
            height={260}
            className="absolute bottom-0 left-16 -translate-x-50 "
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-10 lg:-translate-x-50 ">
       
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
