import React from "react";
import "../App.css";

function TextHero({ title, subtitle1, subtitle2, link, buttonText, variant }) {
	return (
		<div className={`text-hero-${variant}`}>
			<h2 className={`text-hero-title-${variant}`}>{title}</h2>
			<h3 className={`text-hero-subtitle-${variant}`}>{subtitle1}</h3>
			<h3 className={`text-hero-subtitle-${variant}`}>{subtitle2}</h3>
			<a className={`text-hero-button-${variant}`} type="button" href={link}>
				{buttonText}
			</a>
		</div>
	);
}

export default TextHero;
