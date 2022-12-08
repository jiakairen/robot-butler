import React from "react";
import "../PopUp.css";
import { Image } from "react-bootstrap";
import CoffeeBreak from "../assets/coffee-break1.png";
import Robot1 from "../assets/robot1.png";

const PopUpHeader = () => {
  return (
    <div className="pop-up-header">
      <div>
        <img src={CoffeeBreak} alt="coffee break image" />
        <img src={Robot1} alt="robot" />
      </div>
      <div>
        <p className="text-center">
          Want to get to know more about how to make your life easier by using
          our awesome robot?
        </p>
      </div>
    </div>
  );
};

export default PopUpHeader;
