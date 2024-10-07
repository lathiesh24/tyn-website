import React, { useState, useEffect } from "react";

const PhotoCarousel = () => {
  const images = [
    "carousel1.jpg",
    "carousel2.jpg",
    "carousel3.jpg",
    "carousel4.jpg",
    "carousel5.jpg",
    "carousel6.jpg",
    "carousel7.jpg",
    "carousel8.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Automatically change the slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 4000 ms (4 seconds)

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [currentIndex]);

  return (
    <div className="mx-8 sm:mx-auto">
      <div className="flex justify-center items-center relative">
        <div className="w-full sm:w-7/12 h-full">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      {/* Dots */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 mx-2 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;
