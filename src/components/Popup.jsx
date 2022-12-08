import React, { useState } from "react";
import PopUpHeader from "./PopUpHeader";
import SignUpForm from "./SignUpForm";
import SignUpSuccess from "./SignUpSuccess";
import "../PopUp.css";

const PopUp = () => {
  const [success, setSuccess] = useState(false);

  const isSuccessful = (state) => {
    setSuccess(state);
  };

  return (
    <div className="pop-up-window">
      <PopUpHeader />
      <SignUpForm signUpState={success} onSignUp={isSuccessful} />
    </div>
  );
};

export default PopUp;
