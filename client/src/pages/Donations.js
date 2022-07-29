import React from "react";
// import image from "./images/pratibha3.png";
import ImageHero from "../components/ImageHero.js";
import TextHero from "../components/TextHero.js";

const Donations = () => {
  return (
		<div className="dContainer">
			<ImageHero
				src="https://www.pratibhanakshatra.org/public/storage/gallery/1595692330gal5.png"
				title="Our Charity Work"
			/>
			<TextHero
				buttonText="Donate"
				link="//widgets.justgiving.com/Button/Redirect?p=eyJUZXh0IjoiQ29kZSBZb3VyIEZ1dHVyZSIsIklkIjoiN2I4MDA2YjQtZjk2OC00NDdjLTk1NDEtMDA3MTg3MTkxZTU3IiwiQ2hhcml0eUlkIjoyNzg4NDg3LCJTaXplIjoibCIsIlJlZmVyZW5jZSI6IjEyMyIsIlR5cGUiOiJDaGFyaXR5RG9uYXRlIn0="
				title="Thank you for considering donating to our Organisation. Your contribution will allow us to continue to fund events, and provide cultural space for our members to gather, and celebrate Nepalese culture. If you would like to donate to us directly, you can make adoantion to the following account:
		Pratibha Nakshatra
		Account number: 12345678
		Sort Code: 12-34-56
Alternatively, you can also donate to us via Just Giving - click the button below to be taken to their website."
				variant="blue"
			/>
			{/* <a
				href="//widgets.justgiving.com/Button/Redirect?p=eyJUZXh0IjoiQ29kZSBZb3VyIEZ1dHVyZSIsIklkIjoiN2I4MDA2YjQtZjk2OC00NDdjLTk1NDEtMDA3MTg3MTkxZTU3IiwiQ2hhcml0eUlkIjoyNzg4NDg3LCJTaXplIjoibCIsIlJlZmVyZW5jZSI6IjEyMyIsIlR5cGUiOiJDaGFyaXR5RG9uYXRlIn0="
				target="_blank"
				rel="noreferrer"
			>
				<img
					src="//widgets.justgiving.com/Button?p=eyJUZXh0IjoiQ29kZSBZb3VyIEZ1dHVyZSIsIklkIjoiN2I4MDA2YjQtZjk2OC00NDdjLTk1NDEtMDA3MTg3MTkxZTU3IiwiQ2hhcml0eUlkIjoyNzg4NDg3LCJTaXplIjoibCIsIlJlZmVyZW5jZSI6IjEyMyIsIlR5cGUiOiJDaGFyaXR5RG9uYXRlIn0="
					alt="Donation Button"
				/>
			</a> */}
		</div>
	);
};

export default Donations;