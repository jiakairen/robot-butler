import React, { useState } from "react";
import { db } from "../firebase";
import { ref, push, child, update } from "firebase/database";

const Register = () => {
  const [err, setErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e.target[0].value);
    const firstName = e.target[0].value;
    const lastName = e.target[1].value;
    const email = e.target[2].value;

    let obj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    const newPostKey = push(child(ref(db), "posts")).key;
    const updates = {};
    updates["/" + newPostKey] = obj;
    return update(ref(db), updates);

    // try {
    //   navigate("/");
    //   const storageRef = ref(storage, firstName);
    // } catch (err) {
    //   setErr(true);
    // }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <button>Sign up</button>
          {err && <span>Something went wrong!</span>}
        </form>
      </div>
    </div>
  );
};

export default Register;
