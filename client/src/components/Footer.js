import React from "react";
import Nav from "./Nav";
// import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
export default function Footer() {
  return (
		<div>
			<Nav />
			<div>
				<p>Address: 33 Chancery Lane</p>
				<p>Phone No: 02094536722</p>
				<p>Email: blah-blah@gmail.com</p>
			</div>
			<div>
				{/* <a href="">
					<FaInstagramSquare />
				</a> */}
				<a href="https://www.facebook.com/prativanakshatra" target="_blank" rel="noreferrer">
					<FaFacebookF />
				</a>
			</div>
		</div>
	);
}