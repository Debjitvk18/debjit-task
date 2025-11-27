"use client";

import { useState } from "react";
import Card from "./Card";

export default function SliderClient({ slides }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col items-center w-full">
      
      <div
        key={active}
        className="animate-[slideUp_0.4s_ease] w-full flex justify-center"
      >
        <Card
          icon={slides[active].icon}
          title={slides[active].title}
          desc={slides[active].desc}
        />
      </div>
      <div className="flex gap-3 mt-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`
              w-3 h-3 rounded-full transition
              ${active === i ? "bg-primary" : "bg-gray-300"}
            `}
          />
        ))}
      </div>
    </div>
  );
}
