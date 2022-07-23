import React from "react";

function ImageCard({ src, title, subtitle }) {
  return (
    <div className='image-card'>
        <div>
            <img src={src} alt="" srcSet="" />
        </div>
        <h3>{title}</h3>
        <p>{subtitle}</p>

    </div>
  );
}

export default ImageCard;