import React from "react";
import Navbar from "./Navbar";

const CompanyAboutPage = () => {
  return (
    <div>
      <Navbar />
      <img src="https://logodix.com/logo/576454.png"></img>
      <h5 style={{ marginInlineStart: "20px" }}>
        Since its inception in 1989 by Gary Burrell and Dr. Min Kao, <br></br>
        Garmin has evolved as the leading, worldwide provider of navigation,
        <br></br> communication and information devices and applications, most
        of which are enabled by GPS technology.
      </h5>
    </div>
  );
};

export default CompanyAboutPage;
