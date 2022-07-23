import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPratibhaNakshatra from "./AboutPratibhaNakshatra";
import Donations from "./Donations";
import ThankYou from "./ThankYou";
import Newsletter from "./Newsletter";
import Video from "./Video";
import Home from "./pages/Home";



const App = () => (
<>
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about" element={<AboutPratibhaNakshatra />} />
		<Route path="/donations" element={<Donations />} />
		<Route path="/thank-you" element={<ThankYou /> }  />
		<Route path="/newsletter" element={<Newsletter />} />
	</Routes>
  {/* <Video /> */}
  </>
);

export default App;
