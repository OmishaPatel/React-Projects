import React, { useEffect, useState } from "react";
import Question from "../components/Question";
import { CircularProgress } from "@material-ui/core";
import "../index.css";
const Quiz = ({ name, score, questions, setQuestions, setScore }) => {
  const [options, setOptions] = useState();
  const [curQuestion, setCurQuestion] = useState(0);
  useEffect(() => {
    console.log(questions);
    setOptions(
      questions &&
        handleShuffle([
          questions[curQuestion]?.correct_answer,
          ...questions[curQuestion]?.incorrect_answers,
        ])
    );
  }, [curQuestion, questions]);
  console.log(options);
  const handleShuffle = (option) => {
    return option.sort(() => Math.random() - 0.5);
  };
  return (
    <div className="quiz">
      <span className="subtitle">Welcome, {name} </span>
      {questions ? (
        <>
          <div className="quizInfo">
            <span style={{ paddingLeft: 15 }}>
              {questions[curQuestion].category}
            </span>
            <span style={{ paddingRight: 15 }}>Score : {score}</span>
          </div>

          <Question
            curQuestion={curQuestion}
            setCurQuestion={setCurQuestion}
            questions={questions}
            options={options}
            correct={questions[curQuestion]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
};

export default Quiz;
