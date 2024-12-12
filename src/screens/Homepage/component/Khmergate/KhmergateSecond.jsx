import React from "react";
import khermgate from "../../../../assets/khmergate.png";
import runaway from "../../../../assets/Khmergate/khon-is-art-culture-thailand-dancing-masked-tossakan-hanuman-are-fighting-literature.jpg";

const KhmergateSecond = () => {
  return (
    <div className="bg-[#015B02] w-full h-[550px] flex justify-center items-center relative">
      {/* Left part */}
      <div className="w-1/2 h-full flex flex-col justify-center items-center ">
        <div className="flex flex-col justify-center items-start">
          <img src={khermgate} alt="logo" className="w-[300px] h-auto mb-9" />
          <p className="text-white text-[28px] font-bold" data-aos="fade-up" data-aos-duration="1000">"Your Gateway to </p>
          <p className="text-white text-[28px] font-bold mb-5" data-aos="fade-up" data-aos-duration="1500">
            Extraordinary Experiences"
          </p>
          <div className="h-[2px] w-[500px] bg-[#605645] "></div>
          <p className="text-white text-[14px] mt-4 w-[390px]" data-aos="fade-up" data-aos-duration="2000">
            At KhmerGate, we believe that travel is more than just visiting
            places—it's about creating memories, discovering new cultures, and
            experiencing life in its most authentic form. As Cambodia's premier
            travel and tourism company, we offer a curated selection of tours
            and services that showcase the beauty, history, and culture of
            Cambodia, as well as global destinations. Whether you're seeking a
            serene retreat in the heart of nature, an immersive cultural
            experience, or an adventurous journey across borders, KhmerGate is
            your gateway to the world.
          </p>
        </div>
      </div>

      {/* Divider: Vertical White Line */}
      <div className="h-[480px] w-[2px] bg-[#BC9C61] "></div>

      {/* Right part */}
      <div className="w-1/2 h-full flex justify-center items-center">
        <p className="text-white text-[24px] p-12">
          <img src={runaway} />
        </p>
      </div>
    </div>
  );
};

export default KhmergateSecond;
