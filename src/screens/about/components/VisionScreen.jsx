import React from "react";
import AllVehiclesImage from "../../../assets/all_vehicles_image.png";
import roboimg from "../../../assets/roboimage.jpg"
import Logo from "../../../assets/blue_logo.svg";

const VisionScreen = () => {
  return (
    <div className="font-Montserrat">
      <div className="mb-10 flex flex-col lg:flex-row justify-center items-start bg-white px-6 sm:px-12 lg:px-16 mx-4 sm:mx-16 mt-12 gap-y-6 sm:gap-x-4 text-customBlue">
        {/* Sidebar - Left side (5 columns) */}
        <div className="w-full lg:w-4/12 bg-white flex flex-col justify-start items-start">
          <div className="space-y-2 text-left">
            <a href="/ufs" className="block">
              <p className="font-kollektif text-base sm:text-lg font-black text-customBlue border-b-2 border-black pb-2" data-aos="fade-up" data-aos-duration="1000">
                UNITED FREIGHT SOLUTIONS
              </p>
            </a>

            <a href="/aerofly" className="block">
              <p className="font-kollektif text-base sm:text-lg font-black text-customBlue border-b-2 border-black pb-2" data-aos="fade-up" data-aos-duration="1000">
                AEROFLY AVIATION
              </p>
            </a>

            <a href="/khmergate" className="block">
              <p className="font-kollektif text-base sm:text-lg font-black text-customBlue border-b-2 border-black pb-2" data-aos="fade-up" data-aos-duration="1000">
                KHMERGATE
              </p>
            </a>

            <a href="/brand-pulse" className="block">
              <p className="font-kollektif text-base sm:text-lg font-black text-customBlue border-b-2 border-black pb-2" data-aos="fade-up" data-aos-duration="1000">
                BRANDPULSE
              </p>
            </a>
          </div>

          <div className="mt-6 sm:mt-10 flex justify-center">
            <img
              src={Logo}
              alt="robo"
              className="w-40 sm:w-60 h-auto object-cover"
            />
          </div>
        </div>

        {/* Main Content - Right side (7 columns) */}
        <div className="w-full lg:w-7/12 flex flex-col px-6 sm:px-8 py-0">
          {/* Our Journey Section */}
          <section className="mb-12">
            <p className="text-sm sm:text-base mb-6 text-customBlue" data-aos="fade-up" data-aos-duration="1000">
              At Ceylon Ambassador, we believe in the power of
              connection—connecting businesses with opportunities, people with
              experiences, and ideas with innovation. Founded on the principles
              of excellence, integrity, and innovation, Ceylon Ambassador has
              grown into a dynamic and diversified business group that operates
              across logistics, aviation, travel, and branding. Our goal is
              simple: to deliver world-class solutions that inspire trust, drive
              growth, and create lasting impact.
            </p>
            <h2 className="text-2xl sm:text-3xl text-customBlue font-semibold mb-4" data-aos="fade-up" data-aos-duration="1000">
              Our Journey
            </h2>
            <p className="text-sm sm:text-base text-customBlue" data-aos="fade-up" data-aos-duration="1000">
              Since our inception, we have been driven by a vision to create a
              global presence that bridges industries, regions, and cultures.
              From humble beginnings, Ceylon Ambassador has evolved into a
              powerhouse, leading the way in logistics through United Freight
              Solutions, redefining aviation services with Aerofly Aviation,
              transforming travel experiences with KhmerGate, and helping
              businesses shine through BrandPulse. Each step of our journey has
              been marked by innovation, resilience, and a passion for
              delivering exceptional results.
            </p>
          </section>

          {/* What Sets Us Apart */}
          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4" data-aos="fade-up" data-aos-duration="1000">
              What Sets Us Apart
            </h2>
            <p className="text-sm sm:text-base text-customBlue" data-aos="fade-up" data-aos-duration="1000">
              At the heart of Ceylon Ambassador lies our unwavering commitment
              to excellence. We are not just about providing services; we are
              about offering solutions that elevate and empower. Whether it's
              connecting continents through our seamless logistics network,
              optimizing airline operations for efficiency and growth, crafting
              unforgettable travel adventures, or building iconic brands, we go
              beyond the ordinary to deliver extraordinary experiences. Our
              approach is simple yet powerful—be innovative, be impactful, and
              always put our clients first.
            </p>
          </section>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="flex flex-col sm:flex-row justify-center items-center mx-4 sm:mx-12 mb-6">
        <div className="flex flex-col items-center space-y-4 mb-6 sm:mb-0 sm:w-1/2">
          <img
            src={AllVehiclesImage}
            alt="All vehicles"
            className="object-contain w-full"
          />
        </div>
        <div className="sm:w-1/2">
          {/* Vision */}
          <div className="flex flex-col items-start mb-6 sm:mb-0">
            <h2 className="text-3xl sm:text-4xl font-MontserratMedium font-extrabold text-[#031c3f]">
              <span className="text-5xl sm:text-7xl" data-aos="fade-up" data-aos-duration="1000">“</span> Vision
            </h2>
            <p className="mt-4 text-sm sm:text-base text-customBlue" data-aos="fade-up" data-aos-duration="1000">
              Our vision is to become a global leader in each of our
              sectors—logistics, travel and tourism, branding, and aviation—by
              continuously innovating, expanding our market presence, and
              setting new standards for quality, sustainability, and customer
              satisfaction. We aspire to be the preferred partner for businesses
              and individuals seeking reliable, cutting-edge, and sustainable
              solutions, creating value for all stakeholders while making a
              positive impact on society and the environment.
            </p>
          </div>

          {/* Mission */}
          <div className="flex flex-col items-end">
            <h2 className="text-3xl sm:text-4xl font-MontserratMedium font-extrabold text-[#031c3f]" data-aos="fade-up" data-aos-duration="1000">
              Mission <span className="text-5xl sm:text-7xl" data-aos="fade-up" data-aos-duration="1000">”</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-customBlue" data-aos="fade-up" data-aos-duration="1000">
              Ceylon Ambassador's mission is to connect opportunities and
              deliver excellence across our diverse portfolio of services. We
              are committed to fostering long-term relationships with our
              clients, driving sustainable growth, and contributing positively
              to the communities in which we operate. Our goal is to provide
              innovative, high-quality solutions that meet the unique needs of
              our clients, ensuring their success in an ever-evolving global
              marketplace.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionScreen;
