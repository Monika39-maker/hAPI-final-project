import "./home.css";
import VideoHero from "../components/VideoHero";
import TextHero from "../components/TextHero";
import placeholderImage from "../images/homepage-image.jpeg";
import Newsletter from "../components/Newsletter";

export function Home() {
	return (
		<main role="main">
			<TextHero
				title="The Star Talent"
				subtitle="A fusion of equality, co-existence, respect, pure soul and consciousness of origin"
				variant="red"
			/>
			<img className="video" src={placeholderImage} alt="" />
			<TextHero
				title="What is Pratibha Nakshatra"
				subtitle="Translated literally to “Star Talent”, Pratibha Nakshatra is equality, co-existence, respect, “Pure Soul”, positivity, fraternity and consciousness of origin.
				As a school of conscience, it leads people to explore their origins to gain knowledge about their folkore, art and traditions, with the goal to preserve and maintain the culture for the future generations."
				variant="yellow"
			/>
			<Newsletter />
		</main>
	);
}

export default Home;
