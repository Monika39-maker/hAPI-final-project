import React from "react";
import Nav from "./Nav";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import "../App.css";

export default function Footer() {
  return (
		<footer>
			<p>MENU</p>
			<Nav />
			<p>Pratibha Nakshtra © 2022</p>
			<div>
				<a href="https://www.facebook.com/prativanakshatra" target="_blank" rel="noreferrer">
					<FaInstagramSquare />
				</a>
				<a
					href="https://www.facebook.com/prativanakshatra"
					target="_blank"
					rel="noreferrer"
				>
					<FaFacebookF />
				</a>
			</div>
		</footer>
	);
}