import React from "react";
import TextHero from "../components/TextHero";

const About = () => {
	return (
		<div>
			{/* image is to be replace with imagehero after solving the width issue  */}
			<img
				className="placeholderImg"
				src="https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/289957088_953273682107894_7744271686326919989_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BDKIhDQClSwAX-dBj9P&tn=ULLdwlnZTBVRSPJe&_nc_ht=scontent-lhr8-1.xx&oh=00_AT9hCHHNBHf4TSx39lypCRgBlQvOpYByMxJ9jZD1R2DVBg&oe=62E371B8"
				alt="Placeholder"
			/>

			<TextHero
				subtitle="In this subtitle you can write a longer text"
				title="Something about us"
				variant="red"
			/>
		</div>
	);
};

export default About;
