import React from "react";
import TextHero from "../components/TextHero";
import Contact from "../components/Contact";
import ImageHero from "../components/ImageHero.js";
import image from "../images/homepage-image.jpeg";


const About = () => {
	return (
		<div>
			<ImageHero
				src={image}
				title="About Us"
			/>
			<TextHero
				subtitle1="This should contain 3-4 paragraph describing the association, what it does, why. Eventually we can use betterReact elements, with the ability to interleaf Images to the side and other visual accents."

				subtitle2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum varius sit amet mattis vulputate enim nulla aliquet. Massa placerat duis ultricies lacus. In eu mi bibendum neque egestas congue quisque egestas diam. Etiam erat velit scelerisque in dictum non. Lectus urna duis convallis convallis tellus. Hendrerit dolor magna eget est lorem ipsum dolor sit. Sed odio morbi quis commodo odio aenean. Eget sit amet tellus cras adipiscing enim."

				subtitle3="Amet nisl suscipit adipiscing bibendum est ultricies integer. Parturient montes nascetur ridiculus mus mauris. Auctor urna nunc id cursus metus aliquam eleifend mi. Euismod lacinia at quis risus sed vulputate. Mauris a diam maecenas sed enim ut sem. Id venenatis a condimentum vitae sapien pellentesque habitant morbi. Sed augue lacus viverra vitae congue. Purus in mollis nunc sed id semper."
				title="Something about us
"
				variant="title-only"
			/>
			<Contact />
		</div>
	);
};

export default About;
