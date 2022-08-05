import React from "react";
import ImageHero from "../components/ImageHero.js";
import TextHero from "../components/TextHero.js";
import image from "../images/pratibha18.jpg";

const Donations = () => {

  return (
		<div className="Container">
			<ImageHero
				src={image}
				title="Our Charity Work"
			/>
			<TextHero
				buttonText="Donate"
				link="//widgets.justgiving.com/Button/Redirect?p=eyJUZXh0IjoiQ29kZSBZb3VyIEZ1dHVyZSIsIklkIjoiN2I4MDA2YjQtZjk2OC00NDdjLTk1NDEtMDA3MTg3MTkxZTU3IiwiQ2hhcml0eUlkIjoyNzg4NDg3LCJTaXplIjoibCIsIlJlZmVyZW5jZSI6IjEyMyIsIlR5cGUiOiJDaGFyaXR5RG9uYXRlIn0="
				title="Donate"
				subtitle1="Thank you for considering donating to our organisation.
        Your contribution will allow us to continue to fund events, and to provide cultural spaces for our members, and the wider community to gather, and celebrate Nepalese culture. If you would like to donate to us directly, you can make a donation to the following account."
				subtitle2="Pratibha Nakshatra"
				subtitle3="Account number: 12345678. Sort Code: 12-34-56"
				subtitle4="Alternatively, you can also donate to us via Just Giving - click the button below to be taken to their website."
				variant="yellow"
			/>
			<img
				src="https://www.pratibhanakshatra.org/public/storage/blog/1595507611pratibha4.jpg"
				alt="ladies in cultural costume"
				srcSet=""
				width="100%"
			/>
		</div>
	);
};

export default Donations;