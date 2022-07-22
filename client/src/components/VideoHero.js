import React from "react";
import "../App.css";
// import image1 from "../images/PladeholderImage.jpeg";

function VideoHero({ src, height, width, subtitle, textOverlay }) {
  return (
    <div style={{ width:`${width}%`, height:`${height}%` }} className="video-hero-text-overlay">
        <div>
            <video autoPlay muted loop width="100%" height="100%">
            <source src={src} type="video/mp4" />
            <source src={src} type="video/ogg" />
            Your browser does not support the video tag.
        </video>
        </div>


        {/* <div style={{ width:`${width*0.5}%`, height:"70%" }} className="video-hero-text-overlay"> */}
        <p>{textOverlay}</p>
        <h3>{subtitle}</h3>



    </div>
  );
}

export default VideoHero;