import React, { useState } from "react";

const Newsletter = () => {
  const [submitted, setSubmitted] = useState(false);

  function submitForm() {
    console.log(submitted + "TO DO");
    setSubmitted(true);
  }
  return (
    <div>
      <div className="newsletter-box">
        <form id="email-form">
          <input className="email-form"></input>
          <button className="signup-button" onClick={submitForm}>Sign up for our newsletter!</button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;