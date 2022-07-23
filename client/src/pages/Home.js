// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Header from "../components/Header.js";
import "./home.css";
import Footer from "../components/Footer.js";
import Newsletter from "../components/Newsletter";

import homepageImage from "../images/homepage-image.jpeg";

export function Home() {
	// const [message, setMessage] = useState("Loading...");

	// useEffect(() => {
	// 	fetch("/api")
	// 		.then((res) => {
	// 			if (!res.ok) {
	// 				throw new Error(res.statusText);
	// 			}
	// 			return res.json();
	// 		})
	// 		.then((body) => {
	// 			setMessage(body.message);
	// 		})
	// 		.catch((err) => {
	// 			console.error(err);
	// 		});
	// }, []);

	return (
		<main role="main">
			<div>
				<Header />
				<h1>Pratibha Nakshatra</h1>
				{/* <div>
					<video src={bgVideo} autoPlay loop muted />
				</div> */}
				<VideoHero
					height="100"
					src="https://player.vimeo.com/progressive_redirect/playback/694704491/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=6f4425e6cbc3e6c9dfe7a01f60ab993bcf297393152794a8aa9f409173b78244"
					subtitle="Optional subtitle"
					textOverlay="Text that goes over the video"
					width="100"
				/>
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
			<Footer />
		</main>
	);
}

export default Home;
