import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Game() {

  const [renderReady, setRenderReady] = useState(false)
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const getQuestionsFromDB = async () => {
    console.log("getQuestionsFromDB function entered");
    const response = await fetch("/api/questions/all");
    const data = await response.json();
    setXQuestions(data);
    // setQuestions(data);
    // setRenderReady(true);
  };

  const setXQuestions = (data) => {
    console.log("setXQuestions function enetered");
    // make empty array for updatedData
    const updatedData = [];
    // create let for random item storage
    let randomItem = [];
    // set numberOfQuestions to 5
    const numberOfQuestions = 5;
    // go into FOR LOOP (5 times)
    for (let num = 0; num < numberOfQuestions; num++) {
      // get random item from array
      randomItem = data[Math.floor(Math.random() * data.length)];
      // test variable
      console.log("randomItem is now: " + JSON.stringify(randomItem));
      // push to new array
      updatedData.push(randomItem);
      let mongoIndex = updatedData[num]._id;
      data = data.filter((item) => item._id !== mongoIndex);
      console.log("data is now: " + data);
      // if (index > -1) {
      //   data.splice(index, 1);
      // }

      // erase item from original array
      // repeat 5 times
    }

    console.log("updatedData is now: " + JSON.stringify(updatedData));
    console.log("data is now: " + JSON.stringify(data));
    setQuestions(updatedData);
    setRenderReady(true);
  };

  useEffect(() => {
    getQuestionsFromDB();
  }, []);

  function refreshPage() {
    window.location.reload(true);
  }

  return (
    <>
      {renderReady === true && (
        <div className="columns-container">
          <motion.div
            className="appGame"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.1,
              duration: 0.3,
              type: "spring",
            }}
            whileTap={{ scale: 0.6, opacity: 0 }}
          >
            {showScore ? (
              <div className="score-section">
                You scored {score} out of {questions.length}
                <Link to="/game">
                  <Button onClick={refreshPage} variant="primary">Play Again!</Button>
                </Link>
              </div>
            ) : (
              <>
                <div className="question-section">
                  <div className="question-count">
                    <span>Question {currentQuestion + 1}</span>/
                    {questions.length}
                  </div>
                  <div className="question-text">
                    {questions[currentQuestion].questionText}
                  </div>
                </div>
                <div className="answer-section">
                  {questions[currentQuestion].answerOptions.map((answerOption) => (
                    <button
                      className="ansButton"
                      // Not sure if this is the correct KEY application -- we are still getting an error about it -- could it be coming from somewhere else?
                      key={questions._id}
                      onClick={() =>
                        handleAnswerOptionClick(answerOption.isCorrect)
                      }
                    >
                      {answerOption.answerText}
                    </button>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
      ;
    </>
  );
}
