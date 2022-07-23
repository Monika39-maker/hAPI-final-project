import React, { useState } from "react";

function Contact() {
	const [submitted, setSubmitted] = useState(false);

	function submitForm() {
		setSubmitted(true);
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
				<form id="contact-form" onSubmit={submitForm} >
					<div className="form-group">
						<label htmlFor="name">Name: </label>
						<input type="text" name="name" className="form-control" placeholder="type name here" required />
					</div>
					<div className="form-group">
						<label htmlFor="email">Email address: </label>
						<input type="email" name="email" placeholder="type email here" className="form-control" required />
					</div>
					<div className="form-group">
						<label htmlFor="message">Message: </label>
						<textarea className="form-control" rows="5" placeholder="type message here" required minLength="4"></textarea>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		</>
	);
}

export default Contact;