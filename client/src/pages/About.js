import React from "react";
import TextHero from "../components/TextHero";
import Contact from "../Contact";
import ImageHero from "../components/ImageHero.js";


const About = () => {
	return (
		<div>
			<ImageHero
				src="https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/289957088_953273682107894_7744271686326919989_n.jpg?stp=dst-jpg_s526x395&_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BDKIhDQClSwAX-dBj9P&_nc_ht=scontent-lhr8-1.xx&oh=00_AT-Dz72tKpmHu1XlyQr-YiFWrw0HOY2wFRDSnAwsT6edGw&oe=62E56BF8"
				title="About Us"
			/>
			<TextHero
				subtitle1="This should contain 3-4 paragraph describing the association, what it does, why. Eventually we can use betterReact elements, with the ability to interleaf Images to the side and other visual accents.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum varius sit amet mattis vulputate enim nulla aliquet. Massa placerat duis ultricies lacus. In eu mi bibendum neque egestas congue quisque egestas diam. Etiam erat velit scelerisque in dictum non. Lectus urna duis convallis convallis tellus. Hendrerit dolor magna eget est lorem ipsum dolor sit. Sed odio morbi quis commodo odio aenean. Eget sit amet tellus cras adipiscing enim.

Amet nisl suscipit adipiscing bibendum est ultricies integer. Parturient montes nascetur ridiculus mus mauris. Auctor urna nunc id cursus metus aliquam eleifend mi. Euismod lacinia at quis risus sed vulputate. Mauris a diam maecenas sed enim ut sem. Id venenatis a condimentum vitae sapien pellentesque habitant morbi. Sed augue lacus viverra vitae congue. Purus in mollis nunc sed id semper.
"
				subtitle2=""
				title="Something about us
"
				variant="title-only"
			/>
			<Contact />
		</div>
	);
};

export default About;
