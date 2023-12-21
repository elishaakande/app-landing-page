import React from "react";
import "./functions.css";
import Mockup from "../Mockup/Mockup";
import Phone from "../../assets/mockup3.png";
import Button from "../Button/Button";
import { BiSolidCheckCircle } from "react-icons/bi";

const Functions = () => {
  return (
    <div id="functions">
      <div className="functions_box">
        <div className="functions_box_left">
          <h2>Basic Functions</h2>
          <div className="functions_box_left_item">
            <BiSolidCheckCircle />{" "}
            <span>Contact any Doctor of your choice</span>
          </div>
          <div className="functions_box_left_item">
            <BiSolidCheckCircle />{" "}
            <span>Book an appointment with any medical professional</span>
          </div>
          <div className="functions_box_left_item">
            <BiSolidCheckCircle /> <span>Search for hospitals around you</span>
          </div>
          <div className="functions_box_right_button">
            <Button type={"dark"} text={"Learn More"} />
          </div>
        </div>
        <div className="functions_box_right">
          <Mockup mockup={Phone} />
        </div>
      </div>
    </div>
  );
};

export default Functions;
