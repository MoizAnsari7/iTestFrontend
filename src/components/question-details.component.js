 import { useEffect, useState } from "react";
import axios from 'axios';
import { useLocation, useNavigate } from "react-router";
import "./question-details.component.css"
const QuestionDetails = ({ question, index, handleQuestionSelect }) => {
  const [showAnswer, setShowAnswer] = useState(false);
const navigation = useNavigate()
  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const handleAddOption = ( question )=>{
    console.log("handleAddOption", question);
    // navigation("/addOption", { state : { question : question }})
    handleQuestionSelect(question)
  }
  return (
    <div className="question-card">
      <h3>{ `${index + 1 }.  ${question.question}`}</h3>
      <button onClick={ ()=>handleAddOption( question ) }>Add option</button>
      <div className="options">
        {question.answerOptions.map((option, index) => (
          <div
            key={option._id}
            className={`option-box ${showAnswer ? (option.isCorrect ? 'correct' : 'incorrect') : ''}`}
          >
            {showAnswer && option.isCorrect && <span>✔</span>}
            {showAnswer && !option.isCorrect && <span>✖</span>}
            {option.answerText}
          </div>
        ))}
      </div>
      <button onClick={handleShowAnswer}>Show Answer</button>
      {showAnswer && (
        <div className="solution">
          <h4>Solution</h4>
          {question.answerOptions
            .filter(option => option.isCorrect)
            .map(correctOption => (
              <p key={correctOption._id}>{correctOption.answerText}</p>
            ))}
        </div>
      )}
    </div>
  );
};


export default QuestionDetails