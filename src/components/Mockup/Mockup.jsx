import React from "react";
import "./mockup.css";

const Mockup = ({ mockup }) => {
  return (
    <div className="mockup">
      <img src={mockup} className="mockup_img" alt="" />
    </div>
  );
};

export default Mockup;
