import React from "react";



function VideoHero(props) {
  return (
    <div>
      <img src={props.backgroundImage} style={{ width:props.width, height:props.width }} alt="placeholder" />
    </div>
  );
}

export default VideoHero;