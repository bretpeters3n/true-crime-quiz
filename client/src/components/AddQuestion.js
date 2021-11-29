import * as React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { UserContext } from "../utils/UserContext";
import { useAuth0 } from '@auth0/auth0-react';


export default function AddQuestion() {
  const { user, isAuthenticated } = useAuth0();

  const [questionText, setQuestionText] = useState("");
  const [answerText1, setAnswerText1] = useState("");
  const [answerText2, setAnswerText2] = useState("");
  const [answerText3, setAnswerText3] = useState("");
  const [answerText4, setAnswerText4] = useState("");
  const [checkBox1, setCheckbox1] = useState(false);
  const [checkBox2, setCheckbox2] = useState(false);
  const [checkBox3, setCheckbox3] = useState(false);
  const [checkBox4, setCheckbox4] = useState(false);
  const [auth, setAuth] = useState("");
  

  async function writeQuestionToDb() {
    const response = await fetch("/api/questions/new", {
      method: "POST",
      body: JSON.stringify({
        questionText: questionText,
        answerOptions: [
          {
            answerText: answerText1,
            isCorrect: checkBox1,
          },
          {
            answerText: answerText2,
            isCorrect: checkBox2,
          },
          {
            answerText: answerText3,
            isCorrect: checkBox3,
          },
          {
            answerText: answerText4,
            isCorrect: checkBox4,
          },
        ],
        auth_id: user.sub,
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
    const { name, value } = e.target;

    if (name === "questionText") {
      return setQuestionText(value);
    } else if (name === "answerText1") {
      return setAnswerText1(value);
    } else if (name === "answerText2") {
      return setAnswerText2(value);
    } else if (name === "answerText3") {
      return setAnswerText3(value);
    } else if (name === "answerText4") {
      return setAnswerText4(value);
    } else if (name === "checkbox1") {
      return setCheckbox1(true);
    } else if (name === "checkbox2") {
      return setCheckbox2(true);
    } else if (name === "checkbox3") {
      return setCheckbox3(true);
    } else if (name === "checkbox4") {
      return setCheckbox4(true);
    }

  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    writeQuestionToDb();


    setQuestionText("");
    setAnswerText1("");
    setAnswerText2("");
    setAnswerText3("");
    setAnswerText4("");
  };

  return (
    <UserContext.Consumer>
      {value => {
        console.log("value", value);
        console.log("sub", value.sub);
        return <div className="columns-container">
          <div className="addQuestion-app">
            <form className="form">
              <h3>Add a custom question!</h3>
              <h4>{value.sub}</h4>
              <p className="addQuestionIns">
                Enter your question, answers, and choose which one will be correct.
              </p>
              <textarea
                className="yourQuestion"
                value={questionText}
                name="questionText"
                onChange={handleInputChange}
                type="text"
                placeholder="Your Question"
              />
              <div className="sideBySideInputs">
                <input
                  className="yourAnswer"
                  value={answerText1}
                  name="answerText1"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Answer 1"
                />
                <input type="radio" value={checkBox1} name="checkbox1" onChange={handleInputChange}/> Correct
              </div>
              <div className="sideBySideInputs">
                <input
                  className="yourAnswer"
                  value={answerText2}
                  name="answerText2"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Answer 2"
                />
                <input type="radio" value={checkBox2} name="checkbox2" onChange={handleInputChange}/> Correct
              </div>
              <div className="sideBySideInputs">
                <input
                  className="yourAnswer"
                  value={answerText3}
                  name="answerText3"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Answer 3"
                />
                <input type="radio" value={checkBox3} name="checkbox3" onChange={handleInputChange}/> Correct
                
              </div>
              <div className="sideBySideInputs">
                <input
                  className="yourAnswer"
                  value={answerText4}
                  name="answerText4"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Answer 4"
                />
                <input type="radio" value={checkBox4} name="checkbox4" onChange={handleInputChange}/> Correct
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
      }}
    </UserContext.Consumer>
  );
}
