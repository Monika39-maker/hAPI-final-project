import { Route, Routes } from "react-router-dom";

import AboutPratibhaNakshatra from "./pages/AboutPratibhaNakshatra";
import Donations from "./pages/Donations";
import ThankYou from "./pages/ThankYou";
import Home from "./pages/Home";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";


const App = () => (
	<>
		<Header />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<AboutPratibhaNakshatra />} />
			<Route path="/donations" element={<Donations />} />
			<Route path="/thank-you" element={<ThankYou />} />
		</Routes>
		<Footer />
	</>
);

export default App;
