import React from "react";
import image from "./images/pratibha3.png";

const Donations = () => {
  return (
    <div className="dContainer">
    <h1>Donations</h1>
    <p>Thank you for considering donating to our Organisation.
      Your contribution will allow us to continue to fund events, and provide a
      cultural space for our members to gather, and celebrate Nepalese culture.
    </p>
    <img className="dImage" src={image} alt="group of children" />
    <button className="button">Thank you for your Donation</button>
    </div>
  );
};

export default Donations;