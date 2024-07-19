import React from "react";

const SeptEvent = ({
  handleEventNavigation,
  sentences,
  currentSentence,
  isTransitioning,
}) => {
  return (
    <div className="flex flex-row shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] bg-bgBlue justify-around h-[10vh] fixed bottom-0 items-center w-full z-50">
      {/* YInfinity image */}
      <div
        className="cursor-pointer p-10 w-2/12"
        onClick={handleEventNavigation}
      >
        <img src="/YInfinity.png" alt="YInfinity" className="h-[7vh] w-auto" />
      </div>
      {/* scrolling banner */}

      <div
        className="w-8/12 flex flex-col items-center"
        onClick={handleEventNavigation}
      >
        <div className="relative overflow-hidden h-10">
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
              let colorClass;
              switch (index % sentences.length) {
                case 0:
                  colorClass = "text-customBlue";
                  break;
                case 1:
                  colorClass = "text-customBlue";
                  break;
                case 2:
                  colorClass = "text-customBlue";
                  break;
                default:
                  colorClass = "text-gray-800";
              }
              return (
                <div
                  key={`${sentence}-${index}`} // Unique key for each element
                  className={`w-full font-medium italic capitalize text-lg lg:text-2xl flex-shrink-0 flex justify-center items-center ${colorClass}`}
                >
                  {sentence}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Join us button */}
      <div
        className={`border cursor-pointer bg-sky-600 text-white hover:text-customBlue shadow hover:bg-white py-1.5 px-8 rounded-3xl`}
        onClick={handleEventNavigation}
      >
        Join Us!
      </div>
    </div>
  );
};

export default SeptEvent;
