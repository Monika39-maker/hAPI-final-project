import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Donations from "./Donations";
import ThankYou from "./pages/ThankYou";
import Home from "./pages/Home";
import Contact from "./Contact";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";




const App = () => (
<>
	<Header />
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about" element={<About />} />
		<Route path="/donations" element={<Donations />} />
		<Route path="/thank-you" element={<ThankYou /> }  />
		<Route path="/contact" element={<Contact />} />
	</Routes>
	<Footer />
  </>
);

export default App;
