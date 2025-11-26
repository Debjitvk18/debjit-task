import Image from "next/image";

const features = [
  {
    icon: "/hexa.png",
    title: "Create Meetings",
    desc: "Enter meeting agendas and key outcomes before the meeting begins",
  },
  {
    icon: "/message.png",
    title: "Invite Attendees",
    desc: "Sync Noda with email and add it to meeting invites",
  },
  {
    icon: "/plane.png",
    title: "Run Meeting",
    desc: "Conduct structured meetings within Noda to help stay organized",
  },
  {
    icon: "/lock.png",
    title: "Always Accessible",
    desc: "Easily find important meeting notes & decisions whenever you need",
  },
];

const Features = () => {
  return (
<div className="w-full flex flex-col items-center py-24">

  <div className="relative w-full px-32">

    <div className="absolute top-[50px] h-0 left-[calc(18.5%+50px)] right-[calc(18.5%+50px)] 
      border-t-[3px] border-dashed border-primary opacity-10">
    </div>

    <div className="flex justify-between">
      {features.map((item, i) => (
        <div
          key={i}
          className="flex flex-col items-center text-center w-1/4 px-6 relative z-10"
        >
          <div
            className="
              w-[100px] h-[100px]
              bg-[rgba(18,21,24,0.05)]
              rounded-full
              flex items-center justify-center
              border border-primary/30
            "
          >
            <Image src={item.icon} alt={item.title} width={40} height={40} />
          </div>

          <h3 className="text-primary font-bold text-[20px] mt-4 font-primary">
            {item.title}
          </h3>

          <p className="text-dark text-[14px] leading-[26px] font-primary mt-2">
            {item.desc}
          </p>
        </div>
      ))}
    </div>

  </div>
</div>

  );
};

export default Features;
