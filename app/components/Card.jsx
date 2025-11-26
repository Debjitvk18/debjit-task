import Image from "next/image";

const Card = ({ icon, title, desc }) => {
  return (
    <div
      className="
        w-[380px]
        h-auto
        bg-white
        rounded-[20px]
        shadow-[10px_40px_50px_rgba(229,233,246,0.4)]
        p-8
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
        className="mb-6"
      />
      <h2 className="text-primary font-primary font-semibold text-[20px] mb-2">
        {title}
      </h2>
      <p className="text-[#6B7280] text-[15px] font-primary leading-[24px]">
        {desc}
      </p>
    </div>
  );
};

export default Card;
