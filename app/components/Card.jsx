import Image from "next/image";

const Card = ({ icon, title, desc,iconsize }) => {
  return (
    <div
      className="
        w-full
        max-w-[380px]
        bg-white
        rounded-2xl
        shadow-lg
        p-6 sm:p-8
        flex
        flex-col
        items-center
        text-center
        
      "
    >

      
      <div className="relative  w-20 h-20 mb-4 sm:mb-6"
          style={{
          width: iconsize,
          height:iconsize,
          
        }}>
        <Image
          src={icon}
          alt={title}
          fill
          className="object-contain rounded-md "
        />
      </div>

      <h2 className="text-primary font-primary font-semibold text-lg sm:text-xl mb-2 text-balance">
        {title}
      </h2>

      <p className="text-gray-500 text-sm sm:text-base font-primary leading-relaxed">
        {desc}
      </p>
    </div>
  );
};

export default Card;
