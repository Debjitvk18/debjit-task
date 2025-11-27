import Image from "next/image";

const HeroSection1 = () => {
  return (
    <section className="w-full">
      <div className="
        flex flex-col-reverse md:flex-row 
        items-center justify-between 
        px-4 sm:px-8 md:px-12 lg:px-16 
        py-12 md:py-20 
        gap-10
      ">

        
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="
            text-4xl sm:text-5xl lg:text-6xl 
            leading-tight font-krona
          ">
            <span className="whitespace-nowrap text-secondary font-krona">
              Make Meetings
            </span>
            <br />

            <span className="text-secondary font-krona">More </span>
            <span className="text-primary font-krona font-bold">Efficient </span>
            <span className="text-primary font-krona font-bold">and</span>
            <br />

            <span className="text-primary font-krona font-bold">
              Effective
            </span>
          </h1>

          <p className="text-dark text-base sm:text-lg lg:text-xl leading-relaxed font-primary">
            Noda helps digital product teams improve the way they meet by
            encouraging productive meeting behaviors and adding structure to
            meeting facilitation.
          </p>

          <button className="
            px-6 sm:px-8 py-3 
            bg-primary text-white 
            text-lg rounded-lg 
            font-primary font-semibold 
            hover:opacity-90 transition
          ">
            Sign Up
          </button>
        </div>

   
        <div className="hidden md:flex w-full md:w-1/2 justify-end">
          <Image
            src="/desktop.png"
            alt="Laptop preview"
            width={990}
            height={761}
            className="
              object-contain 
              w-full 
              max-w-[550px] 
              lg:max-w-[650px]
              lg:translate-x-6
            "
          />
        </div>
      </div>

      
      <div className="flex justify-center py-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-primary text-primary">
          How it works
        </h2>
      </div>
    </section>
  );
};

export default HeroSection1;
