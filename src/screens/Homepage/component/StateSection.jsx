import React, { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";

const StatsSection = () => {
  const stats = [
    { label: "Delivered Shipments", value: 2156 },
    { label: "Globally Connected Agents", value: 362 },
    { label: "Tones of Goods", value: 6236 },
    { label: "Satisfied Clients", value: 71 },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-customBlue py-16 font-MontserratMedium"
    >
      {/* Add responsive flex direction */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-around items-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center space-x-4 mb-8 md:mb-0"
          >
            {/* Vertical Line */}
            <div className="hidden md:block h-16 border-l-2 border-white"></div>
            {/* Stat Block */}
            <div className="text-left text-white">
              <p className="text-sm">{stat.label}</p>
              <p className="text-5xl font-bold">
                {isVisible ? <CountUp end={stat.value} duration={2} /> : "0"}+
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
