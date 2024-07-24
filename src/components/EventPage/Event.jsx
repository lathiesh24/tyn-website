import React, { useState } from "react";
import Navbar from "../Navbar";
import Modal from "react-modal";
import {
  FaArrowRight,
  FaLightbulb,
  FaUsers,
  FaGlobe,
  FaHandshake,
  FaUniversity,
  FaStar,
  FaMicrophone,
  FaTimes,
} from "react-icons/fa";
import Footer from "../Footer";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

const Event = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
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

  const openModal = () => {
    setModalIsOpen(true);
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div
        className="relative bg-center bg-cover h-screen"
        style={{ backgroundImage: 'url("/bgevent11.jpg")' }}
      >
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-center p-4">
          <div className="flex flex-col justify-center mx-auto bg-white bg-opacity-75 py-5 pl-4 pr-16 rounded-2xl font-medium items-start">
            <div className="text-lg opacity-100 font-semibold text-customBlack">
              INNOVATION CONFERENCE
            </div>
            <div className="opacity-100 py-12">
              <img src="/YInfinity.png" alt="Logo" className="h-32" />
            </div>
            <hr className="w-1/2 border-customBlue border-[1px] mb-2 -mt-4" />
            <div className="flex flex-row gap-10">
              <div className="text-base uppercase font-medium text-customBlack text-left">
                <div className="">CONFERENCE DAY</div>
                <div className="">July 15, 2024</div>
              </div>
              <div className="text-base uppercase font-medium text-customBlack text-left">
                <div className="">VENUE</div>
                <div className="">Coimbatore</div>
              </div>
            </div>
            <hr className="w-2/5 border-customBlue border-[1px] mt-2 mb-6" />
            <div
              onClick={openModal}
              className="flex flex-row gap-2 my-4 justify-center w-max cursor-pointer font-semibold items-center text-customBlue hover:text-white bg-white hover:bg-customBlue rounded-full px-4 py-2 transition duration-300 ease-in-out transform hover:scale-110"
            >
              <button className="w-max font-bold rounded-full">Register</button>
              <FaArrowRight className="transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-16 sm:flex-row my-24 px-4 sm:px-24">
        <div className="flex flex-col justify-start items-start">
          <div className="mx-auto relative text-3xl font-bold mb-6 w-max flex justify-center items-center">
            Event Overview
            <div className="absolute -top-8 -right-8 h-8 w-8">
              <img
                src="doublequotes.jpg"
                alt="Double Quotes"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="max-w-3xl text-lg leading-relaxed text-customGreyishBlack text-justify">
            YInfinity is an exclusive invite-only CXO Innovation Summit, themed
            around "Sustainable Innovation through Ecosystems." This event
            brings together top executives and industry leaders to explore
            innovative strategies and network with pioneers in the field.
          </div>
        </div>
        <div className="relative w-full sm:w-96">
          <div className="relative z-0 p-4">
            <img
              src="/Group 1.png"
              alt="event-overview"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="text-center animate-fadeInUp delay-1400">
        <div className="mx-auto relative text-3xl font-bold my-12 w-max flex justify-center items-center">
          Why Attend?
          <div className="absolute -top-8 -right-8 h-8 w-8">
            <img
              src="doublequotes.jpg"
              alt="Double Quotes"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center p-8">
          {[
            {
              title: "Discover Cutting-Edge Strategies",
              description:
                "Gain insights into sustainable innovation practices.",
              icon: FaLightbulb,
              alt: "Discover Cutting-Edge Strategies",
            },
            {
              title: "Interact with Industry Leaders",
              description: "Connect with top executives and thought leaders.",
              icon: FaUsers,
              alt: "Interact with Industry Leaders",
            },
            {
              title: "From the lens of Global Innovators",
              description:
                "Explore how global enterprises leverage ecosystems for growth.",
              icon: FaGlobe,
              alt: "From the lens of Global Innovators",
            },
            {
              title: "Collaborate for Impact",
              description:
                "Engage with academia and industry experts to drive co-innovation for enterprises.",
              icon: FaHandshake,
              alt: "Collaborate for Impact",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center p-6 gap-8 bg-zinc-400 bg-opacity-20 shadow-lg rounded-2xl transition transform hover:scale-105 border border-white border-opacity-20"
            >
              <item.icon className="w-12 h-12 text-customBlue" />
              <div className="text-left">
                <div className="text-lg font-semibold mb-2 text-customBlack">
                  {item.title}
                </div>
                <div className="text-base text-black">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center animate-fadeInUp delay-1600 relative">
        <div className="mx-auto relative text-3xl font-bold mb-6 w-max flex justify-center items-center">
          Agenda Highlights
          <div className="absolute -top-8 -right-8 h-8 w-8">
            <img
              src="doublequotes.jpg"
              alt="Double Quotes"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center p-8">
          {[
            {
              title:
                "Panel discussion by TCS CMI CTO, Fortune 500 CTO & Startup CEO",
              icon: FaMicrophone,
            },
            {
              title: "Emerging Tech / Startup Showcases",
              icon: FaLightbulb,
            },
            {
              title: "Insights from the Israeli Innovation Ecosystem",
              icon: FaStar,
            },
            {
              title:
                "Academia as Innovation Hubs: Real-Life Case Studies from Head of Digital Transformation – ELGI",
              icon: FaUniversity,
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`relative m-4 p-8 bg-customBlue shadow-lg rounded-2xl text-white flex items-center transition transform hover:scale-105 animate-fadeInUp delay-${
                1800 + index * 200
              }`}
            >
              <item.icon className="w-12 h-12 mr-4 text-white" />
              <div>
                <div className="text-lg font-semibold mb-2">{item.title}</div>
              </div>
              <div
                className={`absolute top-2 right-2 h-8 w-8 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold`}
              >
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr />
      <div>
        <Footer />
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="fixed inset-0 flex items-center sm:hidden justify-center z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="max-h-[70vh] p-6 bg-white rounded-lg shadow-lg overflow-y-auto scrollbar-w-2 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-gray-400 scrollbar-track-slate-100 relative">
          <button
            onClick={() => setModalIsOpen(false)}
            className="absolute top-[26px] right-2 text-gray-900 hover:text-gray-900"
          >
            <FaTimes size={20} />
          </button>
          <div className="text-xl font-bold mb-4">Register for the Event</div>
          <form onSubmit={handleFormSubmit} className="space-y-4 text-sm">
            <div>
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
            <div>
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
            <div>
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
            <div>
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

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="fixed inset-0 items-center justify-center hidden mt-24 sm:flex z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="w-[450px] max-h-[80vh] p-6 bg-white rounded-lg shadow-lg overflow-y-auto scrollbar-w-2 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-gray-400 scrollbar-track-slate-100 relative">
          <button
            onClick={() => setModalIsOpen(false)}
            className="absolute top-4 right-4 text-gray-900 hover:text-gray-900"
          >
            <FaTimes size={20} />
          </button>
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
                type="submit"
                className="bg-customBlue rounded-full text-white px-4 py-2 w-full hover:scale-110 hover:text-customBlue hover:bg-white hover:border-customBlue hover:border-2 font-medium"
              >
                Register
              </button>
            </div>
          </form>
          <div>
            <img
              src="/tyn-logo.png"
              alt="Logo"
              className="flex mx-auto justify-center items-center w-48 mt-8"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Event;
