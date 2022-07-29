import React, { useState } from "react";

function Contact() {
const [submitted, setSubmitted] = useState(false);

const [formDetails, setFormDetails] =  useState([{
	name: "",
	email: "",
	message: "",
}]);

const handleChange = (input) => (e) => {
	setFormDetails({ ...formDetails, [input]: e.target.value });
};


const submitForm = async(event) => {
	event.preventDefault();

	try {
        const body = formDetails;

        const response = await fetch("http://localhost:3000/api/new-contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });
    } catch (error) {
        console.error(error.message);
    }

    setSubmitted(true);
};

if (submitted) {
	return (
		<>
			<div className="contact">
				<div className="contact-message-received">
					<h2>Thank you!</h2>
					<h2>We'll be in touch soon.</h2>
				</div>
			</div>
		</>
	);
}

	return (
		<>
			<div className="contact">
				<h2>Contact us</h2>
				<div>
					<form id="contact-form" onSubmit={submitForm}>
						<div className="form-group">
							<label htmlFor="name">Name: </label>
							<input
								type="text"
								name="name"
								className="form-control"
								placeholder="type name here"
								value={formDetails.name}
								onChange={handleChange("name")}
								required
							/>
						</div>
						<div className="form-group">
							<label htmlFor="email">Email address: </label>
							<input
								type="email"
								name="email"
								placeholder="type email here"
								className="form-control"
								value={formDetails.email}
								onChange={handleChange("email")}
								required
							/>
						</div>
						<div className="form-group">
							<label htmlFor="message">Message: </label>
							<textarea
								className="form-control"
								rows="5"
								placeholder="type message here"
								value={formDetails.message}
								onChange={handleChange("message")}
								minLength="4"
								required
							></textarea>
						</div>
						<button type="submit">Submit</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default Contact;
