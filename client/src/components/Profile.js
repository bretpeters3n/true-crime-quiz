import * as React from "react";
import { useState, useEffect } from "react";
import { UserContext } from "../utils/UserContext";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

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
      return;
    }
    let id = user.sub;
    const response = await fetch(`/api/questions/${id}`);
    const data = await response.json();
    return data;
  };

  useEffect(async () => {
    let questionData = await getQuestionsByAuth();
    setQuestions(questionData);
    console.log(questions);
  }, [user]);

  function makeQuestionCards() {}

  if (isLoading) {
  }

  return (
    <UserContext.Consumer>
      {(value) => {
        if (!value.sub || !value.name || !questions) {
          console.log(questions);
          return <div>Loading...</div>;
        } else {
          return (
            <div className="columns-container">
              <div className="app-profile-questions">
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
                      className="bio"
                      value={bioText}
                      name="bioText"
                      onChange={handleInputChange}
                      type="text"
                      placeholder="Your bio goes here"
                    />
                  </label>
                  <Button type="button" variant="success" onClick={handleFormSubmit}>
                    Submit
                  </Button>
                </form>
                <div className="addedquestions">
                  <hr></hr>
                 <p>Your Created Questions</p>
                  {questions.map((questionObj) => {
                    return (
                      <div className="questionBox">
                        {questionObj.questionText}
                        <div className="questionBoxControls">
                          <div>
                            <Link
                              to={{
                                pathname: "/editquestion",
                                state: {
                                  id: "61a53b7cc51c0381f368d902",
                                },
                              }}
                            >
                              <Button variant="primary">Edit</Button>
                            </Link>
                          </div>
                          <div>
                            <Link to="/profile">
                              <Button variant="danger">Delete</Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        }
      }}
    </UserContext.Consumer>
  );
}
