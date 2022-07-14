

import React from "react";
import Nav from "../nav";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";



export default function Footer() {
  return (
    <div>
        <Nav />
        <div>
            <p>Address: 33 Chancery Lane</p>
            <p>Phone No: 02094536722</p>
            <p>Email: blah-blah@gmail.com</p>
        </div>
        <div>
            <span><FaInstagramSquare /></span>
            <span><FaFacebookF /></span>
        </div>
        {/* <Button /> */}
    </div>
  );
}