import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Game() {
  // const questionsArr = [
  //   {
  //     questionText: "What is the capital of France?",
  //     answerOptions: [
  //       { answerText: "New York", isCorrect: false },
  //       { answerText: "London", isCorrect: false },
  //       { answerText: "Paris", isCorrect: true },
  //       { answerText: "Dublin", isCorrect: false },
  //     ],
  //   },
  //   {
  //     questionText: "Who is CEO of Tesla?",
  //     answerOptions: [
  //       { answerText: "Jeff Bezos", isCorrect: false },
  //       { answerText: "Elon Musk", isCorrect: true },
  //       { answerText: "Bill Gates", isCorrect: false },
  //       { answerText: "Tony Stark", isCorrect: false },
  //     ],
  //   },
  //   {
  //     questionText: "The iPhone was created by which company?",
  //     answerOptions: [
  //       { answerText: "Apple", isCorrect: true },
  //       { answerText: "Intel", isCorrect: false },
  //       { answerText: "Amazon", isCorrect: false },
  //       { answerText: "Microsoft", isCorrect: false },
  //     ],
  //   },
  //   {
  //     questionText: "How many Harry Potter books are there?",
  //     answerOptions: [
  //       { answerText: "1", isCorrect: false },
  //       { answerText: "4", isCorrect: false },
  //       { answerText: "6", isCorrect: false },
  //       { answerText: "7", isCorrect: true },
  //     ],
  //   },
  // ];

  const [renderReady, setRenderReady] = useState(false);
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

  const setXQuestions = async (data) => {
    // const numberOfQuestions = 5;
    console.log("setXQuestions function entered");
    console.log(
      "There are " + data.length + " questions in the question array"
    );

    // for (let num = data.length - 1; num >= numberOfQuestions; num--) {
    //   // Runs 5 times, with values of step 0 through 4.
    //   console.log("Going through for loop");
    //   const randomItem = await data[Math.floor(Math.random() * data.length)];
    //   console.log("randomItem = " + JSON.stringify(randomItem));
    //   console.log("_id of randomItem is " + randomItem._id);
    //   const updatedData = data.filter((item) => item._id !== randomItem._id);
    // }
    const randomItem = await data[Math.floor(Math.random() * data.length)];
    console.log("randomItem = " + JSON.stringify(randomItem));
    console.log("_id of randomItem is " + randomItem._id);
    // data = data.splice(data.indexOf(randomItem), 1);
    const updatedData = data.filter((item) => item._id !== randomItem._id);
    console.log("data now contains " + JSON.stringify(updatedData));
    setQuestions(data);
    setRenderReady(true);
  };

  useEffect(() => {
    // setQuestions(questionsArr)
    getQuestionsFromDB();
  }, []);

  return (
    <>
      {renderReady === true && (
        <div className="columns-container">
          <motion.div
            className="app"
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
                  <Button variant="primary">Play Again!</Button>
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
                  {questions[currentQuestion].answerOptions.map(
                    (answerOption) => (
                      <button
                        // Not sure if this is the correct KEY application -- we are still getting an error about it -- could it be coming from somewhere else?
                        key={questions._id}
                        onClick={() =>
                          handleAnswerOptionClick(answerOption.isCorrect)
                        }
                      >
                        {answerOption.answerText}
                      </button>
                    )
                  )}
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
