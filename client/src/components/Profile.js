import * as React from "react";
import { useState } from "react";
import { useUserContext } from "../utils/UserContext";
import { UserContext } from "../utils/UserContext"
// import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// import ReactDOM from "react-dom";
// import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";

export default function Profile() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [nameText, setNameText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [bioText, setBioText] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    if (name === "nameText") {
      return setNameText(value);
    } else if (name === "emailText") {
      return setEmailText(value);
    } else if (name === "passwordText") {
      return setPasswordText(value);
    } else if (name === "bioText") {
      return setBioText(value);
    }
    // return name === "questionText"
    //   ? setQuestionText(value)
    //   : setAnswerText1(value);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    // alert(`Hello ${firstName} ${lastName}`);
    setNameText("");
    setEmailText("");
    setPasswordText("");
    setBioText("");
  };
  // const userMng = useUserContext()

  return (
    <UserContext.Consumer>
      {value => {
console.log("value", value);
        return <div className="columns-container">
          <div className="app-profile">
            <form className="form">
              <h3>Profile</h3>
              <label className="vertAlign">
                Name
                <input
                  value={value.firstName}
                  name="nameText"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="John Doe"
                />
              </label>
              <label className="vertAlign">
                Email
                <input
                  value={emailText}
                  name="emailText"
                  onChange={handleInputChange}
                  type="email"
                  placeholder="youremail@email.com"
                />
              </label>
              <label className="vertAlign">
                Password
                <input
                  value={passwordText}
                  name="passwordText"
                  onChange={handleInputChange}
                  type="password"
                  placeholder="password"
                />
              </label>
              <label className="vertAlign">
                Bio
                <textarea
                  value={bioText}
                  name="bioText"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Your bio goes here"
                />
              </label>
              <button type="button" onClick={handleFormSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      }
      }
    </UserContext.Consumer>
  );
}
