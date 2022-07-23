import "./home.css";

import Newsletter from "../components/Newsletter";
import homepageImage from "../images/homepage-image.jpeg";

export function Home() {
	return (
		<main role="main">
			<div>
				<h1>Pratibha Nakshatra</h1>

				<img src={homepageImage} style={{ width: "80%" }} alt="placeholder" />
				<p>
					Pratibha Nakshatra is the fusion of equality, co-existence, respect,
					“Pure Soul”, positivity, fraternity and consciousness of origin that
					will take everyone in the path of harmony, love and ultimately
					achieving ‘Peace’. The scope of “Pratibha Nakshatra (Star Talent)” is
					immense, in other words it can be a school of conscience, the
					participants (Child, Young and Adult) will have a chance to explore
					their origins to gain knowledge about their culture, attires,
					traditions, language, arts, music, folklore etc so that they can
					preserve, maintain and handover to their newer generation.
				</p>
			</div>
			<Newsletter />
		</main>
	);
}

export default Home;
