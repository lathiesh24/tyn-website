import React, { useState } from "react";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaTimes,
  FaArrowLeft,
} from "react-icons/fa";
import Modal from "react-modal";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase"; // Ensure this path is correct based on your project structure
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const EventPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    designation: "",
    company: "",
    division: "",
    sector: "",
    thoughtsOnInnovation: "",
    shareThoughts: "",
    contactNumber: "",
    followUpPerson: "",
    followUpContact: "",
    mealPreference: "",
    travelAssistance: "",
  });
  const [selectedDetail, setSelectedDetail] = useState(null);

  const handleIconClick = (detail) => {
    setSelectedDetail(detail);
  };

  const handleMainMenu = () => {
    navigate("/");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await addRowToFirestore(formData);
    setModalIsOpen(false);
    alert("Registration Successful!");
  };

  const addRowToFirestore = async (data) => {
    try {
      await addDoc(collection(db, "registrations"), data);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <>
      {/* Lap Screen */}
      <div>
        <Navbar />
      </div>
      <div className="relative hidden sm:flex flex-col h-screen ">
        <div className="sm:flex hidden absolute right-0">
          <img src="/circle1.png" alt="/" className="sm:h-[70vh] sm:w-auto" />
        </div>
        <div className="sm:flex hidden absolute  left-0">
          <img src="/circle2.png" alt="/" className="sm:h-[70vh] sm:w-auto" />
        </div>
        <div className="relative flex flex-col items-center gap-6 mt-24 ">
          <div>
            <img
              src="/tyn-logo.png"
              alt="The Yellow Network"
              className="w-52 animate-fadeInDown"
            />
          </div>
          <div className="font-medium animate-fadeInDown delay-200">
            Presents
          </div>
          <div>
            <img
              src="/YInfinity.png"
              alt="YInfinity"
              className="w-[600px] -mt-56 animate-fadeInDown delay-400"
            />
          </div>
          <div className="container mx-auto px-4 -mt-32">
            <div className="flex flex-wrap justify-center mt-8">
              <div className="event-card m-4 p-6 bg-gray-200 opacity-60 shadow-lg rounded-lg flex items-center transition transform hover:scale-105 animate-fadeInUp delay-600">
                <div className="icon bg-customBlue text-white p-4 rounded-full mr-4">
                  <FaCalendarAlt className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Date</h3>
                  <p>July 15, 2024</p>
                </div>
              </div>
              <div className="event-card m-4 p-6 bg-gray-200 opacity-60 shadow-md rounded-lg flex items-center transition transform hover:scale-105 animate-fadeInUp delay-800">
                <div className="icon bg-customBlue text-white p-4 rounded-full mr-4">
                  <FaClock className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Time</h3>
                  <p>10:00 AM - 2:00 PM</p>
                </div>
              </div>
              <div className="event-card m-4 p-6 bg-gray-200 opacity-60 shadow-md rounded-lg flex items-center transition transform hover:scale-105 animate-fadeInUp delay-1000">
                <div className="icon bg-customBlue text-white p-4 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Venue</h3>
                  <p>PSG Street, City</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {" "}
        <div className="mx-auto flex flex-col gap-4 justify-center items-center mt-20 animate-fadeInUp delay-1200 relative bg-customBlue bg-opacity-50 text-white rounded-lg shadow-xl py-6 w-3/4">
          <div className="text-3xl font-semibold mb-4 text-center">
            About the Event
          </div>
          <div className="mb-4 max-w-3xl mx-auto text-center text-lg leading-relaxed">
            YInfinity is an exclusive invite-only CXO Innovation Summit, themed
            around "Sustainable Innovation through Ecosystems." This event
            brings together top executives and industry leaders to explore
            innovative strategies and network with pioneers in the field.
          </div>
          <div className="flex flex-row gap-2 justify-center w-max items-center bg-white rounded-full px-4 py-2 transition duration-300 ease-in-out transform hover:scale-110">
            <button
              className="w-max text-blue-500 hover:text-blue-500 font-bold rounded-full "
              onClick={() => setModalIsOpen(true)}
            >
              Register
            </button>
            <FaArrowRight
              className="cursor-pointer text-blue-500 hover:text-blue-700  transition-transform duration-300"
              onClick={() => setModalIsOpen(true)}
              size={20}
            />
          </div>
        </div>
        <div className="mt-16 text-center animate-fadeInUp delay-1400">
          <h2 className="text-3xl font-bold mb-6">Why Attend?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center p-8">
            {[
              {
                title: "Discover Cutting-Edge Strategies",
                description:
                  "Gain insights into sustainable innovation practices.",
                image: "/event1.webp",
                alt: "Discover Cutting-Edge Strategies",
              },
              {
                title: "Interact with Industry Leaders",
                description: "Connect with top executives and thought leaders.",
                image: "/event2.webp",
                alt: "Interact with Industry Leaders",
              },
              {
                title: "From the lens of Global Innovators",
                description:
                  "Explore how global enterprises leverage ecosystems for growth.",
                image: "/event3.webp",
                alt: "From the lens of Global Innovators",
              },
              {
                title: "Collaborate for Impact",
                description:
                  "Engage with academia and industry experts to drive co-innovation for enterprises.",
                image: "/event4.webp",
                alt: "Collaborate for Impact",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="h-40 p-6 bg-zinc-400 bg-opacity-20 shadow-lg rounded-2xl transition transform hover:scale-105 border border-white border-opacity-20"
              >
                <div className="text-lg font-semibold mb-2 text-customBlack px-1.5 py-1.5">
                  {item.title}
                </div>
                <div className="px-1.5 text-base  text-black">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 text-center animate-fadeInUp delay-1600">
          <h2 className="text-3xl font-bold mb-6">Agenda Highlights</h2>
          <div className="flex flex-wrap justify-center mb-12">
            {[
              "Panel discussion by TCS CMI CTO, Fortune 500 CTO & Startup CEO",
              "Emerging Tech / Startup Showcases",
              "Insights from the Israeli Innovation Ecosystem",
              "Academia as Innovation Hubs: Real-Life Case Studies from Head of Digital Transformation – ELGI",
            ].map((item, index) => (
              <div
                key={index}
                className={`m-4 p-6 bg-blue-500 bg-opacity-70 font-medium shadow-lg rounded-2xl text-white flex border justify-center items-center transition transform hover:scale-105 w-80 animate-fadeInUp delay-${
                  1800 + index * 200
                }`}
              >
                <div>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="fixed inset-0  items-center justify-center hidden sm:flex"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="w-[450px] max-h-[80vh] p-6 bg-white rounded-lg shadow-lg overflow-y-auto scrollbar-w-2  scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-gray-400 scrollbar-track-slate-100">
          <div className="text-2xl font-bold mb-4">Register for the Event</div>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="flex flex-row gap-4">
              <div className="flex-1">
                <label className="text-gray-900">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="text-gray-900">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-gray-900">Designation</label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div>
              <label className="text-gray-900">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="text-gray-900">Division</label>
              <input
                type="text"
                name="division"
                value={formData.division}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="text-gray-900">Sector / Industry</label>
              <input
                type="text"
                name="sector"
                value={formData.sector}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="text-gray-900">
                Would you like to share your thoughts on 'Sustainable innovation
                through ecosystem'?
              </label>
              <select
                name="shareThoughts"
                value={formData.shareThoughts}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div>
              <label className="text-gray-900">Contact Number (Whatsapp)</label>
              <input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="flex flex-row gap-4">
              <div className="flex-1">
                <label className="text-gray-900">Person to follow up</label>
                <input
                  type="text"
                  name="followUpPerson"
                  value={formData.followUpPerson}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="text-gray-900">Contact</label>
                <input
                  type="text"
                  name="followUpContact"
                  value={formData.followUpContact}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-gray-900">Meal Preferences</label>
              <select
                name="mealPreference"
                value={formData.mealPreference}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              >
                <option value="">Select</option>
                <option value="veg">Veg</option>
                <option value="non-veg">Non-Veg</option>
              </select>
            </div>
            <div>
              <label className="text-gray-900">
                Would you need any assistance with travel & accommodation?
              </label>
              <select
                name="travelAssistance"
                value={formData.travelAssistance}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                onClick={() => setModalIsOpen(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </Modal>
      {/* Mobile Screen */}
      <div className="relative sm:hidden h-screen flex flex-col justify-center">
        <div
          className="absolute left-4 top-4 text-white bg-blue-500 font-bold p-2 rounded-full opacity-70 cursor-pointer"
          onClick={handleMainMenu}
        >
          <FaArrowLeft size={12} />
        </div>
        <div className="relative flex flex-col items-center gap-12 mt-16 justify-center">
          <div>
            <img
              src="/tyn-logo.png"
              alt="The Yellow Network"
              className="w-40 animate-fadeInDown"
            />
          </div>
          <div className="font-medium text-lg animate-fadeInDown delay-200">
            Presents
          </div>
          <div>
            <img
              src="/YInfinity.png"
              alt="YInfinity"
              className="w-[640px] -mt-36 animate-fadeInDown delay-400"
            />
          </div>
        </div>
        <div className="absolute bottom-4 w-full">
          <div className="relative flex flex-col items-center">
            <div className="flex flex-row justify-around w-full px-4">
              <div
                className="icon bg-blue-500 text-white p-4 rounded-full cursor-pointer"
                onClick={() => handleIconClick("date")}
              >
                <FaCalendarAlt />
              </div>
              <div
                className="icon bg-blue-500 text-white p-4 rounded-full cursor-pointer"
                onClick={() => handleIconClick("time")}
              >
                <FaClock />
              </div>
              <div
                className="icon bg-blue-500 text-white p-4 rounded-full cursor-pointer"
                onClick={() => handleIconClick("venue")}
              >
                <FaMapMarkerAlt />
              </div>
            </div>
            <div className="absolute bottom-16 mt-8 text-center w-3/4">
              {selectedDetail === "date" && (
                <div className="event-card shadow-lg bg-gray-200 opacity-85 rounded-lg p-4 animate-fadeInUp event-card flex flex-col items-center transition transform hover:scale-105 animate-fadeInUp delay-1000">
                  <h3 className="text-lg font-bold">Date</h3>
                  <p>July 15, 2024</p>
                </div>
              )}
              {selectedDetail === "time" && (
                <div className="event-card shadow-lg bg-gray-200 opacity-85 rounded-lg p-4 animate-fadeInUp event-card flex flex-col items-center transition transform hover:scale-105 animate-fadeInUp delay-1000">
                  <h3 className="text-lg font-bold">Time</h3>
                  <p>10:00 AM - 2:00 PM</p>
                </div>
              )}
              {selectedDetail === "venue" && (
                <div className="event-card shadow-lg bg-gray-200 opacity-85 rounded-lg p-4 animate-fadeInUp event-card flex flex-col items-center transition transform hover:scale-105 animate-fadeInUp delay-1000">
                  <h3 className="text-lg font-bold">Venue</h3>
                  <p>PSG Street, City</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden mx-auto flex flex-col gap-8 justify-center items-center mt-16 animate-fadeInUp delay-1200 relative bg-blue-500 bg-opacity-70 text-white rounded-lg shadow-xl px-5 py-6 w-11/12">
        <div className="text-2xl font-semibold text-center">
          About the Event
        </div>
        <div className="mx-auto text-justify text-lg leading-relaxed">
          Ynifinity is an exclusive invite-only CXO Innovation Summit, themed
          around "Sustainable Innovation through Ecosystems." This event brings
          together top executives and industry leaders to explore innovative
          strategies and network with pioneers in the field.
        </div>
        <div className="flex flex-row gap-2 justify-center w-max items-center bg-white rounded-full px-4 py-2 transition duration-300 ease-in-out transform hover:scale-110">
          <button
            className="w-max text-blue-500 hover:text-blue-500 font-bold rounded-full "
            onClick={() => setModalIsOpen(true)}
          >
            Register
          </button>
          <FaArrowRight
            className="cursor-pointer text-blue-500 hover:text-blue-700  transition-transform duration-300"
            onClick={() => setModalIsOpen(true)}
            size={20}
          />
        </div>
      </div>
      <div className="mt-16 sm:hidden text-center animate-fadeInUp delay-1400">
        <h2 className="text-3xl font-bold mb-6">Why Attend?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center p-8">
          {[
            {
              title: "Discover Cutting-Edge Strategies",
              description:
                "Gain insights into sustainable innovation practices.",
              image: "/event1.webp",
              alt: "Discover Cutting-Edge Strategies",
            },
            {
              title: "Interact with Industry Leaders",
              description: "Connect with top executives and thought leaders.",
              image: "/event2.webp",
              alt: "Interact with Industry Leaders",
            },
            {
              title: "From the lens of Global Innovators",
              description:
                "Explore how global enterprises leverage ecosystems for growth.",
              image: "/event3.webp",
              alt: "From the lens of Global Innovators",
            },
            {
              title: "Collaborate for Impact",
              description:
                "Engage with academia and industry experts to drive co-innovation for enterprises.",
              image: "/event4.webp",
              alt: "Collaborate for Impact",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="h-52 p-6 bg-zinc-400 bg-opacity-20 shadow-lg rounded-2xl transition transform hover:scale-105 border border-white border-opacity-20"
            >
              <div className="text-lg font-semibold mb-2 text-customBlack px-1.5 py-1.5">
                {item.title}
              </div>
              <div className="px-1.5 text-base text-black">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 sm:hidden text-center animate-fadeInUp delay-1600">
        <h2 className="text-3xl font-bold mb-6">Agenda Highlights</h2>
        <div className="flex flex-wrap justify-center mb-12">
          {[
            "Panel discussion by TCS CMI CTO, Fortune 500 CTO & Startup CEO",
            "Emerging Tech / Startup Showcases",
            "Insights from the Israeli Innovation Ecosystem",
            "Academia as Innovation Hubs: Real-Life Case Studies from Head of Digital Transformation – ELGI",
          ].map((item, index) => (
            <div
              key={index}
              className={`m-4 p-6 bg-blue-500 bg-opacity-70 font-medium shadow-lg rounded-2xl text-white flex border justify-center items-center transition transform hover:scale-105 w-80 animate-fadeInUp delay-${
                1800 + index * 200
              }`}
            >
              <div>{item}</div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="fixed inset-0 flex items-center sm:hidden justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className=" max-h-[70vh] p-6 bg-white rounded-lg shadow-lg overflow-y-auto scrollbar-w-2  scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-gray-400 scrollbar-track-slate-100 relative">
          <button
            onClick={() => setModalIsOpen(false)}
            className="absolute top-[26px] right-2 text-gray-900 hover:text-gray-900"
          >
            <FaTimes size={20} />
          </button>
          <div className="text-xl font-bold mb-4">Register for the Event</div>
          <form onSubmit={handleFormSubmit} className="space-y-4 text-sm">
            <div className="">
              <label className="text-gray-900">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="">
              <label className="text-gray-900">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div>
              <label className="text-gray-900">Designation</label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div>
              <label className="text-gray-900">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="text-gray-900">Division</label>
              <input
                type="text"
                name="division"
                value={formData.division}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="text-gray-900">Sector / Industry</label>
              <input
                type="text"
                name="sector"
                value={formData.sector}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="text-gray-900">
                Would you like to share your thoughts on 'Sustainable innovation
                through ecosystem'?
              </label>
              <select
                name="shareThoughts"
                value={formData.shareThoughts}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div>
              <label className="text-gray-900">Contact Number (Whatsapp)</label>
              <input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="">
              <label className="text-gray-900">Person to follow up</label>
              <input
                type="text"
                name="followUpPerson"
                value={formData.followUpPerson}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="">
              <label className="text-gray-900">Contact</label>
              <input
                type="text"
                name="followUpContact"
                value={formData.followUpContact}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="text-gray-900">Meal Preferences</label>
              <select
                name="mealPreference"
                value={formData.mealPreference}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              >
                <option value="">Select</option>
                <option value="veg">Veg</option>
                <option value="non-veg">Non-Veg</option>
              </select>
            </div>
            <div>
              <label className="text-gray-900">
                Would you need any assistance with travel & accommodation?
              </label>
              <select
                name="travelAssistance"
                value={formData.travelAssistance}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="flex">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-full w-full"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default EventPage;
