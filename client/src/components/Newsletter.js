import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:3100/api/email", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ "email": email }),
    }).then(() => {
      console.log(`${email} has been added to mailing list`);
    });
  };

  return (
    <div>
      <div className="newsletter-box">
        <form id="email-form" onSubmit={handleSubmit}>
          <input
          className="email-form"
          placeholder="enter email here"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          />
          <button className="signup-button">Sign up for our newsletter!</button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;