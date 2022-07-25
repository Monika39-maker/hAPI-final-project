import React from "react";
import Placeholder from "./images/PlaceholderImage.jpeg";
import Contact from "../Contact";

const About = () => {
	return (
		<div>
			{/* image is to be replace with imagehero after solving the width issue  */}
			<img
				className="placeholderImg"
				src="https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/289957088_953273682107894_7744271686326919989_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BDKIhDQClSwAX-dBj9P&tn=ULLdwlnZTBVRSPJe&_nc_ht=scontent-lhr8-1.xx&oh=00_AT9hCHHNBHf4TSx39lypCRgBlQvOpYByMxJ9jZD1R2DVBg&oe=62E371B8"
				alt="Placeholder"
			/>
			<p>Something about us</p>
			<p>Lorem ipsum</p>
			<p>
				This should contain 3-4 paragraph describing the association, what it
				does, why. Eventually we can use betterReact elements, with the ability
				to interleaf Images to the side and other visual accents. Lorem ipsum
				dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Interdum varius sit amet
				mattis vulputate enim nulla aliquet. Massa placerat duis ultricies
				lacus. In eu mi bibendum neque egestas congue quisque egestas diam.
				Etiam erat velit scelerisque in dictum non. Lectus urna duis convallis
				convallis tellus. Hendrerit dolor magna eget est lorem ipsum dolor sit.
				Sed odio morbi quis commodo odio aenean. Eget sit amet tellus cras
				adipiscing enim. Amet nisl suscipit adipiscing bibendum est ultricies
				integer. Parturient montes nascetur ridiculus mus mauris. Auctor urna
				nunc id cursus metus aliquam eleifend mi. Euismod lacinia at quis risus
				sed vulputate. Mauris a diam maecenas sed enim ut sem. Id venenatis a
				condimentum vitae sapien pellentesque habitant morbi. Sed augue lacus
				viverra vitae congue. Purus in mollis nunc sed id semper.
			</p>
			<Contact />
		</div>
	);
};

export default About;
