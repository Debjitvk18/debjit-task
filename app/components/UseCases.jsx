import React from "react";
import Card from "./Card";

const UseCases = () => {
  return (
    <div className="relative py-24 w-full flex flex-col items-center overflow-hidden">
      
      {/* Heading */}
      <h1 className="font-primary text-primary font-bold text-[50px] text-center">
        Use Cases
      </h1>

      {/* Cards */}
      <div className="flex justify-center gap-10 mt-16">
        <Card
          icon="/image1.png"
          title="Freelancers"
          desc="Centralized meeting directory where you can search"
        />

        <Card
          icon="/image.png"
          title="Financial Services"
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />

        <Card
          icon="/image2.png"
          title="Software Development"
          desc="Centralized meeting directory where you can search"
        />
      </div>

      {/* Dots Indicator */}
      <div className="flex gap-3 mt-10">
        <div className="w-3 h-3 bg-primary rounded-full"></div>
        <div className="w-3 h-3 bg-[#E2E8F0] rounded-full"></div>
        <div className="w-3 h-3 bg-[#E2E8F0] rounded-full"></div>
      </div>

    </div>
  );
};

export default UseCases;
