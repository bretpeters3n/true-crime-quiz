import * as React from "react";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { UserContext } from "../utils/UserContext";
import { useAuth0 } from "@auth0/auth0-react";
import { QuestionCard } from "./QuestionCard.js";
import { useLocation } from "react-router-dom";

export default function EditQuestion(props) {
  const { user, isAuthenticated } = useAuth0();

  const location = useLocation();
  const { questionId } = location.state;

  const [questionText, setQuestionText] = useState("");
  const [answerText1, setAnswerText1] = useState("");
  const [answerText2, setAnswerText2] = useState("");
  const [answerText3, setAnswerText3] = useState("");
  const [answerText4, setAnswerText4] = useState("");
  const [checkBox1, setCheckbox1] = useState(false);
  const [checkBox2, setCheckbox2] = useState(false);
  const [checkBox3, setCheckbox3] = useState(false);
  const [checkBox4, setCheckbox4] = useState(false);

  async function grabQuestion(id) {
    console.log("Id is: " + id);
    const response = await fetch(`/api/questions/question/${id}`);
    const data = await response.json();
    console.log(data);
    
    setQuestionText(data.questionText);

    setAnswerText1(data.answerOptions[0]?.answerText);
    setAnswerText2(data.answerOptions[1]?.answerText);
    setAnswerText3(data.answerOptions[2]?.answerText);
    setAnswerText4(data.answerOptions[3]?.answerText);
    setCheckbox1(data.answerOptions[0]?.isCorrect);
    setCheckbox2(data.answerOptions[1]?.isCorrect);
    setCheckbox3(data.answerOptions[2]?.isCorrect);
    setCheckbox4(data.answerOptions[3]?.isCorrect);

  }

  useEffect(() => {
    console.log(questionId);
    grabQuestion(questionId);
  }, []);

  async function writeQuestionToDb(id) {
    const response = await fetch(`/api/questions/update/${id}`, {
      method: "PUT",
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
    writeQuestionToDb(questionId);

    setQuestionText("");
    setAnswerText1("");
    setAnswerText2("");
    setAnswerText3("");
    setAnswerText4("");
  };

  return (
    <UserContext.Consumer>
      {(value) => {
        if (!value.sub || !value.name) {
          console.log("value", value);
          console.log("sub", value.sub);
          return <div>Loading...</div>;
        } else {
          return (
            <QuestionCard
              edit={"Edit Question"}
              questionText={questionText}
              answerText1={answerText1}
              answerText2={answerText2}
              answerText3={answerText3}
              answerText4={answerText4}
              checkBox1={checkBox1}
              checkBox2={checkBox2}
              checkBox3={checkBox3}
              checkBox4={checkBox4}
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
            />
          );
        }
      }}
    </UserContext.Consumer>
  );
}
