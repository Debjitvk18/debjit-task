import React from "react";
import Card from "./Card";

const MakeMeaningFul = () => {
  return (
    <div className="relative py-24 w-full flex flex-col items-center overflow-hidden">
      <img
        src="/mangoshape.png"
        alt="Mango shape"
        width={687}
        height={600}
        className="
          absolute
          right-[-60px]
          opacity-100
        "
      />
      <h1 className="font-primary text-primary font-bold text-[50px] text-center relative z-10">
        Make Meetings Meaningful
      </h1>
      <div className="flex justify-center gap-10 mt-16 relative z-10">
        <Card
          icon="/sprial.png"
          title="Stay Organized"
          desc="Centralized meeting directory where any member of the team can
                search, filter and find the information they need in one place,
                rather than separate devices & apps."
        />

        <Card
          icon="/wheelsprial.png"
          title="Keep Meetings Focused"
          desc="Noda enables product managers to maintain team alignment through
                effective meeting practices like agendas, collaborative notes,
                decision tracking and more."
        />

        <Card
          icon="/ball.png"
          title="Emphasize Execution"
          desc="Translate meeting discussions into actionable product decisions
                that push your objectives forward, enhance team productivity
                and improve collaboration for positive outcomes."
        />
        <img
    src="/dotdot.png"
    alt="dots"
    className="
      absolute
      left-[-5px] 
      bottom-[-30px]
      w-[120px]
      opacity-40
      z-0
    "
  />
      </div>
      <button
        className="
          mt-14
          bg-primary
          text-white
          font-medium
          px-10
          py-3
          rounded-[10px]
          text-[18px]
          shadow-md
          hover:bg-blue-700
          transition
          font-primary
          relative z-10
        "
      >
        Sign Up
      </button>
    </div>
  );
};

export default MakeMeaningFul;
