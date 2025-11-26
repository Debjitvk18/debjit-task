import Image from "next/image";

const UseCard = ({ thumbnail, title, desc }) => {
  return (
    <div className="w-[350px] bg-white rounded-2xl shadow-[0_4px_40px_rgba(0,0,0,0.1)] overflow-hidden">
      
      {/* IMAGE WITH PLAY BUTTON */}
      <div className="relative w-full h-[200px]">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover"
        />

        {/* Play button */}
        <div className="absolute inset-0 flex justify-center items-center">
          <img src="/play.png" alt="play" className="w-[60px]" />
        </div>
      </div>

      {/* TEXT */}
      <div className="p-6">
        <h3 className="text-primary font-semibold text-[20px]">
          {title}
        </h3>

        <p className="text-[#4A4A4A] mt-2 leading-[22px]">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default UseCard;
