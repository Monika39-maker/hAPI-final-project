import React from "react";

const Video = () => {
  return (
    <div className="videoWithOverlay">
      <video className="video" src="https://cdn.pixabay.com/vimeo/636709154/Skyscrapers%20-%2091744.mp4?width=2560&expiry=1657038723&hash=256e8f29b8d7ec5a61fff7e89d7626efb621e350"
      autoPlay loop muted />
      <div className="textOverlay">
      <p>Placeholder Text for Video Component Overlay</p>
      </div>
    </div>
  );
};

export default Video;