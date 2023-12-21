import React from "react";
import "./navbar.css";
import { BiSolidDiamond } from "react-icons/bi";
import Button from "../Button/Button";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar_box">
        <div className="navbar_box_logo">
          <BiSolidDiamond size={30} /> Telehealth
        </div>

        <div className="navbar_box_links">
          <a href="#about">About</a>
          <a href="#functions">Functions</a>
          <a href="#download">Download</a>
        </div>

        <div className="navbar_box_started">
          <Button type={"dark"} text={"Get Started"} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
