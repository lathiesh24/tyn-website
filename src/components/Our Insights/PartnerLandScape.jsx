import React from "react";

const PartnerLandScape = () => {
  const contentForPartnerLandScape = [
    {
      title: "Global System Integrators (GSIs)",
      description:
        "Large firms that lead digital transformation projects with deep enterprise relationships.",
      image: "/GSI.svg",
    },
    {
      title: "System Integrators (SIs)",
      description:
        "Mid-sized system integrators providing technology solutions with faster turnaround times.",
      image: "/SIs.svg",
    },
    {
      title: "Niche/Boutique Partners",
      description:
        "Specialised firms with deep domain/technology expertise and close industry connections.",
      image: "/Niche.svg",
    },
    {
      title: "Big 4 Consulting Firms",
      description:
        "Market leaders in advisory services with strong C-suite relationships and strategic influence.",
      image: "/Big4.svg",
    },
    {
      title: "Hyperscalers",
      description:
        "Cloud giants offering infrastructure, scalability, and co-selling opportunities.",
      image: "/Hyperscalers.svg",
    },
    {
      title: "Independent Software Vendors",
      description:
        "Companies that develop complementary software products which can be integrated with and sold as a bundled solution.",
      image: "/ISVs.svg",
    },
    {
      title: "Resellers/Channel Partners",
      description:
        "Distributors that resell products, extending market reach through established networks.",
      image: "/Resellers.svg",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-4 gap-8">
      {contentForPartnerLandScape.map((content, index) => (
        <div
          key={index}
          className={`relative z-10 flex flex-row border border-gray-500 border-solid rounded-lg p-4 overflow-hidden ${
            index === contentForPartnerLandScape.length - 1
              ? "md:col-span-2 mx-auto"
              : ""
          }`}
        >
          {/* Left Section: Text Content */}
          <div className="flex-grow pr-14 md:pr-10 flex flex-col justify-center">
            <div className="font-semibold">
              {index + 1}. {content.title}
            </div>
            <div className="text-gray-500 font-light">
              {content.description}
            </div>
          </div>

          {/* Right Section: Image - Fixed Z-index and Positioning */}
          <div
            className={`absolute right-[-24px] sm:right-[-21px] z-0 ${
              index === contentForPartnerLandScape.length - 1
                ? "bottom-3 md:bottom-[-14px]"
                : "bottom-3 sm:bottom-0"
            }`}
          >
            <img
              src={content.image}
              alt={content.title}
              className="w-24 h-24 object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PartnerLandScape;
