import TextHero from "../components/TextHero";
import Newsletter from "../components/Newsletter";
import ImageHero from "../components/ImageHero";
import ImageCard from "../components/ImageCard";



export function Home() {
	return (
		<main role="main">
			<ImageHero
				src="https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/289957088_953273682107894_7744271686326919989_n.jpg?stp=dst-jpg_s526x395&_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BDKIhDQClSwAX-dBj9P&_nc_ht=scontent-lhr8-1.xx&oh=00_AT-Dz72tKpmHu1XlyQr-YiFWrw0HOY2wFRDSnAwsT6edGw&oe=62E56BF8"
				title="Pratibha Nakshtra"
			/>
			<ImageCard
				src="https://www.pratibhanakshatra.org/public/storage/events/1595505312pro2.png"
				subtitle="Translated literally to “Star Talent”, Pratibha Nakshatra is equality, co-existence, respect, “Pure Soul”, positivity, fraternity and consciousness of origin.
As a school of conscience, it leads people to explore their origins to gain knowledge about their folkore, art and traditions, with the goal to preserve and maintain the culture for the future generations."
				title="What is Pratibha Nakshtra" />
        <TextHero
				title="What is Pratibha Nakshatra"
				subtitle="Translated literally to “Star Talent”, Pratibha Nakshatra is equality, co-existence, respect, “Pure Soul”, positivity, fraternity and consciousness of origin.
				As a school of conscience, it leads people to explore their origins to gain knowledge about their folkore, art and traditions, with the goal to preserve and maintain the culture for the future generations."
				variant="yellow" />
			<Newsletter />
			<TextHero
				buttonText="Open Google"
				link="https://google.com"
				subtitle="In this subtitle you can write a longer text"
				title="Title"
				variant="red"
			/>
		</main>
	);
}

export default Home;
