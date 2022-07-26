import React from "react";
import Nav from "./Nav";
import { FaFacebookF } from "react-icons/fa";
export default function Footer() {
  return (
		<div>
			<p>MENU</p>
			<Nav />
			<p>Pratibha Nakshtra © 2022</p>
			<div>
				<a href="">
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
		</div>
	);
}