import * as React from "react";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";

// import ReactDOM from "react-dom";
// import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";

export default function AddQuestion() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [questionText, setQuestionText] = useState("");
  const [answerText1, setAnswerText1] = useState("");
  const [answerText2, setAnswerText2] = useState("");
  const [answerText3, setAnswerText3] = useState("");
  const [answerText4, setAnswerText4] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
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
    setQuestionText("");
    setAnswerText1("");
    setAnswerText2("");
    setAnswerText3("");
    setAnswerText4("");
  };

  return (
    <div className="columns-container">
      <div className="addQuestion-app">
        <form className="form">
          <h3>Add a custom question!</h3>
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
            <input type="radio" value="0" name="correct" /> Correct
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
            <input type="radio" value="1" name="correct" /> Correct
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
            <input type="radio" value="2" name="correct" /> Correct
          </div>
          <div className="sideBySideInputs">
            <input
              className="yourAnswer"
              value={answerText4}
              name="answerText4"
              onChange={handleInputChange}
              type="text"
              placeholder="Your Question"
            />
            <input type="radio" value="3" name="correct" /> Correct
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
