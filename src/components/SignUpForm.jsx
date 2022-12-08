import React, { useState } from "react";
import "../PopUp.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SignUpForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const _handleNameInput = (e) => {
    setUserName(e.target.value);
  };

  const _handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const _handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="sign-up-form">
      <p>SIGN UP FOR OUR NEWSLETTER NOW IF YOU DON'T WANT TO MISS OUT!</p>
      <div>
        <Form onSubmit={_handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Enter your first and last name</Form.Label>
            <Form.Control
              type="text"
              placeholder="John Citizen"
              onChange={_handleNameInput}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter your email</Form.Label>
            <Form.Control
              type="email"
              placeholder="example@internet.com"
              onChange={_handleEmailInput}
            />
            <Form.Text className="text-muted">
              You will get our information weekly.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
        <a href="#">No, thanks!</a>
      </div>
      <div>
        <p>
          By clicking sign up, I agree that I have read and accepted the{" "}
          <a href="#">Terms of Use</a> and <a href="#">Privacy Policy.</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
