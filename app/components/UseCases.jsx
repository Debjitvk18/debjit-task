"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";


const scrollToCard = (container, index) => {
  if (!container || !container.children.length) return;

  const card = container.children[index];
  const cardLeft = card.offsetLeft;
  const containerWidth = container.offsetWidth;
  const cardWidth = card.offsetWidth;


  const scrollPosition = cardLeft - (containerWidth / 2) + (cardWidth / 2);

  container.scrollTo({
    left: scrollPosition,
    behavior: "smooth",
  });
};

export default function UseCase() {
  const data = [
    { title: "Freelancers", desc: "Centralized meeting directory", img: "/working.jpg" },
    { title: "Financial Services", desc: "Lorem Ipsum dummy text.", img: "/working.jpg" },
    { title: "Software Development", desc: "Centralized meeting directory", img: "/working.jpg" },
  ];

  const [active, setActive] = useState(1);
  const scrollRef = useRef(null);


  useEffect(() => {
    if (scrollRef.current) {
      scrollToCard(scrollRef.current, active);
    }
  }, [active]);

  return (
    <section className="py-12 w-full sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 md:-mt-130 lg:mt-0">
      <div className="max-w-[1670px]">
        <h2
          className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-(--color-primary)"
          style={{ fontFamily: "var(--font-primary)" }}
        >
          Use Cases
        </h2>

        
        <div
          ref={scrollRef}
          className="
            mt-10 flex gap-20 overflow-x-auto snap-x snap-mandatory scrollbar-hide
            lg:hidden
          "
        >
          {data.map((item, index) => {
            const isActive = index === active;

            return (
              <motion.div
                key={index}
                animate={{
                  scale: isActive ? 1.08 : 1,
                  opacity: isActive ? 1 : 0.75,
                }}
                transition={{ duration: 0.35 }}
                onClick={() => setActive(index)}
                className="
                  min-w-[80%] sm:min-w-[60%] snap-center cursor-pointer
                "
              >
                <div className="bg-white rounded-3xl p-5 shadow-lg border border-gray-200">
                  <div className="relative w-full h-44 rounded-xl overflow-hidden">
                    <Image src={item.img} alt={item.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-[#0000004D]"></div>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-(--color-primary)">
                    {item.title}
                  </h3>

                  <p className="text-(--color-secondary) mt-2 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

  
        <div className="hidden lg:flex justify-center items-center gap-10 mt-14">
          {data.map((item, index) => {
            const isActive = index === active;

            return (
              <motion.div
                key={index}
                animate={{
                  scale: isActive ? 1 : 0.85,
                  opacity: isActive ? 1 : 0.8,
                }}
                transition={{ duration: 0.35 }}
                className="w-150 max-sm:h-80 cursor-pointer"
                onClick={() => setActive(index)}
              >
                <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200">
                  <div className="relative w-full h-48 rounded-xl overflow-hidden">
                    <Image src={item.img} alt={item.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-[#0000004D]"></div>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-(--color-primary) font-primary">
                    {item.title}
                  </h3>

                  <p className="text-(--color-secondary) mt-2 text-base leading-relaxed font-primary">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

 
        <div className="flex justify-center mt-8 gap-2 sm:gap-3">
          {data.map((_, idx) => (
            <motion.div
              key={idx}
              onClick={() => setActive(idx)}
              className="w-3 h-3 rounded-full cursor-pointer"
              animate={{
                backgroundColor: idx === active ? "var(--color-primary)" : "#d1d5db",
                scale: idx === active ? 1.4 : 1,
              }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
