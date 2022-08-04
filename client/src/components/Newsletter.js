import React, { useState } from "react";
import { FaInstagramSquare } from "react-icons/fa";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("https://pratibha-nakshtra.herokuapp.com/api/email", {
			method: "post",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email: email }),
		}).then(() => {
			console.log(`${email} has been added to mailing list`);
		});
  };

  return (
		<div>
			<div className="newsletter-box">
				<form id="email-form" onSubmit={handleSubmit}>
					<input
						// please delete  className="email-form" if it was only used for css purpose since I have styled the input tag already using different selector
						// className="email-form"
						placeholder="Join Our Mailing List!"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
					/>
					<button className="signup-button">Register</button>
				</form>
			</div>
		</div>
	);
};

export default Newsletter;