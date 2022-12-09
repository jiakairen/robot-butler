import React, { useState } from "react";
import PopUpHeader from "./PopUpHeader";
import SignUpForm from "./SignUpForm";
import "../PopUp.css";

const PopUp = (props) => {
  const [success, setSuccess] = useState(false);

  const isSuccessful = (state) => {
    setSuccess(state);
  };

  return (
    <div className="pop-up-window">
      <PopUpHeader />
      <SignUpForm
        signUpState={success}
        onSignUp={isSuccessful}
        onClose={props.onClose}
      />
    </div>
  );
};

export default PopUp;
