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
			<TextHero
				subtitle1="A fusion of equality, co-existence, respect, Pure Soul and consciousness of origin"
				title='"The Star Talent"'
				variant="title-only"
			/>
			<Newsletter />
			<ImageHero
				src="https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/118530683_529758901126043_4998365702785108735_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=fKVAXPpGIvgAX98uX4f&_nc_ht=scontent-lhr8-1.xx&oh=00_AT_0m5ob03VSJYP_ULc5xNA8BfdJ1Y0FWS8DX5EumqDfRQ&oe=6306773A"
			/>
		</main>
	);
}

export default Home;
