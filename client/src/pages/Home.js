import "./home.css";
import TextHero from "../components/TextHero";
import Newsletter from "../components/Newsletter";
import ImageCard from "../components/ImageCard.js";


export function Home() {
	return (
		<main role="main">
			<ImageCard
				src="https://www.pratibhanakshatra.org/public/storage/events/1595505312pro2.png"
				subtitle="Translated literally to “Star Talent”, Pratibha Nakshatra is equality, co-existence, respect, “Pure Soul”, positivity, fraternity and consciousness of origin.
As a school of conscience, it leads people to explore their origins to gain knowledge about their folkore, art and traditions, with the goal to preserve and maintain the culture for the future generations."
				title="What is Pratibha Nakshtra"
        <TextHero
				title="What is Pratibha Nakshatra"
				subtitle="Translated literally to “Star Talent”, Pratibha Nakshatra is equality, co-existence, respect, “Pure Soul”, positivity, fraternity and consciousness of origin.
				As a school of conscience, it leads people to explore their origins to gain knowledge about their folkore, art and traditions, with the goal to preserve and maintain the culture for the future generations."
				variant="yellow"
			<Newsletter />
		</main>
	);
}

export default Home;
