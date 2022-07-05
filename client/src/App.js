// import { Route, Routes } from "react-router-dom";

// import About from "./pages/About";
// import Home from "./pages/Home";

import "./App.css";
import AboutPratibhaNakshatra from "./AboutPratibhaNakshatra";
import Home from "./Home";

const App = () => (
	// <Routes>
	// 	<Route path="/" element={<Home />} />
	// 	<Route path="/about/this/site" element={<About />} />
	// </Routes>
	<>
		<Home />
		<AboutPratibhaNakshatra />
	</>
);

export default App;
