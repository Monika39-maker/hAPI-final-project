import React from "react";

export default function Nav() {
  return (
		<nav>
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/about">About</a>
			</li>
			<li>
				<a href="/">
					<img className="logo" src="https://www.pratibhanakshatra.org/public/storage/setting/1594904931pratibha.jpg" alt="logo" />
				</a>
			</li>
			<li>
				<a
					href="https://www.facebook.com/prativanakshatra"
					target="_blank"
					rel="noreferrer"
				>
					Events
				</a>
			</li>
			<li>
				<a href="/donations">Donate</a>
			</li>
		</nav>
	);
}
