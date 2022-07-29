import React from "react";

function ImageHero({ src, title }) {
  return (
    <div className="image-hero" style={{ backgroundImage:`url(${src})` }}>
        <h1>{title}</h1>
    </div>
  );
}

export default ImageHero;