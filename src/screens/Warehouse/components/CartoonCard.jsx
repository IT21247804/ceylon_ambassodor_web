import React from "react";

const CartoonCard = ({
  image,
  topic,
  content,
  alt,
  h = "150px",
  textcolor = "black",
}) => {
  const textColorClass = `text-${textcolor}`;

  return (
    <div className="flex flex-col items-center justify-between w-[250px] h-[200px]  bg-white ">
      <div className="flex-shrink-0">
        <img
          src={image}
          alt={alt}
          className="object-contain w-200 h-150"
          style={{ maxHeight: h }}
        />
      </div>
      <div className="flex flex-col items-center justify-center flex-grow">
        <p
          className={`mt-3 font-bold font-MontserratSemiBold text-center text-[16px] ${textColorClass} min-h-[40px]`}
        >
          {topic}
        </p>
        <p
          className={`text-center font-Montserrat text-xs ${textColorClass} min-h-[60px]`} //line-clamp-3
        >
          {content}
        </p>
      </div>
    </div>
  );
};

export default CartoonCard;
