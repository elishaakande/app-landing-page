import React from "react";
import "./download.css";
import { BiLogoApple, BiLogoPlayStore } from "react-icons/bi";

const Download = () => {
  return (
    <div id="download">
      <div className="download_box">
        <h1>Download Telehealth App to get started</h1>
        <div className="download_box_links">
          <button className="available_button">
            <BiLogoApple size={30} className="available_button_icon" />{" "}
            <div className="available">
              <span>Available on the</span>
              <h4>App Store</h4>
            </div>
          </button>

          <button className="available_button">
            <BiLogoPlayStore size={30} className="available_button_icon" />{" "}
            <div className="available">
              <span>Available on the</span>
              <h4>Play Store</h4>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Download;
