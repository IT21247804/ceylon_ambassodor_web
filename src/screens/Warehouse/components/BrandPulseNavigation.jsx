import React from "react";

const BrandNavSection = ({ first, second, third, fourth }) => {
  return (
    <section className="w-[85%] mx-auto mt-6 grid grid-cols-4 text-center  py-4 bg-transparent font-semibold font-kollektif">
      <div className="relative group cursor-pointer border-b-2 border-white pb-[10px]">
        <span className="text-white font-Kollektif font-bold group-hover:text-yellow-500">
          {first}
        </span>
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-2px] w-0 h-[3px] bg-white group-hover:w-[80%] group-hover:bg-[#c3a05f] transition-all duration-300"></div>
      </div>
      <div className="relative group cursor-pointer border-b-2 border-white pb-[10px]">
        <span className="text-white font-bold group-hover:text-yellow-500">
          {second}
        </span>
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-2px] w-0 h-[3px] bg-white] group-hover:w-[80%] group-hover:bg-[#c3a05f] transition-all duration-300"></div>
      </div>
      <div className="relative group cursor-pointer border-b-2 border-white pb-[10px]">
        <span className="text-white font-bold group-hover:text-yellow-500">
          {third}
        </span>
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-2px] w-0 h-[3px] bg-white group-hover:w-[80%] group-hover:bg-[#c3a05f] transition-all duration-300"></div>
      </div>
      <div className="relative group cursor-pointer border-b-2 border-white pb-[10px]">
        <span className="text-white font-bold group-hover:text-yellow-500">
          {fourth}
        </span>
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-2px] w-0 h-[3px] bg-white group-hover:w-[80%] group-hover:bg-[#c3a05f] transition-all duration-300"></div>
      </div>
    </section>
  );
};

export default BrandNavSection;
