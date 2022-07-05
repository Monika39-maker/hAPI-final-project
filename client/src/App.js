// import { Route, Routes } from "react-router-dom";

// import About from "./pages/About";
// import Home from "./pages/Home";

import "./App.css";
import AboutPratibhaNakshatra from "./AboutPratibhaNakshatra";
import Video from "./Video";

const App = () => (
	// <Routes>
	// 	<Route path="/" element={<Home />} />
	// 	<Route path="/about/this/site" element={<About />} />
	// </Routes>
	<div>
		<AboutPratibhaNakshatra />
		<Video />
	</div>
);

export default App;
