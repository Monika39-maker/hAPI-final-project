import TextHero from "../components/TextHero";
import Newsletter from "../components/Newsletter";
import ImageHero from "../components/ImageHero";
import image from "../images/pratibha3.jpg";
import VideoHero from "../components/VideoHero";



export function Home() {
	return (
		<main role="main">
			<VideoHero
				src="https://pratibha-nakshtra.herokuapp.com/public/videohero.mp4"
				height="50"
				width="100"
				textOverlay="Pratibha Nakshatra"
			/>
			<TextHero
				subtitle1="Translated literally to “Star Talent”, Pratibha Nakshatra is equality, co-existence, respect, “Pure Soul”, positivity, fraternity and consciousness of origin."
				title='"The Star Talent"'
				variant="title-only"
			/>

			<Newsletter />
			<ImageHero
				src={image}
				title="Star Talent"
			/>
			<TextHero
				subtitle1="Translated literally to “Star Talent”, Pratibha Nakshatra is equality, co-existence, respect, “Pure Soul”, positivity, fraternity and consciousness of origin."
				subtitle2="As a school of conscience, it leads people to explore their origins to gain knowledge about their folkore, art and traditions, with the goal to preserve and maintain the culture for the future generations."
				title="What is Pratibha Nakshatra"
				variant="title-only"
			/>
		</main>
	);
}

export default Home;


