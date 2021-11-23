import * as React from "react";
import { useState } from "react";

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
    // return name === "firstName" ? setFirstName(value) : setLastName(value);
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
      <div className="app">
        <form className="form">
          <input
            value={questionText}
            name="questionText"
            onChange={handleInputChange}
            type="text"
            placeholder="Your Question"
          />
          <input
            value={answerText1}
            name="answerText1"
            onChange={handleInputChange}
            type="text"
            placeholder="Answer 1"
          />
          <input
            value={answerText2}
            name="answerText2"
            onChange={handleInputChange}
            type="text"
            placeholder="Answer 2"
          />
          <input
            value={answerText3}
            name="answerText3"
            onChange={handleInputChange}
            type="text"
            placeholder="Answer 3"
          />
          <input
            value={answerText4}
            name="answerText4"
            onChange={handleInputChange}
            type="text"
            placeholder="Answer 4"
          />

          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
