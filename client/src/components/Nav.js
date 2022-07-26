import React from "react";

export default function Nav() {
  return (
		<nav>
			<li>
				<a href="/Home">Home</a>
			</li>
			<li>
				<a href="/About">About</a>
			</li>
			<li>
				<a href="/Home">
          {/* src needs to be fetched from database  */}
					<img className="logo" src="https://www.pratibhanakshatra.org/public/storage/setting/1594904931pratibha.jpg" />
				</a>
			</li>
			<li>
        {/* href to be changed to other source  */}
				<a href="https://www.pratibhanakshatra.org/event-list">Events</a>
			</li>
			<li>
				<a href="/Donate">Donate</a>
			</li>
		</nav>
	);
}
