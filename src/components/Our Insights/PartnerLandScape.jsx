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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {contentForPartnerLandScape.map((content, index) => (
        <div
          key={index}
          className="relative flex border border-gray-500 rounded-lg p-3 overflow-hidden"
        >
          {/* Left: Text Content */}
          <div className="flex-grow pr-24">
            <div className="font-semibold text-lg">
              {index + 1}. {content.title}
            </div>
            <div className="text-gray-500 font-light">{content.description}</div>
          </div>

          {/* Right: Logo (ABSOLUTE & FIXED to Border) */}
          <div
            className={`absolute right-[-16px] ${
              index === 3 || index === 4 || index === 5 ? "sm:bottom-3" : "sm:bottom-[-4px] 2xl:bottom-[-6px]"
            } flex items-center justify-end w-24 h-24`}
          >
            <img
              src={content.image}
              alt={content.title}
              className="w-32 h-32 object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PartnerLandScape;
