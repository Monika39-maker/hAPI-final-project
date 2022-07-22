import React from "react";


export default function Nav(props) {
  return (
    <nav style={{ color: props.color, background:props.backgroundColor, padding: props.padding }}>
        <li><a href="https://www.pratibhanakshatra.org/public/storage/setting/1594904931pratibha.jpg">Home</a></li>
        <li><a href="https://www.pratibhanakshatra.org/public/storage/setting/1594904931pratibha.jpg">About</a></li>
        <li><a href="https://www.pratibhanakshatra.org/public/storage/setting/1594904931pratibha.jpg">Blogs</a></li>
        <li><a href="https://www.pratibhanakshatra.org/public/storage/setting/1594904931pratibha.jpg">Contact</a></li>
    </nav>
  );
}
