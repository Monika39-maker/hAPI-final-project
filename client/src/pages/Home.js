import "./home.css";
import TextHero from "../components/TextHero";
import Newsletter from "../components/Newsletter";
import ImageCard from "../components/ImageCard.js";
import TextHero from "../components/TextHero.js";
import ImageHero from "../components/ImageHero.js";



export function Home() {
	return (
		<main role="main">
			<ImageHero
				src="https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/289957088_953273682107894_7744271686326919989_n.jpg?stp=dst-jpg_s526x395&_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BDKIhDQClSwAX-dBj9P&_nc_ht=scontent-lhr8-1.xx&oh=00_AT-Dz72tKpmHu1XlyQr-YiFWrw0HOY2wFRDSnAwsT6edGw&oe=62E56BF8"
				title="Pratibha Nakshtra"
			/>
			<Newsletter />
		</main>
	);
}

export default Home;
