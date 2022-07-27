import React from "react";

function ImageHero({ src, title }) {
  return (
    <div className="image-hero" style={{ backgroundImage:`url(${src})`, width:"100%" }}>
        <h1>{title}</h1>
    </div>
  );
}

export default ImageHero;