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
        // window.location="/";
        // console.log(response);
    } catch (error) {
        console.error(error.message);
    }


    setSubmitted(true);
};

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
<<<<<<< HEAD
				<form id="contact-form" onSubmit={submitForm}>
=======
				<form
					id="contact-form"
					onSubmit={submitForm}
					// method="POST"
				>
>>>>>>> main
					<div className="form-group">
						<label htmlFor="name">Name: </label>
						<input
							type="text"
							name="name"
							className="form-control"
							placeholder="type name here"
<<<<<<< HEAD
							value={formDetails.name}
							onChange={handleChange("name")}
=======
							value={name}
							onChange={(e) => setName(e.target.value)}
>>>>>>> main
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
<<<<<<< HEAD
							value={formDetails.email}
							onChange={handleChange("email")}
=======
							value={email}
							onChange={(e) => setEmail(e.target.value)}
>>>>>>> main
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="message">Message: </label>
						<textarea
							className="form-control"
							rows="5"
							placeholder="type message here"
<<<<<<< HEAD
							value={formDetails.message}
							onChange={handleChange("message")}
							minLength="4"
							required
=======
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							required
							minLength="4"
>>>>>>> main
						></textarea>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		</>
	);
}

export default Contact;
