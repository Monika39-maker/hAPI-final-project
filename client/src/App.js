import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPratibhaNakshatra from "./AboutPratibhaNakshatra";
import Donations from "./Donations";
import ThankYou from "./ThankYou";
import Video from "./Video";
import Home from "./pages/Home";



const App = () => (
<>
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about" element={<AboutPratibhaNakshatra />} />
		<Route path="/donations" element={<Donations />} />
		<Route path="/thank-you" element={<ThankYou /> }  />
	</Routes>
  <Video />
  </>
);

export default App;
