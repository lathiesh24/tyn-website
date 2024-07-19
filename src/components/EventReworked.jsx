import React, { useState } from "react";
import Navbar from "./Navbar";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import Footer from "./Footer";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import Modal from "react-modal";

const EventReworked = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    designation: "",
    company: "",
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
      <Navbar />

      <div
        className="relative bg-center bg-cover h-screen"
        style={{
          backgroundImage:
            'linear-gradient(to right, #FFF25CF2, rgba(255, 242, 92, 0)), url("/eventbg.png")',
        }}
      >
        <div className="absolute inset-0 sm:justify-end items-center sm:text-right p-4 flex sm:grid sm:grid-cols-2">
          <div className="flex flex-col justify-center items-center sm:items-end gap-12 sm:col-span-1 sm:pr-32">
            <div>
              <img
                src="/YInfinity-event.png"
                alt="Y Infinity event"
                className="sm:h-60"
              />
            </div>
            <div className="text-2xl text-customBlack font-semibold sm:font-medium">
              September 10
            </div>
            <div className="text-2xl text-customBlack font-semibold sm:font-medium">
              Sofitel BKC, Mumbai
            </div>
            <div className="text-2xl text-customBlack font-semibold sm:font-medium">
              4:30pm Onwards
            </div>
          </div>
          <div></div>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center my-12 sm:my-16 text-3xl sm:text-5xl">
        <div className="relative">
          <div className="absolute -top-6 -right-8">
            <img
              src="doublequotes.jpg"
              alt="Double Quotes"
              className="h-7 w-7 sm:h-8 sm:w-8"
            />
          </div>
          <div>
            <span className="text-customBlack">Welcome to </span>
            <span className="bg-custom-gradient text-transparent bg-clip-text">
              Ynifity
            </span>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 px-8 sm:px-16 xl:px-32 place-content-between items-center">
        <div className="space-y-4">
          <div className="text-customGreyishBlack leading-loose text-lg">
            Unlock the potential of Ecosystem and lead your innovation game!
            Ynfinity is an invite-only CXO event themed around 'Sustainable
            innovation through ecosystem'. Gain access to the exclusive event
            and discover strategies and insights on how ecosystems can empower
            innovation in your organization.
          </div>
          <div>
            <button
              className="flex flex-row items-center justify-center gap-2 bg-customBlue text-white py-2 px-4 rounded-md"
              onClick={openModal}
            >
              <div>Register</div>
              <div>
                <FaArrowRight />
              </div>
            </button>
          </div>
        </div>
        <div className="hidden sm:flex justify-center">
          <img src="/Group 1.png" alt="event" className="w-72" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 sm:my-32 mx-8">
        <div className="hidden sm:flex sm:flex-col text-5xl font-medium items-center justify-center gap-4">
          <div className="relative sm:flex gap-4">
            <div className="absolute -right-8 -top-6 ">
              <img
                src="doublequotes.jpg"
                alt="Double Quotes"
                className="h-8 w-8"
              />
            </div>
            <span className="text-customBlue">Y</span>
            <span className="text-customBlack">I need to</span>
          </div>
          <div className="">
            <span>attend</span>
          </div>
        </div>

        <div className="flex sm:hidden text-3xl font-medium items-center justify-center">
          <div className="relative my-12">
            <div className="absolute -right-8 -top-6 ">
              <img
                src="doublequotes.jpg"
                alt="Double Quotes"
                className="h-8 w-8"
              />
            </div>
            <div className="text-customBlack ">Why attend?</div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2 bg-bgBlue px-6 py-6 rounded-lg ">
            <div className="text-customBlack font-medium text-xl">
              Discover Cutting-Edge Strategies
            </div>
            <div className="text-customGreyishBlack">
              Gain insights into sustainable innovation practices
            </div>
          </div>
          <div className="flex flex-col gap-2 bg-bgBlue px-6 py-6 rounded-lg ">
            <div className="text-customBlack font-medium text-xl">
              Interact with Industry Leader
            </div>
            <div className="text-customGreyishBlack">
              Connect with top executives and thought leaders
            </div>
          </div>

          <div className="flex flex-col gap-2 bg-bgBlue px-6 py-6 rounded-lg ">
            <div className="text-customBlack font-medium text-xl">
              From the lens of Global Innovators
            </div>
            <div className="text-customGreyishBlack">
              Explore how global enterprises leverage ecosystems for growth
            </div>
          </div>
          <div className="flex flex-col gap-2 bg-bgBlue  px-6  py-6 rounded-lg ">
            <div className="text-customBlack font-medium text-xl">
              Collaborate for Impact
            </div>
            <div className="text-customGreyishBlack">
              Discover ecosystems can leverage academia for excelling in
              Innovation
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-8 sm:px-16">
        <div className="relative flex justify-center my-16 sm:my-0 items-center text-3xl sm:text-5xl font-medium mx-auto">
          <div className="absolute -right-8 -top-6 ">
            <img
              src="doublequotes.jpg"
              alt="Double Quotes"
              className="h-8 w-8"
            />
          </div>
          Probable Attendees
        </div>

        <div className="text-xl sm:pt-20 pb-12 text-customGreyishBlack">
          15+ CXOs from the likes of
        </div>

        <div className="flex flex-col sm:flex-row gap-16 sm:gap-8 justify-around items-center ">
          <div>
            <img src="/tata.png" alt="TCS" className="w-[200px]" />
          </div>
          <div>
            <img src="/pwcpng.png" alt="PWC" className="w-[150px]" />
          </div>
          <div>
            <img src="/l&t.png" alt="L&T" className="w-[300px]" />
          </div>
          <div>
            <img src="/godrej.png" alt="Godrej" className="w-[200px]" />
          </div>
          <div>
            <img src="/viacom.png" alt="Viacom" className="w-[200px]" />
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:px-16">
        <div className="relative flex justify-center items-center text-3xl sm:text-5xl font-medium py-16 sm:py-32 mx-auto">
          <div className="absolute top-12 -right-8 sm:top-24  sm:-right-8">
            <img
              src="doublequotes.jpg"
              alt="Double Quotes"
              className="h-7 w-7 sm:h-8 sm:w-8"
            />
          </div>
          Event Highlights
        </div>
        <div className="flex flex-col sm:flex-row gap-12 justify-center items-center">
          <div className="p-4 bg-white shadow-customAdCard rounded-xl w-80 h-28 sm:h-48 xl:h-32 flex items-center justify-center">
            <div>
              Panel discussion by TCS CMI CTO, Fortune 500 CTO & Startup CEOs
            </div>
          </div>
          <div className="p-4 bg-white shadow-customAdCard rounded-xl w-80  h-28 sm:h-48 xl:h-32 flex items-center justify-center">
            <div>Insights from the Israeli Innovation Ecosystem</div>
          </div>
          <div className="p-4 bg-white shadow-customAdCard rounded-xl w-80 h-28 sm:h-48 xl:h-32 flex items-center justify-center">
            <div>Emerging Tech/ Startup Showcases</div>
          </div>
          <div className="p-4 bg-white shadow-customAdCard rounded-xl w-80 h-28 sm:h-48 xl:h-32 flex items-center justify-center">
            <div>
              Academia as Innovation Hubs: Real-life case study from Head of
              Digital Transformation - ELGi
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <Footer />
      </div>

      {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="fixed inset-0 flex items-center justify-center z-50 sm:hidden"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="max-h-[70vh] p-6 bg-white rounded-lg shadow-lg overflow-y-auto relative w-11/12 max-w-md mx-auto">
          <button
            onClick={() => setModalIsOpen(false)}
            className="absolute top-2 right-2 text-gray-900 hover:text-gray-900"
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
      </Modal> */}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="fixed inset-0 flex items-center justify-center z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="w-11/12 max-h-[70vh] sm:w-[450px] sm:max-h-[70vh] p-4 sm:p-6 bg-white rounded-lg shadow-lg overflow-y-auto relative">
          <button
            onClick={() => setModalIsOpen(false)}
            className="absolute top-4 right-4 text-gray-900 hover:text-gray-900"
          >
            <FaTimes size={20} />
          </button>
          <div className="text-2xl font-bold mb-4">Register for the Event</div>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
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
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="text-gray-900">Person to follow up</label>
                <input
                  type="text"
                  name="followUpPerson"
                  value={formData.followUpPerson}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
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

export default EventReworked;
