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
    const response = await fetch('/api/questions/all');
    const data = await response.json();
    console.log(data)
    setQuestions(data);
    setRenderReady(true)
    console.log(data);
  }

  useEffect(() => {
    getQuestionsFromDB();
  }, [])

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
                    <span>Question {currentQuestion + 1}</span>/{questions.length}
                  </div>
                  <div className="question-text">
                    {questions[currentQuestion].questionText}
                  </div>
                </div>
                <div className="answer-section">
                  {questions[currentQuestion].answerOptions.map((answerOption) => (
                    <button
                    className="ansButton"
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
      )};
    </>
  )}
