import * as React from "react";
import Button from "react-bootstrap/Button";

export function QuestionCard(props) {
  return (
    <div className="columns-container">
      <div className="addQuestion-app">
        <form className="form">
          <h3>{props.edit}</h3>
          <p className="addQuestionIns">
            Enter your question, answers, and choose which one will be correct.
          </p>
          <textarea
            className="yourQuestion"
            value={props.questionText}
            name="questionText"
            onChange={props.handleInputChange}
            type="text"
            placeholder="Your Question"
          />
          <div className="sideBySideInputs">
            <input
              className="yourAnswer"
              value={props.answerText1}
              name="answerText1"
              onChange={props.handleInputChange}
              type="text"
              placeholder="Answer 1"
            />
            <input
              type="radio"
              value={props.checkBox1}
              name="checkbox1"
              onChange={props.handleInputChange}
            />{" "}
            Correct
          </div>
          <div className="sideBySideInputs">
            <input
              className="yourAnswer"
              value={props.answerText2}
              name="answerText2"
              onChange={props.handleInputChange}
              type="text"
              placeholder="Answer 2"
            />
            <input
              type="radio"
              value={props.checkBox2}
              name="checkbox2"
              onChange={props.handleInputChange}
            />{" "}
            Correct
          </div>
          <div className="sideBySideInputs">
            <input
              className="yourAnswer"
              value={props.answerText3}
              name="answerText3"
              onChange={props.handleInputChange}
              type="text"
              placeholder="Answer 3"
            />
            <input
              type="radio"
              value={props.checkBox3}
              name="checkbox3"
              onChange={props.handleInputChange}
            />{" "}
            Correct
          </div>
          <div className="sideBySideInputs">
            <input
              className="yourAnswer"
              value={props.answerText4}
              name="answerText4"
              onChange={props.handleInputChange}
              type="text"
              placeholder="Answer 4"
            />
            <input
              type="radio"
              value={props.checkBox4}
              name="checkbox4"
              onChange={props.handleInputChange}
            />{" "}
            Correct
          </div>
          <Button
            className="submitBtn"
            variant="success"
            type="button"
            onClick={props.handleFormSubmit}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
