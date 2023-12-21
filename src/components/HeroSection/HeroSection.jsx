import React from "react";
import "./herosection.css";
import Mockup from "../Mockup/Mockup";
import Phone from "../../assets/mockup1.png";
import { BiLogoApple, BiLogoPlayStore } from "react-icons/bi";
import { ImYoutube2 } from "react-icons/im";
import { TiSocialInstagram } from "react-icons/ti";
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero_box">
        <div className="hero_box_left">
          <h1>Access medical facilities at the tap of your smartphone</h1>
          <span>
            With our mobile application, you can enjoy easy and over the air
            appointment with medical professionals
          </span>

          <div className="hero_box_bottom_left">
            <button className="available_button">
              <BiLogoApple className="available_button_icon" />{" "}
              <div className="available">
                <span>Available on the</span>
                <h4>App Store</h4>
              </div>
            </button>

            <button className="available_button">
              <BiLogoPlayStore className="available_button_icon" />{" "}
              <div className="available">
                <span>Available on the</span>
                <h4>Play Store</h4>
              </div>
            </button>
          </div>
        </div>
        <div className="hero_box_right">
          <Mockup mockup={Phone} />
        </div>
      </div>

      <div className="hero_box_bottom">
        <div className="hero_box_bottom_box">
          <ImYoutube2 color="#ffffff95" className="hero_icon1" />
          <div className="hero_box_bottom_box_item">
            <TiSocialInstagram color="#ffffff95" className="hero_icon2" />
            Instagram
          </div>
          <div className="hero_box_bottom_box_item2">
            <FaSquareFacebook color="#ffffff95" className="hero_icon3" />
            acebook
          </div>
          <div className="hero_box_bottom_box_item">
            <FaSquareXTwitter color="#ffffff95" className="hero_icon3" />
            Twitter
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
