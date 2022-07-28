import React from "react";
import TextHero from "../components/TextHero";
import Contact from "../components/Contact";
import ImageHero from "../components/ImageHero.js";


const About = () => {
	return (
		<div>
			<ImageHero
				src="https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/287314549_5924469944246672_7100867469945541907_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=uIWUb-XJT58AX-4MkgM&_nc_ht=scontent-lhr8-1.xx&oh=00_AT80xcZxikbPPt5UaDb_ZCCLV94ush13T4qEdf9v65IGIA&oe=62E67EA9"
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
