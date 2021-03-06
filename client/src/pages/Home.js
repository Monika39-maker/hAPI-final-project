// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Header from "../components/Header.js";
import "./home.css";
import Footer from "../components/Footer.js";


import homepageImage from "../images/homepage-image.jpeg";
// import bgVideo from "../videos/bg-video.mp4";

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
			<Footer />
		</main>
	);
}

export default Home;
