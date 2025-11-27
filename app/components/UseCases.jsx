import Card from "./Card";
import SliderClient from "./SliderClient";

const slides = [
  {
    icon: "/image1.png",
    title: "Freelancers",
    desc: "Centralized meeting directory where you can search",
  },
  {
    icon: "/image.png",
    title: "Financial Services",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: "/image2.png",
    title: "Software Development",
    desc: "Centralized meeting directory where you can search",
  },
];

export default function UseCases() {
  return (
    <section className="w-full py-16 sm:py-24 flex flex-col justify-center items-center overflow-hidden px-4">
      <h1 className="font-primary text-primary font-bold text-3xl sm:text-4xl md:text-5xl text-center">
        Use Cases
      </h1>
      <div className="flex md:hidden w-full justify-center mt-12">
        <SliderClient slides={slides} />
      </div>
      <div
        className="
          hidden md:flex
          gap-10 lg:gap-20
          mt-12 sm:mt-16
          items-center
          w-full justify-center
        "
      >
        {slides.map((item, i) => (
          <Card key={i} icon={item.icon} title={item.title} desc={item.desc} />
        ))}
      </div>
    </section>
  );
}
