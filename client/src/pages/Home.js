import TextHero from "../components/TextHero";
import Newsletter from "../components/Newsletter";
import ImageHero from "../components/ImageHero";
// import ImageCard from "../components/ImageCard";
import VideoHero from "../components/VideoHero";



export function Home() {
	return (
		<main role="main">
			<VideoHero
				src="http://localhost:3100/public/videohero.mp4"
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
				src="https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/118530683_529758901126043_4998365702785108735_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=fKVAXPpGIvgAX98uX4f&_nc_ht=scontent-lhr8-1.xx&oh=00_AT_0m5ob03VSJYP_ULc5xNA8BfdJ1Y0FWS8DX5EumqDfRQ&oe=6306773A"
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
