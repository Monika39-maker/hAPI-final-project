import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPratibhaNakshatra from "./AboutPratibhaNakshatra";
import Donations from "./Donations";
import ThankYou from "./ThankYou";
import Video from "./components/Video";
import Home from "./pages/Home";
import Contact from "./Contact";


const App = () => (
<>
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about" element={<AboutPratibhaNakshatra />} />
		<Route path="/donations" element={<Donations />} />
		<Route path="/thank-you" element={<ThankYou /> }  />
		<Route path="/contact" element={<Contact />} />
	</Routes>
  <Video />
  </>
);

export default App;
