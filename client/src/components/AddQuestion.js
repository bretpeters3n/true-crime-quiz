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
      <div className="app">
        <form className="form">
          <h3>Add your own question to the game!</h3>
          <textarea
            value={questionText}
            name="questionText"
            onChange={handleInputChange}
            type="text"
            placeholder="Your Question"
          />
          <div className="sideBySideInputs">
            <input
              value={answerText1}
              name="answerText1"
              onChange={handleInputChange}
              type="text"
              placeholder="Answer 1"
            />
            <input type="radio" value="0" name="correct" /> Mark correct
          </div>
          <div className="sideBySideInputs">
            <input
              value={answerText2}
              name="answerText2"
              onChange={handleInputChange}
              type="text"
              placeholder="Answer 2"
            />
            <input type="radio" value="1" name="correct" /> Mark correct
          </div>
          <div className="sideBySideInputs">
            <input
              value={answerText3}
              name="answerText3"
              onChange={handleInputChange}
              type="text"
              placeholder="Answer 3"
            />
            <input type="radio" value="2" name="correct" /> Mark correct
          </div>
          <div className="sideBySideInputs">
            <input
              value={answerText4}
              name="answerText4"
              onChange={handleInputChange}
              type="text"
              placeholder="Answer 4"
            />
            <input type="radio" value="3" name="correct" /> Mark correct
          </div>

          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
