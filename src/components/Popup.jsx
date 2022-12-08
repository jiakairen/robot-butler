import React from "react";
import PopUpHeader from "./PopUpHeader";
import SignUpForm from "./SignUpForm";
import "../PopUp.css";

const PopUp = () => {
  return (
    <div className="pop-up-window">
      <PopUpHeader />
      <SignUpForm />
    </div>
  );
};

export default PopUp;
