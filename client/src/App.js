import { Route, Routes } from "react-router-dom";

import "./App.css";
import AboutPratibhaNakshatra from "./AboutPratibhaNakshatra";
import Home from "./pages/Home";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about" element={<AboutPratibhaNakshatra />} />
	</Routes>
);

export default App;
