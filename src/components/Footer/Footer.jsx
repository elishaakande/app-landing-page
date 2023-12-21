import React from "react";
import "./footer.css";
import { BiSolidDiamond } from "react-icons/bi";
import Button from "../Button/Button";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer_box">
          <div className="footer_box_top">
            <div className="footer_box_top_logo">
              <div className="footer_box_top_logo_top">
                <BiSolidDiamond size={30} /> Telehealth
              </div>
              <span>
                Access medical facilities at the tap of your smartphone
              </span>
              <div className="footer_button">
                <Button text={"Get Started"} type={"light"} />
              </div>
            </div>
            <div className="footer_box_top_links">
              <a href="#about">About Us</a>
              <a href="#functions">Functions</a>
              <a href="#download">Download</a>
            </div>
            <div className="footer_box_top_links">
              <a href="">Legal</a>
              <a href="">Term of Service</a>
              <a href="">Privacy policy</a>
            </div>
            <div className="footer_box_top_links">
              <a href="">Twitter</a>
              <a href="">Instagram</a>
              <a href="">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_box_bottom">
        <span>Copyright @ Elisha Akande 2023. All Right Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
