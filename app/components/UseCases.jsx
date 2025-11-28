import Image from "next/image";

const slides = [
  {
    icon: "/working.jpg",
    title: "Freelancers",
    desc: "Centralized meeting directory where you can search",
  },
  {
    icon: "/working.jpg",
    title: "Financial Services",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: "/working.jpg",
    title: "Software Development",
    desc: "Centralized meeting directory where you can search",
  },
];

export default function UseCases() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 overflow-hidden max-lg:-mt-150 max-md:mt-0">
      {/* Heading */}
      <h1 className="font-primary text-primary font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center leading-tight ">
        Use Cases
      </h1>

      {/* ===========================
          Mobile / Tablet Slider
      ============================ */}
      <div className="md:hidden mt-12 sm:mt-14 overflow-x-auto scrollbar-none">
        <div className="flex gap-6 snap-x snap-mandatory px-2">
          {slides.map((item, i) => (
            <div
              key={i}
              className="snap-center min-w-[85%] bg-white shadow-xl rounded-2xl p-5 flex flex-col border border-gray-200"
            >
              <div className="relative w-full rounded-xl overflow-hidden">
                <Image
                  src={item.icon}
                  alt="Use Case"
                  width={400}
                  height={260}
                  className="rounded-xl w-full object-cover"
                />
                {/* Play Button */}
                
              </div>

              {/* Text */}
              <h2 className="mt-4 text-primary font-primary font-semibold text-lg">
                {item.title}
              </h2>
              <p className="text-gray-600 mt-1 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ===========================
           Desktop Grid
      ============================ */}
      <div className="hidden md:grid grid-cols-3 gap-10 lg:gap-14 mt-16 max-w-7xl mx-auto">
        {slides.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6"
          >
            <div className="relative w-full rounded-xl overflow-hidden">
              <Image
                src={item.icon}
                alt="Use Case"
                width={450}
                height={300}
                className="rounded-xl object-cover w-full"
              />

              
             
            </div>

            <h2 className="mt-4 text-primary font-primary font-semibold text-xl">
              {item.title}
            </h2>
            <p className="text-gray-600 mt-2 text-base leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
