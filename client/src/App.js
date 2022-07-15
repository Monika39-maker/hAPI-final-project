import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPratibhaNakshatra from "./AboutPratibhaNakshatra";
import Video from "./Video";
import Home from "./pages/Home";
import Contact from "./Contact";


const App = () => (
	<>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<AboutPratibhaNakshatra />} />
			<Route path="/contact" element={<Contact />} />
		</Routes>
		{/* <Video /> */}
	</>
);

export default App;
