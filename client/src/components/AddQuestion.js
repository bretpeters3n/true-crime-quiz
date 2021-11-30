import * as React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { UserContext } from "../utils/UserContext";
import { useAuth0 } from "@auth0/auth0-react";
import { QuestionCard } from "./QuestionCard.js";

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

  // async function grabQuestion(id) {
  //   const response = await fetch(`/api/questions/question/${id}`);
  //   const data = await response.json();
  //   console.log(data);
  // }

  // grabQuestion("61a4330b3f77572bc7b39700");

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
      {(value) => {
        if (!value.sub || !value.name) {
          console.log("value", value);
          console.log("sub", value.sub);
          return <div>Loading...</div>;
        } else {
          return (
            <QuestionCard
              edit="Add a Question"
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
