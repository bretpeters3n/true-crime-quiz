import * as React from "react";

import { useState, useEffect } from "react";
import { UserContext } from "../utils/UserContext";
import { useAuth0 } from "@auth0/auth0-react";



export default function Profile() {

  const { user, isLoading } = useAuth0();
  const [nameText, setNameText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [bioText, setBioText] = useState("");
  const [questions, setQuestions] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "nameText") {
      return setNameText(value);
    } else if (name === "emailText") {
      return setEmailText(value);
    } else if (name === "passwordText") {
      return setPasswordText(value);
    } else if (name === "bioText") {
      return setBioText(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setNameText("");
    setEmailText("");
    setPasswordText("");
    setBioText("");
  };

  const getQuestionsByAuth = async () => {
    if (!user) {
      return
    }
    let id = user.sub;
    const response = await fetch(`/api/questions/${id}`);
    const data = await response.json();
    return data
  };

  useEffect(async () => {

    let questionData = await getQuestionsByAuth();
    setQuestions(questionData);
    console.log(questions);
  }, [user]);

  function makeQuestionCards() {

  }

  if (isLoading) {

  }

  return (
    <UserContext.Consumer>
      
      {value => {

        if (!value.sub || !value.name || !questions) {
          console.log(questions);
          return (
            <div>
              Loading...
            </div>
          )
        } else {
          return <div className="columns-container">
            <div className="app">
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
              <div>
                  {questions.map(questionObj => {
                    return (
                    <h3>{questionObj.questionText}</h3>
                    )
                  })}
              </div>
            </div>
          </div>
        }
      }
      }
    </UserContext.Consumer>
  );
}
