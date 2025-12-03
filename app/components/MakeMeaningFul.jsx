import React from "react";
import Card from "./Card";

const MakeMeaningFul = () => {
  return (
    <section className="relative w-full py-16 sm:py-24 flex flex-col items-center overflow-hidden">
      <img
        src="/mangoshape.png"
        alt="Mango shape"
        className="
          absolute
          right-0
          top-10
          w-[350px] sm:w-[450px] md:w-[550px] lg:w-[650px]
          opacity-80
          pointer-events-none
        "
      />
      <h2 className="font-primary text-primary font-bold text-3xl sm:text-4xl md:text-5xl text-center relative z-10">
        Make Meetings Meaningful
      </h2>

     
      <div
        className="
          grid
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-10 lg:gap-20
          mt-12 sm:mt-16
          relative
          z-10
          md:gap-10
          px-4
          text-wrap
          laeding-[26px]
          text-[14px]
        "
      >
        <Card
          icon="/sprial.png"
          title="Stay Organized"
          desc="Centralized meeting directory where any member of the team can search,
          filter and find the information they need in one place, rather than
          separate devices & apps."
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
          desc="Translate meeting discussions into actionable product decisions that
          push your objectives forward, enhance team productivity and improve
          collaboration for positive outcomes."
        />
      </div>
      <img
        src="/dotdot.png"
        alt="dots"
        className="
          absolute
          sm:left-6 md:left-12
           sm:bottom-8
          w-20 sm:w-28
          mb-35 ml-20  
        "
      />
      <button
        className="
          mt-12 sm:mt-14
          bg-primary
          text-white
          font-primary font-medium
          px-8 sm:px-10
          py-3
          rounded-xl
          text-base sm:text-lg
          shadow-md
          transition
          hover:bg-primary/80
          relative z-10
        "
      >
        Sign Up
      </button>
    </section>
  );
};

export default MakeMeaningFul;
