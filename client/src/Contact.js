import React, { useState } from "react";

function Contact() {
const [submitted, setSubmitted] = useState(false);
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");


function submitForm(event) {
	event.preventDefault();
	console.log(name);
	console.log(email);
	console.log(message);

	console.log("sending to server");
    fetch("/api/new-contact", {
			method: "POST",
			body: JSON.stringify({
				name: name,
				email: email,
				message: message,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});


//  setSubmitted(true);

}

if (submitted) {
	return (
		<>
			<div>Thank you!</div>
			<div>We'll be in touch soon.</div>
		</>
	);
}

	return (
		<>
			<div>Contact us</div>
			<div>
				<form id="contact-form" onSubmit={submitForm}>
					<div className="form-group">
						<label htmlFor="name">Name: </label>
						<input
							type="text"
							name="name"
							className="form-control"
							placeholder="type name here"
							value={name}
							onChange={(e) => setName(e.target.value)}
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
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="message">Message: </label>
						<textarea
							className="form-control"
							rows="5"
							placeholder="type message here"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							minLength="4"
							required
						></textarea>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		</>
	);
}

export default Contact;