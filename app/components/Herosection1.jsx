import Image from "next/image";

const HeroSection1 = () => {
  return (
    <>
    <div className="flex items-center justify-between px-10 py-20">
      <div className="w-1/2 space-y-6">
        <h1 className="text-[50px] leading-tight font-krona">
          Make Meetings <br />
          More <span className="text-primary font-bold">Efficient</span> <br />
           <span className="text-primary font-bold">and Effective</span>
        </h1>
        <p className="text-dark text-[20px] leading-relaxed font-primary">
          Noda helps digital product teams improve the way they meet by encouraging 
          productive meeting behaviors and adding structure to meeting facilitation.
        </p>
        <button className="px-8 py-3 bg-primary text-white text-lg rounded-lg font-primary font-semibold">
          Sign Up
        </button>
      </div>
      <div className="w-1/2 flex justify-center">
        <Image
          src="/desktop.png"     
          alt="Laptop preview"
          width={600}
          height={400}
          className="object-contain"
        />
      </div>
    </div>
    <div className="flex justify-center">
      <div className="text-[50px] font-bold font-primary text-primary ">How it is work</div>
    </div>
    
    </>
    
  );
};

export default HeroSection1;
