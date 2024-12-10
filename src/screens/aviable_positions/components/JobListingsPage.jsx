import React from "react";
import working_man from "../../../assets/workingMan.png";

const JobListingsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Section with Image and Text */}
      <div className="container max-w-screen-lg mx-auto flex flex-col lg:flex-row items-center justify-between py-16 px-4 lg:px-8">
        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={working_man}
            alt="Shipping services"
            className="w-3/4 h-auto"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 flex flex-col justify-center border-l-2 border-bggray mt-8 pb-4 lg:mt-0">
          <div className="border-b-2 border-bggray pl-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Available Positions at Ceylon Ambassador
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Join the team that’s redefining global logistics and making an
              impact across industries! At Ceylon Ambassador, we believe that
              great people make a great company. We’re looking for talented,
              passionate individuals to join our crew and contribute to our
              mission of delivering excellence in logistics, aviation, travel,
              and branding.
            </p>
          </div>
          <div className="mt-4 ml-8 flex items-center">
            <button className="flex items-center">
              <div className="bg-customBlue rounded-full w-8 h-8 flex items-center justify-center ">
                <span className="text-3xl font-bold text-white">+</span>
              </div>
            </button>
            <div className="ml-4">
              <p>View more about our services</p>
            </div>
          </div>
        </div>
      </div>

      {/* Job Listings Section */}
      <div className="max-w-screen-xl mx-auto py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-customBlue mb-8">
            Open positions
          </h2>

          {/* Job Listings Table */}
          <div className="bg-white ">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-3 px-6 bg-gray-50 text-left text-sm font-semibold text-gray-600 uppercase">
                    Position
                  </th>
                  <th className="py-3 px-6 bg-gray-50 text-left text-sm font-semibold text-gray-600 uppercase">
                    Location
                  </th>
                  <th className="py-3 px-6 bg-gray-50 text-left text-sm font-semibold text-gray-600 uppercase">
                    Type
                  </th>
                  <th className="py-3 px-6 bg-gray-50 text-right"></th>
                </tr>
              </thead>
              <tbody>
                {/* Job Listing Rows */}
                {[
                  {
                    position: "Stocking Associate",
                    location: "Portland, US",
                    type: "Full Time",
                  },
                  {
                    position: "General Labour",
                    location: "Denver, US",
                    type: "Full Time",
                  },
                  {
                    position: "Warehouse Worker",
                    location: "Chicago, US",
                    type: "Full Time",
                  },
                  {
                    position: "Shipping and Receiving",
                    location: "New York, US",
                    type: "Full Time",
                  },
                ].map((job, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-4 px-6 text-sm text-gray-800">
                      {job.position}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-800">
                      {job.location}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-800">
                      {job.type}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end">
                        <button className="flex items-center bg-customBlue text-white text-sm px-3 py-1">
                          <span className="text-3xl font-bold mr-2">+</span>
                          <span className="text-base">Send Message</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListingsPage;
