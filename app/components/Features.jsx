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
   
    <section className="w-full flex flex-col items-center py-16 sm:py-24 bg-white"> 
      <div className="w-full   relative">

        <div 
          className="
            hidden lg:block 
            absolute 
            top-[48px] 
            z-0 
            left-40 right-[11%]
            border-t-2 border-dashed border-primary/20 
          " 
        />
        <div className="
          grid 
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
          gap-10 lg:gap-6
          relative z-10
        ">
          {features.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center space-y-5"
            >
              <div
                className="
                  w-24 h-24
                  bg-white 
                  rounded-full
                  flex items-center justify-center
                  border border-primary/20
                  relative z-10
                "
              >
               
                <div className="w-full h-full rounded-full bg-primary/5 flex items-center justify-center">
                    <Image src={item.icon} alt={item.title} width={40} height={40} />
                </div>
              </div>

              <h3 className="text-primary font-primary font-bold text-lg">
                {item.title}
              </h3>
             <div className=" text-balance">
                <p className="text-dark text-[14px] font-primary  max-w-[230px]">
                {item.desc}
              </p>
             </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;