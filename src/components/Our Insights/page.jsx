import React from "react";
import WhitepaperOne from "./WhitepaperOne";
import Navbar from "../Navbar";
import PartnerLandScape from "./PartnerLandScape";
import Footer from "../Footer";
import Whitepapers from "./Whitepapers";

const page = () => {
  return (
    <div className="flex flex-col">
      <div>
        <Navbar />
      </div>
      <div className="">
        {/* <Whitepapers/> */}
        <WhitepaperOne/>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default page;
