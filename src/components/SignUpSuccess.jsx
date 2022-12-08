import React from "react";

const SignUpSuccess = (props) => {
  return (
    <div>
      <h4>Thank you!</h4>
      <p>You will hear from us soon.</p>
      <div>
        <button onClick={props.onClose(false)}>Close</button>
      </div>
    </div>
  );
};

export default SignUpSuccess;
