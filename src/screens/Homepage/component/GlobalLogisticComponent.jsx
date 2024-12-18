import React from "react";
import backgroundImage from "../../../assets/home/3_image_home.jpg";
import quote_img from "../../../assets/quata.png";

const GlobalLogisticsComponent = () => {
  return (
    <div className="parallax-spacer-homeglobe">
      {/* Text Content Section */}
      <div className="relative z-10 h-full w-full flex items-center justify-end pr-20 text-white">
        <div className="w-2/5 lg:mb-24 space-y-6">
          {/* Quote Image */}
          <img
            src={quote_img}
            alt="Quote Icon"
            className="h-12 w-12 lg:h-14 lg:w-14"
          />

          <div className="ml-4">
            {/* Title */}
            <h1
              className="mt-4 text-4xl font-bold font-MontserratMedium"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Why Choose Ceylon Ambassador?
            </h1>

            {/* Description */}
            <p
              className="text-sm leading-snug text-left font-Montserrat mt-4"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <strong>● Global Reach:</strong> Our services span continents,
              ensuring your needs are met wherever you are.
            </p>

            <p
              className="text-sm leading-snug text-left font-Montserrat mt-4"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <strong>● Tailored Solutions:</strong> We offer personalized
              services designed to align with your unique goals.
            </p>

            <p
              className="text-sm leading-snug text-left font-Montserrat mt-4"
              data-aos="fade-up"
              data-aos-duration="6000"
            >
              <strong>● Innovation-Driven:</strong> Powered by technology, we
              provide cutting-edge solutions across industries.
            </p>

            <p
              className="text-sm leading-snug text-left font-Montserrat mt-4"
              data-aos="fade-up"
              data-aos-duration="7000"
            >
              <strong>● Commitment to Sustainability:</strong> We prioritize
              eco-friendly practices to create a better tomorrow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalLogisticsComponent;
