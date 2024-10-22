import React from "react";

const SeptEventMob = ({
  handleEventNavigation,
  sentences,
  currentSentence,
  isTransitioning,
}) => {
  return (
    <>
      {/* Fixed container for mobile */}
      <div className="flex flex-col  bg-bgBlue justify-around fixed bottom-0 items-center w-full z-50">
        {/* <div className="w-full flex flex-col items-center mt-2">
          <div className="relative overflow-hidden h-full w-full">
            <div
              className={`flex ${
                isTransitioning ? "transition-transform duration-2000" : ""
              }`}
              style={{
                transform: `translateX(-${
                  (currentSentence % sentences.length) * 100
                }%)`,
              }}
            >
              {sentences.concat(sentences).map((sentence, index) => {
                let colorClass = "text-customBlue"; // Default to customBlue for all sentences
                return (
                  <div
                    key={`${sentence}-${index}`} // Unique key for each element
                    className={`w-full font-medium italic capitalize text-[14px] flex-shrink-0 flex justify-center items-center ${colorClass}`}
                  >
                    {sentence}
                  </div>
                );
              })}
            </div>
          </div>
        </div> */}
        <div className="flex flex-row justify-around items-center w-full p-4">
          {/* YInfinity image */}
          <div className="cursor-pointer " onClick={handleEventNavigation}>
            <img
              src="/YInfinity.png"
              alt="YInfinity"
              className="h-[4vh] w-auto"
            />
          </div>
          {/* Join us button */}
          <div
            className={`border cursor-pointer bg-sky-600 text-white hover:text-customBlue shadow hover:bg-white py-1.5 px-8 rounded-3xl`}
            onClick={handleEventNavigation}
          >
            See More!
          </div>
        </div>
      </div>
    </>
  );
};

export default SeptEventMob;
