import React from "react";
import Skyscraper from "./images/PlaceholderImage.jpeg";

const Video = (props) => {
  console.log(props);
  return (
    <div className="videoWithOverlay">
      <img className="video" src={Skyscraper} />
         {/* autoPlay loop muted /> */}
      <div className="textOverlay">
        <p>Placeholder Text for Video Component Overlay</p>
      </div>
    </div>
  );
};

export default Video;