import React from "react";

const EventPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 animate-fadeInUp">
        Event Details
      </h1>

      <div className="flex flex-wrap justify-center mt-8">
        {/* Date Card */}
        <div className="event-card m-4 p-6 bg-white shadow-lg rounded-lg flex items-center transition transform hover:scale-105 animate-fadeInUp delay-200">
          <div className="icon bg-blue-500 text-white p-4 rounded-full mr-4">
            <i className="fas fa-calendar-alt text-2xl"></i>
          </div>
          <div>
            <h3 className="text-lg font-bold">Date</h3>
            <p>July 15, 2024</p>
          </div>
        </div>
        {/* Time Card */}
        <div className="event-card m-4 p-6 bg-white shadow-lg rounded-lg flex items-center transition transform hover:scale-105 animate-fadeInUp delay-400">
          <div className="icon bg-green-500 text-white p-4 rounded-full mr-4">
            <i className="fas fa-clock text-2xl"></i>
          </div>
          <div>
            <h3 className="text-lg font-bold">Time</h3>
            <p>10:00 AM - 2:00 PM</p>
          </div>
        </div>
        {/* Venue Card */}
        <div className="event-card m-4 p-6 bg-white shadow-lg rounded-lg flex items-center transition transform hover:scale-105 animate-fadeInUp delay-600">
          <div className="icon bg-red-500 text-white p-4 rounded-full mr-4">
            <i className="fas fa-map-marker-alt text-2xl"></i>
          </div>
          <div>
            <h3 className="text-lg font-bold">Venue</h3>
            <p>123 Event Street, City</p>
          </div>
        </div>
      </div>

      {/* Background Image with Text Overlay */}
      <div
        className="relative w-full h-64 mt-8 bg-cover bg-center rounded-lg animate-fadeInUp delay-800"
        style={{ backgroundImage: "url(/event-image.jpg)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h2 className="text-2xl font-bold animate-fadeInUp delay-1000">
            Join Us for an Exciting Event
          </h2>
          <p className="mt-4 animate-fadeInUp delay-1200">
            Learn, network, and grow with us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
