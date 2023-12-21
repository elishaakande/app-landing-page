import React from "react";
import "./about.css";
import Mockup from "../Mockup/Mockup";
import Phone from "../../assets/mockup2.png";
import Button from "../Button/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about_box">
        <div className="about_box_left">
          <Mockup mockup={Phone} />
        </div>
        <div className="about_box_right">
          <h2>About Our Mobile App</h2>
          <span>
            This app has been able to help in improving the quality of health
            care in Nigeria. It allows the user easily connect and communicate
            with a specialist from different parts of the country and world:
            user can now access primary health cares in the comfort of their
            homes
          </span>
          <div className="about_box_right_button">
            <Button type={"light"} text={"Learn More"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
