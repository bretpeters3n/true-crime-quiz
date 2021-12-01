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

  function deleteQuestionFromDB(id) {
    console.log(id);

    try {
      fetch(`/api/questions/delete/${id}`, {
        method: "DELETE",
      }).then(() => {
        console.log("removed");
        window.location.reload(true);
        // remove question from array
        // questions
        // setQuestions(data);
      });
    } catch (err) {
      console.error("err.message:", err.message);
    }
  }

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
                  {/* <h3>Profile</h3> */}
                  &nbsp;
                  <img
                    width="150"
                    height="150"
                    className="profilePic"
                    src={user.picture}
                    alt="profile picture"
                  />
                  &nbsp;
                  <label className="vertAlign">
                    Name
                    <input
                      className="textBoxes"
                      value={user.name}
                      name="nameText"
                      onChange={handleInputChange}
                      type="text"
                      readOnly
                    />
                    &nbsp;
                  </label>
                  <label className="vertAlign">
                    Email
                    <input
                      className="textBoxes"
                      value={user.email}
                      name="emailText"
                      // onChange={handleInputChange}
                      type="email"
                      readOnly
                    />
                  </label>
                  &nbsp; &nbsp;
                  {/* <label className="vertAlign">
                    Password
                    <input
                      value={passwordText}
                      name="passwordText"
                      onChange={handleInputChange}
                      type="password"
                      placeholder="password"
                    />
                  </label> */}
                  {/* <Button
                    type="button"
                    variant="success"
                    onClick={handleFormSubmit}
                  >
                    Submit
                  </Button> */}
                </form>
                <hr></hr>
                <div className="addedquestions">
                  <p>Your Created Questions</p>

                  {questions?.map((questionObj) => {
                    return (
                      <div className="questionBox">
                        {questionObj.questionText}
                        {/* {questionObj._id} */}
                        <div className="questionBoxControls">
                          <div>
                            <Link
                              to="/editquestion"
                              state={{ questionId: questionObj._id }}
                            >
                              <Button variant="primary">Edit</Button>
                            </Link>
                          </div>
                          <div>
                            <Button
                              variant="danger"
                              onClick={() =>
                                deleteQuestionFromDB(questionObj._id)
                              }
                            >
                              Delete
                            </Button>
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
