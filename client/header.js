import React from "react";
import Nav from "./nav";

function Header(props) {
  return (
    <div style={{ backgroundColor: props.backgroundColor, color: props.color, padding:props.padding }}>
        <img src="https://www.pratibhanakshatra.org/public/storage/setting/1594904931pratibha.jpg" alt="logo" />
        <Nav />
        <div>
            <a href="https://www.facebook.com/prativanakshatra">Join Us</a>
        </div>
    </div>

  );
}


export default Header;