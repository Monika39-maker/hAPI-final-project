import React from "react";

function Contact() {
    return (
			<>
				<div>Contact us</div>
				<div>
					<form
						id="contact-form"
						// onSubmit={}
						method="POST"
					>
						<div className="form-group">
							<label htmlFor="name">Name: </label>
							<input
								type="text"
								name="name"
								className="form-control"
								placeholder="type name here"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="email">Email address: </label>
							<input
								type="email"
								name="email"
								placeholder="type email here"
								className="form-control"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="message">Message: </label>
							<textarea
								className="form-control"
								rows="5"
								placeholder="type message here"
							></textarea>
						</div>
						<button type="submit">Submit</button>
					</form>
				</div>
			</>
		);
}

export default Contact;