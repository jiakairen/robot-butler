import React, { useState, useEffect } from "react";
import "../PopUp.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { db } from "../firebase";
import { ref, push, child, update } from "firebase/database";

const SignUpForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [firstNameSatisfied, setFirstNameSatisfied] = useState(false);
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [lastNameSatisfied, setLastNameSatisfied] = useState(false);

  // const [err, setErr] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailSatisfied, setEmailSatisfied] = useState(false);
  const [buttonVariant, setButtonVariant] = useState("secondary");

  const _handleFirstNameInput = (e) => {
    setFirstName(e.target.value);
    if (testNameError(e.target.value) === "") {
      setFirstNameSatisfied(true);
    } else {
      setFirstNameSatisfied(false);
    }
  };

  const _handleLastNameInput = (e) => {
    setLastName(e.target.value);
    if (testNameError(e.target.value) === "") {
      setLastNameSatisfied(true);
    } else {
      setLastNameSatisfied(false);
    }
  };

  const _handleEmailInput = (e) => {
    setEmail(e.target.value);
    if (testEmailError(e.target.value) === "") {
      setEmailSatisfied(true);
    } else {
      setEmailSatisfied(false);
    }
  };

  useEffect(() => {
    firstNameSatisfied && lastNameSatisfied && emailSatisfied
      ? setButtonVariant("sign-up-button")
      : setButtonVariant("sign-up-button greyed-out");
  }, [firstNameSatisfied, lastNameSatisfied, emailSatisfied]);

  const _handleSubmit = (e) => {
    e.preventDefault();
    if (
      testNameError(firstName) ||
      testNameError(lastName) ||
      testEmailError(email)
    ) {
      setFirstNameError(testNameError(firstName, "first"));
      setLastNameError(testNameError(lastName, "last"));
      setEmailError(testEmailError(email));
      return;
    }
    props.onSignUp(true);
    setFirstName("");
    setFirstNameError("");
    setFirstNameSatisfied(false);
    setLastName("");
    setLastNameError("");
    setLastNameSatisfied(false);
    setEmail("");
    setEmailError("");
    setEmailSatisfied(false);

    // // console.log(e.target[0].value);
    // const name = e.target[0].value;
    // const email = e.target[1].value;

    // let obj = {
    //   name: name,
    //   email: email,
    // };

    // const newPostKey = push(child(ref(db), "posts")).key;
    // const updates = {};
    // updates["/" + newPostKey] = obj;
    // return update(ref(db), updates);
  };

  const testNameError = (name, nameType) =>
    name.length < 2 || !/^[A-Za-z]+$/.test(name)
      ? `You must enter a valid ${nameType} name!`
      : "";

  const testEmailError = (email) =>
    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
      ? ""
      : "You must enter a valid email!";

  const formLabelClass = (fieldError) => (fieldError === "" ? "" : "invalid");

  const buildForm = () => {
    if (props.signUpState) {
      return (
        <div>
          <p className="text-center bold">Thank you!</p>
          <p className="text-center">You will hear from us soon.</p>
          <div className="text-center">
            <button
              onClick={() => props.onSignUp(false)}
              className="close-button"
            >
              CLOSE
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <p className="text-center">
            SIGN UP FOR OUR NEWSLETTER NOW IF YOU DON'T WANT TO MISS OUT!
          </p>
          <div>
            <Form onSubmit={_handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicFirstName">
                <Form.Label className={formLabelClass(firstNameError)}>
                  {firstNameError || "Enter your first name"}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="John"
                  onChange={_handleFirstNameInput}
                  value={firstName}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label className={formLabelClass(lastNameError)}>
                  {lastNameError || "Enter your last name"}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Citizen"
                  onChange={_handleLastNameInput}
                  value={lastName}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className={formLabelClass(emailError)}>
                  {emailError || "Enter your email"}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="john@ga.co"
                  onChange={_handleEmailInput}
                  value={email}
                />
                <div className="text-center">
                  <Form.Text className="text-muted">
                    You will get our information weekly.
                  </Form.Text>
                </div>
              </Form.Group>
              <div className="text-center">
                <button type="submit" className={buttonVariant}>
                  SIGN UP
                </button>
              </div>
            </Form>
            <div className="text-center">
              <a href="#">No, thanks!</a>
            </div>
          </div>
          <div>
            <p className="text-center">
              By clicking sign up, I agree that I have read and accepted the{" "}
              <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
            </p>
          </div>
        </>
      );
    }
  };

  return <div className="sign-up-form">{buildForm()}</div>;
};

export default SignUpForm;
