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

  const [ renderReady, setRenderReady ] = useState(false)
  const [ questions, setQuestions ] = useState([]);
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

  const getQuestionsFromDB = async() => {
    const response = await fetch('/api/questions/all');
    const data = await response.json();
    console.log(data)
    setQuestions(data);
    setRenderReady(true)
    console.log(data);
  }

  useEffect(() => {
    // setQuestions(questionsArr)
    getQuestionsFromDB();
  }, [])

  return (

    <>
      { renderReady === true && (
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
          >
            {showScore ? (
              <div className="score-section">
                You scored {score} out of {questions[0].length}

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
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}

              </div>
            ) : (
              <>
                <div className="question-section">
                  <div className="question-count">
                    <span>Question {currentQuestion + 1}</span>/{questions.length}
                  </div>
                  <div className="question-text">
                    {questions[1].questionText}
                  </div>
                </div>
                <div className="answer-section">
                  {questions[0].answerOptions.map((answerOption) => (
                    <button
                      onClick={() =>
                        handleAnswerOptionClick(answerOption.isCorrect)
                      }
                    >
                      {questions[0].answerOption.answerText}
                    </button>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </>
  );
}
