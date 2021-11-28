import * as React from "react";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { loginUser } from "../utils/API";

// import ReactDOM from "react-dom";
// import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";

export default function LoginSignUp() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");

  async function signIntoDB() {
    const response = await fetch("/api/users/all", {
      method: "GET",
      body: JSON.stringify({
        emailText: emailText,
        passwordText: passwordText,

        //get user id from url
        // user_id: req.params.id
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
      alert("youre in!");
    } else {
      alert("Failed to submit question, try again!");
    }
  }

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    if (name === "emailText") {
      return setEmailText(value);
    } else if (name === "passwordText") {
      return setPasswordText(value);
    }
    // return name === "questionText"
    //   ? setQuestionText(value)
    //   : setAnswerText1(value);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    signIntoDB();

    // Alert the user their first and last name, clear the inputs
    // alert(`Hello ${firstName} ${lastName}`);
    setEmailText("");
    setPasswordText("");
  };

  return (
    <div className="columns-container">
      <div className="addQuestion-app">
        <form className="form">
          <h3>Login</h3>
          <p className="addQuestionIns">Enter your email and password.</p>
          <label for="emailText">Email Address:</label>
          <textarea
            className="yourQuestion"
            value={emailText}
            name="emailText"
            onChange={handleInputChange}
            type="text"
            placeholder="Your email address"
          />
          <div className="sideBySideInputs">
            <label for="passwordText">password:</label>
            <input
              className="yourAnswer"
              value={passwordText}
              name="passwordText"
              onChange={handleInputChange}
              type="password"
              placeholder="bret1234"
            />
          </div>

          <Button
            className="submitBtn"
            variant="success"
            type="button"
            onClick={handleFormSubmit}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
