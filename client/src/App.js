import { Route, Routes, Switch } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Donations from "./pages/Donations";
import ThankYou from "./pages/ThankYou";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => (
	<>
		<Header />
		<Switch>
			<Route path="/" exact component={<Home />} />
			<Route path="/about" exact component={<About />} />
			<Route path="/donations" exact component={<Donations />} />
			<Route path="/thank-you" component={<ThankYou /> }  />
		</Switch>
		<Footer />
	</>
);

export default App;
