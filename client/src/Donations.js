import React from "react";
import image from "./images/pratibha3.png";

const Donations = () => {
  return (
    <div className="dContainer">
    <h1>Donations</h1>
    <p>Thank you for considering donating to our Organisation.
      Your contribution will allow us to continue to fund events, and provide a
      cultural space for our members to gather, and celebrate Nepalese culture.
      If you would like to donate to us directly, you can make a doantion to the following account:
    </p>
    <p>Pratibha Nakshatra</p>
    <p>Account number: 12345678</p>
    <p>Sort Code: 12-34-56</p>
    <p>Alternatively, you can also donate to us via Just Giving - click the button below to be taken to their website.</p>
    <img className="dImage" src={image} alt="group of children" />
      <a href="https://www.justgiving.com/"><button className="button">Thank you for your Donation</button></a>
    </div>
  );
};

export default Donations;