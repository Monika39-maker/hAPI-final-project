import React from "react";

function ImageCardsContainer({ children, spacing=2, direction="row", wrap=false }) {
    const style = {
        display: "flex",
        gap: `${spacing * 0.25}rem`,
        flexwrap: wrap? "wrap" : "nowwrap",
        flexDirection: direction,
    };
    return (
    <div style={style}>{children}</div>
  );
}

export default ImageCardsContainer;