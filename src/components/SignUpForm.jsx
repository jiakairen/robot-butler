import React, { useState, useEffect } from "react";
import "../PopUp.css";
import Form from "react-bootstrap/Form";
import squarePhoto from "../assets/square-photo.png";
import robotHumanFinger from "../assets/robot-human-finger.png";
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
          <div>
            <img
              src={robotHumanFinger}
              alt="a robot finger touching a human finger"
            />
          </div>
          <div className="under-fingers">
            <h3 className="text-center">We'll keep in touch, human!</h3>
          </div>
          <div className="thank-you-text">
            <p className="text-center bold thank-you-words">Thank you!</p>
            <p className="text-center hear-from-us">
              You will hear from us soon.
            </p>
          </div>
          <div className="text-center close-button-div">
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
          <div className="above-circle-photo">
            <h3 className="text-center">Join the RoboClub!</h3>
            <p className="text-center">
              Stay up to date to get special offers and latest news!
            </p>
          </div>
          <div className="square-photo">
            <img
              src={squarePhoto}
              alt="a human hugging a robot with his left hand on the robot's back"
            />
          </div>
          <div className="form-inputs">
            <Form onSubmit={_handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicFirstName">
                <Form.Label className={formLabelClass(firstNameError)}>
                  First name
                </Form.Label>
                {/* <Form.Control
                  type="text"
                  placeholder="John"
                  onChange={_handleFirstNameInput}
                  value={firstName}
                /> */}
                <input
                  className="test-input"
                  placeholder="John"
                  onChange={_handleFirstNameInput}
                  value={firstName}
                ></input>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label className={formLabelClass(lastNameError)}>
                  Last name
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
                  Email address
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="john@ga.co"
                  onChange={_handleEmailInput}
                  value={email}
                />
              </Form.Group>
              <div className="text-center">
                <button type="submit" className={buttonVariant}>
                  SIGN UP
                </button>
              </div>
            </Form>
            <div className="text-center">
              <a href="#" className="no-thanks-link">
                No, thanks
              </a>
            </div>
          </div>
          <div>
            <p className="text-center ts-and-cs">
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
