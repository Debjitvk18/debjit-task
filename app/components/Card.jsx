import Image from "next/image";

const Card = ({ icon, title, desc }) => {
  return (
    <div
      className="
        w-full
        max-w-[380px]
        bg-white
        rounded-2xl
        shadow-[10px_40px_50px_rgba(229,233,246,0.4)]
        p-6 sm:p-8
        flex
        flex-col
        items-center
        text-center
      "
    >
      <Image
        src={icon}
        alt={title}
        width={80}
        height={80}
        className="mb-4 sm:mb-6"
      />

      <h2 className="text-primary font-primary font-semibold text-lg sm:text-xl mb-2">
        {title}
      </h2>

      <p className="text-gray-500 text-sm sm:text-base font-primary leading-relaxed">
        {desc}
      </p>
    </div>
  );
};

export default Card;
