import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPratibhaNakshatra from "./AboutPratibhaNakshatra";
import Video from "./Video";
import Home from "./pages/Home";

const App = () => (
<>
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about" element={<AboutPratibhaNakshatra />} />
	</Routes>
  <Video />
  </>
);

export default App;
