import React from "react";

const AeroFlySixthSection = ({
  brandName,
  description,
  subdes1,
  subdes2,
  subdes3,
  subdes4,
  subdes5,
  subtopic1,
  subtopic2,
  subtopic3,
  subtopic4,
  subtopic5,
  brandImage,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start p-10 md:p-20">
      <div className="flex flex-row justify-center items-center w-1/2 ">
        <img src={brandImage} className="w-[200px]" />
        <div className="flex flex-col justify-center items-start pl-10">
          <p className="text-[20px] text-black mb-0" data-aos="fade-up" data-aos-duration="1000">Why Choose </p>
          <p className="text-[28px] text-black font-semibold mt-[-8px]" data-aos="fade-up" data-aos-duration="1000">
            {brandName}
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 text-[12px] md:text-[13px] px-5 md:pr-[50px] flex flex-col items-start text-black">
        <p className="p-0" data-aos="fade-up" data-aos-duration="2000">{description}</p>
        <p className="text-[13px] p-1" data-aos="fade-up" data-aos-duration="2000">
          <span className="font-bold">{subtopic1}</span>
          {subdes1}
        </p>
        <p className="text-[13px] p-1" data-aos="fade-up" data-aos-duration="2000">
          <span className="font-bold">{subtopic2}</span>
          {subdes2}
        </p>
        <p className="text-[13px] p-1" data-aos="fade-up" data-aos-duration="2000">
          <span className="font-bold">{subtopic3}</span>
          {subdes3}
        </p>

        <p className="text-[13px] p-1" data-aos="fade-up" data-aos-duration="2000">
          <span className="font-bold">{subtopic4}</span>
          {subdes4}
        </p>
        <p className="text-[13px] p-1" data-aos="fade-up" data-aos-duration="2000">
          <span className="font-bold">{subtopic5}</span>
          {subdes5}
        </p>
      </div>
    </div>
  );
};

export default AeroFlySixthSection;
