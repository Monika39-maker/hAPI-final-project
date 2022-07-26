import Newsletter from "../components/Newsletter";
import VideoHero from "../components/VideoHero.js";
import ImageCard from "../components/ImageCard.js";
import TextHero from "../components/TextHero.js";


export function Home() {
	return (
		<main role="main">
			<div>
				<VideoHero
					height="100"
					src="https://player.vimeo.com/progressive_redirect/playback/694704491/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=6f4425e6cbc3e6c9dfe7a01f60ab993bcf297393152794a8aa9f409173b78244"
					subtitle="The Star Talent"
					textOverlay="Pratibha Nakshtra"
					width="100"
				/>
				<p>
					A fusion of equality, co-existence, respect, Pure Soul and
					consciousness of origin
				</p>
			</div>
			<ImageCard
				src="https://www.pratibhanakshatra.org/public/storage/events/1595505312pro2.png"
				subtitle="Translated literally to “Star Talent”, Pratibha Nakshatra is equality, co-existence, respect, “Pure Soul”, positivity, fraternity and consciousness of origin.
As a school of conscience, it leads people to explore their origins to gain knowledge about their folkore, art and traditions, with the goal to preserve and maintain the culture for the future generations."
				title="What is Pratibha Nakshtra"
			/>
			<Newsletter />
			<img
				src="https://www.pratibhanakshatra.org/public/storage/events/1595505312pro2.png"
				alt=""
			/>
		</main>
	);
}

export default Home;
